using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using sftBackendApp.Models;

namespace sftBackendApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly DatabaseContext _context;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, DatabaseContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet(Name = "GetPosts")]
        public List<User> Get()
        {
            var posts = new List<User>();
            posts = _context.Users.ToList();
            return posts;
        }
    }
}