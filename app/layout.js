import "@css/aos.css";
import "@css/bootstrap.min.css";
import "@css/flaticon.min.css";
import "@css/fontawesome-5.14.0.min.css";
import "@css/magnific-popup.min.css";
import "@css/nice-select.min.css";
import "@css/slick.min.css";
import "@css/style.css";
import "./globals.css";
import "rc-slider/assets/index.css";

export const metadata = {
  title:
    "Srilankan Wonders - Hidden Sri Lanka - Explore Unseen Destinations & Secret Spots",
  description:
    "Discover hidden beaches, secret waterfalls, ancient temples, scenic trails, and unique wildlife spots in Sri Lanka. Your ultimate guide to Sri Lanka's best-kept travel secrets.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
