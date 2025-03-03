<template>
  <section id="projects" class="py-20 md:py-32 bg-darkest">
    <div class="container mx-auto px-4">
      <h2 class="section-title text-center mx-auto">Featured Projects</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        <div v-for="(project, index) in projects" :key="index" class="card shadow-lg">
          <div class="relative">
            <div class="h-48 bg-gradient-to-br" :class="project.gradient"></div>
            <div class="card-hover">
              <div class="text-center">
                <a :href="project.link" target="_blank" class="btn-primary">View Project</a>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-2">{{ project.title }}</h3>
            <p class="text-gray-400 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex" 
                    class="text-xs px-2 py-1 rounded-full" :class="tag.color">
                {{ tag.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <a href="https://github.com/" target="_blank" class="btn-outline">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
          </svg>
          View More Projects
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Microservice Architecture',
    description: 'A scalable e-commerce platform built with microservices architecture using Node.js, Kafka, and Docker.',
    link: '#',
    gradient: 'from-primary/20 to-primary/40',
    tags: [
      { name: 'Node.js', color: 'bg-primary/20 text-primary' },
      { name: 'Kafka', color: 'bg-secondary/20 text-secondary' },
      { name: 'Docker', color: 'bg-accent/20 text-accent' }
    ]
  },
  {
    title: 'Real-time Analytics API',
    description: 'High-performance analytics API processing millions of events per day using Go, Redis, and TimescaleDB.',
    link: '#',
    gradient: 'from-secondary/20 to-secondary/40',
    tags: [
      { name: 'Go', color: 'bg-secondary/20 text-secondary' },
      { name: 'Redis', color: 'bg-primary/20 text-primary' },
      { name: 'TimescaleDB', color: 'bg-accent/20 text-accent' }
    ]
  },
  {
    title: 'Serverless CMS',
    description: 'A headless CMS built with serverless architecture using AWS Lambda, DynamoDB, and API Gateway.',
    link: '#',
    gradient: 'from-accent/20 to-accent/40',
    tags: [
      { name: 'AWS Lambda', color: 'bg-accent/20 text-accent' },
      { name: 'DynamoDB', color: 'bg-primary/20 text-primary' },
      { name: 'Serverless', color: 'bg-secondary/20 text-secondary' }
    ]
  },
  {
    title: 'DevOps Automation Platform',
    description: 'A platform for automating CI/CD pipelines, infrastructure provisioning, and monitoring.',
    link: '#',
    gradient: 'from-blue-500/20 to-blue-600/40',
    tags: [
      { name: 'Python', color: 'bg-blue-500/20 text-blue-400' },
      { name: 'Terraform', color: 'bg-purple-500/20 text-purple-400' },
      { name: 'Kubernetes', color: 'bg-blue-700/20 text-blue-300' }
    ]
  },
  {
    title: 'Distributed Cache System',
    description: 'A high-performance distributed caching system with fault tolerance and automatic scaling.',
    link: '#',
    gradient: 'from-purple-500/20 to-purple-600/40',
    tags: [
      { name: 'Java', color: 'bg-orange-500/20 text-orange-400' },
      { name: 'Redis', color: 'bg-red-500/20 text-red-400' },
      { name: 'Hazelcast', color: 'bg-blue-500/20 text-blue-400' }
    ]
  },
  {
    title: 'API Gateway',
    description: 'A custom API gateway with authentication, rate limiting, and request transformation features.',
    link: '#',
    gradient: 'from-green-500/20 to-green-600/40',
    tags: [
      { name: 'Node.js', color: 'bg-green-500/20 text-green-400' },
      { name: 'Express', color: 'bg-blue-500/20 text-blue-400' },
      { name: 'JWT', color: 'bg-yellow-500/20 text-yellow-400' }
    ]
  }
];
</script>