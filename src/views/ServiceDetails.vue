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
            <li class="current">Service Details</li>
          </ol>
        </div>
      </nav>
    </div>

    <!-- Service Details Section -->
    <section id="service-details-2" class="service-details-2 section">

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <!-- Image + Main Content -->
        <div class="row gy-5">

          <!-- Image -->
          <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="service-image">
              <img :src="service.image" alt="Service Image" class="img-fluid">

              <div class="service-tag">
                <span>{{ service.tag }}</span>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="300">
            <div class="service-content">

              <h2>{{ service.title }}</h2>
              <p class="service-tagline">{{ service.tagline }}</p>

              <p>{{ service.desc1 }}</p>
              <p>{{ service.desc2 }}</p>

              <div class="service-features">
                <h4>Our Services Include:</h4>

                <ul>
                  <li v-for="(item, index) in service.features" :key="index">
                    <i class="bi bi-check-circle"></i> {{ item }}
                  </li>
                </ul>
              </div>

              <div class="service-actions">
                <a href="#" class="btn-primary">Schedule Consultation</a>
                <a href="#" class="btn-secondary">Learn More</a>
              </div>

            </div>
          </div>

        </div>

        <!-- Cards Section -->
        <div class="row mt-5">

          <div v-for="(card, index) in serviceCards" :key="index"
               class="col-lg-4"
               :data-aos="'fade-up'"
               :data-aos-delay="card.delay">
            
            <div class="service-card">
              <div class="card-icon">
                <i :class="card.icon"></i>
              </div>

              <h4>{{ card.title }}</h4>
              <p>{{ card.text }}</p>

              <a href="#" class="card-link">
                <span>{{ card.link }}</span>
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>

          </div>

        </div>

        <!-- Booking Section -->
        <div class="row mt-5">

          <!-- Left Info -->
          <div class="col-lg-8" data-aos="fade-right" data-aos-delay="100">
            <div class="booking-section">

              <h3>{{ booking.title }}</h3>
              <p>{{ booking.description }}</p>

              <div class="availability-info">

                <div class="info-item" v-for="(info, index) in booking.info" :key="index">
                  <i :class="info.icon"></i>

                  <div>
                    <strong>{{ info.label }}</strong>
                    <span>{{ info.value }}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <!-- Sidebar booking -->
          <div class="col-lg-4" data-aos="fade-left" data-aos-delay="200">
            <div class="appointment-card">
              <h4>Book Your Visit</h4>
              <p>Quick and easy online scheduling</p>

              <router-link to="/appointment" class="btn-appointment">
                Book Appointment
              </router-link>

              <div class="contact-alternative">
                <span>Or call us at</span>
                <a :href="'tel:' + booking.callPhone">{{ booking.callPhone }}</a>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "ServiceDetails",

  data() {
    return {

      page: {
        title: "Service Details",
        description:
          "Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint..."
      },

      service: {
        image: "/assets/img/health/cardiology-3.webp",
        tag: "Specialized Care",
        title: "Comprehensive Cardiology Services",
        tagline:
          "Advanced heart care with cutting-edge technology and compassionate expertise",

        desc1:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
        desc2:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",

        features: [
          "Comprehensive cardiac examinations",
          "Advanced diagnostic imaging",
          "Preventive heart screening programs",
          "Cardiac rehabilitation therapy",
          "Emergency cardiac intervention",
          "Post-operative care and monitoring"
        ]
      },

      serviceCards: [
        {
          icon: "bi bi-heart-pulse",
          title: "Diagnostic Testing",
          text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...",
          link: "Book Now",
          delay: 100
        },
        {
          icon: "bi bi-hospital",
          title: "Surgical Procedures",
          text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis...",
          link: "Schedule Surgery",
          delay: 200
        },
        {
          icon: "bi bi-shield-check",
          title: "Preventive Care",
          text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...",
          link: "Get Screened",
          delay: 300
        }
      ],

      booking: {
        title: "Ready to Schedule Your Appointment?",
        description:
          "Our cardiology specialists are available for consultations Monday through Friday. Same-day appointments available for urgent cases.",

        info: [
          { icon: "bi bi-clock", label: "Office Hours", value: "Mon-Fri: 8:00 AM - 6:00 PM" },
          { icon: "bi bi-telephone", label: "Emergency Line", value: "+1 (555) 123-4567" },
          { icon: "bi bi-geo-alt", label: "Location", value: "123 Medical Center Dr, Boston, MA 02101" }
        ],

        callPhone: "+15551234567"
      }

    };
  },

  mounted() {
    AOS.init();
  }
};
</script>