using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using M=api.Database.Models;
using D=api.Domain;

namespace api.Controllers {

    [EnableCors]
    [Route("api/[controller]")]
    [ApiController]
    [FormatFilter]
    public class CameraController : ControllerBase
    {
        [HttpGet("/Camera/Picture")]
        public ActionResult<IEnumerable<D.Picture>> GetEndpoints()
        {
            var result =new Logics.Cameras().TakePicture();
            return Ok(result);
        }

        [HttpGet("/Camera/StreamOn")]
        public ActionResult<IEnumerable<D.Picture>> GetStreamOn()
        {
            new Logics.Cameras().StreamStart();
            return Ok();
        }

        [HttpGet("/Camera/StreamOff")]
        public ActionResult<IEnumerable<D.Picture>> GetStreamOff()
        {
            new Logics.Cameras().StreamStop();
            return Ok();
        }
    }
}