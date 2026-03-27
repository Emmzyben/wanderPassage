import { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import { blogsApi, Blog, BlogComment, BACKEND_URL } from "@/lib/api";
import PageTitle from "@/components/sections/pageTitle";
import BlogComments from "@/components/sections/blogs/blogComments";
import BlogCommentFrom from "@/components/sections/blogs/blogCommentFrom";

const BlogDetails = () => {
    const { slug } = useParams<{ slug: string }>();
    const [blog, setBlog] = useState<Blog | null>(null);
    const [comments, setComments] = useState<BlogComment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (slug) fetchBlog();
    }, [slug]);

    useEffect(() => {
        if (blog) fetchComments();
    }, [blog]);

    const fetchBlog = async () => {
        try {
            const res = await blogsApi.getBySlug(slug!);
            if (res.status === 'success' && res.blog) {
                setBlog(res.blog);
                // Update Page Title and Meta Tags
                document.title = `${res.blog.title} - WanderPassage`;

                // Update Open Graph Title & Description
                updateMetaTag('property', 'og:title', res.blog.title);
                updateMetaTag('property', 'og:description', res.blog.content.slice(0, 160) + '...');
                if (res.blog.image_path) {
                    updateMetaTag('property', 'og:image', `${BACKEND_URL}/${res.blog.image_path}`);
                }
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const fetchComments = async () => {
        try {
            const res = await blogsApi.listComments(blog!.id);
            if (res.status === 'success') {
                setComments(res.comments || []);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const updateMetaTag = (attr: string, value: string, content: string) => {
        let element = document.querySelector(`meta[${attr}="${value}"]`);
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute(attr, value);
            document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    };

    const handleShare = (platform: string) => {
        const url = window.location.href;
        const title = blog?.title || '';
        let shareUrl = '';

        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
                break;
        }

        if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }
    };

    if (loading) {
        return (
            <div className="text-center py-5" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="spinner-border text-primary" style={{ width: '3.5rem', height: '3.5rem', borderWidth: '0.25em' }}></div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="text-center py-5" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fa-solid fa-file-circle-exclamation text-muted mb-4" style={{ fontSize: '4rem' }}></i>
                <h2 className="fw-bold">Article Not Found</h2>
                <p className="text-muted mb-4">The article you're looking for might have been moved or deleted.</p>
                <Link to="/news" className="theme-btn">Back to Articles</Link>
            </div>
        );
    }

    return (
        <div className="blog-details-view overflow-hidden">
            <PageTitle
                currentPage="Article Details"
                title={blog.title}
                backgroundImage="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1920"
            />

            <section className="blog-details-section section-padding" style={{ background: '#fff' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 col-xl-9">
                            <article className="blog-article-wrapper">
                                {/* Article Header Info */}
                                <div className="article-meta-modern mb-5 pb-4 border-bottom d-flex flex-wrap justify-content-start align-items-center" style={{ gap: '30px' }}>
                                    <div className="meta-item d-flex align-items-center">
                                        <div className="author-avatar-img me-3">
                                            <div className="rounded-circle bg-primary-subtle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                                <i className="fa-solid fa-user text-primary fs-5"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-muted d-block small text-uppercase fw-bold ls-1">Author</span>
                                            <span className="fw-bold text-dark">{blog.author_name || 'Admin'}</span>
                                        </div>
                                    </div>
                                    <div className="meta-item">
                                        <span className="text-muted d-block small text-uppercase fw-bold ls-1">Published</span>
                                        <span className="fw-bold text-dark">{new Date(blog.created_at).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                    </div>
                                    <div className="meta-item">
                                        <span className="text-muted d-block small text-uppercase fw-bold ls-1">Category</span>
                                        <span className="badge bg-light text-primary px-3 py-2 rounded-pill fw-bold border">Travel & Visa</span>
                                    </div>
                                </div>

                                {/* Main Heading (if not in PageTitle) */}
                                <h2 className="mb-5 display-5 fw-extra-bold ls-tight" style={{ color: '#1a1a1a', lineHeight: '1.2', wordBreak: 'break-word', overflowWrap: 'break-word' }}>{blog.title}</h2>

                                {/* Featured Image */}
                                {blog.image_path && (
                                    <div className="article-featured-image-container mb-5 rounded-5 shadow-lg overflow-hidden">
                                        <img
                                            src={`${BACKEND_URL}/${blog.image_path}`}
                                            alt={blog.title}
                                            className="w-100"
                                            style={{ height: 'auto', display: 'block', maxHeight: '600px', objectFit: 'contain', backgroundColor: '#f8f9fa' }}
                                        />
                                    </div>
                                )}

                                {/* Article Content */}
                                <div className="article-content-rich" style={{
                                    fontSize: '1.25rem',
                                    lineHeight: '2',
                                    color: '#343a40',
                                    fontWeight: '400',
                                    whiteSpace: 'pre-wrap',
                                    wordBreak: 'break-word',
                                    overflowWrap: 'break-word'
                                }}>
                                    {blog.content}
                                </div>

                                {/* Article Footer - Share & Tags */}
                                <div className="article-footer mt-5 pt-5 border-top d-flex flex-wrap justify-content-between align-items-center gap-4">
                                    <div className="tags-container d-flex align-items-center gap-2">
                                        <i className="fa-solid fa-tags text-primary me-2"></i>
                                        <Link to="#" className="btn btn-sm btn-light border rounded-pill px-4 text-dark hover-primary-btn transition">Visa</Link>
                                        <Link to="#" className="btn btn-sm btn-light border rounded-pill px-4 text-dark hover-primary-btn transition">Study Abroad</Link>
                                    </div>

                                    <div className="social-shares-modern d-flex align-items-center gap-3">
                                        <span className="fw-bold text-muted small text-uppercase">Share this article:</span>
                                        <div className="d-flex gap-2">
                                            <Link to="#" onClick={(e) => { e.preventDefault(); handleShare('facebook'); }} className="social-icon-btn rounded-circle transition" style={{ width: '40px', height: '40px', background: '#3b5998', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                                                <i className="fab fa-facebook-f"></i>
                                            </Link>
                                            <Link to="#" onClick={(e) => { e.preventDefault(); handleShare('twitter'); }} className="social-icon-btn rounded-circle transition" style={{ width: '40px', height: '40px', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                                                <i className="fa-brands fa-x-twitter"></i>
                                            </Link>
                                            <Link to="#" onClick={(e) => { e.preventDefault(); handleShare('linkedin'); }} className="social-icon-btn rounded-circle transition" style={{ width: '40px', height: '40px', background: '#0077b5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                                                <i className="fab fa-linkedin-in"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Comments Section */}
                                <div className="mt-5">
                                    <BlogComments comments={comments} />
                                    <BlogCommentFrom blogId={blog.id} onCommentAdded={fetchComments} />
                                </div>

                                {/* Back Link */}
                                <div className="text-center mt-5 pt-4">
                                    <Link to="/news" className="theme-btn hover-white">
                                        <i className="fa-solid fa-arrow-left me-2"></i> Back to All Articles
                                    </Link>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                .ls-1 { letter-spacing: 1px; }
                .ls-tight { letter-spacing: -0.5px; }
                .fw-extra-bold { font-weight: 800; }
                .social-icon-btn:hover { transform: translateY(-3px); opacity: 0.9; }
                .hover-primary-btn:hover { background: var(--primary-color) !important; color: #fff !important; }
                .article-content-rich p { margin-bottom: 1.5rem; }
            `}</style>
        </div>
    )
}

export default BlogDetails