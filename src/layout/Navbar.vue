<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <a v-popover:popover1 class="navbar-brand" href="#">
        Omaha Symphonic Chorus
      </a>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <a class="nav-link" href="#">
          <p>About</p>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <p>Tickets</p>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <p>2019-20 Season</p>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <p>Support</p>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <p>Partners</p>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <p>Contact</p>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link btn btn-neutral" href="#">
          <p>DONATE</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Rehearsal and event calendar"
          data-placement="bottom"
          href="https://calendar.google.com/calendar/embed?src=calendar%40omahasymphonicchorus.org&ctz=America%2FChicago"
          target="_blank"
        >
          <font-awesome-icon
            :icon="['far', 'calendar']"
            size="lg"
          ></font-awesome-icon>
          <p class="d-lg-none d-xl-none">Calendar</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Like us on Facebook"
          data-placement="bottom"
          href="https://www.facebook.com/OmahaSymphonicChorus"
          target="_blank"
        >
          <font-awesome-icon
            :icon="['fab', 'facebook']"
            size="lg"
          ></font-awesome-icon>
          <p class="d-lg-none d-xl-none">Facebook</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Support us through a purchase from Amazon Smile"
          data-placement="bottom"
          href="https://smile.amazon.com"
          target="_blank"
        >
          <font-awesome-icon
            :icon="['fab', 'amazon']"
            size="lg"
          ></font-awesome-icon>

          <p class="d-lg-none d-xl-none">Amazon Smile</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { Navbar } from "@/components";
import { Popover } from "element-ui";

export default {
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    Navbar,
    [Popover.name]: Popover
  }
};
</script>
