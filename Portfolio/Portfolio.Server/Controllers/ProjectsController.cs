using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Portfolio.Server.Models;

namespace Portfolio.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        //Projects
        private readonly List<Project> _projects = new List<Project>() {
           new Project
           {
               Id = 1,
               Title = "Project 1",
               Description = "A personal portfolio built with React and ASP.NET Core API. Showcases my projects, skills, and experience with a clean and modern UI.",
               ImageUrl = "../../assets/exmpel-project.jpg"
           },
           new Project
           {
               Id = 2,
               Title = "Project 2",
               Description = "A personal portfolio built with React and ASP.NET Core API. Showcases my projects, skills, and experience with a clean and modern UI.",
               ImageUrl = "../../assets/exmpel-project.jpg"
           },
           new Project
           {
               Id = 3,
               Title = "Project 2",
               Description = "A personal portfolio built with React and ASP.NET Core API. Showcases my projects, skills, and experience with a clean and modern UI.",
               ImageUrl = "../../assets/exmpel-project.jpg"
           }
        };

        [HttpGet, Route("GetProjects")]
        public IActionResult GetProjects()
        {
            var projects = _projects;
        
            if (projects == null) return NotFound();
            
            return Ok(projects);
        }


    }
}
