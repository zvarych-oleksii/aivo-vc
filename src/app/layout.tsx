import type {Metadata} from "next";
import "../styles/style.scss";
import "swiper/swiper-bundle.css";

export const metadata: Metadata = {
    title: "Aivo VC",
    description: "Aivo VC",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
        <body>
        {children}
        </body>
        </html>
    );
}
