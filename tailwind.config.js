// tailwind.config.js

import defaultTheme from 'tailwindcss/defaultTheme';
import animatePlugin from 'tailwindcss-animate'; // shadcn/ui animate plugin
import daisyui from 'daisyui'; // Daisy UI plugin

/** @type {import('tailwindcss').Config} */
export default {
  // v4.x-এ সাধারণত content লাগে না, এটি অটোমেটিক ডিটেক্ট করে।

  // shadcn/ui ডার্ক মোড সাপোর্ট
  darkMode: 'class',

  // আপনার ফন্ট সেটআপ (v4.x-এ সরাসরি)
  fontFamily: {
    sans: [
      'Poppins', // English ফন্ট আগে
      'Hind Siliguri', // Bangla ফন্ট পরে
      ...defaultTheme.fontFamily.sans // ফলব্যাক ফন্ট
    ],
  },

  // ব্যবহৃত প্লাগিন
  plugins: [
    animatePlugin, // shadcn/ui অ্যানিমেশনের জন্য
    daisyui,     // Daisy UI কম্পোনেন্টের জন্য
  ],

  // Daisy UI কনফিগারেশন (ঐচ্ছিক)
  daisyui: {
    themes: ["light", "dark"], // আপনার পছন্দের থিম
    // logs: false, // ডিবাগিং লগ বন্ধ রাখুন
  },

  // shadcn/ui-এর keyframes/animations এখানে থাকতে পারে
  // (সাধারণত components.json বা shadcn-cli হ্যান্ডেল করে)
}