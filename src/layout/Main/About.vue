<template>
  <section class="section about-us">
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto text-center">
          <h2 class="title">{{ content.description }}</h2>
          <h5 class="description" v-html="content.content"></h5>
        </div>
      </div>
      <div class="separator separator-primary"></div>
      <div class="section-story-overview">
        <div class="row">
          <div class="col-md-6">
            <div
              class="image-container image-left"
              :style="{
                'background-image':
                  'url(/content' + content.images.top_left + ')'
              }"
            >
              <!-- First image on the left side -->
              <p class="blockquote blockquote-primary">
                "{{ content.quote }}"
                <br />
                <br />
                <small>-{{ content.quote_credit }}</small>
              </p>
            </div>
            <!-- Second image on the left side of the article -->
            <div
              class="image-container"
              :style="{
                'background-image': 'url(/content' + content.images.left + ')'
              }"
            ></div>
          </div>
          <div class="col-md-5">
            <!-- First image on the right side, above the article -->
            <div
              class="image-container image-right"
              :style="{
                'background-image':
                  'url(/content' + content.images.top_right + ')'
              }"
            ></div>
            <h3>{{ content.history.title }}</h3>
            <span v-html="content.history.content"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: Object
  }
};
</script>

<style></style>
