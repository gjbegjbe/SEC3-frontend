<template>
  <div id="homepage">

    <div id="test" class="block" style="height: 100vh">
      <div class="kg_container">
        <KGBuilder id="亚朵集团" :groupname="this.activeName" />
      </div>

      <div class="kg_container">
        <KGBuilder id="华住酒店集团" :groupname="this.groupname" />
      </div>

    </div>

    <div id="dialog_box">
      <dialog_box>

      </dialog_box>
    </div>


  </div>
</template>

<script>
import KGBuilder from "@/components/KGBuilder.vue";
import dialog_box from "@/components/dialog_box";

export default {
  name: "Home",
  components: {
    KGBuilder,
    dialog_box

  },
  data() {
    return {
      grouplist: ["锦江国际集团", "华住酒店集团"],
      activeName: '亚朵集团',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    };
  },
  mounted() {},
  methods: {},
};


</script>
<style>
html, body {
  margin: 0;
  padding: 0;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

.kg_container {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(rgba(209, 214, 219, 0.3), rgba(255, 255, 255, 0.8)), url('../assets/azur.jpg') no-repeat;
  /*overflow: hidden;*/
  background-size: cover;

}

#kg_container2 {
  height: 50vh;
  width: 100%;
}

#dialog_box {
  z-index: 999;
  position: absolute;
}

</style>
