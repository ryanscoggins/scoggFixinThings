using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Models;

namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class ImageController : ControllerBase
    {
        private readonly DatabaseContext _context;
        public ImageController(ILogger<PostController> logger, DatabaseContext context)
        {
            _context = context;
        }
        [HttpGet]
        public List<Image> GetImagesByPostId(int postId)
        {
            List<Image>? images = _context.Images.Where(i => i.PostId == postId).ToList();
            return images;
        }
    }
}
