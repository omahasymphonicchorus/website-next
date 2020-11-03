<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="wrapper">
      <PageHeader></PageHeader>
    </div>
  </div>
</template>

<script>
import Navbar from "./layout/Navbar";
import PageHeader from "./layout/PageHeader";
export default {
  components: {
    Navbar,
    PageHeader
  }
};
</script>

<style lang="scss"></style>
