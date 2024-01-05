using Microsoft.EntityFrameworkCore;
using sftBackendApp.Models;

namespace sftBackendApp
{
    public class DatabaseContext : DbContext
    {
        public DbSet<Post> Posts { get; set; }
        public DbSet<User> Users { get; set; }
        public DatabaseContext(DbContextOptions options) : base(options)
        {
        }

    }
}
