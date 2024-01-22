using Microsoft.AspNetCore.Mvc;
using webapi.Models;

namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
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

        [HttpGet]
        public List<Post> GetPostsByLocation(string location)
        {
            List<Post>? posts = _context.Posts.Where(p => p.Location == location).ToList();
            return posts;
        }
    }
}