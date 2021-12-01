<template>
  <div class="section">
    <div class="section-title">{{ sectionTitle }} </div>
    <div class="publication" v-for="(publication, index) in publicationsToShow" :key="index"  >
      <div class="date">{{ publication.date }}</div>
      <div class="text">
        <span 
          class="author"
          :class="{ me : author == 'Shahar, E.'}" 
          v-for="author in publication.authors" 
          :key="author">
          {{ author}}, 
        </span>
        <span class="academic-title" v-html="publication.title" />, 
        <span class="publisher">{{ publication.publisher}}</span>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Publications",
  props: {
    sectionTitle: String,
    publications: Array
    
  },
  computed: {
    publicationsToShow: function() {
      return this.publications.filter(p => !p.hide);
    }
  } 
}
</script>

<style>
  .me {
    font-weight: bold;
  }
  
  .academic-title {
    font-style: italic;
  }

  .publisher {

  }

</style>