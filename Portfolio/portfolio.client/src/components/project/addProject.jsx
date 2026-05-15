import { useState } from "react";
import "./AddProject.css";
import { addProject } from "../../services/projectService";
    

function AddProject() {

    const [titleProject, setTitle] = useState("");
    const [descriptionProject, setDescription] = useState("");
    const [imageFile, setImageFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("Title", titleProject);
        formData.append("Description", descriptionProject);

        if (imageFile) {
            formData.append("ImageFile", imageFile);
        }

        const project = {
            title: titleProject,
            description: descriptionProject,
            imageUrl: ""
        };

        try {
            const data = await addProject(project);
            console.log("Success:", data);
        } catch (error) {
            console.error("Error:", error);
        }
        
    }

    return (
        <div className="container wrapper-content">
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={handleSubmit} className="col-md-6 offset-md-3">
                        <div className="form-group p-2">
                            <input className="form-control" required placeholder="Title"
                                onChange={(e) => setTitle(e.target.value)}></input>
                        </div>
                        <div className="form-group p-2">
                            <textarea className="form-control" required placeholder="description"
                                onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>
                        <div className="form-group p-2">
                            <input type="file" accept="image/*" className="form-control" onChange={handleFileChange} />
                        </div>
                        <button type="submit" className="btn btn-success">Spara</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddProject;