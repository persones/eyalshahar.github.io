<template>
  <div class="workplace">
    <div class="workspace-header">
      <span class="workplace-name" v-html="workplace.workplace" />, <span class="workplace-location" v-html="workplace.location" />
    </div>
    <Position
    v-for="position in workplace.positions"
    :position="position"
    :key="position.title" />
    <ul>
      <li 
      v-for="responsibity in workplace.responsibilities"
      :key=responsibity v-html="responsibity"
      />
    </ul>
  </div>
  
</template>

<script>

import Position from "./Position.vue"

export default {
  name: 'Workplace',
  components: {
    Position
  },
  props: {
    workplace: Object
  }
}
</script>

<style>
  .workplace {
    margin-top: 5px;
  }
  
  .workspace-header {
    padding: 3px;
    border-radius: 7px;
    font-style: italic;
    background: #e6edf6;
    display: inline-block
  }

</style>