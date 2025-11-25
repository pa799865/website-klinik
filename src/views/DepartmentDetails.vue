<template>
  <div>

    <!-- Page Title -->
    <div class="page-title">
      <div class="heading">
        <div class="container">
          <div class="row d-flex justify-content-center text-center">
            <div class="col-lg-8">
              <h1 class="heading-title">{{ page.title }}</h1>
              <p class="mb-0">{{ page.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <nav class="breadcrumbs">
        <div class="container">
          <ol>
            <li><router-link to="/">Home</router-link></li>
            <li class="current">Department Details</li>
          </ol>
        </div>
      </nav>
    </div>

    <!-- Department Details Section -->
    <section id="department-details" class="department-details section">
      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row align-items-center">

          <!-- Left content -->
          <div class="col-lg-7">
            <div class="department-content" data-aos="fade-right" data-aos-delay="200">
              
              <div class="department-header">
                <div class="specialty-tag">
                  <i class="bi bi-heart-pulse"></i>
                  <span>{{ department.category }}</span>
                </div>

                <h1 class="department-name">{{ department.title }}</h1>
                <p class="department-description">{{ department.description }}</p>
              </div>

              <!-- Highlights -->
              <div class="service-highlights" data-aos="fade-up" data-aos-delay="300">
                <h3>Specialized Services</h3>

                <div class="highlights-grid">
                  <div v-for="(item, index) in department.highlights" :key="index" class="highlight-card">
                    <div class="highlight-icon">
                      <i :class="item.icon"></i>
                    </div>
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.text }}</p>
                  </div>
                </div>
              </div>

              <!-- CTA -->
              <div class="cta-section" data-aos="fade-up" data-aos-delay="400">
                <router-link to="/appointment" class="btn-appointment">
                  <i class="bi bi-calendar-plus"></i>
                  <span>Book Appointment</span>
                </router-link>

                <div class="contact-quick">
                  <span class="contact-label">Emergency Line</span>
                  <span class="contact-number">{{ department.emergency }}</span>
                </div>
              </div>

            </div>
          </div>

          <!-- Right image -->
          <div class="col-lg-5">
            <div class="visual-section" data-aos="fade-left" data-aos-delay="300">
              <div class="main-visual">
                <img :src="department.image" alt="Department Image" class="img-fluid department-image">

                <div class="stats-overlay" data-aos="zoom-in" data-aos-delay="500">
                  <div class="stat-item">
                    <span class="stat-number">{{ department.stats.success }}</span>
                    <span class="stat-label">Success Rate</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">{{ department.stats.patients }}</span>
                    <span class="stat-label">Patients Treated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Details -->
        <div class="department-details" data-aos="fade-up" data-aos-delay="600">

          <div class="row">

            <div class="col-lg-8">
              <div class="details-content">
                <h3>{{ detailSection.title }}</h3>
                <p>{{ detailSection.description }}</p>

                <div class="care-features">
                  <div class="feature-row" v-for="(item, index) in detailSection.features" :key="index">
                    <i class="bi bi-check-circle"></i>
                    <span>{{ item }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Sidebar -->
            <div class="col-lg-4">
              <div class="info-sidebar" data-aos="fade-left" data-aos-delay="700">

                <!-- Hours -->
                <div class="info-card">
                  <h4>Department Hours</h4>

                  <div class="hours-list">
                    <div class="hours-item" v-for="(hour, index) in sidebar.hours" :key="index">
                      <span>{{ hour.day }}</span>
                      <span>{{ hour.time }}</span>
                    </div>
                  </div>
                </div>

                <!-- Quick Links -->
                <div class="info-card">
                  <h4>Quick Links</h4>

                  <div class="quick-links">
                    <router-link v-for="(link, index) in sidebar.links" :key="index" :to="link.to">
                      <i class="bi bi-arrow-right"></i>
                      <span>{{ link.text }}</span>
                    </router-link>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>

  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: "DepartmentDetails",

  data() {
    return {
      page: {
        title: "Department Details",
        description:
          "Odio et unde deleniti. Deserunt numquam exercitationem..."
      },

      department: {
        category: "Cardiology",
        title: "Comprehensive Heart Care Center",
        description:
          "Pellentesque habitant morbi tristique senectus...",

        image: "/assets/img/health/cardiology-3.webp",

        stats: {
          success: "98%",
          patients: "12K+"
        },

        highlights: [
          {
            icon: "bi bi-activity",
            title: "Cardiac Surgery",
            text: "Donec rutrum congue leo eget malesuada..."
          },
          {
            icon: "bi bi-eye",
            title: "Diagnostic Testing",
            text: "Curabitur arcu erat accumsan id imperdiet..."
          },
          {
            icon: "bi bi-shield-plus",
            title: "Preventive Care",
            text: "Nulla quis lorem ut libero malesuada feugiat..."
          }
        ],

        emergency: "+1 (555) 987-6543"
      },

      detailSection: {
        title: "Expert Care You Can Trust",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        features: [
          "State-of-the-art cardiac catheterization laboratory",
          "Advanced imaging and diagnostic capabilities",
          "Minimally invasive surgical procedures",
          "Comprehensive rehabilitation programs"
        ]
      },

      sidebar: {
        hours: [
          { day: "Monday - Friday", time: "7:00 AM - 8:00 PM" },
          { day: "Saturday", time: "8:00 AM - 5:00 PM" },
          { day: "Sunday", time: "Emergency Only" }
        ],
        links: [
          { text: "All Cardiology Services", to: "/services" },
          { text: "Meet Our Specialists", to: "/doctors" },
          { text: "Insurance Information", to: "/insurance" }
        ]
      }

    };
  },

  mounted() {
    AOS.init();
  }
}
</script>
