using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Metadata;
using Microsoft.AspNetCore.Mvc;
using Portfolio.Server.Models;

namespace Portfolio.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        //Projects
        private static List<Project> _projects = new List<Project>() {
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

        [HttpPost, Route("AddProject")]
        public IActionResult AddProject([FromBody]Project project)
        {

            if (project == null)
            return BadRequest();
            
            List<Project> projects = _projects;
            projects.Add(new Project()
            {
                Id = _projects.Count + 1,
                Title = project.Title,
                Description = project.Description,
                ImageUrl= "../../assets/exmpel-project.jpg"
            });

            return Ok(projects);
        }

        [HttpDelete, Route("DeleteProject/{id}")]
        public IActionResult DeleteProject(int id)
        {
            var project = _projects.FirstOrDefault(p => p.Id == id);
            if (project == null)
                return NotFound();
            
            _projects.Remove(project);
            return NoContent();
        
        }

        [HttpPut, Route("UpdateProject/{projectId}")]
        public IActionResult UpdateProject(int projectId, Project newProduct)
        {
            if (newProduct == null) return NoContent();
          
            var project =  _projects.FirstOrDefault(p => p.Id == projectId);
            if (project == null) return BadRequest();
           
            project.Title = newProduct.Title;
            project.Description = newProduct.Description;
            project.ImageUrl = newProduct.ImageUrl;
            
            return Ok(project);
        }

    }
}
