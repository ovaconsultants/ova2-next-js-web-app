import './ui/css/bootstrap.css';
import './ui/css/font-awesome.min.css';
import './ui/css/responsive.css';
import './ui/css/owl.carousel.min.css';
import './ui/css/css2.css';
import './ui/css/style.css';
import './ui/css/style.scss';


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
           <head> 
              
          
            </head> 
            <body>{children}</body>
        </html>
    );
}