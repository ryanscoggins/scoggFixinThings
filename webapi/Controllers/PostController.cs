using Microsoft.AspNetCore.Mvc;
using webapi.Models;

namespace webapi.Controllers;

[ApiController]
[Route("GetPosts")]
public class PostController : ControllerBase
{
    private readonly ILogger<PostController> _logger;
    private readonly DatabaseContext _context;

    public PostController(ILogger<PostController> logger, DatabaseContext context)
    {
        _logger = logger;
        _context = context; 
    }

    [HttpGet(Name = "GetPosts")]
    public List<Post> Get()
    {
        var posts = new List<Post>();
        posts = _context.Posts.ToList();
        return posts;
    }
}
