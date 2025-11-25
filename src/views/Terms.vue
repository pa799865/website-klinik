<template>
  <div>

    <!-- Page Title -->
    <div class="page-title">
      <div class="heading">
        <div class="container">
          <div class="row d-flex justify-content-center text-center">
            <div class="col-lg-8">
              <h1 class="heading-title">Terms</h1>
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
            <li class="current">Terms</li>
          </ol>
        </div>
      </nav>
    </div>
    <!-- End Page Title -->

    <!-- Terms Of Service Section -->
    <section id="terms-of-service" class="terms-of-service section">
      <div class="container" data-aos="fade-up">

        <!-- Page Header -->
        <div class="tos-header text-center" data-aos="fade-up">
          <span class="last-updated">Last Updated: February 27, 2025</span>
          <h2>Terms of Service</h2>
          <p>Please read these terms of service carefully before using our services</p>
        </div>

        <!-- Content -->
        <div class="tos-content" data-aos="fade-up" data-aos-delay="200">

          <!-- 1. Agreement -->
          <div id="agreement" class="content-section">
            <h3>1. Agreement to Terms</h3>
            <p>
              By accessing our website and services, you agree to be bound by these Terms of Service 
              and all applicable laws and regulations. If you do not agree with any of these terms, 
              you are prohibited from using or accessing our services.
            </p>
            <div class="info-box">
              <i class="bi bi-info-circle"></i>
              <p>These terms apply to all users, visitors, and others who access or use our services.</p>
            </div>
          </div>

          <!-- 2. Intellectual Property -->
          <div id="intellectual-property" class="content-section">
            <h3>2. Intellectual Property Rights</h3>
            <p>
              Our service and its original content, features, and functionality are owned by us and 
              are protected by international copyright, trademark, patent, trade secret, and other 
              intellectual property laws.
            </p>
            <ul class="list-items">
              <li>All content is our exclusive property</li>
              <li>You may not copy or modify the content</li>
              <li>Our trademarks may not be used without permission</li>
              <li>Content is for personal, non-commercial use only</li>
            </ul>
          </div>

          <!-- 3. User Accounts -->
          <div id="user-accounts" class="content-section">
            <h3>3. User Accounts</h3>
            <p>
              When you create an account with us, you must provide accurate, complete, and current 
              information. Failure to do so constitutes a breach of the Terms, which may result in 
              immediate termination of your account.
            </p>
            <div class="alert-box">
              <i class="bi bi-exclamation-triangle"></i>
              <div class="alert-content">
                <h5>Important Notice</h5>
                <p>You are responsible for safeguarding the password and for all activities under your account.</p>
              </div>
            </div>
          </div>

          <!-- 4. Prohibited Activities -->
          <div id="prohibited" class="content-section">
            <h3>4. Prohibited Activities</h3>
            <p>You may not access or use the Service for any purpose other than that for which we make it available.</p>
            <div class="prohibited-list">
              <div class="prohibited-item">
                <i class="bi bi-x-circle"></i>
                <span>Systematic retrieval of data or content</span>
              </div>
              <div class="prohibited-item">
                <i class="bi bi-x-circle"></i>
                <span>Publishing malicious content</span>
              </div>
              <div class="prohibited-item">
                <i class="bi bi-x-circle"></i>
                <span>Engaging in unauthorized framing</span>
              </div>
              <div class="prohibited-item">
                <i class="bi bi-x-circle"></i>
                <span>Attempting to gain unauthorized access</span>
              </div>
            </div>
          </div>

          <!-- 5. Disclaimers -->
          <div id="disclaimer" class="content-section">
            <h3>5. Disclaimers</h3>
            <p>
              Your use of our service is at your sole risk. The service is provided "AS IS" and "AS AVAILABLE"
              without warranties of any kind.
            </p>
            <div class="disclaimer-box">
              <p>We do not guarantee that:</p>
              <ul>
                <li>The service will meet your requirements</li>
                <li>The service will be uninterrupted or error-free</li>
                <li>Results from using the service will be accurate</li>
                <li>Any errors will be corrected</li>
              </ul>
            </div>
          </div>

          <!-- 6. Limitation of Liability -->
          <div id="limitation" class="content-section">
            <h3>6. Limitation of Liability</h3>
            <p>
              In no event shall we be liable for any indirect, punitive, incidental, special, consequential, 
              or exemplary damages arising out of your use of the service.
            </p>
          </div>

          <!-- 7. Indemnification -->
          <div id="indemnification" class="content-section">
            <h3>7. Indemnification</h3>
            <p>
              You agree to defend, indemnify, and hold us harmless from any claims, liabilities, damages, 
              losses, and expenses arising out of your use of the service.
            </p>
          </div>

          <!-- 8. Termination -->
          <div id="termination" class="content-section">
            <h3>8. Termination</h3>
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, 
              for any breach of these Terms.
            </p>
          </div>

          <!-- 9. Governing Law -->
          <div id="governing-law" class="content-section">
            <h3>9. Governing Law</h3>
            <p>
              These Terms shall be governed by and construed according to the laws of your country.
            </p>
          </div>

          <!-- 10. Changes -->
          <div id="changes" class="content-section">
            <h3>10. Changes to Terms</h3>
            <p>
              We reserve the right to modify or replace these Terms at any time by posting the updated version.
            </p>
            <div class="notice-box">
              <i class="bi bi-bell"></i>
              <p>By continuing to use our service, you agree to the revised terms.</p>
            </div>
          </div>

        </div>

        <!-- Contact Section -->
        <div class="tos-contact" data-aos="fade-up" data-aos-delay="300">
          <div class="contact-box">
            <div class="contact-icon">
              <i class="bi bi-envelope"></i>
            </div>
            <div class="contact-content">
              <h4>Questions About Terms?</h4>
              <p>If you have any questions about these Terms, please contact us.</p>
              <a href="#" class="contact-link">Contact Support</a>
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
  name: "TermsPage",

  mounted() {
    AOS.init({
      duration: 700,
      once: true
    })
  },

  updated() {
    AOS.refresh()
  }
}
</script>

<style scoped>
/* Kosongkan di sini. Semua style sudah berasal dari template CSS utama */
</style>
