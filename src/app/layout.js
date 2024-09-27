
import GoogleTagManager from "@/components/googleTagManager";
import "./globals.css";

export const metadata = {
  title: "OVA2",
  description: "Development,Training, Placement, & Staffing",
  canonical: "https://ova2consultants.com/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GoogleTagManager gtmId="G-HV9TW7VJJN" />
        {children}
      </body>
    </html>
  );
}
