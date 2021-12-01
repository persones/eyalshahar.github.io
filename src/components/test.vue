<template>
  <div class="checkbox-wrapper" @click="check">
    <div :class="{ checkbox: true, checked: checked }"></div>
    <div class="title">{{ title }}</div>
  </div>
</template>
<script>
export default {
  name: 'Test',
  data() {
    return { 
      checked: false, 
      title: 'Check me' 
      }
  },
  methods: {
    check() { this.checked = !this.checked; 
      console.log(this.checked)
    }
  }
};
</script>