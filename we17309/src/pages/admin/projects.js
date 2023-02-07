// import { projects } from "@/data";
import { useEffect, useState } from "@/lib";
const ProjectsPage = () => {
    /**
     *
     * Bước 1: Khởi tạo state
     * Bước 2: render HTML
     * Bước 3: Chạy vào hàm useEffect
     *    - Lấy ra các nút remove
     *    - Thêm sự kiện click cho các nút remove
     */
    const [data, setData] = useState([]); // 3

    useEffect(() => {
        const projects = JSON.parse(localStorage.getItem("projects")) || [];
        setData(projects);
    }, []);
    useEffect(() => {
        // 3
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                const newProjects = data.filter((project) => project.id != id);
                localStorage.setItem("projects", JSON.stringify(newProjects));
                setData(newProjects);
            });
        }
    });
    // 2
    return `<div>
        <h1>Quản lý dự án</h1>
       
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Tên dự án</th>
                    <th></th>
                </tr>
            </thead>
        <tbody>
            ${data
            .map(
                (project, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${project.name}</td>
                    <td>
                        <button data-id="${project.id
                    }" class="btn btn-remove btn-danger">Remove</button>
                        <a href="/admin/projects/${project.id}/edit">Sửa</a>
                    </td>
                </tr>
            `
            )
            .join("")}
            
        </tbody>
    </div>`;
};

export default ProjectsPage;

// JSON: parse va stringify
// localStorage.getItem(key) => vi du: JSON.parse(localStorage.get('a'))
// localStorage.setItem(key, JSON.stringify(value));
