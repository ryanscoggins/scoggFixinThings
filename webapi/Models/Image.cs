namespace webapi.Models
{
    public class Image
    {
        public int Id { get; set; }
        public string ImageLink { get; set; }
        public int PostId { get; set; }
        public virtual Post Post { get; set; }
    }
}
