export default {
  target: "static",
  head: {
    title: "Tur Jaktorów",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Oficjalna strona klubu piłkarskiego LKS Tur Jaktorów"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: ["~/assets/globalStyles.scss"],
  plugins: [],
  components: true,
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/dotenv",
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-156522420-5"
      }
    ]
  ],
  modules: [],
  build: {}
};
