import type {Metadata} from "next";
import "swiper/swiper-bundle.css";
import Footer from "@/components/layout/Footer";
import InvestorsHeader from "@/components/layout/InvestorsHeader";

export const metadata: Metadata = {
    title: "Aivo VC",
    description: "Aivo VC",
};

export default function InvestorsLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        <InvestorsHeader/>
        <main>{children}</main>
        <Footer/>
        </>
    );
}
