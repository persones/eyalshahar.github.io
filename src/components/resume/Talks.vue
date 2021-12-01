<template>
  <div>
    <div class="section-title">Talks</div>
    <div class="publication" v-for="(talk, index) in talks" :key="index"  >
      <div class="date">{{ talk.date }}</div>
      <div class="text">
        <span v-if="talk.role" class="talk-role">{{ talk.role }}: </span>
        <span v-if="talk.title" class="academic-title">{{ talk.title }}, </span> 
        <span class="talk-event">{{ talk.event }}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Talks",
  props: {
    talks: Array
  }
}
</script>

<style>

</style>