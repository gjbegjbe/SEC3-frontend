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
#kg_container {
  height: 97vh;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(rgba(189, 200, 205, 0.3), rgba(220, 229, 238, 0.9));

  /*background-color: white;*/

}
#kg_container2 {
  height: 50vh;
  width: 100%;
}
</style>
