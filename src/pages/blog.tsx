import BlogCard from "@/components/sections/blogs/blogCard"
import PageTitle from "@/components/sections/pageTitle"
import Pagination from "@/components/ui/pagination"
import { blogPostsThreeData } from "@/db/blogPostsThreeData"

const Blog = () => {
    return (
        <>
            <PageTitle
                currentPage="Blog Grid"
                title="Blog Grid"
                backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1920"
            />
            <section className="news-section-4 fix section-padding">
                <div className="container">
                    <div className="row g-4">
                        {
                            blogPostsThreeData.map((news) => {
                                return (
                                    <div key={news.id} className="col-xl-4 col-lg-6 col-md-6 wow slideUp" data-delay=".3">
                                        <BlogCard news={news} className={'style-2 mt-0 pb-0'} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <Pagination />
                </div>
            </section>

        </>
    )
}

export default Blog