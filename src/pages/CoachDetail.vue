<template>
  <base-card>
    <h2> {{ fName}} {{lName}} </h2>
    <h4> ${{rate}}/hour </h4>
  </base-card>
  <base-card>
    <header>
      <h2> Interested? Reach out now! </h2>
      <base-button v-if="!checkPath"  link :to="coachContactLink">Contact </base-button>
    </header>
    <router-view></router-view>
  </base-card>
  <base-card>
    <base-badge v-for="area in areas" :key="area" :type="area">
        {{ area }}</base-badge>
    <p> {{desc}} </p>
  </base-card>
</template>
<script>
import BaseCard from '../components/ui/BaseCard.vue';
export default {
  components: { BaseCard },
  props: ['id'],
  data(){
    return {
      fName: '',
      lName: '',
      rate: null,
      desc:'',
      areas:''
    };
  },
  created(){
    const coachId = this.$route.params.id;
    const coach = this.$store.state.coaches.find((coach) => coach.id === coachId);
    this.fName = coach.firstName;
    this.lName = coach.lastName;
    this.rate = coach.hourlyRate;
    this.desc = coach.description;
    this.areas = coach.areas;
    
  },
  methods:{
    check(){
      
      console.log(this.$route.path);
      console.log(this.coachContactLink());
    }
  },
  computed:{
    coachContactLink(){
      return this.$route.path +'/contact';
    },
    checkPath(){
      if (this.$route.path === ('/coaches/' + this.id + '/contact')){
        return true;
      }
      else
      return false;
    }
  }
}
</script>