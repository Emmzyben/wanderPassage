import { ProjectDataType } from "@/db/projectsOneData";
import { Link } from "react-router-dom";

interface ProjectCardProps {
    project: ProjectDataType;
    className?: string;
    iconCalss?: string;
}

const ProjectCard = ({ project, className, iconCalss }: ProjectCardProps) => {
    const { image, category, title, link, flag } = project;

    return (
        <div className={`project-items ${className || ""}`}>
            <div className="project-image">
                <Link to={link}>
                    <img src={image} alt={title} />
                </Link>
                <div className="project-content">
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "5px" }}>
                        {flag && <img src={flag} alt="flag" style={{ width: "24px", height: "auto", borderRadius: "2px" }} />}
                        <p style={{ margin: 0, color: "var(--theme)", fontWeight: "500" }}>{category}</p>
                    </div>
                    <h4>
                        <Link to={link}>{title}</Link>
                    </h4>
                    <Link to={link} className={iconCalss || "icon"}>
                        <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
