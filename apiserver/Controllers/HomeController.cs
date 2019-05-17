using apiserver.Models;
using Microsoft.AspNetCore.Mvc;

namespace apiserver.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<HomeData> Get()
        {
            return new HomeData
            {
                User = "Renzo Veldkamp",
                IsAuthenticated = true,
                AvatarUrl = "https://localhost:5001/content/avatar.png",
                Employer = "Centric Software Professionals",
                JobTitle = "Software Architect and Craft Expert .Net"
            };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
