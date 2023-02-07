import Header from "../components/Header";
import { projectFake } from "../data";

const ProjectDetailPage = ({ id }) => {
    const currentProject = projectFake.find((project) => project.id == id);
    if (!currentProject) return "";

    return `
        ${Header()}
            <h1>${currentProject.name}</h1>
        `;
};
export default ProjectDetailPage;