<template>
  <li class="nav-item">
    <a class="nav-link" :href="href">
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    href: String
  }
};
</script>

<style></style>
