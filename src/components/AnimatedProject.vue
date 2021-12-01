<template>
  <div class="border-box">
    <h1><AnimatedText v-bind:text=title />  
      <div class="project-subtitle">
        <AnimatedText id="project-affiliation" v-bind:text=affiliation />
        <span v-if="context" id="project-context"> <AnimatedText v-bind:text="context"></AnimatedText></span>
        </div>
      <div id="project-dates">{{ dates }}</div>
      <div id="project-description"><AnimatedText v-bind:text=description></AnimatedText></div>
      <div v-if="role" id="role"><strong>Role:</strong> {{ role }}</div>
      <Gallery v-if="images" v-bind:images="images"></Gallery>
      <div v-if="collaborators">
        <strong>Collaborators: </strong>
          <AnimatedText v-for="c in collaborators" :key=c class="collaborator" v-bind:text=c />
      </div>
      <div v-if="links" id="project-links">
        <strong>Links:</strong>
        <ul class="my-list">
          <li v-for="link in links" :key=link.link><a :href="link.link" target="_blank">{{ link.text }}</a></li>
        </ul>
      </div>
  </div>
</template>

<style> 
  .collaborator:not(:last-child):after {
    content: ' // ';
  }

  strong {
    text-transform: uppercase;
  }


  #project-description {
    margin: 0.7em 0;
  }
</style>
<script>
import Gallery from './Gallery.vue'
import AnimatedText from "./AnimatedText";

export default {
  name: 'Project',
  components: {
    Gallery,
    AnimatedText
  },
  props: {
    title: String,
    affiliation: String,
    context: String,
    description: String,
    links: Array,
    start_date: String,
    end_date: String,
    role: String,
    collaborators: Array,
    images: Array
  },
  computed: {
    dates() {
      console.log(this.title)
      if (this.start_date) {
        return `${this.start_date} - ${this.end_date}`
      } else {
        return this.end_date;
      }
    }
  }
}
</script>