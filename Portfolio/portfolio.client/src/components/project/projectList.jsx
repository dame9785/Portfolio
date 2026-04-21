import "./projectList.css";
import { getProjects, deleteProject, updateProduct } from "../../services/projectService";
import { useRef, useEffect, useState, use } from "react";

function projectList() {

    const [isEditing, setIsEditing] = useState(false);

    const [projects, setProjects] = useState([]);
    const [project, setProject] = useState({});


    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    //Get projects
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await getProjects();
                setProjects(data);
            } catch (error) {
                console.error(error);
            }
        };

        loadData();
    }, []);

    //Delete Project
    const handleProject = async (id) => {
        if (id == null) return;

        try {
            await deleteProject(id);
            setProjects(prev => prev.filter(project => project.id !== id));

        } catch (error) {
            console.error("Kunde inte ta bort projekt", error);
        }
    }

    const updateProject = (id) => {
        if (id == null) return;
        const selectedProject = projects.find(p => p.id == id);
        if (!selectedProject) return

        setProject(selectedProject);

        setTitle(selectedProject.title || "");
        setDescription(selectedProject.description || "");
        setIsEditing(true);
    }

    const saveProduct = async (e) => {
        e.preventDefault(); // stoppar reload

        project.title = title;
        project.description = description;

        try {
            const response = await updateProduct(project);
            console.log(response);
            setProjects(projects => projects.map(p => p.id == response.id ? response : p))

        } catch (error) {
            console.error("Något blev fel", error);
        }
    }

    return (
        <div className="container list-container">
            <table className="table text-white">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((item) => (
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.imageUrl}</td>
                            <td><button className="btn btn-sm btn-warning"
                                onClick={() => updateProject(item.id)}>Redigera</button></td>
                            <th scope="col"><button className="btn btn-sm btn-danger"
                                onClick={() => handleProject(item.id)}>Ta bort</button></th>
                        </tr>

                    ))}

                </tbody>
            </table>

            {isEditing && (
                <div className="row edit-block">
                    <div className="col-md-6">
                        <form onSubmit={saveProduct}>
                            <div className="form-group">
                                <label>Titel</label>
                                <input
                                    className="form-control"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label>Beskrivning</label>
                                <textarea
                                    rows="10"
                                    className="form-control"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn btn-success">
                                Spara produkt
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default projectList;