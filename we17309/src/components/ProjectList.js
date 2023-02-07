import ProjectItem from "./ProjectItem";

ProjectItem
const ProjectList = ({ projects }) => {
    return `
        ${projects?.map((project) => `${ProjectItem({ project })}`).join("")}
    `;
};
export default ProjectList;