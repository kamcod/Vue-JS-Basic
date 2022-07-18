<template>
  <div class="badge" :class="type">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['type']
}
</script>
<style scoped>
.badge {
  border-radius: 15px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 00.5rem;
}
.frontend{
  background-color: blueviolet;
  color: white;
}
.backend{
  background-color: rgb(124, 17, 49);
  color: white;
}
.career{
  background-color: rgb(32, 219, 157);
  color: white;
}
</style>