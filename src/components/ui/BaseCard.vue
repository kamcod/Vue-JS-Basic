<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  max-width: 50%;
  border-radius: 8px;
  max-width: 50%;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 1rem;
}
</style>