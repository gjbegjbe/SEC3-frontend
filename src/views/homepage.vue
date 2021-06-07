<template>
  <div>
  <div class="block">
    <el-carousel height="100vh">
<!--      <el-carousel-item>-->



<!--      </el-carousel-item>-->
      <el-carousel-item>
        <div id="kg_container" class="home">
          <KGBuilder pid="kg_container" />
        </div>



      </el-carousel-item>
    </el-carousel>
  </div>




<!--    <div id="kg_container" class="home">-->
<!--      <KGBuilder pid="kg_container"/>-->
<!--    </div>-->

    <div id="dialog_box">
      <dialog_box>

      </dialog_box>
    </div>




  </div>
</template>

<script>
import KGBuilder from '@/components/KGBuilder.vue'
import dialog_box from "@/components/dialog_box";
export default {
  name: 'Home',
  components: {
    KGBuilder,
    dialog_box,

  },
}
</script>
<style>
html,body{
  margin: 0;
  padding: 0;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
#kg_container {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(rgba(209, 214, 219, 0.3), rgba(255, 255, 255, 0.8)),url('../assets/azur.jpg') no-repeat;
  /*overflow: hidden;*/
  background-size: cover;

}

#kg_container2 {
  height: 50vh;
  width: 100%;
}

#dialog_box{
  z-index: 999;
  position: absolute;
}

</style>
