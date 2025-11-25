<template>
  <div>

    <!-- Page Title -->
    <div class="page-title">
      <div class="heading">
        <div class="container">
          <div class="row d-flex justify-content-center text-center">
            <div class="col-lg-8">
              <h1 class="heading-title">Gallery</h1>
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
            <li class="current">Gallery</li>
          </ol>
        </div>
      </nav>
    </div>

    <!-- Gallery Section -->
    <section id="gallery" class="gallery section">
      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <!-- Filters -->
        <ul 
  class="gallery-filters isotope-filters" 
  data-aos="fade-up"
>
  <li 
    v-for="filter in filters" 
    :key="filter.key"
    :data-filter="filter.key"
    :class="{ 'filter-active': activeFilter === filter.key }"
    @click="setActive(filter.key)"
  >
    {{ filter.label }}
  </li>
</ul>


        <div class="row gallery-grid" data-aos="fade-up" data-aos-delay="300">

          <div
            v-for="(item, i) in filteredGallery"
            :key="i"
            class="col-xl-3 col-md-4 col-sm-6 gallery-item"
            :data-aos="'fade-up'"
            :data-aos-delay="300 + i * 50"
          >
            <div class="gallery-card">
              <div class="gallery-image">
                <img :src="item.img" class="img-fluid" alt="">
              </div>

              <div class="gallery-overlay">
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
                <div class="gallery-actions">
                  <a :href="item.img" class="glightbox" title="View Image"><i class="bi bi-eye"></i></a>
                  <router-link to="/gallery-details"><i class="bi bi-info-circle"></i></router-link>
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
import AOS from "aos"
import "aos/dist/aos.css"
import GLightbox from "glightbox"
import "glightbox/dist/css/glightbox.min.css"

export default {
  name: "GalleryPage",

  data() {
    return {
      activeFilter: "*",
        filters: [
  { key: "*", label: "All" },
  { key: ".filter-nature", label: "Nature" },
  { key: ".filter-architecture", label: "Architecture" },
  { key: ".filter-people", label: "People" }
],
      galleryItems: [
        {
          img: "/assets/img/gallery/gallery-1.webp",
          title: "Natural Beauty",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "nature"
        },
        {
          img: "/assets/img/gallery/gallery-2.webp",
          title: "Urban Landscape",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "architecture"
        },
        {
          img: "/assets/img/gallery/gallery-3.webp",
          title: "Candid Moments",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "people"
        },
        {
          img: "/assets/img/gallery/gallery-4.webp",
          title: "Wilderness",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "nature"
        },
        {
          img: "/assets/img/gallery/gallery-5.webp",
          title: "Modern Design",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "architecture"
        },
        {
          img: "/assets/img/gallery/gallery-6.webp",
          title: "Portrait Studies",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "people"
        },
        {
          img: "/assets/img/gallery/gallery-7.webp",
          title: "Serene Waters",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "nature"
        },
        {
          img: "/assets/img/gallery/gallery-8.webp",
          title: "Historical Places",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "architecture"
        }
      ]
    }
  },

  methods: {
    setActive(filter) {
      this.activeFilter = filter
    }
  },

  computed: {
  filteredGallery() {
    if (this.activeFilter === "*") return this.galleryItems
    
    const filterKey = this.activeFilter.replace(".filter-", "")
    return this.galleryItems.filter(item => item.category === filterKey)
  }
},

  mounted() {
    AOS.init({
      duration: 700,
      once: true
    })

    GLightbox({ selector: ".glightbox" })
  },

  updated() {
    AOS.refresh()
  }
}
</script>

<style scoped>
.gallery-filters {
  padding: 0;
  margin: 0 auto 30px auto;
  list-style: none;
  text-align: center;
}

.gallery-filters li {
  display: inline-block;
  cursor: pointer;
  padding: 8px 20px;
  font-size: 14px;
  margin: 0 5px;
  border-radius: 50px;
  color: #444;
  background: #f7f7f7;
  transition: 0.3s;
}

.gallery-filters li:hover,
.gallery-filters li.filter-active {
  background: #1977cc;
  color: #fff;
}

</style>
