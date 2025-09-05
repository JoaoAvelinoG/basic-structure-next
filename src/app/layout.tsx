import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nome do projeto",
  description: "Descrição do Projeto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
