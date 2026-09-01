import type { Metadata } from "next";
import "../design-system/styles.css";

const SITE_URL = "https://sinu.rebays.com.sb";
const SITE_NAME = "Solomon Islands National University";
const SITE_DESCRIPTION =
  "Solomon Islands National University (SINU) — the nation's leading tertiary institution, offering higher education and research across campuses in the Solomon Islands.";
const OG_IMAGE = "/og-image.jpg";

// Every page inherits this metadata; per-page generateMetadata()
// overrides only the fields it sets, so a page without its own
// openGraph.images picks these up automatically. metadataBase turns
// the relative /sinu-logo-r.png path into an absolute URL for
// crawlers.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "var(--bg-page)", color: "var(--text-body)" }}>{children}</body>
    </html>
  );
}
