
import GoogleTagManager from "@/components/googleTagManager";
import "./globals.css";
//import './App.css';
//import './plugins/bootstrap/bootstrap.min.css';
// import './plugins/Ionicons/css/ionicons.min.css';
// import './plugins/animate-css/animate.css';
// import './plugins/magnific-popup/magnific-popup.css';
// import './plugins/slick/slick.css';
import '../scss/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

export const metadata = {
  title: "OVA2",
  description: "Development,Training, Placement, & Staffing",
  canonical: "https://ova2consultants.com/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GoogleTagManager gtmId="GTM-MKDXM9BJ" />
        {children}
      </body>
    </html>
  );
}
