<template>
  <div>
    <div id="kg_container" class="home">
      <KGBuilder pid="kg_container" />
    </div>
  </div>
</template>

<script>
import KGBuilder from '@/components/KGBuilder.vue'
export default {
  name: 'Home',
  components: {
    KGBuilder,
  },
}
</script>
<style>
html,body{
  margin: 0;
  padding: 0;
  ;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
#kg_container {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(rgba(209, 214, 219, 0.3), rgba(255, 255, 255, 0.8)),url('../assets/azur.jpg') no-repeat;
  /*overflow: hidden;*/

}
#kg_container2 {
  height: 50vh;
  width: 100%;
}
</style>
