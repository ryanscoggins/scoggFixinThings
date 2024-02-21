using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
            List<Post>? posts = _context.Posts.Include(p => p.Images).ToList();
            return posts;
        }

        [HttpGet]
        public List<Post> GetPostsByLocation(string location)
        {
            List<Post>? posts = _context.Posts.Where(p => p.Location == location).Include(p => p.Images).ToList();
            return posts;
        }

        [HttpGet]
        public Post? GetIndividualPost(int postId)
        {
            Post? post = _context.Posts.Where(p => p.Id == postId).Include(p => p.Images).FirstOrDefault();
            return post;
        }
    }
}