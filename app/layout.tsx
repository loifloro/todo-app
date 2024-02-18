import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const josefin_sans = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | Todo app",
  description: "Todo app challenge on Frontend Mentor using NextJS Server Actions, useFormStatus, useFormState",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`
          ${josefin_sans.className}
        `}
        >
          <Providers>
            {children}
          </Providers>
      </body>
    </html>
  );
}
