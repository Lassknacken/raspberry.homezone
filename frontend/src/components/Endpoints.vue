<template>
    <div>
    asdfasdfasdfasd
        <div v-for="endpoint in endpoints" :key="endpoint.Id">
            <endpoint :value="endpoint" @input="endpointInput"></endpoint>
        </div>
        <div>
            <button type="button" @click="addNewEndpoint">+</button>
        </div>
    </div>
</template>

<script>
import Endpoint from './Endpoint.vue';
export default {
    name:"Endpoints",
    components:{
        Endpoint
    },
    data(){
        return {
            endpoints:[]
        };
    },
    created(){
        this.$http.get(this.$apiUrl+'/Endpoints')
        .then(result=>{
            this.endpoints=result.data;
        });
    },
    methods:{
        endpointInput(value){
            let index = this.findIndex(value.Id);
            if(index<0){
                index=this.findIndex(0);
            }
            if(index>=0){
                this.endpoints.splice(index,1,value);
            }
        },
        addNewEndpoint(){
            this.endpoints.push({
                Id:0
            });
        },findIndex(id){
            return this.endpoints.findIndex(item=>item.Id==id);
        }
    }

}
</script>