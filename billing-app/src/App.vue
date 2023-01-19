<template>
  <Navbar />
  <HeroSection/>
  <!-- <router-view /> -->
</template>

<script>
import Navbar from "./components/Navigation/navbar.vue";
import HeroSection from "./views/HeroSection.vue";
export default {
  name: "App",
  components: {
    Navbar,
    HeroSection
  },
};
</script>

<style lang="scss"></style>
