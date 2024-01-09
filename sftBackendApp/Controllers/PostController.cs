using Microsoft.AspNetCore.Mvc;
using sftBackendApp.Models;

namespace sftBackendApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PostController : ControllerBase
    {
        private readonly ILogger<PostController> _logger;
        private readonly DatabaseContext _context;

        public PostController(ILogger<PostController> logger, DatabaseContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public List<Post> GetAllPosts()
        {
            List<Post>? posts = _context.Posts.ToList();
            return posts;
        }
    }
}