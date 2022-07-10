<template>
    <div>
        <button type="button" @click="takePicture">Foto</button>
        <button type="button" @click="cameraOn">Camera On</button>
        <button type="button" @click="cameraOff">Camera Off</button>
        
        <img v-if="pictureUrl" :src="pictureUrl" :height="height" :width="width"/>
    </div>    
</template>
<script>
export default {
    name:"Camera",
    data(){
        return {
            pictureUrl:undefined
        }
    },
    computed:{
        height(){
            return window.innerHeight*0.9;
        },
        width(){
            return window.innerWidth*0.9;
        }
    },
    methods:{
        takePicture(){
            let url=this.$apiUrl+'/camera/picture';
            this.$http.get(url)
            .then(result=>{
                console.log(result);
                this.pictureUrl = this.$apiUrl+"/"+result.data.FileName;
            });
        },
        cameraOn(){
            let url=this.$apiUrl+'/camera/StreamOn';
            this.$http.get(url);
        },
        cameraOff(){
            let url=this.$apiUrl+'/camera/StreamOff';
            this.$http.get(url);
        }
    }
}
</script>