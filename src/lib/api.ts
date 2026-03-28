/**
 * src/lib/api.ts
 * Central API service layer for all backend calls.
 * Reads VITE_API_BASE_URL from .env (falls back to localhost/XAMPP).
 */

const AUTH_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost/wanderPassage/backend/auth'
const API_BASE  = AUTH_BASE.replace(/\/auth$/, '/api')
export const BACKEND_URL = AUTH_BASE.replace(/\/auth$/, '')

// ─── Helpers ────────────────────────────────────────────────────────────────

function getToken(): string | null {
    return localStorage.getItem('token')
}

async function request<T>(
    url: string,
    options: RequestInit = {}
): Promise<T> {
    const token = getToken()
    const headers: Record<string, string> = {
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
        ...((options.headers as Record<string, string>) ?? {})
    }

    // Only set Content-Type: application/json if NOT FormData
    if (!(options.body instanceof FormData)) {
        headers['Content-Type'] = 'application/json'
    }

    const res = await fetch(url, { ...options, headers })
    const data = await res.json()
    return data as T
}

// ─── Response Types ──────────────────────────────────────────────────────────

export interface UserDocument {
    id: number
    doc_key: string
    file_name: string
    file_path?: string
    status: 'pending' | 'uploaded' | 'verified' | 'rejected'
}

export interface DocumentsResponse {
    status: 'success' | 'error'
    message?: string
    documents?: UserDocument[]
}

export interface UploadResponse {
    status: 'success' | 'error'
    message?: string
    fileName?: string
    filePath?: string
    avatar?: string | null
}

export interface ApiUser {

    id: number
    username: string
    email: string
    role: 'student' | 'admin'
    application_status?: string
    avatar?: string
    created_at?: string
}

export interface AuthResponse {
    status: 'success' | 'error'
    message?: string
    token?: string
    user?: ApiUser
}

export interface MeResponse {
    status: 'success' | 'error'
    message?: string
    user?: ApiUser
}

export interface ApiResponse {
    status: 'success' | 'error'
    message?: string
}

export interface ConsultationPayload {
    full_name: string
    email: string
    phone: string
    service: string
    preferred_date: string
    preferred_time: string
    message?: string
}

// ── Admin Types ─────────────────────────────────────────────────────────────

export interface UserSummary extends ApiUser {
    doc_count: number
    verified_count: number
}

export interface ListUsersResponse {
    status: 'success' | 'error'
    users?: UserSummary[]
    message?: string
}

export interface StudentDetailResponse {
    status: 'success' | 'error'
    student?: ApiUser
    documents?: UserDocument[]
    message?: string
}

export interface Message {
    id: number
    name: string
    email: string
    phone?: string
    subject?: string
    message: string
    created_at: string
    is_read: number
}

export interface ListMessagesResponse {
    status: 'success' | 'error'
    messages?: Message[]
    message?: string
}

export interface ConsultationRequest {
    id: number
    full_name: string
    email: string
    phone: string
    service: string
    preferred_date: string
    preferred_time: string
    message?: string
    status: 'new' | 'contacted' | 'resolved'
    created_at: string
}

export interface ListConsultationsResponse {
    status: 'success' | 'error'
    consultations?: ConsultationRequest[]
    message?: string
}

export interface ListAdminsResponse {
    status: 'success' | 'error'
    admins?: ApiUser[]
    message?: string
}

export interface Blog {
    id: number
    author_id: number
    author_name?: string
    title: string
    slug: string
    excerpt?: string
    content: string
    image_path?: string
    status: 'draft' | 'published'
    created_at: string
    updated_at: string
}

export interface ListBlogsResponse {
    status: 'success' | 'error'
    blogs?: Blog[]
    message?: string
}

export interface SingleBlogResponse {
    status: 'success' | 'error'
    blog?: Blog
    message?: string
}

export interface BlogComment {
    id: number
    blog_id: number
    blog_title?: string
    user_id?: number
    name: string
    email: string
    comment: string
    status: 'pending' | 'approved' | 'spam'
    created_at: string
}

export interface ListCommentsResponse {
    status: 'success' | 'error'
    comments?: BlogComment[]
    message?: string
}


export interface Notification {
    id: number
    user_id: number
    title: string
    message: string
    type: 'info' | 'success' | 'warning' | 'danger'
    is_read: number
    created_at: string
}

export interface ListNotificationsResponse {
    status: 'success' | 'error'
    notifications?: Notification[]
    message?: string
}


// ─── Health Check ───────────────────────────────────────────────────────────

export interface HealthResponse {
    status: 'success' | 'error'
    message: string
    timestamp?: string
    database?: string
    error?: string
}

export const healthApi = {
    check: async (): Promise<HealthResponse> => {
        try {
            const response = await fetch(`${API_BASE}/health.php`)
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`)
            }
            const data = await response.json()
            return data as HealthResponse
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error'
            return {
                status: 'error',
                message: `Cannot reach backend: ${errorMessage}`,
            }
        }
    }
}

// ─── Auth Endpoints ──────────────────────────────────────────────────────────

export const authApi = {
    /**
     * Register a new user account.
     */
    register: (username: string, email: string, password: string) =>
        request<AuthResponse>(`${AUTH_BASE}/register.php`, {
            method: 'POST',
            body: JSON.stringify({ username, email, password })
        }),

    /**
     * Log in with email + password, returns a JWT.
     */
    login: (email: string, password: string) =>
        request<AuthResponse>(`${AUTH_BASE}/login.php`, {
            method: 'POST',
            body: JSON.stringify({ email, password })
        }),

    /**
     * Fetch the current authenticated user (requires token in localStorage).
     */
    me: () =>
        request<MeResponse>(`${AUTH_BASE}/me.php`),

    /**
     * Update account password.
     */
    updatePassword: (current_password: string, new_password: string) =>
        request<ApiResponse>(`${AUTH_BASE}/update_password.php`, {
            method: 'POST',
            body: JSON.stringify({ current_password, new_password })
        })
}


// ─── Dashboard Endpoints ─────────────────────────────────────────────────────

export const dashboardApi = {
    /**
     * Fetch documents for the current user.
     */
    getDocuments: () =>
        request<DocumentsResponse>(`${API_BASE}/get_documents.php`),

    /**
     * Upload a document.
     */
    uploadDocument: (docKey: string, file: File) => {
        const formData = new FormData()
        formData.append('doc_key', docKey)
        formData.append('file', file)
        return request<UploadResponse>(`${API_BASE}/upload_document.php`, {
            method: 'POST',
            body: formData
        })
    },

    /**
     * Fetch notifications for current user.
     */
    getNotifications: () =>
        request<ListNotificationsResponse>(`${API_BASE}/get_notifications.php`),

    /**
     * Mark a single notification (by id) or all notifications as read.
     */
    markNotificationRead: (id?: number) =>
        request<ApiResponse>(`${API_BASE}/mark_notification_read.php`, {
            method: 'POST',
            body: JSON.stringify(id !== undefined ? { id } : {})
        })
}

// ─── Contact Endpoint ────────────────────────────────────────────────────────

export interface ContactPayload {
    name: string
    email: string
    phone?: string
    subject?: string
    message: string
}

export const contactApi = {
    /**
     * Submit a contact form message.
     */
    send: (payload: ContactPayload) =>
        request<ApiResponse>(`${API_BASE}/contact.php`, {
            method: 'POST',
            body: JSON.stringify(payload)
        })
}

// ─── Consultation Endpoint ──────────────────────────────────────────────────

export const consultationApi = {
    /**
     * Submit a consultation booking request.
     */
    book: (payload: ConsultationPayload) =>
        request<ApiResponse>(`${API_BASE}/book_consultation.php`, {
            method: 'POST',
            body: JSON.stringify(payload)
        })
}

// ─── Admin Endpoints ─────────────────────────────────────────────────────────

const ADMIN_BASE = `${API_BASE}/admin`

export const adminApi = {
    /**
     * List all students with their application overview.
     */
    listStudents: () =>
        request<ListUsersResponse>(`${ADMIN_BASE}/list_students.php`),

    /**
     * Get detailed documents and stats for a specific student.
     */
    getStudentDetails: (userId: number) =>
        request<StudentDetailResponse>(`${ADMIN_BASE}/student_details.php?id=${userId}`),

    /**
     * Update the status of a specific document (e.g. verify/reject).
     */
    updateDocStatus: (docId: number, status: string) =>
        request<ApiResponse>(`${ADMIN_BASE}/update_doc_status.php`, {
            method: 'POST',
            body: JSON.stringify({ doc_id: docId, status })
        }),

    /**
     * List all contact form messages.
     */
    listMessages: () =>
        request<ListMessagesResponse>(`${ADMIN_BASE}/list_messages.php`),

    /**
     * List all consultation booking requests.
     */
    listConsultations: () =>
        request<ListConsultationsResponse>(`${ADMIN_BASE}/list_consultations.php`),

    /**
     * Update status of a consultation request.
     */
    updateConsultationStatus: (id: number, status: string) =>
        request<ApiResponse>(`${ADMIN_BASE}/update_consultation_status.php`, {
            method: 'POST',
            body: JSON.stringify({ id, status })
        }),

    /**
     * Update application status of a student.
     */
    updateApplicationStatus: (id: number, status: string) =>
        request<ApiResponse>(`${ADMIN_BASE}/update_application_status.php`, {
            method: 'POST',
            body: JSON.stringify({ id, status })
        }),

    /**
     * List all admin users.
     */
    listAdmins: () =>
        request<ListAdminsResponse>(`${ADMIN_BASE}/list_admins.php`),

    /**
     * Promote a user (by ID) to admin role.
     */
    promoteToAdmin: (userId: number) =>
        request<ApiResponse>(`${ADMIN_BASE}/promote_admin.php`, {
            method: 'POST',
            body: JSON.stringify({ user_id: userId })
        }),

    /**
     * Create a new admin account directly.
     */
    createAdmin: (data: any) =>
        request<ApiResponse>(`${ADMIN_BASE}/create_admin.php`, {
            method: 'POST',
            body: JSON.stringify(data)
        }),

    /**
     * Update current user's profile picture.
     */
    updateAvatar: (formData: FormData) =>
        request<ApiResponse>(`${API_BASE}/auth/update_profile.php`, {
            method: 'POST',
            body: formData
        }),

    /**
     * Blog management
     */
    listBlogs: () =>
        request<ListBlogsResponse>(`${ADMIN_BASE}/blogs/list.php`),

    createBlog: (formData: FormData) =>
        request<ApiResponse>(`${ADMIN_BASE}/blogs/create.php`, {
            method: 'POST',
            body: formData
        }),

    updateBlog: (formData: FormData) =>
        request<ApiResponse>(`${ADMIN_BASE}/blogs/update.php`, {
            method: 'POST',
            body: formData
        }),

    deleteBlog: (id: number) =>
        request<ApiResponse>(`${ADMIN_BASE}/blogs/delete.php`, {
            method: 'POST',
            body: JSON.stringify({ id })
        }),

    listAllComments: () =>
        request<ListCommentsResponse>(`${ADMIN_BASE}/blogs/list_comments.php`),

    deleteComment: (id: number) =>
        request<ApiResponse>(`${ADMIN_BASE}/blogs/delete_comment.php`, {
            method: 'POST',
            body: JSON.stringify({ id })
        })
}

// ── Blog Endpoints ────────────────────────────────────────────────────────
const BLOG_BASE = `${API_BASE}/blogs`

export const blogsApi = {
    /**
     * List all published blog posts.
     */
    list: () =>
        request<ListBlogsResponse>(`${BLOG_BASE}/list.php`),

    /**
     * Get a single published blog post by slug.
     */
    getBySlug: (slug: string) =>
        request<SingleBlogResponse>(`${BLOG_BASE}/get.php?slug=${slug}`),

    /**
     * List comments for a blog post.
     */
    listComments: (blogId: number) =>
        request<ListCommentsResponse>(`${BLOG_BASE}/list_comments.php?blog_id=${blogId}`),

    /**
     * Add a comment to a blog post.
     */
    addComment: (data: { blog_id: number, user_id?: number, name: string, email: string, comment: string }) =>
        request<ApiResponse>(`${BLOG_BASE}/add_comment.php`, {
            method: 'POST',
            body: JSON.stringify(data)
        })
}

