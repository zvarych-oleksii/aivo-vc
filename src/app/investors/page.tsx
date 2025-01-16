"use client";

import Approach from "@/components/organisms/Approach/Approach";
import Faq from "@/components/organisms/Faq";
import Founders from "@/components/organisms/Founders";
import Hero from "@/components/organisms/Hero";
import InovationCollab from "@/components/organisms/InovationsCollab";
import ContactUs from "@/components/organisms/ContactUs";

export default function Page() {
    return (
        <>
            <Hero></Hero>
            <InovationCollab></InovationCollab>
            <Approach></Approach>
            <Founders></Founders>
            <Faq></Faq>
            <ContactUs></ContactUs>
        </>
    );
}
