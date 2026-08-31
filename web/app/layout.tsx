import type { Metadata } from "next";
import "../design-system/styles.css";

export const metadata: Metadata = {
  title: "Solomon Islands National University",
  description: "The national university of Solomon Islands — courses, programs, admissions, and news.",
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
