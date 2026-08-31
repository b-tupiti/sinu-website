import type { Metadata } from "next";
import "../design-system/styles.css";

export const metadata: Metadata = {
  title: "Solomon Islands National University",
  description:
    "Solomon Islands National University (SINU) — the nation's leading tertiary institution, offering higher education and research across campuses in the Solomon Islands.",
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
