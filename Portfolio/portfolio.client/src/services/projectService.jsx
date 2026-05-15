const API_URL = "https://localhost:7274/api/projects/";

//GET Project
export const getProjects = async () => {
    try {
        const res = await fetch(API_URL + "GetProjects");

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        return await res.json();
    } catch (error) {
        console.error("Kunde inte hämta projekt:", error);
        throw error;
    }
};

//Add Project
export const addProject = async (project) => {
    const response = await fetch(API_URL + "AddProject", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(project)
    });

    if (!response.ok) {
        throw new Error(`Error från servern: ${response.status}`);
    }

    return await response.json();
};

//Delete Project
export const deleteProject = async (id) => {
    const response = await fetch(API_URL + "DeleteProject/" + id, {
        method: "DELETE",
    }); 

    if (!response.ok) {
        throw new Error(`Kunde inte ta bort projekt: ${response.status}`);
    }

    return true;
}

//Update Project
export const updateProject = async (project) => {
    const respone = await fetch(API_URL + "UpdateProject/" + project.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(project)
    });

    if (!respone.ok) {
        throw new Error("Kunde inte uppdatera projekt");
    }

    return respone.json();
}
