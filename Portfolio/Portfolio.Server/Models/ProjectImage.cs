namespace Portfolio.Server.Models
{
    public class ProjectImage
    {
        public int Id { get; set; }
        public string FileName { get; set; } = string.Empty;
        public string FilePath { get; set; } = string.Empty;
        public string ContentType { get; set; } = string.Empty;

        public int ProjectId { get; set; }
        public Project Project { get; set; } = null!;
    }
}
