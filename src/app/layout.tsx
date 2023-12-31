import "@/assets/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Inter, Inconsolata, Lora } from "next/font/google";
import Providers from "@/components/Provider";
import Header from "@/views/header";
import Footer from "@/views/footer";

export const inter = Inter({
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-inter",
  fallback: ["Helvetica", "sans-serif"],
  subsets: ["latin"],
});

export const inconsolata = Inconsolata({
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-inconsolata",
  fallback: ["Courier New", "Courier", "monospace"],
  subsets: ["latin"],
});

export const lora = Lora({
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-lora",
  fallback: ["Times New Roman", "Times", "serif"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Shope Online",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${inconsolata.variable} ${lora.variable}`}
    >
      <body className={`px-5 xl:px-16 ${inter.className}`}>
        <Providers>
          <div className="flex flex-col min-h-[100vh]">
            <Header />
            <main className="flex-grow  md:mt-40">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
