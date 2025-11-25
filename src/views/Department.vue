<template>
  <!-- Page Title -->
  <div class="page-title">
    <div class="heading">
      <div class="container">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="heading-title">Departments</h1>
            <p class="mb-0">
              Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
              odio sint voluptas consequatur ut a odio voluptatem.
            </p>
          </div>
        </div>
      </div>
    </div>

    <nav class="breadcrumbs">
      <div class="container">
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li class="current">Departments</li>
        </ol>
      </div>
    </nav>
  </div>

  <!-- Departments Section -->
  <section id="departments" class="departments section">
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4">

        <!-- Loop Department -->
        <div
          v-for="(dep, index) in departments"
          :key="index"
          class="col-lg-6"
          :data-aos="'zoom-in'"
          :data-aos-delay="100 * (index + 1)"
        >
          <div class="department-item">

            <!-- Content -->
            <div class="department-content">
              <div class="department-header">
                <div class="department-icon">
                  <i :class="dep.icon"></i>
                </div>

                <div class="department-info">
                  <h3>{{ dep.title }}</h3>
                  <span class="department-category">{{ dep.category }}</span>
                </div>
              </div>

              <p>{{ dep.description }}</p>

              <div class="department-features">
                <span
                  class="feature-badge"
                  v-for="(feat, fIndex) in dep.features"
                  :key="fIndex"
                >
                  {{ feat }}
                </span>
              </div>
            </div>

            <!-- Image -->
            <div class="department-image">
              <img :src="dep.image" :alt="dep.title" class="img-fluid">

              <div class="department-overlay">
                <router-link :to="dep.link" class="department-link">
                  <i class="fas fa-arrow-right"></i>
                </router-link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import AOS from "aos"
import "aos/dist/aos.css"

export default {
  name: "Departments",

  data() {
    return {
      departments: [
        {
          title: "Cardiology",
          category: "Heart & Vascular",
          icon: "fas fa-heartbeat",
          image: "/assets/img/health/cardiology-2.webp",
          description: "Pellentesque habitant morbi tristique senectus...",
          link: "/department-details",
          features: ["24/7 Emergency", "Advanced Diagnostics"]
        },
        {
          title: "Neurology",
          category: "Brain & Nervous System",
          icon: "fas fa-brain",
          image: "/assets/img/health/neurology-3.webp",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          link: "/department-details",
          features: ["MRI Available", "Specialist Team"]
        },
        {
          title: "Orthopedics",
          category: "Bones & Joints",
          icon: "fas fa-bone",
          image: "/assets/img/health/orthopedics-4.webp",
          description: "Ut enim ad minim veniam, quis nostrud exercitation...",
          link: "/department-details",
          features: ["Sports Medicine", "Joint Replacement"]
        },
        {
          title: "Pediatrics",
          category: "Children's Health",
          icon: "fas fa-baby",
          image: "/assets/img/health/pediatrics-2.webp",
          description: "Excepteur sint occaecat cupidatat non proident...",
          link: "/department-details",
          features: ["Child-Friendly", "Vaccination Center"]
        },
        {
          title: "Laboratory",
          category: "Diagnostic Services",
          icon: "fas fa-microscope",
          image: "/assets/img/health/laboratory-3.webp",
          description: "Nulla facilisi morbi tempus iaculis urna id volutpat...",
          link: "/department-details",
          features: ["Quick Results", "Digital Reports"]
        },
        {
          title: "Emergency",
          category: "24/7 Critical Care",
          icon: "fas fa-heartbeat",
          image: "/assets/img/health/emergency-4.webp",
          description: "Convallis tellus id interdum velit laoreet...",
          link: "/department-details",
          features: ["Round-the-Clock", "Trauma Center"]
        }
      ]
    }
  },

  mounted() {
    AOS.init()
  }
}
</script>
