import { Inter } from '@next/font/google'; // Import Inter from next/font/google
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // This is the custom variable for Inter
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Dev Ifzy",
  description: "Created by Dev Ifzy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
