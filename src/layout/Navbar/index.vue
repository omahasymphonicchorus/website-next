<template>
  <base-nav :title="title" class="navbar-main" expand>
    <div class="row" slot="content-header" slot-scope="{ closeMenu }">
      <div class="col-6 collapse-brand">
        <a href="#">OSC</a>
      </div>
      <div class="col-6 collapse-close">
        <close-button @click="closeMenu"></close-button>
      </div>
    </div>

    <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
      <NavItem href="#">About</NavItem>
      <NavItem href="#">Tickets</NavItem>
      <NavItem href="#">Season</NavItem>
      <NavItem href="#">Support</NavItem>
      <NavItem href="#">Partners</NavItem>
      <NavItem href="#">Contact</NavItem>
    </ul>
    <ul class="navbar-nav align-items-lg-center ml-lg-auto">
      <li class="nav-item">
        <a
          class="nav-link nav-link-icon"
          href="https://www.facebook.com/creativetim"
          target="_blank"
          data-toggle="tooltip"
          title="Like us on Facebook"
        >
          <i class="fa fa-facebook-square"></i>
          <span class="nav-link-inner--text d-lg-none">Facebook</span>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link nav-link-icon"
          href="https://www.instagram.com/creativetimofficial"
          target="_blank"
          data-toggle="tooltip"
          title="Follow us on Instagram"
        >
          <i class="fa fa-instagram"></i>
          <span class="nav-link-inner--text d-lg-none">Instagram</span>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link nav-link-icon"
          href="https://twitter.com/creativetim"
          target="_blank"
          data-toggle="tooltip"
          title="Follow us on Twitter"
        >
          <i class="fa fa-twitter-square"></i>
          <span class="nav-link-inner--text d-lg-none">Twitter</span>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link nav-link-icon"
          href="https://github.com/creativetimofficial/vue-argon-design-system"
          target="_blank"
          data-toggle="tooltip"
          title="Star us on Github"
        >
          <i class="fa fa-github"></i>
          <span class="nav-link-inner--text d-lg-none">Github</span>
        </a>
      </li>
      <li class="nav-item d-none d-lg-block ml-lg-4">
        <a href="#" target="_blank" class="btn btn-neutral btn-icon">
          <span class="nav-link-inner--text">Donate</span>
        </a>
      </li>
    </ul>
  </base-nav>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";
import NavItem from "./NavItem";

export default {
  props: {
    title: String
  },
  components: {
    BaseNav,
    CloseButton,
    NavItem
  }
};
</script>
<style></style>
