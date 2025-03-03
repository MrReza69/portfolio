<template>
  <header class="fixed top-0 left-0 w-full z-50 transition-all duration-300" :class="{ 'bg-darkest/90 backdrop-blur-md shadow-md': scrolled }">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16 md:h-20">
        <a href="#" class="text-white font-bold text-xl md:text-2xl font-mono">
          <span class="text-primary">{</span> Dev<span class="text-secondary">Backend</span> <span class="text-primary">}</span>
        </a>
        
        <!-- Mobile menu button -->
        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        <!-- Desktop navigation -->
        <nav class="hidden md:flex space-x-1">
          <a v-for="(item, index) in navItems" :key="index" :href="item.href" 
             class="nav-link" :class="{ 'active': activeSection === item.id }">
            {{ item.label }}
          </a>
        </nav>
      </div>
    </div>
    
    <!-- Mobile navigation -->
    <div v-if="isMenuOpen" class="md:hidden bg-dark border-t border-gray-800">
      <div class="container mx-auto px-4 py-2">
        <nav class="flex flex-col space-y-2">
          <a v-for="(item, index) in navItems" :key="index" :href="item.href" 
             class="nav-link py-3" :class="{ 'active': activeSection === item.id }"
             @click="isMenuOpen = false">
            {{ item.label }}
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const scrolled = ref(false);
const activeSection = ref('home');

const navItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' }
];

const checkScroll = () => {
  scrolled.value = window.scrollY > 50;
  
  // Find which section is currently in view
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      activeSection.value = section.getAttribute('id');
    }
  });
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
  checkScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>