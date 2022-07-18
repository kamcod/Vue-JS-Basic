<template>
  <div class="filter">
    <h2>Find A Coach</h2>
    <input type="checkbox" id="frontend" checked v-model="frontend" @change="filter"/>
    <label for="frontend"> Frontend </label>
    <input type="checkbox" id="backend" checked v-model="backend" @change="filter"/>
    <label for="backend"> Backend </label>
    <input type="checkbox" id="career" checked v-model="career" @change="filter"/>
    <label for="career"> Career </label>
  </div>
</template>

<script>
export default {
  emits: ['filter-change'],
  data(){
    return {
      frontend: true,
      backend: true,
      career: true
    };
  },
  methods:{
    filter(){
      this.$emit('filter-change', this.frontend, this.backend, this.career);
    }
  }
}
</script>

<style scoped>
.filter h2{
  justify-content: center;
  align-items: center;
}
</style>
