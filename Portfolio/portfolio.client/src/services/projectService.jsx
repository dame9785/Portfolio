const API_URL = "https://localhost:7274/api/projects/";

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