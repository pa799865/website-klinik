import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Department from '../views/Department.vue'
import Services from '../views/Services.vue'
import Doctors from '../views/Doctors.vue'
import Contact from '../views/Contact.vue'
import DepartmentDetails from '../views/DepartmentDetails.vue'
import ServiceDetails from '../views/ServiceDetails.vue'
import Appointment from '../views/Appointment.vue'
import Testimonials from '../views/Testimonials.vue'
import Faq from '../views/Faq.vue'
import Gallery from '../views/Gallery.vue'
import Terms from '../views/Terms.vue'
import Privacy from '../views/Privacy.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/departments',
      component: Department
    }, 
    {
      path: '/services',
      component: Services
    },
    {
      path: '/doctors',
      component: Doctors
    },
    {
      path: '/contact',
      component: Contact
    }, 
    {
      path: '/department-details',
      component: DepartmentDetails
    },
    {
      path: '/service-details',
      component: ServiceDetails
    },
    {
      path: '/appointment',
      component: Appointment
    },
    {
      path: '/testimonials',
      component: Testimonials
    },
    {
      path: '/faq',
      component: Faq
    },
    {
      path: '/gallery',
      component: Gallery
    }, 
    {
      path: '/terms',
      component: Terms
    }, 
    {
      path: '/privacy',
      component: Privacy
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
