// import { projectFake } from "../../data";
import { router, useEffect } from "@/lib";

const projects_add = () => {
    // const projects = JSON.parse(localStorage.getItem("projects")) || [];

    useEffect(() => {
        const form = document.querySelector("#form-add");
        const name = document.querySelector("#name");
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const formData = {
                name: name.value,
            };
            fetch("http://localhost:3000/projects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }).then(() => router.navigate("/admin/projects"));
            //     projects.push({
            //         id: projects.length + 1,
            //         name: name.value,
            //     });
            //     localStorage.setItem("projects", JSON.stringify(projects));
            //     router.navigate("/projects");
        })
    })


    return `<div>
                <form id="form-add">
                    <input type="text" id="name" class=" border" />
                    <button class="btn btn-primary">Thêm</button>
                </form>
            </div>`;


}

export default projects_add
