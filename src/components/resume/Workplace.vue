<template>
  <div class="workplace">
    <div class="workspace-header">
      <span class="workplace-name" v-html="workplace.workplace" />, <span class="workplace-location" v-html="workplace.location" />
    </div>
    <Position
    v-for="position in workplace.positions"
    :position="position"
    :key="position.title" />
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
  .workspace-header {
    font-style: italic;
  }

</style>