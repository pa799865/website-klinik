<template>
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container position-relative d-flex align-items-center justify-content-between">

      <router-link to="/" class="logo d-flex align-items-center me-auto me-xl-0">
        <h1 class="sitename">Project<span>Klinik</span></h1>
      </router-link>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/departments">Departments</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/doctors">Doctors</router-link></li>

          <li class="dropdown">
            <a href="#"><span>More Pages</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><router-link to="/department-details">Department Details</router-link></li>
              <li><router-link to="/service-details">Service Details</router-link></li>
              <li><router-link to="/appointment">Appointment</router-link></li>
              <li><router-link to="/testimonials">Testimonials</router-link></li>
              <li><router-link to="/faq">FAQ</router-link></li>
              <li><router-link to="/gallery">Gallery</router-link></li>
              <li><router-link to="/terms">Terms</router-link></li>
              <li><router-link to="/privacy">Privacy</router-link></li>

            </ul>
          </li>

          <li><router-link to="/contact">Contact</router-link></li>
        </ul>

        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <router-link to="/appointment" class="btn-getstarted">Appointment</router-link>

    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderNav",

  mounted() {
    const body = document.body;
    const navMenu = document.querySelector("#navmenu");
    const toggleBtn = document.querySelector(".mobile-nav-toggle");

    // Toggle mobile nav
    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("mobile-nav-active");
      toggleBtn.classList.toggle("bi-list");
      toggleBtn.classList.toggle("bi-x");
    });

    // Dropdown inside mobile nav
    const dropdownLinks = navMenu.querySelectorAll(".dropdown > a");

    dropdownLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        if (body.classList.contains("mobile-nav-active")) {
          e.preventDefault();
          link.nextElementSibling.classList.toggle("dropdown-active");
        }
      });
    });
  }
};
</script>
