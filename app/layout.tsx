import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Renzaflow — Deterministic, Code-Driven Video",
  description:
    "Turn 3D models and HTML scenes into MP4 videos with frame-exact precision. Driven by Claude Code, Codex, or Cursor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
