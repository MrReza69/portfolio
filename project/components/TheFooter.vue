<template>
  <footer class="bg-darkest py-8 border-t border-gray-800">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <a href="#" class="text-white font-bold text-xl font-mono">
            <span class="text-primary">{</span> Dev<span class="text-secondary">Backend</span> <span class="text-primary">}</span>
          </a>
        </div>
        
        <div class="text-gray-400 text-sm">
          &copy; {{ new Date().getFullYear() }} All Rights Reserved
        </div>
        
        <div class="mt-4 md:mt-0 flex space-x-4">
          <a href="#home" class="text-gray-400 hover:text-white transition-colors">Home</a>
          <a href="#about" class="text-gray-400 hover:text-white transition-colors">About</a>
          <a href="#projects" class="text-gray-400 hover:text-white transition-colors">Projects</a>
          <a href="#contact" class="text-gray-400 hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </div>
  </footer>
</template>