using Microsoft.AspNetCore.Mvc;

namespace ArticoliWebService.Controllers
{
    [ApiController]
    [Route("api/saluti")]
    public class SalutiController
    {
        [HttpGet]
        public string getSaluti(){
            return "ecco il primo web Service!";
        }
        [HttpGet("{Nome}")]
        public string getSaluti2(string Nome)=>
            string.Format("\"ciao ne {0} sono il primo web service fatto con c#\"", Nome);
    }
}