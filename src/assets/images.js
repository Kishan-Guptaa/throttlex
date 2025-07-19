// src/assets/images.js
const BASE = import.meta.env.BASE_URL;

export const images = {
  hero: `${BASE}hero.jpg`,
  profile: `${BASE}profile.jpg`,
  profile1: `${BASE}profile1.jpg`,
  title: `${BASE}title.jpg`,
  vite: `${BASE}vite.svg`,
  fav: {
    favicon: `${BASE}fav/favicon.ico`, // example if you have favicon
  },
  logos: {
    logo1: `${BASE}logos/logo1.png`,    // update names based on actual files
    logo2: `${BASE}logos/logo2.png`,
  },
  videos: {
    intro: `${BASE}videos/intro.mp4`,   // example for video usage
  },
};
