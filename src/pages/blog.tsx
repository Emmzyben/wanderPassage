import { useEffect, useState } from 'react';
import BlogCard from "@/components/sections/blogs/blogCard"
import PageTitle from "@/components/sections/pageTitle"
import { blogsApi, Blog, BACKEND_URL } from "@/lib/api"

const BlogPage = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await blogsApi.list();
            if (res.status === 'success') {
                setBlogs(res.blogs || []);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <PageTitle
                currentPage="Blog Grid"
                title="Blog Grid"
                backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1920"
            />
            <section className="news-section-4 fix section-padding">
                <div className="container">
                    {loading ? (
                        <div className="text-center py-5">
                            <div className="spinner-border text-primary"></div>
                        </div>
                    ) : (
                        <div className="row g-4">
                            {blogs.length === 0 && (
                                <div className="col-12 py-5 text-center text-muted">
                                    <p>No published articles yet.</p>
                                </div>
                            )}
                            {blogs.map((b) => {
                                const date = new Date(b.created_at);
                                const mockNews = {
                                    id: b.id,
                                    title: b.title,
                                    author: b.author_name || 'Admin',
                                    category: 'Travel',
                                    image: b.image_path ? `${BACKEND_URL}/${b.image_path}` : 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800',
                                    date: {
                                        day: String(date.getDate()),
                                        month: date.toLocaleString('default', { month: 'short' })
                                    },
                                    link: `/news-details/${b.slug}`
                                };
                                return (
                                    <div key={b.id} className="col-xl-4 col-lg-6 col-md-6 wow slideUp" data-delay=".3">
                                        <BlogCard news={mockNews as any} className={'style-2 mt-0 pb-0'} />
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default BlogPage