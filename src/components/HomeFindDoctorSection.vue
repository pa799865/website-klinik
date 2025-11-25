<template>
  <section id="find-a-doctor" class="find-a-doctor section">

    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>Find A Doctor</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <!-- Search Box -->
      <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
        <div class="col-lg-10">
          <div class="search-header">
            <h2>Discover Your Ideal Medical Specialist</h2>
            <p>Connect with our network of certified healthcare professionals across all medical disciplines</p>
          </div>

          <div class="advanced-search-container">
            <form class="search-form">
              <div class="search-row">

                <div class="search-field">
                  <label>Practitioner Name</label>
                  <div class="input-group">
                    <i class="bi bi-search"></i>
                    <input type="text" v-model="search.name" class="form-control" placeholder="Search by name...">
                  </div>
                </div>

                <div class="search-field">
                  <label>Medical Specialty</label>
                  <div class="select-group">
                    <i class="bi bi-plus-circle"></i>
                    <select class="form-select" v-model="search.specialty">
                      <option value="">Select specialty</option>
                      <option v-for="opt in specialties" :key="opt.value" :value="opt.value">
                        {{ opt.label }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="search-field">
                  <label>Location</label>
                  <div class="select-group">
                    <i class="bi bi-geo-alt"></i>
                    <select class="form-select" v-model="search.location">
                      <option value="">All locations</option>
                      <option v-for="loc in locations" :key="loc.value" :value="loc.value">
                        {{ loc.label }}
                      </option>
                    </select>
                  </div>
                </div>

                <button type="button" class="search-submit" @click="triggerSearch">
  <i class="bi bi-arrow-right"></i>
</button>


              </div>
            </form>
          </div>

        </div>
      </div>

      <!-- Specialists -->
      <div class="specialists-showcase" data-aos="fade-up" data-aos-delay="300">
        <div 
          v-for="doc in filteredDoctors"
:key="doc.id"
          class="specialist-card"
          :class="{ 'featured': doc.featured }"
          data-aos="slide-up"
          :data-aos-delay="100 + index * 100"
        >
          <div class="card-content">
            
            <div class="specialist-info">
              <div class="profile-section">
                <div class="profile-image">
                  <img :src="doc.image" :alt="doc.name" class="img-fluid">
                  <div class="online-status" :class="doc.status"></div>
                </div>

                <div class="specialist-data">
                  <h3>{{ doc.name }}</h3>
                  <p class="specialty">{{ doc.specialty }}</p>
                  <div class="credentials">
                    <span class="badge">{{ doc.degree }}</span>
                    <span class="experience">{{ doc.experience }} years</span>
                  </div>
                </div>
              </div>

              <div class="rating-info">
                <div class="stars-display">
                  <i 
                    v-for="n in 5"
                    :key="n"
                    :class="getStarIcon(n, doc.rating)"
                  ></i>
                </div>
                <span class="score">{{ doc.rating }}</span>
                <small>({{ doc.patients }} patients)</small>
              </div>
            </div>

            <div class="quick-actions">
              <a href="#" class="action-btn outline">Profile</a>
              <a href="#" class="action-btn primary">{{ doc.action }}</a>
            </div>

          </div>
        </div>
      </div>

      <div class="text-center mt-5" data-aos="fade-up" data-aos-delay="700">
        <a href="/specialists" class="view-all-link">
          Browse Complete Directory
          <i class="bi bi-chevron-right"></i>
        </a>
      </div>

    </div>

  </section>
</template>

<script>
export default {
  name: "FindDoctorSection",

  data() {
    return {
      search: {
        name: "",
        specialty: "",
        location: ""
      },

      specialties: [
        { value: "cardiology", label: "Cardiovascular Medicine" },
        { value: "neurology", label: "Neurological Sciences" },
        { value: "orthopedics", label: "Orthopedic Surgery" },
        { value: "pediatrics", label: "Pediatric Medicine" },
        { value: "dermatology", label: "Dermatological Care" },
        { value: "oncology", label: "Oncological Treatment" }
      ],

      locations: [
        { value: "downtown", label: "Downtown Medical Center" },
        { value: "northside", label: "Northside Clinic" },
        { value: "westend", label: "West End Hospital" }
      ],

      doctors: [
  {
    id: 1,
    name: "Dr. Jennifer Morgan",
    image: "/assets/img/health/staff-1.webp",
    specialty: "cardiology",
    degree: "MD, FACC",
    experience: 18,
    rating: 4.9,
    patients: 142,
    status: "active",
    action: "Consult",
    featured: true,
    location: "downtown"
  },
  {
    id: 2,
    name: "Dr. Robert Kim",
    image: "/assets/img/health/staff-3.webp",
    specialty: "neurology",
    degree: "MD, PhD",
    experience: 24,
    rating: 4.8,
    patients: 98,
    status: "busy",
    action: "Schedule",
    featured: false,
    location: "northside"
  },
  {
    id: 3,
    name: "Dr. Sarah Thompson",
    image: "/assets/img/health/staff-5.webp",
    specialty: "pediatrics",
    degree: "MD, FAAP",
    experience: 12,
    rating: 5.0,
    patients: 156,
    status: "active",
    action: "Book Now",
    featured: false,
    location: "westend"
  }
]
    };
  },

  computed: {
  filteredDoctors() {
    const name = (this.search.name || "").toLowerCase();
    const specialty = (this.search.specialty || "").toLowerCase();
    const location = (this.search.location || "").toLowerCase();

    return this.doctors.filter((doc) => {
      const matchName = doc.name.toLowerCase().includes(name);

      const matchSpecialty =
        !specialty ||
        doc.specialty.toLowerCase().includes(specialty);

      const matchLocation =
        !location ||
        (doc.location &&
          doc.location.toLowerCase().includes(location));

      return matchName && matchSpecialty && matchLocation;
    });
  }
},

  methods: {
  getStarIcon(position, rating) {
    if (rating >= position) return "bi bi-star-fill";
    if (rating >= position - 0.5) return "bi bi-star-half";
    return "bi bi-star";
  },

  triggerSearch() {
    // tidak perlu logika tambahan, karena computed auto-update
    console.log("Searching...", this.search);
  }
}
};
</script>