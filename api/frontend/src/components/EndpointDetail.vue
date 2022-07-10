<template>
    <div>
        <input type="number" :value="endpoint.Id" disabled style="width:16.6%">
        <input type="text" v-model="endpoint.Code" :disabled="disabled" style="width:16.6%">
        <input type="text" v-model="endpoint.Name" :disabled="disabled" style="width:16.6%">
        <input type="number" v-model.number="endpoint.Number" :disabled="disabled" style="width:8.3%">
        <div style="width:16.6%;display:inline">
            <button v-if="!showYesNo" type="button" @click="toggle">pencil</button>
            <button v-if="!disabled && !showYesNo" type="button" @click="save">save</button>
            <!-- Delete -->
            <button v-if="!disabled" type="button" @click="showYesNo=!showYesNo">
                {{showYesNo?'No':'Delete'}}
            </button>
            <button v-if="showYesNo" type="button" @click="doDelete">Yes</button>
        </div>

    </div>
</template>

<script>
export default {
    name:"EndpointDetail",
    props:{
        value:Object
    },
    data(){
        return {
            endpoint:Object.assign({},this.value),
            disabled:this.value.Id===0?false:true,
            showYesNo:false,
        };
    },
    computed:{
      isDisabled(){
          return this.disabled?"disabled":"";
      }  
    },
    methods:{
        toggle(){
            this.disabled=!this.disabled;
        },
        save(){
            if(this.endpoint.Id){
                this.$http.put('/Endpoints',this.endpoint)
                .then(result=>{
                    this.$emit("input",result.data);
                });
            } else {        
                this.$http.post('/Endpoints',this.endpoint)
                .then(result=>{
                    this.$emit("input",result.data);
                });
            }
            // this.$emit("input",this.endpoint);
        },
        create(){

        },
        update(){

        },
        doDelete(){
            this.$http.delete('/Endpoints?id='+this.endpoint.Id)
            this.$emit('input',undefined);
        }
    }
}
</script>