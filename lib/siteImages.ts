export const LOGO = "/images/gallery/logo.jpeg";
export const PRESIDENT = "/images/gallery/president.jpeg";

const galleryFiles = [
  "WhatsApp Image 2026-06-15 at 15.22.30.jpeg",
  "WhatsApp Image 2026-06-15 at 15.22.33.jpeg",
  "WhatsApp Image 2026-06-15 at 15.22.34.jpeg",
  "WhatsApp Image 2026-06-15 at 15.22.39.jpeg",
  "WhatsApp Image 2026-06-15 at 15.22.40.jpeg",
  "WhatsApp Image 2026-06-15 at 15.22.42.jpeg",
  "WhatsApp Image 2026-06-15 at 15.22.46.jpeg",
  "WhatsApp Image 2026-06-15 at 15.22.57.jpeg",
  "WhatsApp Image 2026-06-15 at 15.51.34.jpeg",
  "postcss.config.jpeg",
];

export const GALLERY_IMAGES = galleryFiles.map(
  (file) => `/images/gallery/${encodeURIComponent(file)}`
);
