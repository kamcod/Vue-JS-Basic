<template>
  <div>
  <form @submit.prevent="submitMessage">
    <label class="bold" for="your-email"> Your Email </label>
      <input type="text" id="your-email" v-model="email" /><br /><br />
      <label class="bold" for="message"> Message </label>
      <textarea id="message" rows="5" v-model="message"></textarea><br /><br />
      <base-button> Send Message </base-button>
  </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      email: '',
      message: ''
    };
  },
  methods:{
    submitMessage(){
      const req = {
        email: this.email,
        message: this.message
      };
      this.$store.dispatch('saveRequest', req);
    }
  }
}
</script>
<style scoped>
input#your-email, textarea{
    width: 100%;
  }
  .bold{
    font-weight: bold;
  }
</style>