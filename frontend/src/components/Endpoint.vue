<template>
    <div>
        <EndpointDetail :value="endpoint" @input="updated"></EndpointDetail>
        <div>
            <button type="button" @click="toggleOn">On</button>
            <button type="button" @click="toggleOff">Off</button>
        </div>
    </div>
</template>

<script>
import EndpointDetail from './EndpointDetail';
export default {
    name:"Endpoint",
    components:{
        EndpointDetail
    },
    props:{
        value:Object
    },
    data(){
        return {
            endpoint:Object.assign({},this.value)
        }
    },
    methods:{
        toggleOn(){
            this.toggle(true);
        },
        toggleOff(){
            this.toggle(false);
        },
        toggle(on){
            let url=this.$apiUrl+'/endpoints/'+this.value.Id+'/';
            if(on){
                url+='On';
            }else{
                url+='Off';
            }

            this.$http.get(url);
        },
        updated(endpoint){
            this.$emit('input',endpoint);
        }
    }
}
</script>