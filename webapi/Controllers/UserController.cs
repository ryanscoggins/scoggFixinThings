﻿using Microsoft.AspNetCore.Mvc;
using webapi.Models;

namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        private readonly DatabaseContext _context;

        public UserController(ILogger<UserController> logger, DatabaseContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public List<User> GetAllUsers()
        {
            List<User>? users = _context.Users.ToList();
            return users;
        }
    }
}