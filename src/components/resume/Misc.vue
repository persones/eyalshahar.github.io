<template>
  <div>
    <div class="section-title">Miscellaneous</div>
    <ul>
      <li v-for="(m, index) in misc" :key="index">{{m}}</li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: "Misc",
  props: {
    misc: Array
  }
}
</script>

<style>

</style>