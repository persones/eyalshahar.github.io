<template>
  <div class="position">
    <div class="position-header">
      <div class="position-title" v-html="position.title" />
      <div class="date" v-html="`${position.from} – ${position.to}`" />
    </div>
    <ul>
      <li 
      v-for="responsibity in position.responsibilities"
      :key=responsibity v-html="responsibity"
      />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Position',
  props: {
    position: Object
  }
}
</script>

<style scoped>

  .position {
    margin: 0.25em 0;
  }
  .position-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .position-title {
    font-weight: bold;
  }

  .date {
    width: 9em;
    text-align-last: justify;
  }
  

</style>