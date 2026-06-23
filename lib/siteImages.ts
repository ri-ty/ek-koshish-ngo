import { assetPath } from "./assetPath";

export const LOGO = assetPath("/images/gallery/logo.jpeg");
export const PRESIDENT = assetPath("/images/gallery/president.jpeg");

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

export const GALLERY_IMAGES = galleryFiles.map((file) =>
  assetPath(`/images/gallery/${encodeURIComponent(file)}`)
);

export const CERT_IMAGES = [
  assetPath("/images/certificates/certificate.jpg"),
  assetPath("/images/certificates/lei-certificate.jpg"),
  assetPath("/images/certificates/csr-approval.jpg"),
];

export const CERT_PDFS = [
  assetPath("/pdfs/certificate.pdf"),
  assetPath("/pdfs/LEI%20Certificate%20984500N4BD738D90CC64.pdf"),
  assetPath("/pdfs/Approval%20Letter%20for%20form%20CSR1%20(8).PDF"),
];
