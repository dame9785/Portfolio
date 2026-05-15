using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Metadata;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Portfolio.Server.Data;
using Portfolio.Server.Dtos;
using Portfolio.Server.Models;

namespace Portfolio.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {

        private readonly AppDbContext _context;
        public ProjectsController(AppDbContext context)
        {
            _context = context;
        }



        [HttpGet, Route("GetProjects")]
        public async Task<ActionResult<IEnumerable<Project>>> GetProjects()
        {
            var projects = await _context.Projects.ToListAsync();
            return Ok(projects);
        }

        [HttpPost, Route("AddProject")]
        public async Task<IActionResult> AddProject([FromBody]Project project)
        {

            if (project == null)
            return BadRequest();

            //project.ImageUrl = "../../assets/exmpel-project.jpg";
            _context.Projects.Add(project);
            await _context.SaveChangesAsync();
            
            return Ok(project);
        }

        [HttpDelete, Route("DeleteProject/{id}")]
        public async Task<IActionResult> DeleteProject(int id)
        {
            var project = await _context.Projects.FirstOrDefaultAsync(p => p.Id == id);
            if (project == null)
                return NotFound();
            
            _context.Projects.Remove(project);
           await _context.SaveChangesAsync();
           
            
            return NoContent();
        
        }

        [HttpPut, Route("UpdateProject/{projectId}")]
        public async Task<IActionResult> UpdateProject(int projectId, CreateProjectDto createProjectDto)
        {
            if (createProjectDto == null) return NoContent();
          
            var project = await _context.Projects.FirstOrDefaultAsync(p => p.Id == projectId);
            if (project == null) return BadRequest();
           
            project.Title = createProjectDto.Title;
            project.Description = createProjectDto.Description;
            
            await _context.SaveChangesAsync();

            return Ok(project);
        }

    }
}
