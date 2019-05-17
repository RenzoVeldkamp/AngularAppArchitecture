namespace apiserver.Models
{
    public class HomeData
    {
        public string User { get; set; }
        public string JobTitle { get; set; }
        public string Employer { get; set; }
        public bool IsAuthenticated { get; set; }
        public string AvatarUrl { get; set; }
    }
}
