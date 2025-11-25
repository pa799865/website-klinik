<template>
  <section id="featured-services" class="featured-services section">

    <div class="container section-title" data-aos="fade-up">
      <h2>Featured Services</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <div class="row gy-4">

        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="col-lg-4 col-md-6"
          data-aos="fade-up"
          :data-aos-delay="200 + (index % 3) * 100"
        >
          <div class="service-card">
            <div class="service-icon">
              <i :class="service.icon"></i>
            </div>
            <div class="service-image">
              <img :src="service.image" alt="Service" class="img-fluid" loading="lazy">
            </div>
            <div class="service-content">
              <h3>{{ service.title }}</h3>
              <p>{{ service.text }}</p>
              <a href="#" class="service-link">Learn More <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>

      </div>

    </div>

  </section>
</template>

<script>
export default {
  name: 'FeaturedServices',
  data() {
    return {
      services: [
        {
          icon: "fas fa-heartbeat",
          image: "/assets/img/health/cardiology-2.webp",
          title: "Cardiology Excellence",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
        },
        {
          icon: "fas fa-brain",
          image: "/assets/img/health/neurology-3.webp",
          title: "Neurology Care",
          text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        },
        {
          icon: "fas fa-bone",
          image: "/assets/img/health/orthopedics-1.webp",
          title: "Orthopedic Surgery",
          text: "Duis aute irure dolor in reprehenderit in voluptate velit esse..."
        },
        {
          icon: "fas fa-baby",
          image: "/assets/img/health/pediatrics-4.webp",
          title: "Pediatric Care",
          text: "Sunt in culpa qui officia deserunt mollit anim id est laborum..."
        },
        {
          icon: "fas fa-ribbon",
          image: "/assets/img/health/oncology-2.webp",
          title: "Oncology Treatment",
          text: "At vero eos et accusamus et iusto odio dignissimos ducimus..."
        },
        {
          icon: "fas fa-flask",
          image: "/assets/img/health/laboratory-3.webp",
          title: "Laboratory Services",
          text: "Temporibus autem quibusdam et aut officiis debitis aut rerum..."
        }
      ]
    }
  }
}
</script>
