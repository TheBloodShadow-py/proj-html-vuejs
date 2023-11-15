import { reactive } from "vue";

export const store = reactive({
  logoSrc: "/avada-bakery-logo.png",
  navElements: [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Shop",
      link: "#",
    },
    {
      name: "About",
      link: "#",
    },
    {
      name: "Gallery",
      link: "#",
    },
    {
      name: "Locations",
      link: "#",
    },
    {
      name: "Journal",
      link: "#",
    },
    {
      name: "Contact",
      link: "#",
    },
    {
      name: "My account",
      link: "#",
    },
  ],
});
