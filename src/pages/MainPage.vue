<template>
  <div class="main-page">
    <main-header />
    <main-apps />
    <main-skills />
    <main-footer />
  </div>
</template>

<script>
import MainHeader from "@/components/MainPageComponents/MainHeader.vue";
import MainApps from "@/components/MainPageComponents/MainApps.vue";
import MainFooter from "@/components/MainPageComponents/MainFooter.vue";
import MainSkills from "@/components/MainPageComponents/MainSkills.vue";

export default {
  components: {
    MainHeader,
    MainApps,
    MainFooter,
    MainSkills,
  },
};
</script>

<style scoped></style>
