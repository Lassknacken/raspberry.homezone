<template>
  <div class="hello">
    <div class="container">
      <div class="w-3/12">a</div>
      <div class="w-9/12">b</div>
    </div>
    <Camera></Camera>

    <Endpoints></Endpoints>
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
