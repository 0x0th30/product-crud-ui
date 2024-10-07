import type { Metadata } from "next";
import "./styles/globals.css";
import { Providers } from "./providers/providers";

export const metadata: Metadata = {
  title: "Product Crud UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
