import React from 'react';
import { images } from '../assets/images';

function Home() {
  return (
    <section className="p-6 space-y-4 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold">Public Assets Demo</h2>

      <img src={images.hero} alt="Hero" className="mx-auto rounded shadow-md max-w-md" />
      <img src={images.profile} alt="Profile" className="mx-auto rounded shadow-md max-w-md" />
      <img src={images.logos.logo1} alt="Logo 1" className="mx-auto rounded shadow-md max-w-md" />
      <video src={images.videos.intro} controls className="mx-auto rounded shadow-md max-w-md" />
    </section>
  );
}

export default Home;
