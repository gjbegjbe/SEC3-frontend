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
  background-image: url('../assets/azur.jpg');
  background-attachment: fixed;
}
#kg_container {
  height: 97vh;
  width: 99%;
  overflow: hidden;
  /*overflow: hidden;*/

}
#kg_container2 {
  height: 50vh;
  width: 100%;
}
</style>
