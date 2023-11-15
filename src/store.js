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
  landingProducts: [
    {
      src: "/choco-chip-cookies-803x1024.jpg",
      alt: "choco chip cookies",
      prices: "$19.00 - $39.00",
    },
    {
      src: "/strawberry-jam-cookies-803x1024.jpg",
      alt: "strawberry jam cookies",
      prices: "$24.00 - $62.00",
    },
    {
      src: "/strawberry-donut-800x1020.jpg",
      alt: "strawberry donut",
      prices: "$24.00 - $42.00",
    },
    {
      src: "/perfect-macarons-800x1020.jpg",
      alt: "perfect macarons",
      prices: "$18.00 - $52.00",
    },
    {
      src: "/cookies-with-ice-cream-803x1024.jpg",
      alt: "cookies with ice cream",
      prices: "$21.00 - $44.00",
    },
  ],
});
