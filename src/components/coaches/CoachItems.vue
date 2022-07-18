<template>
  <div class="items">
    <h2>{{ fName }}  {{ lName }}</h2>
      <h4>${{ rate }}/hour</h4>
      <base-badge v-for="area in areas" :key="area" :type="area">
        {{ area }}</base-badge>
      <div class="links">
      <base-button link :to="coachContactLink">Contact </base-button>
      <base-button link :to="coachDetailLink">View Detail </base-button>
      </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'fName', 'lName', 'rate', 'areas'],
  computed:{
    coachDetailLink(){
      return '/coaches/'+ this.id;
    },
    coachContactLink(){
      return '/coaches/' + this.id + '/contact';
    }
  }
}
</script>

<style scoped>
.items{
  border: 1px solid rgb(174, 161, 221);
  border-radius: 8px;
  padding: 2rem;
  margin: 1rem 0;
}
.links a {
    margin-right: 1rem !important;
}
.links{
display: flex;
justify-content: flex-end;
}

</style>