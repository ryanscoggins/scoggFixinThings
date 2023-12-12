using Microsoft.AspNetCore.Mvc;
using webapi.Models;

namespace webapi.Controllers;

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

    [HttpGet(Name = "GetWeatherForecast")]
    public List<Post> Get()
    {
        var posts = new List<Post>();
        posts = _context.Posts.ToList();
        return posts;
    }
}
