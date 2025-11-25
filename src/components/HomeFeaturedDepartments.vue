<template>
  <section id="featured-departments" class="featured-departments section">
    
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>Featured Departments</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <div class="departments-showcase">

        <!-- Emergency Section -->
        <div class="featured-department" data-aos="fade-up" data-aos-delay="200">
          <div class="row align-items-center">

            <!-- Content -->
            <div class="col-lg-6 order-lg-1">
              <div class="department-content">
                <div class="department-category">Emergency Medicine</div>
                <h2 class="department-title">24/7 Emergency Care Services</h2>
                <p class="department-description">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </p>

                <div class="department-features">
                  <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>24/7 Emergency Response</span>
                  </div>
                  <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>Advanced Life Support</span>
                  </div>
                  <div class="feature-item">
                    <i class="fas fa-check-circle"></i>
                    <span>Trauma Care Specialists</span>
                  </div>
                </div>

                <a href="#" class="cta-link">Learn More <i class="fas fa-arrow-right"></i></a>
              </div>
            </div>

            <!-- Image -->
            <div class="col-lg-6 order-lg-2">
              <div class="department-visual">
                <div class="image-wrapper">
                  <img :src="emergencyImg" alt="Emergency Department" class="img-fluid" />
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Grid Department Cards -->
        <div class="departments-grid">
          <div class="row">

            <div 
              class="col-lg-4 col-md-6" 
              v-for="(dept, index) in departmentCards"
              :key="index"
              :data-aos="'fade-up'"
              :data-aos-delay="300 + index * 50"
            >
              <div class="department-card">
                <div class="card-icon">
                  <i :class="dept.icon"></i>
                </div>
                <div class="card-content">
                  <h3 class="card-title">{{ dept.title }}</h3>
                  <p class="card-description">{{ dept.description }}</p>

                  <div class="card-stats">
                    <div class="stat-item">
                      <span class="stat-number">{{ dept.stat1 }}</span>
                      <span class="stat-label">{{ dept.label1 }}</span>
                    </div>
                    <div class="stat-item">
                      <span class="stat-number">{{ dept.stat2 }}</span>
                      <span class="stat-label">{{ dept.label2 }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- CTA -->
        <div class="departments-cta" data-aos="fade-up" data-aos-delay="600">
          <div class="cta-content">
            <h3 class="cta-title">Explore All Our Medical Departments</h3>
            <p class="cta-description">
              Et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
            </p>
            <a href="#" class="btn btn-primary">View All Departments</a>
          </div>
        </div>

      </div>

    </div>

  </section>
</template>

<script setup>
import emergencyImg from '/assets/img/health/emergency-3.webp'

// Data untuk card grid (lebih bersih)
const departmentCards = [
  {
    icon: 'fas fa-heartbeat',
    title: 'Cardiology',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    stat1: '15+',
    label1: 'Specialists',
    stat2: '500+',
    label2: 'Procedures'
  },
  {
    icon: 'fas fa-brain',
    title: 'Neurology',
    description: 'Eos qui ratione voluptatem sequi nesciunt neque porro quisquam est.',
    stat1: '8+',
    label1: 'Specialists',
    stat2: '200+',
    label2: 'Treatments'
  },
  {
    icon: 'fas fa-cut',
    title: 'Surgery',
    description: 'Consectetur adipisci velit sed quia non numquam eius modi tempora.',
    stat1: '12+',
    label1: 'Surgeons',
    stat2: '1000+',
    label2: 'Operations'
  },
  {
    icon: 'fas fa-baby',
    title: 'Pediatrics',
    description: 'Quaerat voluptatem ut enim ad minima veniam quis nostrum exercitationem.',
    stat1: '10+',
    label1: 'Pediatricians',
    stat2: '2000+',
    label2: 'Young Patients'
  },
  {
    icon: 'fas fa-eye',
    title: 'Ophthalmology',
    description: 'Nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure.',
    stat1: '6+',
    label1: 'Eye Doctors',
    stat2: '800+',
    label2: 'Eye Exams'
  },
  {
    icon: 'fas fa-band-aid',
    title: 'Dermatology',
    description: 'Quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas.',
    stat1: '7+',
    label1: 'Dermatologists',
    stat2: '600+',
    label2: 'Skin Treatments'
  }
]
</script>
