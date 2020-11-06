<template>
  <header class="page-header clear-filter" filter-color="orange">
    <parallax
      class="page-header-image"
      :style="{
        'background-image': 'url(/content' + content.backsplash + ')'
      }"
    ></parallax>
    <div class="container">
      <div class="content-center brand">
        <h1 class="h1-seo">{{ content.title }}</h1>
        <h3>{{ content.tagline }}</h3>
      </div>
      <h6 class="category-absolute">
        <span class="text-white">{{ content.director }} </span>,
        {{ content.director_title }}
      </h6>
    </div>
  </header>
</template>

<script>
import { Parallax } from "@/components";

export default {
  props: {
    content: Object
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
