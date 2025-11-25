<template>
  <!-- Page Title -->
  <div class="page-title">
    <div class="heading">
      <div class="container">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="heading-title">Services</h1>
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
          <li class="current">Services</li>
        </ol>
      </div>
    </nav>
  </div>

  <!-- Services Section -->
  <section id="services" class="services section">
    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <div class="services-grid">
        <div class="row g-4">

          <!-- Service Card -->
          <div
            class="col-lg-4 col-md-6"
            v-for="(service, index) in services"
            :key="index"
            data-aos="zoom-in"
            :data-aos-delay="200 + (index * 100)"
          >
            <div :class="['service-card', service.className]">

              <div class="service-header">
                <div class="service-icon">
                  <i :class="service.icon"></i>
                </div>

                <span class="service-category">{{ service.category }}</span>

                <div
                  class="featured-badge"
                  v-if="service.featured"
                >
                  {{ service.featured }}
                </div>

                <div
                  class="status-indicator"
                  v-if="service.status"
                >
                  {{ service.status }}
                </div>
              </div>

              <div class="service-body">
                <h4>{{ service.title }}</h4>
                <p>{{ service.description }}</p>

                <div class="service-features">
                  <span
                    class="feature-badge"
                    v-for="(feat, fIndex) in service.features"
                    :key="fIndex"
                  >
                    {{ feat }}
                  </span>
                </div>
              </div>

              <div class="service-footer">
                <router-link
                  :to="service.link"
                  :class="['service-btn', service.emergency ? 'emergency-btn' : '']"
                >
                  {{ service.button }}
                  <i :class="service.btnIcon"></i>
                </router-link>
              </div>

            </div>
          </div>

        </div>
      </div>

      <!-- Stats -->
      <div class="services-stats" data-aos="fade-up" data-aos-delay="800">
        <div class="row">
          <div class="col-lg-3 col-md-6" v-for="(stat, sIndex) in stats" :key="sIndex">
            <div class="stat-item">
              <div
                class="stat-number"
                :data-purecounter-start="0"
                :data-purecounter-end="stat.end"
                data-purecounter-duration="2"
              ></div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Appointment Banner -->
      <div class="appointment-banner" data-aos="fade-up" data-aos-delay="900">
        <div class="banner-content">
          <div class="banner-text">
            <h3>Need Medical Attention?</h3>
            <p>
              Book your appointment with our qualified healthcare professionals
              and get the care you deserve.
            </p>
          </div>
          <div class="banner-actions">
            <router-link to="/appointment" class="btn-primary">
              Book Appointment
            </router-link>
            <a href="#" class="btn-secondary">
              <i class="fas fa-phone"></i>
              Call Now
            </a>
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
  name: "Services",

  data() {
    return {
      services: [
        {
          title: "General Consultation",
          category: "Primary Care",
          icon: "fas fa-heartbeat",
          className: "primary-care",
          description: "Comprehensive health assessments and preventive care.",
          link: "/service-details",
          button: "Schedule Visit",
          btnIcon: "fas fa-arrow-right",
          features: ["Health Monitoring", "Wellness Programs", "Preventive Care"]
        },
        {
          title: "Cardiology Services",
          category: "Specialty",
          icon: "fas fa-heart",
          className: "specialty-care featured",
          description: "Advanced heart care with diagnostics and treatment.",
          featured: "Most Popular",
          link: "/service-details",
          button: "Book Appointment",
          btnIcon: "fas fa-arrow-right",
          features: ["Heart Surgery", "ECG Testing", "Cardiac Rehab"]
        },
        {
          title: "Laboratory Testing",
          category: "Diagnostics",
          icon: "fas fa-vials",
          className: "diagnostics",
          description: "Complete diagnostic tests with accurate results.",
          link: "/service-details",
          button: "Order Tests",
          btnIcon: "fas fa-arrow-right",
          features: ["Blood Work", "Pathology", "Same-Day Results"]
        },
        {
          title: "Emergency Care",
          category: "Emergency",
          icon: "fas fa-ambulance",
          className: "emergency",
          status: "24/7 Available",
          emergency: true,
          description: "Critical trauma and emergency services.",
          link: "tel:911",
          button: "Call Emergency",
          btnIcon: "fas fa-phone",
          features: ["Trauma Center", "Critical Care", "Emergency Surgery"]
        },
        {
          title: "Women's Health",
          category: "Maternal Health",
          icon: "fas fa-baby",
          className: "maternal",
          description: "Maternal care from prenatal to postnatal.",
          link: "/service-details",
          button: "Learn More",
          btnIcon: "fas fa-arrow-right",
          features: ["Prenatal Care", "Delivery Support", "Family Planning"]
        },
        {
          title: "Vaccination Services",
          category: "Prevention",
          icon: "fas fa-syringe",
          className: "vaccination",
          description: "Complete immunization programs for all ages.",
          link: "/service-details",
          button: "Schedule Shot",
          btnIcon: "fas fa-arrow-right",
          features: ["Travel Vaccines", "Flu Shots", "Child Immunizations"]
        }
      ],

      stats: [
        { end: 25000, label: "Patients Served" },
        { end: 150, label: "Medical Experts" },
        { end: 18, label: "Specializations" },
        { end: 24, label: "Hours Service" }
      ]
    }
  },

  mounted() {
    AOS.init()
    if (window.PureCounter) {
    new window.PureCounter();
  }
  }
}
</script>
