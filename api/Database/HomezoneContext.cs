using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace api.Database
{
    public class HomezoneContext : DbContext
    {
        public DbSet<Models.Endpoint> Endpoints { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            // => options.UseSqlite(@"Data Source=D:\project\Homezone\api\homezone.db");
            => options.UseSqlite("Data Source=homezone.db");
            ///home/pi/homezone
    }

    // public class Blog
    // {
    //     public int BlogId { get; set; }
    //     public string Url { get; set; }

    //     public List<Post> Posts { get; } = new List<Post>();
    // }

    // public class Post
    // {
    //     public int PostId { get; set; }
    //     public string Title { get; set; }
    //     public string Content { get; set; }

    //     public int BlogId { get; set; }
    //     public Blog Blog { get; set; }
    // }
}