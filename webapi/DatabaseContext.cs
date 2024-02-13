using Microsoft.EntityFrameworkCore;
using webapi.Models;

namespace webapi
{
    public class DatabaseContext : DbContext
    {
        public DbSet<Post> Posts { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Image> Images { get; set; }
        public DatabaseContext(DbContextOptions options) : base(options)
        {
        }

    }
}
