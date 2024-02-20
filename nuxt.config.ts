// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "nuxt-base",
      meta: [{ name: "description", content: "Base project for nuxt apps" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
});
