import "./globals.css";

export const metadata = {
  title: "FORMA S - Interior Design & Furniture Manufacturing",
  description: "FORMA S Ltd. is a company with an established presence in interior design and furniture manufacturing for over 30 years.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#e3e4d8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
