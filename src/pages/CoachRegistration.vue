<template>
  <base-card>
    <form @submit.prevent="submitForm">
      <h2>Register as a coach now!</h2>
      <label class="bold" for="first-name"> First Name </label>
      <input type="text" id="first-name" v-model="fName" /><br /><br />
      <label class="bold" for="last-name"> Last Name </label>
      <input type="text" id="last-name" v-model="lName" /><br /><br />
      <label class="bold" for="description"> Description </label>
      <textarea id="description" rows="5" v-model="desc"></textarea><br /><br />
      <label class="bold" for="rate"> Hourly Rate </label>
      <input type="number" id="rate" v-model="rate" /><br /><br />
      <label class="bold"> Areas </label><br />
      <input type="checkbox" id="frontend" value="frontend" v-model="areas" />
      <label for="frontend"> Frontend </label> <br>
      <input type="checkbox" id="backend" value="backend" v-model="areas" />
      <label for="backend"> Backend </label> <br>
      <input type="checkbox" id="career" value="career" v-model="areas" />
      <label for="career"> Career </label> <br><br>
      <base-button> Register </base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      fName: "",
      lName: "",
      desc: "",
      rate: "",
      areas: []
    };
  },
  methods:{
    submitForm(){
      const formData = {
        id: 'c3',
        first: this.fName,
        last: this.lName,
        description: this.desc,
        rate: this.rate,
        areas: this.areas
      };
      this.$store.dispatch('saveData', formData);
      this.$router.replace('/coaches');
    }
  }
};
</script>

<style scoped>
  input#first-name, input#last-name, textarea{
    width: 100%;
  }
  .bold{
    font-weight: bold;
  }
</style>