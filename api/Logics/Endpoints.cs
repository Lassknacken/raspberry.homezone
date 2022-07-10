using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Database;
using M=api.Database.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Logics {
    public class Endpoints {

        HomezoneContext context;
        public Endpoints()
        {
            this.context=new HomezoneContext();
        }

        public async Task<List<M.Endpoint>> GetEndpoints(){
            return await context.Endpoints.ToListAsync();
        }

        public async Task<M.Endpoint> GetEndpoint(int id){
            return await context.Endpoints.FirstOrDefaultAsync(item=>item.Id == id); 
        }

        public async Task<string> ToggleEndpoint(int id, bool on){
            
            var point = await this.GetEndpoint(id);
            
            var cmd = $"/home/pi/raspberry-remote/send {point.Code} {point.Number} {on.ToOnString()}";
            var result = ShellHelper.Bash(cmd);

            return result;
        }

        public async Task<M.Endpoint> CreateEndpoint(M.Endpoint endpoint)
        {
            this.context.Endpoints.Add(endpoint);
            await this.context.SaveChangesAsync();
            return endpoint;
        }

        public async Task<M.Endpoint> UpdateEndpoint(M.Endpoint endpoint)
        {
            var model=this.context.Endpoints.FirstOrDefault(ep=>ep.Id==endpoint.Id);

            model.Code=endpoint.Code;
            model.Name=endpoint.Name;
            model.Number=endpoint.Number;
            await this.context.SaveChangesAsync();
            return endpoint;
        }

        public async Task DeleteEndpoint(int id)
        {
            var model=this.context.Endpoints.FirstOrDefault(ep=>ep.Id==id);
            this.context.Endpoints.Remove(model);
            await this.context.SaveChangesAsync();
        }
    }
}