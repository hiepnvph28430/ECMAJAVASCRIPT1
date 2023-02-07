import "bootstrap/dist/css/bootstrap.min.css"
import { render, router } from "./lib";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import notFound from "./pages/notFound";
import Post from "./pages/Post";
import Projects from "./pages/Projects";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import AdminProjectPage from "./pages/admin/projects";
import AdminProjectAddPage from "./pages/admin/projects_add";
import AdminProjectEditPage from "./pages/admin/projects_edit"

const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("projects", () => render(Projects, app));
router.on("/project/:id", ({ data }) => render(ProjectDetailPage(data), app));
router.on("contact", () => render(Contact, app));
router.on("posts", () => render(Post, app))
router.on("/admin/projects", () => render(AdminProjectPage, app))
router.on("/admin/projects/add", () => render(AdminProjectAddPage, app))
router.on("/admin/projects/:id/edit", ({ data }) => render(() => AdminProjectEditPage(data), app));

router.notFound(() => render(notFound, app))


router.resolve();