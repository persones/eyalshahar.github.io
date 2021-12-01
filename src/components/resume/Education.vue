<template>
  <div>
    <div class="section-title">Education</div>
    <div class="publication" v-for="(education, index) in educations" :key="index"  >
      <div class="date">{{ education.date }}</div>
      <div class="text">{{ education.text }}</div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Education",
  props: {
    educations: Array 
  }
}
</script>

<style>
  
</style>