<template>
  <base-card>
    <coach-filter @filter-change="filterCoaches"></coach-filter>
  </base-card>
  <base-card>
    <div class="controls">
      <base-button>Refresh</base-button>
      <base-button link to="/registration"
        >Register as a coach</base-button>
    </div>
    <coach-items v-for="coach in coaches" 
    :key="coach.id"
    :id="coach.id"
    :fName="coach.firstName"
    :lName="coach.lastName"
    :rate="coach.hourlyRate"
    :areas="coach.areas"
    ></coach-items>
  </base-card>
</template>

<script>
import CoachFilter from "../components/coaches/CoachFilter.vue";
import CoachItems from "../components/coaches/CoachItems.vue";
import BaseButton from '../components/ui/BaseButton.vue';

export default {
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  components: {
    CoachFilter,
    CoachItems,
    BaseButton,
  },
  computed: {
    coaches() {
      const coaches = this.$store.getters.coaches;
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    }
  },
  methods: {
    filterCoaches(front, back, career) {
      this.activeFilters.frontend = front;
      this.activeFilters.backend = back;
      this.activeFilters.career = career;
    }
  },
};
</script>

<style scoped>
.controls{
display: flex;
justify-content: space-between;
}

</style>
