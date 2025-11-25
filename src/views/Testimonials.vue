<template>
  <!-- Page Title -->
  <div class="page-title">
    <div class="heading">
      <div class="container">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="heading-title">Testimonials</h1>
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

    <nav class="breadcrumbs">
      <div class="container">
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li class="current">Testimonials</li>
        </ol>
      </div>
    </nav>
  </div>

  <!-- Testimonials Section -->
  <section id="testimonials" class="testimonials section">
    <div class="container">
      <div class="row gy-4">

        <div
          class="col-lg-6"
          v-for="(t, index) in testimonials"
          :key="index"
          data-aos="fade-up"
          :data-aos-delay="t.delay"
        >
          <div class="testimonial-item">
            <img :src="t.img" class="testimonial-img" alt="">
            <h3>{{ t.name }}</h3>
            <h4>{{ t.role }}</h4>

            <div class="stars">
              <i class="bi bi-star-fill" v-for="n in 5" :key="n"></i>
            </div>

            <p>
              <i class="bi bi-quote quote-icon-left"></i>
              <span>{{ t.text }}</span>
              <i class="bi bi-quote quote-icon-right"></i>
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TestimonialsPage",

  data() {
    return {
      testimonials: [
        {
          delay: 100,
          img: "/assets/img/person/person-m-9.webp",
          name: "Saul Goodman",
          role: "Ceo & Founder",
          text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit...",
        },
        {
          delay: 200,
          img: "/assets/img/person/person-f-5.webp",
          name: "Sara Wilsson",
          role: "Designer",
          text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum...",
        },
        {
          delay: 300,
          img: "/assets/img/person/person-f-12.webp",
          name: "Jena Karlis",
          role: "Store Owner",
          text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla...",
        },
        {
          delay: 400,
          img: "/assets/img/person/person-m-12.webp",
          name: "Matt Brandon",
          role: "Freelancer",
          text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim...",
        },
        {
          delay: 500,
          img: "/assets/img/person/person-m-13.webp",
          name: "John Larson",
          role: "Entrepreneur",
          text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor...",
        },
        {
          delay: 600,
          img: "/assets/img/person/person-f-13.webp",
          name: "Emily Harison",
          role: "Store Owner",
          text: "Eius ipsam praesentium dolor quaerat inventore rerum odio. Quos laudantium...",
        },
      ]
    };
  },

  mounted() {
    if (window.AOS) {
      window.AOS.refreshHard();
    }
  }
};
</script>
