<template>
  <div class="section">
    <div class="section-title">Projects</div>
    <div class="project" v-for="(project, index) in sortedProjects" :key="index">
      <div class="project-header">
        <div class="project-title" v-html="project.title" />
        <div class="date">{{ project.end_date}}</div>
      </div>
      <div>
        <span v-if="project.context" class="project-context" >{{ project.context }}<span v-if="project.affiliation">, </span></span>
        <span class="affilation">{{ project.affiliation }}</span>
      </div>  
      <div class="description" v-html="project.description" />
      <div class="collaborators" v-if="project.collaborators">Collaborators : {{ project.collaborators.join(', ') }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  props: {
    projects: Array
  },
  computed: {
    sortedProjects() {
      console.log([...this.projects].sort((a, b) => 
        this.parseDate(a.end_date) > this.parseDate(b.end_date)).map(d => d.end_date));
      return [...this.projects].sort((a, b) => 
        this.parseDate(a.end_date) > this.parseDate(b.end_date)
      );
    }
  },
  methods: {
    parseDate(d) {
      let parts = d.split('/');
      console.log(`${parts[1]}${parts[0]}`);
      return `${parts[1]}{${parts[0]}}`
    }
  }
}
</script> 

<style>
  .project {
    margin: 0.5em 0;
  }
  .project-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .project-title {
    font-weight: bold;
  }

  .project-context {
    font-style: italic;
  }
</style>