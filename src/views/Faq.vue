<template>
  <div>

    <!-- Page Title -->
    <div class="page-title">
      <div class="heading">
        <div class="container">
          <div class="row d-flex justify-content-center text-center">
            <div class="col-lg-8">
              <h1 class="heading-title">Frequenty Asked Questions</h1>
              <p class="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </div>

      <nav class="breadcrumbs">
        <div class="container">
          <ol>
            <li><a href="/">Home</a></li>
            <li class="current">Faq</li>
          </ol>
        </div>
      </nav>
    </div>

    <!-- Faq Section -->
    <section id="faq" class="faq section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">

            <div class="faq-container">

              <div
                v-for="(item, i) in faqList"
                :key="i"
                class="faq-item"
                :class="{ 'faq-active': item.open }"
                :data-aos="'fade-up'"
                :data-aos-delay="100 + i * 100"
                @click="toggleFAQ(i)"
              >
                <h3>{{ item.question }}</h3>

                <div class="faq-content" v-show="item.open">
                  <p>{{ item.answer }}</p>
                </div>

                <i class="faq-toggle bi bi-chevron-right"></i>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import AOS from "aos"
import "aos/dist/aos.css"

export default {
  name: "FaqPage",

  data() {
    return {
      faqList: [
        {
          question: "Non consectetur a erat nam at lectus urna duis?",
          answer: "Feugiat pretium nibh ipsum consequat...",
          open: true
        },
        {
          question: "Feugiat scelerisque varius morbi enim nunc faucibus?",
          answer: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi...",
          open: false
        },
        {
          question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
          answer: "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci...",
          open: false
        },
        {
          question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
          answer: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi...",
          open: false
        },
        {
          question: "Tempus quam pellentesque nec nam aliquam sem et tortor?",
          answer: "Molestie a iaculis at erat pellentesque adipiscing commodo...",
          open: false
        },
        {
          question: "Perspiciatis quod quo quos nulla quo illum ullam?",
          answer: "Enim ea facilis quaerat voluptas quidem et dolorem...",
          open: false
        }
      ]
    }
  },

  mounted() {
    AOS.init({
      duration: 700,
      once: true
    })
  },

  updated() {
    AOS.refresh()
  },

  methods: {
    toggleFAQ(index) {
      this.faqList[index].open = !this.faqList[index].open
    }
  }
}
</script>

<style scoped>
/* masukkan style asli faq jika punya */
</style>
