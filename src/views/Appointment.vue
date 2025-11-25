<template>
  <!-- Page Title -->
  <div class="page-title">
    <div class="heading">
      <div class="container">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="heading-title">Appointment</h1>
            <p class="mb-0">
              Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
              odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
              debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat
              ipsum dolorem.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Breadcrumbs -->
    <nav class="breadcrumbs">
      <div class="container">
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li class="current">Appointment</li>
        </ol>
      </div>
    </nav>
  </div>

  <!-- Appointment Section -->
  <section id="appointmnet" class="appointmnet section">
    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <div class="row gy-4">
        <!-- Appointment Info -->
        <div class="col-lg-6">
          <div class="appointment-info">

            <h3>Quick & Easy Online Booking</h3>
            <p class="mb-4">
              Book your appointment in just a few simple steps. Our healthcare professionals are ready to provide you with the best medical care tailored to your needs.
            </p>

            <div class="info-items">

              <div
                v-for="item in infoItems"
                :key="item.delay"
                class="info-item d-flex align-items-center mb-3"
                data-aos="fade-up"
                :data-aos-delay="item.delay"
              >
                <div class="icon-wrapper me-3">
                  <i :class="item.icon"></i>
                </div>
                <div>
                  <h5>{{ item.title }}</h5>
                  <p class="mb-0">{{ item.desc }}</p>
                </div>
              </div>

            </div>

            <div
              class="emergency-contact mt-4"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              <div class="emergency-card p-3">
                <h6 class="mb-2">
                  <i class="bi bi-telephone-fill me-2"></i>Emergency Hotline
                </h6>
                <p class="mb-0">
                  Call <strong>+1 (555) 911-4567</strong> for urgent medical assistance
                </p>
              </div>
            </div>

          </div>
        </div>

        <!-- Appointment Form -->
        <div class="col-lg-6">
          <div class="appointment-form-wrapper" data-aos="fade-up" data-aos-delay="200">
            <form class="appointment-form php-email-form">
              <div class="row gy-3">

                <div class="col-md-6">
                  <input type="text" class="form-control" placeholder="Your Full Name" required />
                </div>

                <div class="col-md-6">
                  <input type="email" class="form-control" placeholder="Your Email" required />
                </div>

                <div class="col-md-6">
                  <input type="tel" class="form-control" placeholder="Your Phone Number" required />
                </div>

                <div class="col-md-6">
                  <select class="form-select" required>
                    <option value="">Select Department</option>
                    <option
                      v-for="dept in departments"
                      :key="dept"
                      :value="dept"
                    >
                      {{ dept }}
                    </option>
                  </select>
                </div>

                <div class="col-md-6">
                  <input type="date" class="form-control" required />
                </div>

                <div class="col-md-6">
                  <select class="form-select" required>
                    <option value="">Select Doctor</option>
                    <option
                      v-for="doc in doctors"
                      :key="doc.value"
                      :value="doc.value"
                    >
                      {{ doc.label }}
                    </option>
                  </select>
                </div>

                <div class="col-12">
                  <textarea class="form-control" rows="5" placeholder="Please describe your symptoms or reason for visit (optional)"></textarea>
                </div>

                <div class="col-12">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your appointment request has been sent successfully. We will contact you shortly!
                  </div>

                  <button type="submit" class="btn btn-appointment w-100">
                    <i class="bi bi-calendar-plus me-2"></i>
                    Book Appointment
                  </button>
                </div>

              </div>
            </form>
          </div>
        </div>

      </div>

      <!-- Process Steps -->
      <div class="process-steps mt-5" data-aos="fade-up" data-aos-delay="300">
        <div class="row text-center gy-4">

          <div
            v-for="step in steps"
            :key="step.number"
            class="col-lg-3 col-md-6"
          >
            <div class="step-item">
              <div class="step-number">{{ step.number }}</div>
              <div class="step-icon">
                <i :class="step.icon"></i>
              </div>
              <h5>{{ step.title }}</h5>
              <p>{{ step.desc }}</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "AppointmentPage",

  data() {
    return {
      infoItems: [
        {
          delay: 200,
          icon: "bi bi-calendar-check",
          title: "Flexible Scheduling",
          desc: "Choose from available time slots that fit your busy schedule",
        },
        {
          delay: 250,
          icon: "bi bi-stopwatch",
          title: "Quick Response",
          desc: "Get confirmation within 15 minutes of submitting your request",
        },
        {
          delay: 300,
          icon: "bi bi-shield-check",
          title: "Expert Medical Care",
          desc: "Board-certified doctors and specialists at your service",
        },
      ],

      departments: [
        "Cardiology",
        "Neurology",
        "Orthopedics",
        "Pediatrics",
        "Dermatology",
        "General Medicine"
      ],

      doctors: [
        { value: "dr-johnson", label: "Dr. Sarah Johnson" },
        { value: "dr-martinez", label: "Dr. Michael Martinez" },
        { value: "dr-chen", label: "Dr. Lisa Chen" },
        { value: "dr-patel", label: "Dr. Raj Patel" },
        { value: "dr-williams", label: "Dr. Emily Williams" },
        { value: "dr-thompson", label: "Dr. David Thompson" },
      ],

      steps: [
        {
          number: 1,
          icon: "bi bi-person-fill",
          title: "Fill Details",
          desc: "Provide your personal information and select your preferred department",
        },
        {
          number: 2,
          icon: "bi bi-calendar-event",
          title: "Choose Date",
          desc: "Select your preferred date and time slot",
        },
        {
          number: 3,
          icon: "bi bi-check-circle",
          title: "Confirmation",
          desc: "Receive appointment confirmation via email",
        },
        {
          number: 4,
          icon: "bi bi-heart-pulse",
          title: "Get Treatment",
          desc: "Visit our clinic and receive quality healthcare",
        },
      ],
    };
  },

  mounted() {
    // pastikan AOS re-init setiap masuk halaman
    if (window.AOS) {
      window.AOS.refreshHard();
    }
  },
};
</script>