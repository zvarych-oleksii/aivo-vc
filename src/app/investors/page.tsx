"use client";

import Approach from "@/components/organisms/Approach/Approach";
import Faq from "@/components/organisms/Faq";
import Founders from "@/components/organisms/Founders";
import InovationCollab from "@/components/organisms/InovationsCollab";
import ContactUs from "@/components/organisms/ContactUs";
import InvestorsHero from "@/components/organisms/InvestorsHero";
import {InvestorsSectionsId} from "@/lib/common/enums/investorsSectionsId";
import Portfolio from "@/components/organisms/Portfolio";
import ForInvestors from "@/components/organisms/ForInvestors/ForInvestors";

export default function Page() {
    return (
        <>
            <InvestorsHero></InvestorsHero>
            <ForInvestors id={InvestorsSectionsId.ForInvestors}></ForInvestors>
            <InovationCollab id={InvestorsSectionsId.Numbers}></InovationCollab>
            <Approach id={InvestorsSectionsId.Approach}></Approach>
            <Founders id={InvestorsSectionsId.Team}></Founders>
            <Portfolio id={InvestorsSectionsId.Portfolio}/>
            <Faq id={InvestorsSectionsId.FAQs}></Faq>
            <ContactUs id={InvestorsSectionsId.ContactUs}></ContactUs>
        </>
    );
}
