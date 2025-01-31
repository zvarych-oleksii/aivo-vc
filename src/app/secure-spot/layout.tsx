import type {Metadata} from "next";
import "swiper/swiper-bundle.css";
import Footer from "@/components/layout/Footer";
import SecureSpotHeader from "@/components/layout/SecureSpotHeader";

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
        <html lang="en">
        <body>
        <SecureSpotHeader/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    );
}
