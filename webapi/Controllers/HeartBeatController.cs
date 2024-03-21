using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Models;

namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class HeartBeatController : ControllerBase
    {
        private readonly ILogger<HeartBeatController> _logger;
        private readonly DatabaseContext _context;

        public HeartBeatController(ILogger<HeartBeatController> logger, DatabaseContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpHead]
        public ActionResult CheckPulse()
        {
            return Ok();
        }
    }
}