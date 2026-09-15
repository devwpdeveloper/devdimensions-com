"use client";
/* oxlint-disable next/no-img-element */

import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { CaseStudyCarousel } from "./case-study-carousel";

export const siteAsset = (name: string) => /^https?:\/\//.test(name) ? name : `/assets/${name}`;
export const themeAsset = (name: string) => `/theme-assets/${name}`;
const referenceAsset = (name: string) => `https://devdimensions-next.vercel.app/assets/images/${name}`;

export type ThemeProject = {
  slug: string;
  name: string;
  category: string;
  categories?: string[];
  image: string;
  mobileImage: string;
  heroImage?: string;
  caseStudyImage?: string;
  description: string;
};

export const themeProjects: ThemeProject[] = [
  {
    slug: "literal-co",
    name: "Literal Co",
    category: "Design",
    image: "Frame-1261153157-21.png",
    mobileImage: "Frame-1261153157-21.png",
    heroImage: "Frame-1261153157-21.png",
    caseStudyImage: "frame-1261153219-3-668d2b050ac7a.webp",
    description:
      "The first retail media platform that unites on-site and off-site capabilities. We empower brands and retailers to seamlessly connect with their audiences wherever they are. With our innovative solutions.",
  },
  {
    slug: "emd",
    name: "EMD",
    category: "Design & Development",
    image: "Frame-1261153157-15.png",
    mobileImage: "Frame-1261153157-15.png",
    heroImage: "Frame-1261153157-15.png",
    caseStudyImage: "frame-1261153220-1-668d297b1a2ea.webp",
    description:
      "The EMD Construction Company landing page was designed with a clean, professional aesthetic to highlight their expertise and commitment to quality. The layout features a striking hero section with a bold headline and an image of a recent project to capture attention.",
  },
  {
    slug: "vanrock-holdings",
    name: "Vanrock Holdings",
    category: "Design, Development",
    categories: ["Design", "Development"],
    image: "Frame-1261153157-13.png",
    mobileImage: "Frame-1261153157-13.png",
    heroImage: "Frame-1261153157-13.png",
    caseStudyImage: "frame-1261153213-1-668d2867370a2.webp",
    description:
      "VanRock is a project that exemplifies the fusion of design and functionality, aimed at delivering robust financial results for investors through expert management. We began by crafting intuitive and visually appealing designs in Figma, focusing on clarity and user experience.",
  },
  {
    slug: "performance-tours",
    name: "Performance Tours",
    category: "Design, Development",
    categories: ["Design", "Development"],
    image: "Frame-1261153157-19.png",
    mobileImage: "Frame-1261153157-19.png",
    heroImage: referenceAsset("Frame-1261153157-12.png"),
    caseStudyImage: "frame-1261153219-2-668d290a3710a.webp",
    description:
      "The website for Performance Tours showcases a thrilling rafting experience tailored for families seeking adventure in a bold and maximalist aesthetic. Emphasizing safety and excitement, the site’s vibrant visuals and dynamic layout capture the essence of exhilarating river.",
  },
  {
    slug: "express-flooring",
    name: "Express Flooring",
    category: "Design, Development",
    categories: ["Design", "Development"],
    image: "Frame-1261153157-10.png",
    mobileImage: "Frame-1261153157-10.png",
    heroImage: "Frame-1261153157-10.png",
    caseStudyImage: "frame-1261153221-1-668d272b32aee.webp",
    description:
      "Express Flooring” is a dynamic website specializing in interior flooring solutions and products, including a wide range of tiles. Utilizing blue as the accent color, the design conveys a sense of trust and professionalism while maintaining a modern and clean aesthetic.",
  },
  {
    slug: "soy-kitty",
    name: "Soy Kitty",
    category: "Design",
    image: "Frame-1261153157-7.png",
    mobileImage: "Frame-1261153157-7.png",
    heroImage: "Frame-1261153157-7.png",
    caseStudyImage: "frame-1261153219-1-668d25b7abaae.webp",
    description:
      "“Soy Kitty” is a thoughtfully designed website that caters to environmentally conscious cat owners seeking non-toxic, odor-free, and eco-friendly cat litter options. The site features a simple yet elegant layout, utilizing soothing pastel colors to create a calming and user-friendly experience.",
  },
  {
    slug: "walter-on-wire",
    name: "Walter On Wine",
    category: "Design",
    image: "frame-1261153220-668d24ff54e6f.webp",
    mobileImage: "Group-626684-optimized-scaled.webp",
    heroImage: referenceAsset("Frame-1261153157-5.png"),
    caseStudyImage: "Group-626684-optimized-scaled.webp",
    description:
      "A content-rich wine platform that makes discovery, education, and connection feel personal.",
  },
  {
    slug: "desert-gold",
    name: "Desert gold",
    category: "Design",
    image: referenceAsset("Frame-1261153157-2.png"),
    mobileImage: referenceAsset("Frame-1261153157-2.png"),
    heroImage: referenceAsset("Frame-1261153157-2.png"),
    caseStudyImage: referenceAsset("Frame-1261153157-2.png"),
    description:
      "For the “Desert Gold” project, we designed a landing page focused on studio lighting solutions tailored for filmmakers and content creators. This project aimed to guide users in selecting the best lighting equipment to enhance their productions. The landing page features a sleek, user-friendly interface that highlights various lighting options, their benefits, and detailed product information.",
  },
  {
    slug: "dent-makers",
    name: "Dent Makers",
    category: "Design",
    image: referenceAsset("Frame-1261153157-1.png"),
    mobileImage: referenceAsset("Frame-1261153157-1.png"),
    heroImage: referenceAsset("Frame-1261153157-1.png"),
    caseStudyImage: referenceAsset("Frame-1261153157-1.png"),
    description:
      "Dentmaker is an online streaming platform where users can access video courses from various instructors. It offers annual, monthly, and weekly plans alongside free and premium courses, giving users a flexible way to learn and manage their membership.",
  },
  {
    slug: "outside-live",
    name: "Outside Live",
    category: "Design",
    image: referenceAsset("33075991_laptosssp_screen_mockup_10-1-1.svg"),
    mobileImage: referenceAsset("33075991_laptosssp_screen_mockup_10-1-1.svg"),
    heroImage: referenceAsset("33075991_laptosssp_screen_mockup_10-1-1.svg"),
    caseStudyImage: referenceAsset("33075991_laptosssp_screen_mockup_10-1-1.svg"),
    description:
      "OutsideLive.com offers a virtual gateway to exploration and adventure, inviting enthusiasts to embark on a digital journey through breathtaking landscapes, adrenaline-pumping activities, and insightful outdoor narratives.",
  },
  {
    slug: "omnimodus",
    name: "OmniModus",
    category: "Design",
    image: referenceAsset("33075991_laptop_scree1111n_mockup_10-1.png"),
    mobileImage: referenceAsset("33075991_laptop_scree1111n_mockup_10-1.png"),
    heroImage: referenceAsset("33075991_laptop_scree1111n_mockup_10-1.png"),
    caseStudyImage: referenceAsset("33075991_laptop_scree1111n_mockup_10-1.png"),
    description:
      "This project combines a striking dark-mode interface with an elegant blue accent. The minimal, sophisticated design keeps essential content clear while creating a balanced and immersive user experience.",
  },
  {
    slug: "qrder",
    name: "Qrder",
    category: "Design",
    image: referenceAsset("33075991_laptop_screen_mockup_10-5.png"),
    mobileImage: referenceAsset("33075991_laptop_screen_mockup_10-5.png"),
    heroImage: referenceAsset("33075991_laptop_screen_mockup_10-5.png"),
    caseStudyImage: referenceAsset("33075991_laptop_screen_mockup_10-5.png"),
    description:
      "Qrder is the digital maître d’ for modern restaurants. The platform brings reservations, feedback, and restaurant operations together in a seamless experience for both diners and teams.",
  },
  {
    slug: "rsimotors",
    name: "RSI Motors",
    category: "Design & Development",
    image: referenceAsset("33075991_laptop_screen_mohhhckup_10-1.svg"),
    mobileImage: referenceAsset("33075991_laptop_screen_mohhhckup_10-1.svg"),
    heroImage: referenceAsset("33075991_laptop_screen_mohhhckup_10-1.svg"),
    caseStudyImage: referenceAsset("33075991_laptop_screen_mohhhckup_10-1.svg"),
    description:
      "RSI Motors sells more than 400,000 aftermarket automotive components through retail and membership tiers. We recommended a ground-up redesign to address the original site's aesthetic, UX, performance, and database challenges.",
  },
  {
    slug: "cortiam",
    name: "Cortiam",
    category: "Development",
    image: referenceAsset("Frame-1261153157.png"),
    mobileImage: referenceAsset("Frame-1261153157.png"),
    heroImage: referenceAsset("Frame-1261153157.png"),
    caseStudyImage: referenceAsset("Frame-1261153157.png"),
    description:
      "Cortiam redefines how homes are bought and sold by connecting sellers with agents in a seamless, empowering experience. Sellers can set their terms and negotiate comfortably through the platform.",
  },
  {
    slug: "the-vacation-calendar",
    name: "The Vacation Calendar",
    category: "Design & Development",
    image: referenceAsset("33075991_laptzzzzop_screen_mockup_10-1-1.svg"),
    mobileImage: referenceAsset("33075991_laptzzzzop_screen_mockup_10-1-1.svg"),
    heroImage: referenceAsset("33075991_laptzzzzop_screen_mockup_10-1-1.svg"),
    caseStudyImage: referenceAsset("33075991_laptzzzzop_screen_mockup_10-1-1.svg"),
    description:
      "The Vacation Calendar uses a soothing blue and green palette to make property availability, booking status, galleries, local guides, house rules, and calendar management simple for hosts and guests.",
  },
];

type ProjectDetail = ThemeProject & {
  detailDescription: string;
  deliverables: string[];
  typography: string[];
  paletteImages: string[];
  heroTools: string[];
  heroBackground: boolean;
  featureSections: { title: string; image: string }[];
  topShotsTitle: string;
  gallery: string[];
  finalGallery: string[];
  showFinalSection: boolean;
  mobileGallery: string[];
  showMobileSection: boolean;
  mobileTitle: string;
};

const details: Record<string, Partial<ProjectDetail>> = {
  "literal-co": {
    detailDescription:
      "The first retail media platform that unites on-site and off-site capabilities. We empower brands and retailers to seamlessly connect with their audiences wherever they are. With our innovative solutions, you can effortlessly manage and optimize your advertising campaigns across multiple channels, all from one central platform. Our goal is to help you maximize your reach, engagement, and ROI by providing the tools and insights needed to make data-driven decisions.",
    deliverables: ["User Journey", "UX /UI Design", "Project Documentation", "Story Writing"],
    typography: ["Clash Display", "Regular", "Medium", "Bold"],
    paletteImages: [referenceAsset("Frame-1261153159-2.png"), referenceAsset("Frame-1261153158-4.png")],
    gallery: [
      referenceAsset("Frame-1261153219-8.svg"),
      referenceAsset("Frame-1261153220-11.svg"),
      referenceAsset("Frame-1261153220-10.svg"),
      referenceAsset("Frame-1261153219-7.svg"),
    ],
    mobileGallery: [
      referenceAsset("About-Us.png"),
      referenceAsset("Advertisers.png"),
      referenceAsset("retailers.png"),
      referenceAsset("Homepage.png"),
    ],
    mobileTitle: "Mobile Variations",
  },
  emd: {
    detailDescription:
      "The EMD Construction Company landing page was designed with a clean, professional aesthetic to highlight their expertise and commitment to quality. The layout features a striking hero section with a bold headline and an image of a recent project to capture attention. It includes an “About Us” section offering a brief overview of EMD’s history, values, and mission, establishing credibility. Detailed descriptions of their residential, commercial, and industrial services are provided, supported by relevant images and project examples. The design prioritizes user experience with a straightforward navigation menu and a responsive layout for accessibility across all devices.",
    paletteImages: [referenceAsset("Frame-1261153219-1-1.png"), referenceAsset("Frame-1261153218-1.png")],
    gallery: [referenceAsset("Frame-1261153607.png"), referenceAsset("Frame-1261153606-1.png")],
    finalGallery: [referenceAsset("building-clinic-1.png")],
  },
  "vanrock-holdings": {
    detailDescription:
      "VanRock is a project that exemplifies the fusion of design and functionality, aimed at delivering robust financial results for investors through expert management. We began by crafting intuitive and visually appealing designs in Figma, focusing on clarity and user experience. After finalizing the design, we transitioned to Elementor for development, ensuring the site was not only aesthetically pleasing but also responsive and easy to navigate. Our goal was to create a platform that effectively communicates VanRock’s financial expertise and commitment to investor success.",
    paletteImages: [referenceAsset("Frame-1261153219-1-1.png"), referenceAsset("Frame-1261153218-1.png")],
    gallery: [
      referenceAsset("Frame-1261153217-5.svg"),
      referenceAsset("Frame-1261153219-6.svg"),
      referenceAsset("Frame-1261153217-4.svg"),
      referenceAsset("Frame-1261153218.svg"),
      referenceAsset("Frame-1261153217-3.svg"),
      referenceAsset("Frame-1261153213-1.svg"),
    ],
  },
  "performance-tours": {
    detailDescription:
      "The website for Performance Tours showcases a thrilling rafting experience tailored for families seeking adventure in a bold and maximalist aesthetic. Emphasizing safety and excitement, the site’s vibrant visuals and dynamic layout capture the essence of exhilarating river expeditions while ensuring clarity in navigation and information accessibility. The bold and maximalist design elements of Performance Tours’ website enhance the excitement and energy of the outdoor adventure experience, appealing directly to adrenaline-seeking families.",
    paletteImages: [referenceAsset("Frame-1261153162-2.svg"), referenceAsset("Frame-1261153158-2.png")],
    gallery: [
      referenceAsset("Frame-1261153222-7.svg"),
      referenceAsset("Frame-1261153221-6.svg"),
      referenceAsset("Frame-1261153221-5.svg"),
      referenceAsset("Frame-1261153219-5.svg"),
    ],
  },
  "express-flooring": {
    detailDescription:
      "Express Flooring” is a dynamic website specializing in interior flooring solutions and products, including a wide range of tiles. Utilizing blue as the accent color, the design conveys a sense of trust and professionalism while maintaining a modern and clean aesthetic. The site offers an intuitive browsing experience, allowing customers to easily explore various flooring options and find the perfect solution for their needs. The seamless integration of blue accents enhances the visual hierarchy, guiding users through the product offerings effortlessly.Express Flooring” is a dynamic website specializing in interior flooring solutions and products, including a wide range of tiles. Utilizing blue as the accent color, the design conveys a sense of trust and professionalism while maintaining a modern and clean aesthetic. The site offers an intuitive browsing experience, allowing customers to easily explore various flooring options and find the perfect solution for their needs. The seamless integration of blue accents enhances the visual hierarchy, guiding users through the product offerings effortlessly.",
    paletteImages: [referenceAsset("Frame-1261153161-3.svg"), referenceAsset("Frame-1261153158-3.svg")],
    gallery: [
      referenceAsset("Frame-1261153222-6.svg"),
      referenceAsset("Frame-1261153224-1.svg"),
      referenceAsset("Frame-1261153222-5.svg"),
      referenceAsset("Frame-1261153224.svg"),
      referenceAsset("Frame-1261153223-6.svg"),
      referenceAsset("Frame-1261153221-4.svg"),
    ],
  },
  "soy-kitty": {
    detailDescription:
      "“Soy Kitty” is a thoughtfully designed website that caters to environmentally conscious cat owners seeking non-toxic, odor-free, and eco-friendly cat litter options. The site features a simple yet elegant layout, utilizing soothing pastel colors to create a calming and user-friendly experience. This project highlights aesthetically pleasing and functional designs that align with eco-friendly values. Each page is carefully structured to offer intuitive navigation, ensuring that users can easily find information about the product’s benefits and make informed purchasing decisions.",
    paletteImages: [referenceAsset("Frame-1261153162-1.svg"), referenceAsset("Frame-1261153158-1.png")],
    gallery: [
      referenceAsset("Frame-1261153219-4.svg"),
      referenceAsset("Frame-1261153220-6.svg"),
      referenceAsset("Frame-1261153220-5.svg"),
      referenceAsset("Frame-1261153221-2.svg"),
    ],
  },
  "walter-on-wire": {
    detailDescription:
      "’’Walter on Wine” is a sleek and modern website that is designed to cater to wine enthusiasts and novices alike. Owned by an experienced sommelier, the site offers comprehensive information about various wines, guiding users to find the best selections tailored to their preferences. The clean and contemporary design ensures a seamless user experience, making it easy to explore expert reviews, tasting notes, and personalized recommendations. “Walter on Wine” is the ultimate resource for discovering and enjoying the perfect wine for any occasion.",
    paletteImages: [referenceAsset("Frame-1261153161.svg"), referenceAsset("Frame-1261153158.svg")],
    gallery: [
      referenceAsset("Frame-1261153223.svg"),
      referenceAsset("Frame-1261153222.svg"),
      referenceAsset("Frame-1261153221-1.svg"),
      referenceAsset("Frame-1261153220-4.svg"),
      referenceAsset("Frame-1261153219-3.svg"),
      referenceAsset("Frame-1261153220-3.svg"),
    ],
  },
  "desert-gold": {
    detailDescription:
      "For the “Desert Gold” project, we designed a landing page focused on studio lighting solutions tailored for filmmakers and content creators. This project aimed to guide users in selecting the best lighting equipment to enhance their productions. The landing page we created features a sleek, user-friendly interface that highlights various lighting options, their benefits, and detailed product information. My design ensures an engaging and informative experience, making it easier for clients to make informed purchasing decisions.",
    paletteImages: [referenceAsset("Frame-1261153218.png")],
    gallery: [referenceAsset("Frame-1261153216-1.png"), referenceAsset("Frame-1261153217.svg")],
  },
  "dent-makers": {
    detailDescription:
      "Dentmaker is an online streaming platform where users can access video courses from various instructors. Users have the option to purchase annual, monthly, or weekly plans to access premium courses. There are both free and premium courses available on the platform. Free courses are accessible to all users without any membership plan, whereas access to premium courses requires purchasing a membership.",
    paletteImages: [referenceAsset("Frame-1261153158.png"), referenceAsset("Frame-1261153159.png")],
    gallery: [
      referenceAsset("Frame-1261153220.svg"),
      referenceAsset("image-115.png"),
      referenceAsset("Frame-1261153220-1.svg"),
      referenceAsset("Frame-1261153219.svg"),
      referenceAsset("Frame-1261153220-2.svg"),
      referenceAsset("Frame-1261153219-1.svg"),
    ],
  },
  "outside-live": {
    detailDescription:
      "OutsideLive.com offers a virtual gateway to the world of exploration and adventure, inviting enthusiasts to embark on a digital journey that mirrors the thrill of being outdoors. This innovative platform transcends geographical boundaries, allowing users to immerse themselves in breathtaking landscapes, adrenaline-pumping activities, and insightful narratives from the comfort of their screens. With a diverse range of multimedia content, OutsideLive.com captures the essence of outsidelibe, inspiring a profound connection to nature and a sense of curiosity about the wonders that await beyond our doorsteps.",
    deliverables: ["QA Report", "Backend Development", "Frontend Development", "UX Design", "UI Design"],
    typography: ["Montserrat", "Regular", "Medium", "Bold"],
    paletteImages: [
      referenceAsset("palette-1.png"),
      referenceAsset("palette-2.png"),
      referenceAsset("palette-3.png"),
      referenceAsset("palette-4.png"),
    ],
    heroTools: [referenceAsset("tool-3.png"), referenceAsset("tool-2.png")],
    heroBackground: false,
    featureSections: [
      { title: "Homepage", image: referenceAsset("Frame-1261153219.svg") },
      { title: "Events", image: referenceAsset("Rectangle-4460.svg") },
    ],
    topShotsTitle: "Additional Shots",
    gallery: [referenceAsset("Rectangle-4458-1.svg"), referenceAsset("Rectangle-4457.svg")],
    showFinalSection: false,
    showMobileSection: false,
  },
  omnimodus: {
    detailDescription:
      "This project embodies a thoughtful integration of two key elements: a striking dark mode interface complemented by an elegant blue accent. The design exudes an air of understated sophistication through its minimalistic approach, allowing essential content to shine. By skillfully blending deep blacks with calming blues, the design achieves a balanced and immersive user experience. At its core, the project’s focus on “Defi Responses to Lost Passwords” stands out prominently, epitomizing its significance. Through a curated color palette and a clean layout, the design not only reflects a contemporary touch but also ensures that the central message remains the focal point. This approach captures the essence of simplicity and impactful communication, offering users a visually compelling and memorable encounter.",
    paletteImages: [
      referenceAsset("Frame-1261153158.svg"),
      referenceAsset("Frame-1261153159.svg"),
      referenceAsset("Frame-1261153160.svg"),
    ],
    featureSections: [
      { title: "Hero Section", image: referenceAsset("Rectangle-4457.png") },
      { title: "Roadmap", image: referenceAsset("Rectangle-4459.png") },
    ],
    topShotsTitle: "Additional Shots",
    gallery: [referenceAsset("Rectangle-4457-1.png"), referenceAsset("Rectangle-4459-1.png")],
    showMobileSection: false,
  },
  qrder: {
    detailDescription:
      "Qrder is the The Digital Maître d’ for Modern Restaurants 🍽️ They hired 2 full time designers as resources to build all-encompassing POS solution tailored for restaurants, big or small. In this modern era where customers demand a seamless and sophisticated dining experience, Qrder delivers. We’ve turned dining establishments into digital dynamos, making everything from reservations to feedback a breeze. With features akin to Shopify stores, it offers unparalleled restaurant customization while empowering owners to manage multiple branches. We also prototyped.",
    deliverables: ["User Journey", "UI Design", "Design QA", "UX Design", "Sitemap & Diagraming", "Site Optimisation"],
    typography: ["SF Pro Display", "Regular", "Medium", "Bold"],
    paletteImages: [
      referenceAsset("Frame-1261153158-1.svg"),
      referenceAsset("Frame-1261153159-1.svg"),
      referenceAsset("Frame-1261153160-1.svg"),
    ],
    heroTools: [referenceAsset("tool-2.png"), referenceAsset("tool-3.png")],
    featureSections: [
      { title: "Hero Section", image: referenceAsset("Frame-1261153215.svg") },
      { title: "Key Features", image: referenceAsset("Frame-1261153215-1.svg") },
    ],
    topShotsTitle: "Some More Shots",
    gallery: [
      referenceAsset("Frame-1261153214.svg"),
      referenceAsset("Frame-1261153216.svg"),
      referenceAsset("Frame-1261153215-2.svg"),
      referenceAsset("Frame-1261153213.svg"),
    ],
    showFinalSection: false,
    showMobileSection: false,
  },
  rsimotors: {
    detailDescription:
      "RSI is a young company specialized in the sale of over 400,000 aftermarket automotive components. Their business model has both a regular retail component as well a membership tiers for high volume purchasers. Their initial website was poorly designed, with aesthetic, UX, and painfully slow performance issues because of poor database design. Instead of working to fix the existing site, we recommended a ground-up redesign. Greatly improved aesthetics, UX, and performance through a complete back-end re-design will keep users engaged, purchasing products, and coming back. Because of the site complexity, we implemented a new approach to development that had the client as part of the team, with weekly meetings to review progress, make changes as needed, and test the system. This approach has worked so well it is being used with all clients, allowing near real-time design changes during the build rather than after delivery.",
    deliverables: ["Quality Assurance Report", "Sitemap", "Site Optimisation", "Github Code"],
    typography: ["Ubuntu", "Regular", "Medium", "Bold"],
    paletteImages: [referenceAsset("Frame-1261153160.svg"), referenceAsset("Frame-1261153158-1-1.svg")],
    heroTools: [
      referenceAsset("1443988__1__1-removebg-preview-1.svg"),
      referenceAsset("Component-16-1.svg"),
    ],
    heroBackground: false,
    featureSections: [
      { title: "Homepage", image: referenceAsset("Frame-1261153213-4.svg") },
      { title: "Product Page", image: referenceAsset("Frame-1261153216-3-1.svg") },
    ],
    topShotsTitle: "Top Shots",
    gallery: [
      referenceAsset("Frame-1261153213-3.svg"),
      referenceAsset("Frame-1261153217-1.svg"),
      referenceAsset("Frame-1261153213-5.svg"),
      referenceAsset("Frame-1261153216-4.svg"),
    ],
    showFinalSection: false,
    mobileTitle: "Top Shots",
  },
  cortiam: {
    detailDescription:
      "Cortiam is a game-changer in the real estate industry, redefining the way homes are bought and sold. Recognizing that buying or selling a home is one of life’s most significant investments, Cortiam was born from a deep desire to revolutionize an age-old process. Traditionally, connecting home sellers with agents involved a somewhat cumbersome and often impersonal approach. We’ve transformed this experience into something seamless and empowering. Cortiam acts as a matchmaker, bridging the gap between home sellers and real estate agents, offering a platform where sellers can set their terms and negotiate with agents comfortably. We believe that selling your home should always be on your terms, and at Cortiam, we’re here to make that a reality. Beyond serving home sellers, we’re equally dedicated to empowering new real estate agents. We provide them with access to quality leads and a platform to showcase their talents, giving them the opportunity to shine in a competitive market. Cortiam’s mission is simple: to help you find your perfect real estate match when you’re ready to sell your home.",
    deliverables: ["QA Report", "Backend Development", "Frontend Development", "UX Design", "UI Design"],
    typography: ["SF Pro Display", "Regular", "Medium", "Bold"],
    paletteImages: [
      referenceAsset("Frame-1261153160-2.svg"),
      referenceAsset("Frame-1261153159-2.svg"),
      referenceAsset("Frame-1261153158-3.svg"),
      referenceAsset("Frame-1261153160.svg"),
    ],
    heroTools: [referenceAsset("Component-16-1.svg"), referenceAsset("Frame-1261153220.svg")],
    heroBackground: false,
    featureSections: [
      { title: "Homepage", image: referenceAsset("Frame-1261153213-11.svg") },
      { title: "Set Your Terms", image: referenceAsset("Frame-1261153213-12.svg") },
    ],
    topShotsTitle: "Additional Shots",
    gallery: [referenceAsset("Frame-1261153218-1.svg"), referenceAsset("Frame-1261153217-5.svg")],
    showFinalSection: false,
    showMobileSection: false,
  },
  "the-vacation-calendar": {
    detailDescription:
      "The Vacation Calendar, with its soothing blue and green color palette, is an essential addition to any portfolio. This versatile tool features a House List, enabling users to effortlessly determine the property’s availability and booking status. Its integration options, including bulletin board and gallery, make it a visually appealing and collaborative solution for vacation planning. Additionally, the ability to set local guides and house rules, along with easy calendar management, ensures an efficient and enjoyable experience for both hosts and guests.",
    deliverables: ["QA Report", "Backend Development", "Frontend Development", "UX Design", "UI Design"],
    typography: ["Poppins", "Regular", "Medium", "Bold"],
    paletteImages: [referenceAsset("Frame-1261153158-2.svg"), referenceAsset("Frame-1261153160.svg")],
    heroTools: [referenceAsset("Component-16-1.svg"), referenceAsset("tool-2.png")],
    heroBackground: false,
    featureSections: [
      { title: "Homepage", image: referenceAsset("Frame-1261153213-6.svg") },
      { title: "About", image: referenceAsset("Frame-1261153217-3.svg") },
    ],
    topShotsTitle: "Additional Shots",
    gallery: [
      referenceAsset("Frame-1261153216-9.svg"),
      referenceAsset("Frame-1261153213-10.svg"),
      referenceAsset("Frame-1261153213-9.svg"),
      referenceAsset("Frame-1261153217-4.svg"),
    ],
    showFinalSection: false,
    showMobileSection: false,
  },
};

export function getProject(slug: string): ProjectDetail {
  const project = themeProjects.find((item) => item.slug === slug) ?? themeProjects[0];
  const extra = details[project.slug] ?? {};
  return {
    ...project,
    heroImage: extra.heroImage ?? project.heroImage ?? project.image,
    detailDescription: extra.detailDescription ?? project.description,
    deliverables: extra.deliverables ?? ["User Journey", "UX /UI Design", "Project Documentation", "Story Writing"],
    typography: extra.typography ?? ["Clash Display", "Regular", "Medium", "Bold"],
    paletteImages: extra.paletteImages ?? [],
    heroTools: extra.heroTools ?? ["tool-1.png", "tool-2.png"],
    heroBackground: extra.heroBackground ?? true,
    featureSections: extra.featureSections ?? [],
    topShotsTitle: extra.topShotsTitle ?? "Some Top Shots",
    gallery: extra.gallery ?? [],
    finalGallery: extra.finalGallery ?? [],
    showFinalSection: extra.showFinalSection ?? true,
    mobileGallery: extra.mobileGallery ?? [],
    showMobileSection: extra.showMobileSection ?? true,
    mobileTitle: extra.mobileTitle ?? "",
  };
}

function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  if (!open) return null;

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setStatus("submitting");
    try {
      const response = await fetch("/backend/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Unable to send message");
      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="modal-backdrop">
      <dialog open className="contact-modal" aria-labelledby="contact-modal-title">
        <button className="modal-close" type="button" aria-label="Close contact form" onClick={onClose}>
          <X size={23} strokeWidth={1.5} />
        </button>
        <h2 id="contact-modal-title">Unlock Success with Us</h2>
        <p className="modal-intro">Fill the form below and our team will get back to you at our earliest.</p>
        {status === "success" ? (
          <output className="form-status form-status--success">
            <span>Thank you — your message is on its way.</span>
            <button className="btn-theme" type="button" onClick={onClose}>Done <ArrowUpRight size={16} /></button>
          </output>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Your Name<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Your name" /></label>
            <label>Email<input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="you@company.com" /></label>
            <label className="contact-form__wide">Brief Message<textarea required rows={4} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="Tell us about your project" /></label>
            <button className="btn-theme contact-form__wide" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Sending…" : "Get Free Consultation"} <ArrowUpRight size={17} /></button>
            {status === "error" ? <p className="form-status form-status--error" role="alert">Please email <a href="mailto:info@devdimensions.com">info@devdimensions.com</a>.</p> : null}
          </form>
        )}
      </dialog>
    </div>
  );
}

function SiteHeader({ menuOpen, onToggle, onContact }: { menuOpen: boolean; onToggle: () => void; onContact: () => void }) {
  return (
    <header className="site-header shell">
      <a className="brand" href="/" aria-label="DevDimensions home"><img src={siteAsset("logo.svg")} alt="DevDimensions" /></a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="/">Home</a>
        <a href="/about-us/">About Us</a>
        <a href="/case-studies/">Case Studies</a>
        <a href="/contact-us/">Contact Us</a>
      </nav>
      <button className="header-cta" type="button" onClick={onContact}>Get Free Consultation</button>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={onToggle}>
        {menuOpen ? <X size={25} strokeWidth={1.5} /> : <Menu size={25} strokeWidth={1.5} />}
      </button>
    </header>
  );
}

export function MobileNavigation({ onClose, onContact }: { onClose: () => void; onContact: () => void }) {
  return (
    <aside className="menu-panel" aria-label="Main navigation">
      <div className="menu-panel-header">
        <a className="brand" href="/" onClick={onClose}><img src={siteAsset("logo.svg")} alt="DevDimensions" /></a>
        <button className="menu-close" type="button" aria-label="Close navigation" onClick={onClose}><X size={25} strokeWidth={1.5} /></button>
      </div>
      <nav className="menu-links">
        <a href="/" onClick={onClose}>Home</a>
        <a href="/about-us/" onClick={onClose}>About Us</a>
        <a href="/case-studies/" onClick={onClose}>Case Studies</a>
        <a href="/contact-us/" onClick={onClose}>Contact Us</a>
      </nav>
      <div className="menu-consult">
        <p>Have a project in mind?</p>
        <button className="btn-theme" type="button" onClick={onContact}>Get Free Consultation <ArrowUpRight size={17} /></button>
      </div>
    </aside>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand" href="/" aria-label="DevDimensions home"><img src={siteAsset("logo.svg")} alt="DevDimensions" /></a>
            <p className="footer-tagline">We believe in growing together by empowering businesses through technology.</p>
            <div className="social-links" aria-label="Social links">
              <a href="https://www.facebook.com/devdimensions/" target="_blank" rel="noreferrer"><span className="social-mark social-mark--facebook" aria-hidden="true" /><span>Facebook</span></a>
              <a href="https://www.linkedin.com/company/devdimensions?originalSubdomain=pk" target="_blank" rel="noreferrer"><span className="social-mark social-mark--linkedin" aria-hidden="true" /><span>LinkedIn</span></a>
              <a href="https://www.instagram.com/devdimensions.official" target="_blank" rel="noreferrer"><span className="social-mark social-mark--instagram" aria-hidden="true" /><span>Instagram</span></a>
            </div>
          </div>
          <div className="office-grid">
            <section className="office">
              <h3 className="office-heading"><img src={themeAsset("us-flag.png")} alt="" aria-hidden="true" />United States</h3>
              <ul className="office-list">
                <li><img src={themeAsset("icon-location.svg")} alt="" aria-hidden="true" />10788 Lake Wynds, Boynton Beach, FL</li>
                <li><img src={themeAsset("icon-mobile.svg")} alt="" aria-hidden="true" /><span className="office-contact"><a href="tel:+15613360919">+1 (561) 336-0919</a><a href="mailto:sales@devdimensions.com">sales@devdimensions.com</a></span></li>
              </ul>
            </section>
            <section className="office">
              <h3 className="office-heading"><img src={themeAsset("pak-flag.png")} alt="" aria-hidden="true" />Pakistan</h3>
              <ul className="office-list">
                <li><img src={themeAsset("icon-location.svg")} alt="" aria-hidden="true" />26 K Service Rd, Block K, Phase 2, Johar Town Lahore, Pakistan.</li>
                <li><img src={themeAsset("icon-mobile.svg")} alt="" aria-hidden="true" /><span className="office-contact"><a href="tel:+924232296908">+92 42 322 96908</a><a href="mailto:info@devdimensions.com">info@devdimensions.com</a></span></li>
              </ul>
            </section>
          </div>
        </div>
        <div className="copyright"><span>All copyrights by DevDimensions, LLC © 2024 -</span><div className="copyright-link"><a href="https://www.careers-page.com/devdimensions#openings" target="_blank" rel="noreferrer">Careers</a></div></div>
      </div>
    </footer>
  );
}

export function CtaBand({ onContact }: { onContact: () => void }) {
  return (
    <section className="cta" id="contact">
      <div className="shell">
        <div className="cta-box">
          <h2>
            Connect With The <span>Top 3%</span> Where
            <br className="cta-title-break" />
            Brilliance Ignites Extraordinary Achievements.
          </h2>
          <div className="cta-actions">
            <button className="btn-theme" type="button" onClick={onContact}>
              Hire Engineers
              <img className="cta-button-arrow" src={themeAsset("ArrowUpLeft.svg")} alt="" aria-hidden="true" />
            </button>
            <a className="btn-ghost" href="/contact-us/">
              Develop With Us
              <img className="cta-button-arrow" src={themeAsset("ArrowUpLeft.svg")} alt="" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SitePageFrame({ children, showCta = true, className = "" }: { children: ReactNode; showCta?: boolean; className?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const openContact = () => { setMenuOpen(false); setModalOpen(true); };

  useEffect(() => {
    if (menuOpen || modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setMenuOpen(false); setModalOpen(false); }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.removeProperty("overflow"); window.removeEventListener("keydown", onKeyDown); };
  }, [menuOpen, modalOpen]);

  return (
    <div className={`site-shell theme-page ${className}`}>
      <SiteHeader menuOpen={menuOpen} onToggle={() => setMenuOpen((open) => !open)} onContact={openContact} />
      {menuOpen ? <MobileNavigation onClose={() => setMenuOpen(false)} onContact={openContact} /> : null}
      {children}
      {showCta ? <CtaBand onContact={openContact} /> : null}
      <SiteFooter />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

function ThemeHero({ variant, title, description }: { variant: "about" | "cases" | "contact"; title: ReactNode; description: string }) {
  const isAbout = variant === "about";
  return (
    <section className={`theme-hero theme-hero--${variant}`}>
      <img className="theme-hero-background" src={themeAsset("home-hero.png")} alt="" aria-hidden="true" />
      <div className="shell theme-hero-inner">
        <div className="theme-hero-copy">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        {isAbout ? (
          <a className="theme-get-touch" href="/contact-us/" aria-label="Get in touch">
            <img className="theme-get-circle" src={themeAsset("about-get.png")} alt="" aria-hidden="true" />
            <img className="theme-get-arrow" src={themeAsset("get-arrow.png")} alt="" aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </section>
  );
}

export function AboutPage() {
  const coreValues = [
    {
      key: "growth",
      label: "We believe in growing together",
    },
    {
      key: "honesty",
      label: "Honesty is our guiding principle",
    },
    {
      key: "empathy",
      label: "We show empathy for each other",
    },
    {
      key: "fun",
      label: "Fun and entertainment is not skipped",
    },
    {
      key: "accountable",
      label: "Everyone is equally accountable",
    },
  ] as const;

  return (
    <SitePageFrame showCta={false} className="theme-page--about">
      <ThemeHero
        variant="about"
        title={<>Discover DevDimensions:<br /><span>Your Premier Talent Partner</span></>}
        description="At DD, we’re all about the people. From our talent, teams, to partners: We believe the real magic lies in harnessing human potential. Winning, to us, means creating lasting relationships with our partners. We want to run marathons with you, not just the sprints."
      />
      <section className="theme-mission">
        <div className="shell">
          <div className="theme-mission-grid">
            <article className="theme-mission-card"><img src={themeAsset("our-mision.png")} alt="" aria-hidden="true" /><div><h2>Our Mission</h2><p>Our mission is to enable the talent, cultivating a fertile ground where professional growth and innovation bloom. Our aim is to channel this reservoir of expertise into building success stories for clients.</p></div></article>
            <article className="theme-mission-card"><img src={themeAsset("our-vision.png")} alt="" aria-hidden="true" /><div><h2>Our vision</h2><p>Our vision is a world where every company has access to a dream team to accelerate their success. We provide a pain free way to source global talent, setting the stage for a lifetime of innovation.</p></div></article>
          </div>
        </div>
      </section>
      <section className="theme-core-values" aria-labelledby="core-values-title">
        <div className="shell">
          <h2 id="core-values-title">Our Core Values</h2>
          <div className="core-values-art">
            <picture className="core-values-picture" aria-hidden="true">
              <source media="(max-width: 767px)" srcSet={themeAsset("mpbile-about.png")} />
              <img src={themeAsset("about-circle.png")} alt="" decoding="async" />
            </picture>
            <ul className="core-values-accessibility" aria-label="DevDimensions core values">
              {coreValues.map((value) => <li key={value.key}>{value.label}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="theme-join">
        <div className="shell">
          <div className="theme-join-inner">
            <img src={themeAsset("logo_d.svg")} alt="DevDimensions" />
            <h2>Your turn to step up to the plate!</h2>
            <p>You&apos;ve gotten to know the line-up behind DevDimensions, now it&apos;s our turn to learn about your game plan. Join our team and let’s huddle to talk strategy.</p>
            <a className="btn-theme" href="/contact-us/">Let&apos;s Dive In <ArrowUpRight size={17} /></a>
          </div>
        </div>
      </section>
    </SitePageFrame>
  );
}

function CaseStudyCard({ project, index }: { project: ThemeProject; index: number }) {
  const caseStudyImage = project.caseStudyImage ?? project.image;
  return (
    <article className="theme-case-card">
      <img className={`theme-case-shape theme-case-shape--${index % 2 ? "left" : "right"}`} src={themeAsset(index % 2 ? "left-shape.png" : "rihght-shape.png")} alt="" aria-hidden="true" />
      <div className="theme-case-grid">
        <div className="theme-case-media"><a href={`/project/${project.slug}/`}><picture><source media="(max-width: 767px)" srcSet={siteAsset(project.mobileImage)} /><img src={siteAsset(caseStudyImage)} alt={`${project.name} project`} /></picture></a></div>
        <div className="theme-case-copy">
          <div className="theme-case-topline"><span>{project.category}</span><a className="square-arrow" href={`/project/${project.slug}/`} aria-label={`Open ${project.name}`}><ArrowUpRight size={20} /></a></div>
          <h2><a href={`/project/${project.slug}/`}>{project.name}</a>{(project.categories ?? [project.category]).map((category) => <span className="theme-case-category" key={category}>{category}</span>)}</h2>
          <p>{project.description}</p>
          <div className="theme-case-tools"><span>Tools:</span><img src={siteAsset("tool-1.png")} alt="Design tool" /><img src={siteAsset("tool-2.png")} alt="Development tool" /></div>
          <a className="theme-case-arrow" href={`/project/${project.slug}/`} aria-label={`View ${project.name}`}><ArrowUpRight size={25} /></a>
        </div>
      </div>
    </article>
  );
}

function RelatedProjects({ projects, currentSlug }: { projects: ThemeProject[]; currentSlug: string }) {
  const relatedProjects = projects.filter((project) => project.slug !== currentSlug);
  const carouselItems = relatedProjects.map((project) => ({
    id: project.slug,
    name: project.name,
    imageSrc: siteAsset(project.caseStudyImage ?? project.image),
    mobileImageSrc: siteAsset(project.mobileImage),
    categories: project.categories ?? project.category.split(/,\s*/),
    href: `/project/${project.slug}/`,
    description: project.description,
  }));
  return (
    <section className={`project-related project-related--${currentSlug}`}>
      <div className="shell"><h2>Relevant Case Studies</h2></div>
      <CaseStudyCarousel
        items={carouselItems}
        ariaLabel="Related case studies"
        className="work-viewport project-related-viewport"
        trackClassName="work-track project-related-track"
        itemSize="var(--work-card-width)"
        dotsClassName="work-dots project-related-dots"
        dotItems={carouselItems.slice(0, 5)}
      />
    </section>
  );
}

export function CaseStudiesPage() {
  const [visibleCount, setVisibleCount] = useState(6);
  return (
    <SitePageFrame className="theme-page--cases">
      <ThemeHero
        variant="cases"
        title={<>We Win, <span>When You Do.</span></>}
        description="You can’t build a winning product without a winning team. Discover what’s possible with our seasoned designers, veteran developers, & technical strategists."
      />
      <section className="theme-case-list">
        <div className="shell">
          <div className="theme-case-items">{themeProjects.slice(0, visibleCount).map((project, index) => <CaseStudyCard key={project.slug} project={project} index={index} />)}</div>
          {visibleCount < themeProjects.length ? <div className="theme-case-more"><button className="btn-theme" type="button" onClick={() => setVisibleCount(themeProjects.length)}>Show More <ArrowUpRight size={17} /></button></div> : null}
        </div>
      </section>
    </SitePageFrame>
  );
}

type ContactStepData = { name: string; company: string; email: string; phone: string; project: string; timeline: string; budget: string; message: string };

function ContactForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState<ContactStepData>({ name: "", company: "", email: "", phone: "", project: "", timeline: "", budget: "", message: "" });
  const update = (key: keyof ContactStepData, value: string) => setForm((current) => ({ ...current, [key]: value }));

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (step < 3) { setStep((current) => current + 1); return; }
    setError(false);
    try {
      const response = await fetch("/backend/contact.php", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: form.name, email: form.email, company: form.company, message: `${form.project}\nTimeline: ${form.timeline}\nBudget: ${form.budget}\n${form.message}` }) });
      if (!response.ok) throw new Error("Unable to send message");
      setSubmitted(true);
    } catch { setError(true); }
  };

  if (submitted) return <div className="theme-form-success"><img src={themeAsset("thank-you.svg")} alt="" aria-hidden="true" /><h2>We Heard You!</h2><p>Your message has been received. We will get back to you as soon as possible.</p><a className="btn-theme" href="/">Return To Home <ArrowUpRight size={17} /></a></div>;

  return (
    <form className="theme-form" onSubmit={handleSubmit}>
      <div className="theme-form-card">
        <div className="theme-form-progress" aria-label="Form progress">
          {["Your Information", "Project Information", "Let’s finalize"].map((label, index) => <div className={step === index + 1 ? "is-active" : step > index + 1 ? "is-complete" : ""} key={label}><span>0{index + 1}</span><strong>{label}</strong></div>)}
        </div>
        {step === 1 ? <div className="theme-form-fields"><label>Full Name<input required value={form.name} onChange={(event) => update("name", event.target.value)} /></label><label>Company/Organization<input value={form.company} onChange={(event) => update("company", event.target.value)} /></label><label>Your Email<input required type="email" value={form.email} onChange={(event) => update("email", event.target.value)} /></label><label>Contact Number<input value={form.phone} onChange={(event) => update("phone", event.target.value)} /></label></div> : null}
        {step === 2 ? <div className="theme-form-fields"><label className="theme-form-wide">Tell us about your project<textarea required rows={6} value={form.project} onChange={(event) => update("project", event.target.value)} /></label><label>Desired timeline<input value={form.timeline} onChange={(event) => update("timeline", event.target.value)} placeholder="e.g. 8 weeks" /></label><label>Estimated budget<select value={form.budget} onChange={(event) => update("budget", event.target.value)}><option value="">Select one</option><option>Under $10,000</option><option>$10,000–$25,000</option><option>$25,000+</option></select></label></div> : null}
        {step === 3 ? <div className="theme-form-fields"><label className="theme-form-wide">Anything else we should know?<textarea rows={8} value={form.message} onChange={(event) => update("message", event.target.value)} placeholder="Share any goals, constraints, or context." /></label></div> : null}
      </div>
      <div className="theme-form-actions">{step > 1 ? <button className="theme-form-back" type="button" onClick={() => setStep((current) => current - 1)}>Back</button> : <span /> }<button className="btn-theme" type="submit">{step === 3 ? "Submit" : "Next"} <ArrowUpRight size={17} /></button></div>
      {error ? <p className="form-status form-status--error" role="alert">We couldn’t send this automatically. Please email <a href="mailto:info@devdimensions.com">info@devdimensions.com</a>.</p> : null}
    </form>
  );
}

export function ContactPage() {
  return (
    <SitePageFrame className="theme-page--contact">
      <section className="theme-contact-hero">
        <img className="theme-hero-background" src={themeAsset("home-hero.png")} alt="" aria-hidden="true" />
        <div className="shell theme-contact-inner">
          <div className="theme-hero-copy">
            <h1>Let’s Collaborate. <span>We’re All Ears!</span></h1>
            <p>Unlock the gateway to collaboration by sharing your personal details, project aspirations, and desired timelines. Let our connection become the bridge that brings your vision to life, as we navigate together towards a shared destination.</p>
          </div>
          <div className="theme-contact-form"><ContactForm /></div>
        </div>
      </section>
    </SitePageFrame>
  );
}

export function ProjectDetailPage({ slug }: { slug: string }) {
  const project = getProject(slug);
  const related = themeProjects;
  return (
    <SitePageFrame className="theme-page--project">
      <section className="project-hero">
        {project.heroBackground ? <img className="project-hero-background" src={siteAsset("home-hero-1.png")} alt="" aria-hidden="true" /> : null}
        <img className="project-hero-cover" src={siteAsset(project.heroImage ?? project.image)} alt={`${project.name} project`} />
        <div className="shell project-hero-content">
          <div className="project-title-row"><h1>{project.name}</h1>{(project.categories ?? [project.category]).map((category) => <span className="theme-case-category" key={category}>{category}</span>)}<div className="project-tools">{project.heroTools.map((tool, index) => <img key={`${tool}-${index}`} src={siteAsset(tool)} alt={`${project.name} tool ${index + 1}`} />)}</div></div>
          <p>{project.detailDescription}</p>
        </div>
      </section>
      <section className="project-specs"><div className="shell project-spec-grid"><div><h2>Deliverables</h2><ul>{project.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h2>Typography</h2><ul className="project-type-list">{project.typography.map((item, index) => <li key={item} className={`type-${index}`}>{item}</li>)}</ul></div><div><h2>Color Palette</h2><div className="project-palette">{project.paletteImages.map((image, index) => <img key={`${image}-${index}`} src={siteAsset(image)} alt={`${project.name} palette ${index + 1}`} />)}</div></div></div></section>
      {project.featureSections.length ? <section className="project-before-after project-featured" aria-label="Featured project pages"><div className="shell"><div className="project-feature-grid">{project.featureSections.map((feature) => <div className="project-feature-item" key={feature.title}><h2>{feature.title}</h2><img src={siteAsset(feature.image)} alt={`${project.name} ${feature.title}`} decoding="async" /></div>)}</div></div></section> : null}
      <section className="project-shots"><div className="shell"><h2>{project.topShotsTitle}</h2><div className="project-gallery">{project.gallery.map((image, index) => <img key={`${image}-${index}`} src={siteAsset(image)} alt={`${project.name} project view ${index + 1}`} decoding="async" />)}</div></div></section>
      {project.showFinalSection && project.finalGallery.length ? <section className="project-shots project-final project-final--filled"><div className="shell"><h2>Relevant Case Studies</h2><div className="project-gallery project-gallery--single">{project.finalGallery.map((image, index) => <img key={`${image}-${index}`} src={siteAsset(image)} alt={`${project.name} final project view ${index + 1}`} decoding="async" />)}</div></div></section> : null}
      {project.showMobileSection && (project.mobileGallery.length || project.mobileTitle) ? <section className={`project-shots project-mobile ${project.mobileGallery.length ? "project-mobile--filled" : "project-mobile--empty"}`}><div className="shell"><h2>{project.mobileTitle}</h2>{project.mobileGallery.length ? <div className="project-gallery project-gallery--mobile">{project.mobileGallery.map((image, index) => <img key={`${image}-${index}`} src={siteAsset(image)} alt={`${project.name} mobile view ${index + 1}`} decoding="async" />)}</div> : null}</div></section> : null}
      <RelatedProjects projects={related} currentSlug={project.slug} />
    </SitePageFrame>
  );
}

const samplePosts = [
  { title: "Building a team that compounds", excerpt: "A practical look at aligning product strategy, engineering, and design from the first sprint.", image: "group-101.jpg", slug: "building-a-team-that-compounds" },
  { title: "The case for a 7-day trial", excerpt: "Why the right trial period creates clarity for both ambitious businesses and exceptional talent.", image: "about.jpg", slug: "the-case-for-a-7-day-trial" },
  { title: "Designing for momentum", excerpt: "Small decisions in research and UX can make a big difference to the pace of delivery.", image: "pop2.jpg", slug: "designing-for-momentum" },
];

function ListingPage({ title, subtitle = "", posts = samplePosts }: { title: string; subtitle?: string; posts?: typeof samplePosts }) {
  return <SitePageFrame className="theme-page--listing"><section className="listing-hero"><div className="shell"><h1>{title}</h1>{subtitle ? <p>{subtitle}</p> : null}</div></section><section className="listing-grid-section"><div className="shell"><div className="listing-grid">{posts.map((post) => <article className="listing-card" key={post.slug}><a href={`/post/${post.slug}/`}><img src={themeAsset(post.image)} alt="" /><div><h2>{post.title}</h2><p>{post.excerpt}</p><span className="btn-outline">Read More <ArrowUpRight size={15} /></span></div></a></article>)}</div></div></section></SitePageFrame>;
}

export function SearchPage() {
  const [query, setQuery] = useState("");
  useEffect(() => { setQuery(new URLSearchParams(window.location.search).get("s") ?? ""); }, []);
  const posts = query ? samplePosts.filter((post) => `${post.title} ${post.excerpt}`.toLowerCase().includes(query.toLowerCase())) : samplePosts;
  return <ListingPage title={`Search : ${query}`} posts={posts} />;
}

export function TaxonomyPage({ type, name }: { type: "Category" | "Tag" | "Author"; name: string }) {
  return <ListingPage title={`${type} : ${name}`} posts={samplePosts} />;
}

export function PostPage({ slug }: { slug: string }) {
  const post = samplePosts.find((item) => item.slug === slug) ?? samplePosts[0];
  return <SitePageFrame className="theme-page--post"><article className="post-page"><div className="shell"><img className="post-image" src={themeAsset(post.image)} alt="" /><h1>{post.title}</h1><p className="post-lede">{post.excerpt}</p><div className="post-body"><p>Great products are built through close collaboration. The best work starts with a clear objective, a thoughtful plan, and a team that knows how to move together.</p><p>DevDimensions helps ambitious businesses bring those pieces into focus, then turns the plan into a useful, durable digital experience.</p></div><div className="post-share"><span>Share this article</span><a href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(`/post/${post.slug}/`)}`} target="_blank" rel="noreferrer">Facebook</a><a href={`mailto:?subject=${encodeURIComponent(post.title)}`}>Email</a></div></div></article></SitePageFrame>;
}

export function NotFoundPage() {
  return <SitePageFrame className="theme-page--404"><section className="not-found"><div className="shell"><img src={themeAsset("thank-you.svg")} alt="" aria-hidden="true" /><p>Oops something went wrong!</p><h1>Page not found.</h1><h2>The page you are looking for is not found here.</h2><a className="btn-theme" href="/">Back to home <ArrowUpRight size={17} /></a></div></section></SitePageFrame>;
}
