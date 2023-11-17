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
  footerElements: [
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
      name: "Orders",
      link: "#",
    },
  ],
  landingProducts: [
    {
      src: "/choco-chip-cookies-800x1020.jpg",
      alt: "Choco Chip Cookies",
      prices: "$19.00 - $39.00",
    },
    {
      src: "/strawberry-jam-cookies-800x1020.jpg",
      alt: "Strawberry Jam Cookies",
      prices: "$24.00 - $62.00",
    },
    {
      src: "/strawberry-donut-800x1020.jpg",
      alt: "Strawberry Donut",
      prices: "$24.00 - $42.00",
    },
    {
      src: "/perfect-macarons-800x1020.jpg",
      alt: "Perfect Macarons",
      prices: "$18.00 - $52.00",
    },
    {
      src: "/cookies-with-ice-cream-800x1020.jpg",
      alt: "Cookies With Ice Cream",
      prices: "$21.00 - $44.00",
    },
    {
      src: "/blackberry-stuffed-bread-800x1020.jpg",
      alt: "Blackberry Stuffed Bread",
      prices: "$14.00 - $24.00",
    },
    {
      src: "/cherry-cake-800x1020.jpg",
      alt: "Cherry Cake",
      prices: "$44.00 - $61.00",
    },
  ],
});
