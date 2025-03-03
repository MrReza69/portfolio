<template>
  <section id="about" class="py-20 md:py-32 bg-dark">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center gap-12">
        <div class="md:w-1/2">
          <div class="relative">
            <div class="w-full h-80 md:h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-6xl text-primary/30">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-lg"></div>
          </div>
        </div>
        
        <div class="md:w-1/2">
          <h2 class="section-title">About Me</h2>
          <p class="text-gray-400 mb-6 leading-relaxed">
            I'm a passionate backend developer with over 5 years of experience building robust and scalable systems. 
            My journey in software development began with a fascination for solving complex problems and has evolved into 
            a career focused on creating efficient, maintainable, and high-performance backend solutions.
          </p>
          <p class="text-gray-400 mb-6 leading-relaxed">
            I specialize in designing and implementing distributed systems, microservices architectures, and 
            cloud-native applications. My expertise includes database optimization, API design, and implementing 
            security best practices.
          </p>
          
          <div class="grid grid-cols-2 gap-4 mb-8">
            <div>
              <h3 class="text-white font-medium mb-2">Name:</h3>
              <p class="text-gray-400">John Doe</p>
            </div>
            <div>
              <h3 class="text-white font-medium mb-2">Email:</h3>
              <p class="text-gray-400">john@example.com</p>
            </div>
            <div>
              <h3 class="text-white font-medium mb-2">From:</h3>
              <p class="text-gray-400">San Francisco, USA</p>
            </div>
            <div>
              <h3 class="text-white font-medium mb-2">Experience:</h3>
              <p class="text-gray-400">5+ Years</p>
            </div>
          </div>
          
          <a href="#contact" class="btn-primary">
            <span>Contact Me</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>