<template>
  <div>
    <HomeHeroSection />
    <HomeAboutSection />
    <HomeFeaturedDepartments />
    <HomeFeaturedServices />
    <HomeFindDoctorSection />
    <HomeCallToAction />
  </div>
</template>

<script setup>
import HomeHeroSection from "@/components/HomeHeroSection.vue"
import HomeAboutSection from '@/components/HomeAboutSection.vue'
import HomeFeaturedDepartments from '@/components/HomeFeaturedDepartments.vue'
import HomeFeaturedServices from '@/components/HomeFeaturedServices.vue'
import HomeFindDoctorSection from "@/components/HomeFindDoctorSection.vue";
import HomeCallToAction from "@/components/HomeCallToAction.vue";
</script>