import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay, Navigation } from "swiper/modules";
import BlogCard from "./blogCard";
import SectionTitle from "@/components/ui/sectionTitle";
import { blogsApi, Blog, BACKEND_URL } from "@/lib/api";

const BlogsThree = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const res = await blogsApi.list();
            if (res.status === 'success') {
                // Get only the latest 3
                setBlogs((res.blogs || []).slice(0, 3));
            }
        } catch (err) {
            console.error("Failed to load home blogs", err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return null;
    if (blogs.length === 0) return null;

    return (
        <section id="blog" className="news-section-3 fix section-padding">
            <div className="container">
                <div className="section-title-area">
                    <SectionTitle>
                        <SectionTitle.SubTitle>Latest Blog</SectionTitle.SubTitle>
                        <SectionTitle.Title>Our Latest Blog</SectionTitle.Title>
                    </SectionTitle>
                    <div className="array-button">
                        <button className="array-prev"><i className="fa fa-arrow-right" /></button>
                        <button className="array-next"><i className="fa fa-arrow-left" /></button>
                    </div>
                </div>
                <Swiper
                    spaceBetween={30}
                    speed={1500}
                    loop={blogs.length > 1}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: ".array-prev",
                        prevEl: ".array-next",
                    }}
                    breakpoints={{
                        1199: { slidesPerView: Math.min(blogs.length, 3) },
                        991: { slidesPerView: Math.min(blogs.length, 2) },
                        767: { slidesPerView: Math.min(blogs.length, 2) },
                        575: { slidesPerView: 1 },
                        0: { slidesPerView: 1 },
                    }}
                    modules={[Navigation, Autoplay]}
                >
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
                            <SwiperSlide key={b.id}>
                                <BlogCard news={mockNews as any} className={'style-2'} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section >

    )
}

export default BlogsThree