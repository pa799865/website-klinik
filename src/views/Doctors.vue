<template>
  <div>

    <!-- Page Title -->
    <div class="page-title">
      <div class="heading">
        <div class="container">
          <div class="row d-flex justify-content-center text-center">
            <div class="col-lg-8">
              <h1 class="heading-title">Doctors</h1>
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
            <li class="current">Doctors</li>
          </ol>
        </div>
      </nav>
    </div><!-- End Page Title -->

    <!-- Doctors Section -->
    <section id="doctors" class="doctors section">

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <!-- Filterable Doctor Directory -->
        <div class="doctor-directory mb-5">
          <div class="directory-bar p-3 p-md-4 rounded-3">
            <div class="row g-3 align-items-center">
              <div class="col-lg-4">
                <label for="doctor-search" class="form-label mb-1">Search Doctors</label>
                <div class="position-relative">
                  <i class="bi bi-search search-icon"></i>
                  <input id="doctor-search" type="text" class="form-control search-input" placeholder="Type a name or keyword"
                    v-model="filter.keyword" @input="applyInstantFilter" />
                </div>
              </div>
              <div class="col-lg-3">
                <label class="form-label mb-1">Department</label>
                <select class="form-select" v-model="filter.department" @change="applyInstantFilter">
                  <option value="*">All Departments</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Dermatology">Dermatology</option>
                  <option value="Orthopedics">Orthopedics</option>
                </select>
              </div>
              <div class="col-lg-3">
                <label class="form-label mb-1">Location</label>
                <select class="form-select" v-model="filter.location" @change="applyInstantFilter">
                  <option value="*">All Locations</option>
                  <option value="Downtown Clinic">Downtown Clinic</option>
                  <option value="Westside Center">Westside Center</option>
                  <option value="Riverside Campus">Riverside Campus</option>
                </select>
              </div>
              <div class="col-lg-2 d-grid">
                <button class="btn btn-appointment" @click="applyInstantFilter">Apply Filters</button>
              </div>
            </div>
          </div>

          <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
            <ul class="directory-filters isotope-filters" data-aos="fade-up" data-aos-delay="200">
              <li :class="{ 'filter-active': filter.department === '*' && filter.keyword === '' && filter.location === '*' }" @click="resetFilters">All</li>
              <li @click="setDepartment('Cardiology')">Cardiology</li>
              <li @click="setDepartment('Pediatrics')">Pediatrics</li>
              <li @click="setDepartment('Dermatology')">Dermatology</li>
              <li @click="setDepartment('Orthopedics')">Orthopedics</li>
            </ul><!-- End Directory Filters -->

            <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="300">

              <div
                v-for="(doc, idx) in filteredDoctors"
                :key="doc.id"
                class="col-lg-3 col-md-6 doctor-item isotope-item"
                :data-aos="'fade-up'"
                :data-aos-delay="100 + (idx % 6) * 50"
              >
                <article class="doctor-card h-100">
                  <figure class="doctor-media">
                    <img :src="doc.image" class="img-fluid" :alt="doc.name" loading="lazy">
                    <span v-if="doc.tag" :class="['tag', doc.tagClass]">{{ doc.tag }}</span>
                  </figure>
                  <div class="doctor-content">
                    <h3 class="doctor-name">{{ doc.name }}</h3>
                    <p class="doctor-title">{{ doc.title }}</p>
                    <p class="doctor-desc">{{ doc.desc }}</p>
                    <div class="doctor-meta">
                      <span class="badge dept">{{ doc.department }}</span>
                    </div>
                    <div class="doctor-actions">
                      <a href="#" class="btn btn-sm btn-appointment">Book Appointment</a>
                      <a href="#" class="btn btn-sm btn-soft">View Profile</a>
                    </div>
                  </div>
                </article>
              </div><!-- End Directory Item -->

            </div><!-- End Directory Items Container -->
          </div>
        </div><!-- End Filterable Doctor Directory -->

        <!-- Single Doctor Profile -->
        <div class="single-profile mt-5">
          <div class="row align-items-center g-4">
            <div class="col-lg-5" data-aos="fade-right" data-aos-delay="150">
              <div class="profile-media">
                <img :src="singleProfile.image" class="img-fluid" :alt="singleProfile.name">
                <div class="availability">
                  <i class="bi bi-circle-fill me-1"></i> {{ singleProfile.availability }}
                </div>
              </div>
            </div>
            <div class="col-lg-7" data-aos="fade-left" data-aos-delay="200">
              <div class="profile-content">
                <div class="d-flex flex-wrap align-items-center gap-2 mb-2">
                  <span class="badge role">{{ singleProfile.role }}</span>
                  <span class="badge years">{{ singleProfile.years }}</span>
                  <span class="badge cert">{{ singleProfile.cert }}</span>
                </div>
                <h3 class="name mb-1">{{ singleProfile.name }}</h3>
                <p class="title mb-3">{{ singleProfile.title }}</p>
                <p class="bio mb-3">{{ singleProfile.bio }}</p>
                <ul class="list-unstyled highlights mb-4">
                  <li v-for="(h, i) in singleProfile.highlights" :key="i"><i class="bi bi-mortarboard"></i> {{ h }}</li>
                </ul>
                <div class="d-flex flex-wrap gap-2">
                  <a href="#" class="btn btn-appointment"><i class="bi bi-calendar2-check me-1"></i> Book Appointment</a>
                  <a href="#" class="btn btn-soft"><i class="bi bi-file-earmark-text me-1"></i> View CV</a>
                </div>
              </div>
            </div>
          </div>
        </div><!-- End Single Doctor Profile -->

        <!-- Minimal Card / Compact View -->
        <div class="compact-view mt-5">
          <div class="row g-3">
            <div
              v-for="(mini, i) in minimalCards"
              :key="mini.id"
              class="col-6 col-md-4 col-lg-2"
              :data-aos="'fade-up'"
              :data-aos-delay="100 + i * 50"
            >
              <div class="minimal-card text-center">
                <img :src="mini.image" :alt="mini.name" class="avatar img-fluid" loading="lazy">
                <div class="info">
                  <h4 class="mb-0">{{ mini.name }}</h4>
                  <small> {{ mini.department }} </small>
                </div>
              </div>
            </div><!-- End Minimal Item -->
          </div>
        </div><!-- End Minimal / Compact -->

        <!-- Doctor Profile with Tabs -->
        <div class="profile-tabs mt-5">
          <div class="row g-4">
            <div class="col-lg-4" data-aos="fade-right" data-aos-delay="150">
              <div class="tab-profile-card">
                <img :src="tabProfile.image" class="img-fluid rounded-3" :alt="tabProfile.name" loading="lazy">
                <div class="pt-3">
                  <h3 class="mb-1">{{ tabProfile.name }}</h3>
                  <p class="mb-2">{{ tabProfile.title }}</p>
                  <div class="d-flex gap-2">
                    <span class="badge cert">Board Certified</span>
                    <span class="badge years">8 Years</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8" data-aos="fade-left" data-aos-delay="200">
              <ul class="nav nav-pills mb-3" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#health-doctors-3-tab-1" type="button" role="tab" aria-controls="health-doctors-3-tab-1" aria-selected="true">Bio</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" data-bs-toggle="pill" data-bs-target="#health-doctors-3-tab-2" type="button" role="tab" aria-controls="health-doctors-3-tab-2" aria-selected="false">Schedule</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" data-bs-toggle="pill" data-bs-target="#health-doctors-3-tab-3" type="button" role="tab" aria-controls="health-doctors-3-tab-3" aria-selected="false">Reviews</button>
                </li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane fade show active" id="health-doctors-3-tab-1" role="tabpanel">
                  <p>{{ tabProfile.bio }}</p>
                  <ul class="list-unstyled mb-0">
                    <li v-for="(item, idx) in tabProfile.bullets" :key="idx"><i class="bi bi-check2-circle me-1"></i> {{ item }}</li>
                  </ul>
                </div>
                <div class="tab-pane fade" id="health-doctors-3-tab-2" role="tabpanel">
                  <div class="schedule-grid">
                    <div class="row g-2">
                      <div class="col-6" v-for="(slot, si) in tabProfile.schedule" :key="si">
                        <div class="slot">
                          <strong>{{ slot.day }}</strong>
                          <span>{{ slot.time }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-3">
                    <a href="#" class="btn btn-appointment"><i class="bi bi-calendar-event me-1"></i> Reserve a Slot</a>
                  </div>
                </div>
                <div class="tab-pane fade" id="health-doctors-3-tab-3" role="tabpanel">
                  <div class="review">
                    <div class="d-flex align-items-center mb-2">
                      <div class="stars text-warning me-2">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-half"></i>
                      </div>
                      <small>4.5/5 • 32 reviews</small>
                    </div>
                    <p class="mb-0">{{ tabProfile.review }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><!-- End Doctor Profile with Tabs -->

      </div>

    </section><!-- /Doctors Section -->

  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { nextTick } from 'vue'

export default {
  name: 'DoctorsView',
  data() {
    return {
      filter: {
        keyword: '',
        department: '*',
        location: '*'
      },

      doctors: [
        { id: 1, name: 'Dr. Amelia Brooks', title: 'Cardiologist • MD, FACC', desc: 'Nostrud tempor magna minim excepteur, id cillum laboris aute proident.', image: '/assets/img/health/staff-3.webp', department: 'Cardiology', location: 'Downtown Clinic', tag: 'Senior Consultant', tagClass: '' },
        { id: 2, name: 'Dr. Noah Turner', title: 'Pediatrician • DO', desc: 'Quis irure pariatur sed eiusmod, elit laboris consequat cupidatat.', image: '/assets/img/health/staff-7.webp', department: 'Pediatrics', location: 'Riverside Campus', tag: '', tagClass: '' },
        { id: 3, name: 'Dr. Sofia Bennett', title: 'Dermatologist • MBBS, MD', desc: 'Dolor commodo laboris lorem ad, amet consequat mollit deserunt.', image: '/assets/img/health/staff-12.webp', department: 'Dermatology', location: 'Westside Center', tag: 'New', tagClass: 'alt' },
        { id: 4, name: 'Dr. Ethan Cole', title: 'Orthopedic Surgeon • MS, FRCS', desc: 'Velit laborum minim laboris, eiusmod elit irure in exercitation.', image: '/assets/img/health/staff-5.webp', department: 'Orthopedics', location: 'Downtown Clinic', tag: '', tagClass: '' },
        { id: 5, name: 'Dr. Maya Patel', title: 'Interventional Cardiologist • MD', desc: 'Cupidatat fugiat sint enim laboris, sed do ut aliquip dolor.', image: '/assets/img/health/staff-10.webp', department: 'Cardiology', location: 'Westside Center', tag: '', tagClass: '' },
        { id: 6, name: 'Dr. Oliver Hayes', title: 'Pediatric Specialist • MD', desc: 'Exercitation id ea nisi fugiat, ullamco veniam cillum nostrud.', image: '/assets/img/health/staff-2.webp', department: 'Pediatrics', location: 'Riverside Campus', tag: '', tagClass: '' },
        { id: 7, name: 'Dr. Harper Lane', title: 'Cosmetic Dermatologist • MD', desc: 'Aliquip laboris anim minim, irure commodo qui occaecat velit.', image: '/assets/img/health/staff-9.webp', department: 'Dermatology', location: 'Downtown Clinic', tag: '', tagClass: '' },
        { id: 8, name: 'Dr. Liam Carter', title: 'Sports Medicine • MD', desc: 'Deserunt pariatur eiusmod duis, officia aute laboris consectetur.', image: '/assets/img/health/staff-6.webp', department: 'Orthopedics', location: 'Westside Center', tag: '', tagClass: '' }
      ],

      singleProfile: {
        image: '/assets/img/health/staff-12.webp',
        name: 'Dr. Natalia Rivera',
        availability: 'Available this week',
        role: 'Chief Surgeon',
        years: '12+ Years Experience',
        cert: 'Board Certified',
        title: 'General Surgery • MD, FACS',
        bio: 'Commodo incididunt aliqua minim, eiusmod in laboris nulla. Amet do occaecat quis, excepteur in magna id dolore incididunt. Tempor in aute ullamco, irure officia aliqua nostrud.',
        highlights: [
          'Residency: St. Mary’s Medical Center',
          'Fellowship: Advanced Laparoscopy',
          'Publications: 14 peer-reviewed articles'
        ]
      },

      minimalCards: [
        { id: 'm1', name: 'Dr. Oliver Hayes', image: '/assets/img/health/staff-2.webp', department: 'Pediatrics' },
        { id: 'm2', name: 'Dr. Noah Turner', image: '/assets/img/health/staff-7.webp', department: 'Pediatrics' },
        { id: 'm3', name: 'Dr. Liam Carter', image: '/assets/img/health/staff-6.webp', department: 'Orthopedics' },
        { id: 'm4', name: 'Dr. Amelia Brooks', image: '/assets/img/health/staff-3.webp', department: 'Cardiology' },
        { id: 'm5', name: 'Dr. Harper Lane', image: '/assets/img/health/staff-9.webp', department: 'Dermatology' },
        { id: 'm6', name: 'Dr. Lucas Grant', image: '/assets/img/health/staff-11.webp', department: 'Pulmonology' }
      ],

      tabProfile: {
        image: '/assets/img/health/staff-4.webp',
        name: 'Dr. Henry James',
        title: 'Oncology • MBBS, MD',
        bio: 'Fugiat proident aliqua laboris, excepteur sunt ad pariatur occaecat. Veniam minim eu laboris, magna irure velit anim excepteur exercitation.',
        bullets: [
          'Special interest in immunotherapy',
          'Member of ASCO',
          'Community outreach programs'
        ],
        schedule: [
          { day: 'Mon', time: '9:00 AM - 1:00 PM' },
          { day: 'Tue', time: '12:00 PM - 6:00 PM' },
          { day: 'Wed', time: '9:00 AM - 3:00 PM' },
          { day: 'Thu', time: '10:00 AM - 4:00 PM' },
          { day: 'Fri', time: 'Closed' }
        ],
        review: 'Id magna consequat minim in, lorem dolore fugiat. Officia irure ex anim, velit nulla cupidatat laboris enim.'
      }
    }
  },
  computed: {
    filteredDoctors() {
      const kw = this.filter.keyword.trim().toLowerCase()
      return this.doctors.filter(d => {
        const matchKeyword = kw === '' ||
          d.name.toLowerCase().includes(kw) ||
          d.title.toLowerCase().includes(kw) ||
          d.desc.toLowerCase().includes(kw)
        const matchDept = this.filter.department === '*' || d.department === this.filter.department
        const matchLoc = this.filter.location === '*' || d.location === this.filter.location
        return matchKeyword && matchDept && matchLoc
      })
    }
  },
  methods: {
    applyInstantFilter() {
      // computed handles it automatically
      // refresh AOS so it recalculates elements/animations
      nextTick(() => {
        if (typeof AOS !== 'undefined') {
          AOS.refresh()
        }
      })
    },
    setDepartment(dept) {
      this.filter.department = dept
      this.applyInstantFilter()
    },
    resetFilters() {
      this.filter = { keyword: '', department: '*', location: '*' }
      this.applyInstantFilter()
    }
  },
  mounted() {
    // Init AOS (original)
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })

    // Ensure AOS recalc after Vue renders
    nextTick(() => {
      AOS.refresh()
    })
  }
}
</script>

<style scoped>
/* Jika kamu punya main.css asli, tetap pakai itu.
   Di sini hanya beberapa kustom ringan agar preview konsisten (boleh dihapus jika sudah ada main CSS). */

.page-title { margin-bottom: 2.5rem; }
.heading-title { font-size: 2.25rem; font-weight: 700; }
.doctor-card .doctor-media img { width: 100%; height: auto; display: block; border-radius: .5rem; }
.tag { position: absolute; left: .75rem; top: .75rem; background: #ff6b6b; color: white; padding: .25rem .5rem; border-radius: .25rem; font-size: .8rem; }
.tag.alt { background: #6c757d; }
.doctor-content { padding: 1rem; }
.minimal-card .avatar { width: 72px; height: 72px; object-fit: cover; border-radius: 50%; margin-bottom: .5rem; }
</style>
