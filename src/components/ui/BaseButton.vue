<template>
    <button v-if="!link">
      <slot></slot>
    </button>
    <router-link v-if="link" :to="to">
      <slot></slot>
    </router-link>
 
</template>

<script>
export default {
  props: {
    link:{
      type: Boolean,
      required: false,
      default: false
    },
    to:{
      type: String,
      required: false,
      default: '/'
    }
  }
}
</script>


<style scoped>
button, a {
  margin: 1rem 0;
  width: fit-content;
  background-color: rgb(55, 43, 226);
  border-radius: 15px;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  color: white;
  border: none;
}
button:hover, a:hover{
  background-color: rgb(19, 10, 141);
  color: white;
  cursor: pointer;
}

</style>