<template>
  <div>

    <!-- Page Title -->
    <div class="page-title">
      <div class="heading">
        <div class="container">
          <div class="row d-flex justify-content-center text-center">
            <div class="col-lg-8">
              <h1 class="heading-title">Contact</h1>
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
            <li class="current">Contact</li>
          </ol>
        </div>
      </nav>
    </div>
    <!-- End Page Title -->


    <!-- Contact Section -->
    <section id="contact" class="contact section">
      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <!-- Info Boxes -->
        <div class="row gy-4">
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div class="info-box">
              <i class="bi bi-geo-alt"></i>
              <h3>Our Address</h3>
              <p>4582 Magnolia Avenue<br>Riverside, CA 92506</p>
            </div>
          </div>

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div class="info-box">
              <i class="bi bi-telephone"></i>
              <h3>Call Us</h3>
              <p>08123456789<br>089876543121</p>
            </div>
          </div>

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="400">
            <div class="info-box">
              <i class="bi bi-envelope"></i>
              <h3>Email Us</h3>
              <p>pa799865@gmail.com<br>support@example.com</p>
            </div>
          </div>
        </div>

        <!-- Map + Form -->
        <div class="row gy-4 mt-4">
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="500">
            <div class="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.4770376449556!2d-117.39905292424607!3d33.978802323820714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcb1f5d8fb6c75%3A0xd9d73340c90a71c6!2s4582%20Magnolia%20Ave%2C%20Riverside%2C%20CA%2092506!5e0!3m2!1sen!2sus!4v1692395638095!5m2!1sen!2sus"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="600">
            <form class="php-email-form" @submit.prevent="submitForm">

              <div class="row gy-3">

                <div class="col-md-6">
                  <input v-model="form.name" type="text" class="form-control" placeholder="Your Name" required />
                </div>

                <div class="col-md-6">
                  <input v-model="form.email" type="email" class="form-control" placeholder="Your Email" required />
                </div>

                <div class="col-md-12">
                  <input v-model="form.subject" type="text" class="form-control" placeholder="Subject" required />
                </div>

                <div class="col-md-12">
                  <textarea v-model="form.message" class="form-control" rows="10" placeholder="Message" required></textarea>
                </div>

                <div class="col-md-12 text-center">
                  <div class="loading" v-if="loading">Loading...</div>
                  <div class="error-message" v-if="error">{{ error }}</div>
                  <div class="sent-message" v-if="success">Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
                </div>

              </div>

            </form>
          </div>

        </div>

        <!-- Social Icons -->
        <div class="social-links text-center mt-5" data-aos="zoom-in" data-aos-delay="700">
          <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
          <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
          <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
          <a href="#" class="youtube"><i class="bi bi-youtube"></i></a>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "ContactView",

  data() {
    return {
      loading: false,
      success: false,
      error: "",
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      }
    };
  },

  methods: {
    async submitForm() {
      this.loading = true;
      this.success = false;
      this.error = "";

      // simulasi submit seperti PHP form
      setTimeout(() => {
        this.loading = false;
        this.success = true;

        // reset form
        this.form = {
          name: "",
          email: "",
          subject: "",
          message: ""
        };
      }, 1200);
    }
  }
};
</script>

<style scoped>
/* Gunakan CSS original kamu, hanya ditempatkan di sini */
</style>
