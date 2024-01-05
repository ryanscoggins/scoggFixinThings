using Microsoft.EntityFrameworkCore;

namespace sftBackendApp
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions options) : base(options)
        {
        }

    }
}
