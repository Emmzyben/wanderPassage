import { ProjectDataType } from "@/db/projectsOneData";
import { Link } from "react-router-dom";

type ProjectCardPropsType = {
    project: ProjectDataType;
    className?: string;
    iconCalss?: string;
    isIconShow?: boolean
}
const ProjectCard = ({ project, className, iconCalss, isIconShow = true }: ProjectCardPropsType) => {
    return (
        <div className={`project-items ${className}`}>
            <div className="project-image">
                <img src={project.image} alt="project-img" />
                <div className="project-content">
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Link to={project.link}>{project.title}</Link>
                        {project.flag ? (
                            <img
                                src={project.flag}
                                alt="flag"
                                style={{
                                    width: '30px',
                                    height: 'auto',
                                    borderRadius: '2px',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                }}
                            />
                        ) : (
                            <span style={{ fontSize: '1.2em' }}>{project.category}</span>
                        )}
                    </h4>
                    {
                        isIconShow &&
                        <Link to={project.link} className={`${iconCalss}`}>
                            <i className="fa-solid fa-arrow-right" />
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectCard