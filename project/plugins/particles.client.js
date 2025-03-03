export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    import('vue3-particles').then(module => {
      nuxtApp.vueApp.use(module.default);
    });
  }
});