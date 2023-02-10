import Header from "@/components/Header"
import ProjectList from "@/components/ProjectList";
import { useEffect, useState } from "@/lib";
// import { projectFake } from "../data";
// import ProjectsPage from "./admin/projects";

const Projects = () => {



  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);


  return `${Header()}
  <h1>Projects Page</h1>
  ${ProjectList({ projects })}
  
  `
  /**  <h1>Dự Án 1</h1>
    ${ProjectList({ projects: projectFake })} */
}

export default Projects