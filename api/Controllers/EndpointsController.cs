using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using M=api.Database.Models;

namespace api.Controllers {

    [EnableCors]
    [Route("api/[controller]")]
    [ApiController]
    [FormatFilter]
    public class EndpointsController : ControllerBase
    {
        [HttpGet("/Endpoints")]
        public async Task<ActionResult<IEnumerable<M.Endpoint>>> GetEndpoints()
        {
            var result = await new Logics.Endpoints().GetEndpoints();
            return Ok(result);
        }

        [HttpPost("/Endpoints")]
        public async Task<ActionResult<M.Endpoint>> PostEndpoint([FromBody]M.Endpoint endpoint)
        {
            var result = await new Logics.Endpoints().CreateEndpoint(endpoint);
            return Ok(result);
        }

        [HttpPut("/Endpoints")]
        public async Task<ActionResult<M.Endpoint>> PutEndpoint([FromBody]M.Endpoint endpoint)
        {
            var result = await new Logics.Endpoints().UpdateEndpoint(endpoint);
            return Ok(result);
        }
        [HttpDelete("/Endpoints")]
        public async Task<ActionResult> DeleteEndpoint([FromQuery]int id){
            await new Logics.Endpoints().DeleteEndpoint(id);
            return Ok();
        }


        [HttpGet("/Endpoints/{id}/On")]
        public async Task<ActionResult<IEnumerable<M.Endpoint>>> GetEndpointOn(int id)
        {
            var result =await new Logics.Endpoints().ToggleEndpoint(id, true);
            return Ok(result);
        }

        [HttpGet("/Endpoints/{id}/Off")]
        public async Task<ActionResult<IEnumerable<M.Endpoint>>> GetEndpointOff(int id)
        {
            var result =await new Logics.Endpoints().ToggleEndpoint(id, false);
            return Ok(result);
        }
    }
}