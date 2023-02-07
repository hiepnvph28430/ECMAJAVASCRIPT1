import Header from "../components/Header"
// import ProjectList from "../components/ProjectList";

import { projectFake } from "../data";
import ProjectsPage from "./admin/projects";

const Projects = () => {
  return `${Header()}
 
  ${ProjectsPage({ projects: projectFake })}
  
  `
  /**  <h1>Dự Án 1</h1>
    ${ProjectList({ projects: projectFake })} */

}

export default Projects