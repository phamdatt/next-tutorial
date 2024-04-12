import type { Metadata } from "next";
import type { Viewport } from "next";
import AppProvider from "../provider/app-provider";
import "./globals.css";
export const metadata: Metadata = {
  // metadataBase: new URL("http://192.168.0.41:3000/"),
  title: "Loan Borrower Portal",
  description: "We dare you compare",
  keywords: ["Loan Borrower", "Loan Factory", "Borrower Portal"],
  applicationName: "Borrower Portal",
  other: {
    category: ["Finanncial", "Loan", "Borrower"],
  },
  openGraph: {
    images:
      "https://lh3.googleusercontent.com/BizTay7uqzkzFmDK0UNsSI4EL4oqZ62vtQR8-od0Xwhqn_tY_sNuFnpN1fGjZiqxayMEMEbGLDh_uk4mN-UqFfMMhEoaf3bp-Msw=s32",
  },
  icons: {
    icon: "https://lh3.googleusercontent.com/BizTay7uqzkzFmDK0UNsSI4EL4oqZ62vtQR8-od0Xwhqn_tY_sNuFnpN1fGjZiqxayMEMEbGLDh_uk4mN-UqFfMMhEoaf3bp-Msw=s32",
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
