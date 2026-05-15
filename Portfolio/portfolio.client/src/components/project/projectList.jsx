import "./ProjectList.css";
import { getProjects, deleteProject, updateProject } from "../../services/projectService";
import { useEffect, useState } from "react";

function ProjectList() {
    const [isEditing, setIsEditing] = useState(false);
    const [projects, setProjects] = useState([]);
    const [project, setProject] = useState({});
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // Get projects
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

    // Delete project
    const handleDeleteProject = async (id) => {
        if (id == null) return;

        try {
            await deleteProject(id);
            setProjects(prev => prev.filter(project => project.id !== id));
        } catch (error) {
            console.error("Kunde inte ta bort projekt", error);
        }
    };

    // Open edit form
    const handleEditProject = (id) => {
        if (id == null) return;

        const selectedProject = projects.find(p => p.id === id);
        if (!selectedProject) return;

        setProject(selectedProject);
        setTitle(selectedProject.title || "");
        setDescription(selectedProject.description || "");
        setIsEditing(true);
    };

    // Save project
    const saveProject = async (e) => {
        e.preventDefault();

        const updatedProject = {
            ...project,
            title,
            description
        };

        try {
            const response = await updateProject(updatedProject);

            setProjects(prev =>
                prev.map(p => (p.id === response.id ? response : p))
            );

            setIsEditing(false);
            setProject({});
            setTitle("");
            setDescription("");
        } catch (error) {
            console.error("Något blev fel", error);
        }
    };

    return (
        <div className="container py-5 mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-xl-10">
                    <div className="card bg-dark text-white shadow-lg border-0 rounded-4">
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                                <div>
                                    <h2 className="mb-1">Projektlista</h2>
                                    <p className="text-light mb-0">Hantera dina projekt här.</p>
                                </div>
                                <span className="badge bg-primary fs-6 px-3 py-2">
                                    {projects.length} projekt
                                </span>
                            </div>

                            <div className="table-responsive">
                                <table className="table table-dark table-hover align-middle mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Titel</th>
                                            <th scope="col">Beskrivning</th>
                                            <th scope="col">Bild</th>
                                            <th scope="col" className="text-center">Åtgärder</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {projects.length > 0 ? (
                                            projects.map((item) => (
                                                <tr key={item.id}>
                                                    <th scope="row">{item.id}</th>
                                                    <td className="fw-semibold">{item.title}</td>
                                                    <td className="text-break">{item.description}</td>
                                                    <td className="text-info small text-break">{item.imageUrl}</td>
                                                    <td>
                                                        <div className="d-flex gap-2 justify-content-center">
                                                            <button
                                                                className="btn btn-sm btn-warning fw-semibold"
                                                                onClick={() => handleEditProject(item.id)}
                                                            >
                                                                Redigera
                                                            </button>
                                                            <button
                                                                className="btn btn-sm btn-danger fw-semibold"
                                                                onClick={() => handleDeleteProject(item.id)}
                                                            >
                                                                Ta bort
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="5" className="text-center py-4 text-light">
                                                    Inga projekt hittades.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {isEditing && (
                        <div className="card bg-dark text-white shadow-lg border-0 rounded-4 mt-4">
                            <div className="card-body p-4">
                                <h3 className="mb-4">Redigera projekt</h3>

                                <form onSubmit={saveProject}>
                                    <div className="mb-3">
                                        <label className="form-label">Titel</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Beskrivning</label>
                                        <textarea
                                            rows="6"
                                            className="form-control"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </div>

                                    <div className="d-flex gap-2">
                                        <button type="submit" className="btn btn-success">
                                            Spara projekt
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-light"
                                            onClick={() => {
                                                setIsEditing(false);
                                                setProject({});
                                                setTitle("");
                                                setDescription("");
                                            }}
                                        >
                                            Avbryt
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectList;