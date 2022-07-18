<template>
  <base-card v-for="req in requests" :key="req">
    <h3> {{req.email}} </h3>
    <p> {{ req.message}} </p>
  </base-card>
  <base-card  v-if="!request" >
    <h2 style="text-align: center"> No request received yet! </h2>
  </base-card>
</template>

<script>
export default {
  
  computed:{
    request(){
      if(this.$store.state.requests.length > 0){
        return true;
      }
      else
      return false;
    },
    requests(){
      return this.$store.state.requests;
    }
  }
}
</script>