import { BlogComment } from "@/lib/api";

interface BlogCommentsProps {
    comments: BlogComment[];
}

const BlogComments = ({ comments }: BlogCommentsProps) => {
    return (
        <div className="comments-area mt-5 pt-5 border-top">
            <div className="comments-heading mb-5">
                <h3 className="fw-extra-bold h2" style={{ color: '#1a1a1a', letterSpacing: '-0.02em' }}>
                    Reader Discussions <span className="text-muted fs-5 fw-normal ms-2">({comments.length})</span>
                </h3>
            </div>
            {comments.length === 0 ? (
                <div className="text-center py-5 rounded-4 bg-light border-dashed">
                    <p className="text-muted mb-0">No conversations yet. Start the discussion below!</p>
                </div>
            ) : (
                <div className="d-flex flex-column gap-4">
                    {comments.map((comment) => (
                        <div key={comment.id} className="blog-single-comment d-flex gap-3 gap-md-4">
                            <div className="image flex-shrink-0">
                                <div className="rounded-circle bg-white d-flex align-items-center justify-content-center shadow-sm border" style={{ width: '56px', height: '56px' }}>
                                    <i className="fa-solid fa-user text-dark opacity-25 fs-5"></i>
                                </div>
                            </div>
                            <div className="content p-4 rounded-4 bg-white shadow-sm border flex-grow-1 position-relative">
                                {/* Decorative quote mark */}
                                <div className="position-absolute opacity-10" style={{ top: '10px', right: '20px', fontSize: '2rem' }}>
                                    <i className="fa-solid fa-quote-right"></i>
                                </div>
                                <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between mb-3">
                                    <div className="con">
                                        <h5 className="mb-0 fw-bold" style={{ color: '#1a1a1a' }}>{comment.name}</h5>
                                        <div className="text-muted small mt-1 d-flex align-items-center gap-1">
                                            <i className="fa-regular fa-calendar small"></i>
                                            {new Date(comment.created_at).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-0 text-dark opacity-75" style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
                                    {comment.comment}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BlogComments;