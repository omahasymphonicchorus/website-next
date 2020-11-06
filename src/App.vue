<template>
  <div id="app">
    <transition name="fade">
      <div v-if="content">
        <Navbar :title="content.header.title"></Navbar>
        <div class="wrapper">
          <PageHeader :content="content.header"></PageHeader>
          <main class="main landing-page">
            <About :content="content.about"></About>
            <Bios :content="content.bios"></Bios>
          </main>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Navbar from "./layout/Navbar";
import PageHeader from "./layout/PageHeader";
import About from "./layout/Main/About";
import Bios from "./layout/Main/Bios";

export default {
  data() {
    return {
      content: null
    };
  },
  async created() {
    this.content = await (await fetch(`/content/index.json`)).json();
  },
  components: {
    Navbar,
    PageHeader,
    About,
    Bios
  }
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
