<template>
  <header class="page-header clear-filter" filter-color="orange">
    <parallax
      class="page-header-image"
      :style="{
        'background-image': 'url(' + header + ')'
      }"
    ></parallax>
    <div class="container">
      <div class="content-center brand">
        <h1 class="h1-seo">Omaha Symphonic Chorus</h1>
        <h3>Advancing choral artistry in the Omaha community</h3>
      </div>
      <h6 class="category-absolute">
        <span class="text-white">Dr. Greg Zielke</span>, Artistic Director and
        Conductor
      </h6>
    </div>
  </header>
</template>

<script>
import header from "./header.jpg";
import { Parallax } from "@/components";

export default {
  data() {
    return {
      header
    };
  },
  components: {
    Parallax
  }
};
</script>

<style lang="scss">
.brand .h1-seo {
  font-size: 2.8em;
  text-transform: uppercase;
  font-weight: 300;
}
</style>
