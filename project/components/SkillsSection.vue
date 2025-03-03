<template>
  <section id="skills" class="py-20 md:py-32 bg-darker">
    <div class="container mx-auto px-4">
      <h2 class="section-title text-center mx-auto">Technical Skills</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        <div>
          <h3 class="text-xl font-bold mb-8 text-white">Backend Development</h3>
          
          <div class="space-y-6">
            <div v-for="(skill, index) in backendSkills" :key="index">
              <div class="flex justify-between mb-2">
                <span class="text-white">{{ skill.name }}</span>
                <span class="text-gray-400">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress bg-primary" :style="{ width: `${skill.level}%` }"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-8 text-white">DevOps & Infrastructure</h3>
          
          <div class="space-y-6">
            <div v-for="(skill, index) in devopsSkills" :key="index">
              <div class="flex justify-between mb-2">
                <span class="text-white">{{ skill.name }}</span>
                <span class="text-gray-400">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" :class="skill.color" :style="{ width: `${skill.level}%` }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-16">
        <h3 class="text-xl font-bold mb-8 text-white text-center">Technologies & Tools</h3>
        
        <div class="flex flex-wrap justify-center gap-6">
          <div v-for="(tech, index) in technologies" :key="index" 
               class="bg-dark px-4 py-3 rounded-lg border border-gray-700 flex items-center">
            <span class="text-primary mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </span>
            <span class="text-gray-300">{{ tech }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const backendSkills = [
  { name: 'PHP', level: 95, color: 'bg-primary' },
  { name: 'Python', level: 90, color: 'bg-primary' },
  { name: 'Node.js', level: 85, color: 'bg-primary' },
  { name: 'Dart', level: 75, color: 'bg-primary' },
  { name: 'SQL & NoSQL Databases', level: 92, color: 'bg-primary' }
];

const devopsSkills = [
  { name: 'Docker', level: 90, color: 'bg-secondary' },
  { name: 'Kubernetes', level: 85, color: 'bg-secondary' },
  { name: 'CI/CD Pipelines', level: 88, color: 'bg-secondary' },
  { name: 'AWS', level: 92, color: 'bg-secondary' },
  { name: 'Terraform', level: 80, color: 'bg-secondary' }
];

const technologies = [
  'REST APIs', 'GraphQL', 'gRPC', 'Redis', 'MongoDB', 
  'PostgreSQL', 'Kafka', 'RabbitMQ', 'Elasticsearch', 
  'Prometheus', 'Grafana', 'Git', 'GitHub Actions'
];
</script>