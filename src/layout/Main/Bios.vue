<template>
  <section class="section section-team text-center">
    <div class="container">
      <h2 class="title">{{ content.title }}</h2>
      <div
        class="jumbotron"
        v-if="content.content"
        v-html="content.content"
      ></div>
      <div class="team">
        <div class="row justify-content-center">
          <div
            :class="bios_width"
            v-for="person in content.people"
            :key="person.id"
          >
            <div class="team-player">
              <img
                :src="`/content${person.headshot}`"
                alt="Thumbnail Image"
                class="rounded-circle img-fluid img-raised"
              />
              <h4 class="title">{{ person.name }}</h4>
              <p class="category text-primary">{{ person.position }}</p>
              <p
                class="description"
                v-html="$options.filters.truncate(person.bio, 100)"
              ></p>
              <button
                class="btn btn-primary btn-round"
                data-toggle="modal"
                :data-target="`#${person.id}-bio`"
              >
                Full bio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--
{{ range .Pages }}
  <div class="modal fade" id="{{ .UniqueID }}-bio" tabindex="-1" role="dialog" aria-labelledby="{{ .UniqueID }}-bio" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header justify-content-center">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
            <i class="now-ui-icons ui-1_simple-remove"></i>
          </button>
          <h4 class="title title-up">{{ .Title }}<br><small>{{ .Params.position }}</small></h4>
        </div>
        <div class="modal-body">
          <img class="float-left w-25 mr-3 mb-3" src="{{ $headshot := .Resources.GetMatch "headshot" }}{{ with $headshot }}{{ .RelPermalink }}{{ end }}">
          {{ .Content }}
        </div>
      </div>
    </div>
  </div>
{{ end }}-->
</template>

<script>
export default {
  computed: {
    bios_width() {
      if (this.content.people.length == 1) {
        return "col-md-12";
      } else if (this.content.people.length % 3 == 1) {
        return "col-md-6";
      }
      return "col-md-4";
    }
  },
  props: {
    content: Object
  }
};
</script>

<style></style>
