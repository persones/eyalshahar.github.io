<template>
  <div class="work-catagory-container" v-if="catagory">
    <div class="section-title">Work Experience - <span v-html="catagory.work_catagory" /></div>
    <div class="workplaces">
      <Workplace
      v-for="workplace in catagory.workplaces"
      :workplace="workplace"
      :key="workplace.workplace" />
    </div>
  </div>
</template>

<script>

import Workplace from "./Workplace.vue"

export default {
  name: 'WorkCatagory',
  components: {
    Workplace
  },
  props: {
    catagory: Object
  }
}
</script>

<style>

  .work-catagory-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .workplaces {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
   /* gap: 1.5em;*/
    justify-content: space-between;
  }

 

</style>