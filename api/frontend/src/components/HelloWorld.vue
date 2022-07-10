<template>
  <div class="hello">

    <button type="button" @click="menu='a'">Endpoints</button>
    <button type="button" @click="menu='b'">Kamera</button>

    <Camera v-if="menu==='b'"></Camera>
    <Endpoints v-if="menu==='a'"></Endpoints>
  </div>
</template>

<script>

import Endpoints from './Endpoints';
import Camera from './Camera';
export default {
  name: 'HelloWorld',
  components:{
    Endpoints,
    Camera
  },
  props: {
    msg: String
  },
  data(){
    return{
      menu:"a"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
