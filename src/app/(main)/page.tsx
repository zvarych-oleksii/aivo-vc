"use client";

import ApplicationProcess from "@/components/organisms/ApplicationProcess";
import Approach from "@/components/organisms/Approach/Approach";
import CollaborationModels from "@/components/organisms/CollaborationModels";
import EvaluationProcess from "@/components/organisms/EvaluationProcess";
import Faq from "@/components/organisms/Faq";
import Founders from "@/components/organisms/Founders";
import Hero from "@/components/organisms/Hero";
import InovationCollab from "@/components/organisms/InovationsCollab";
import Process from "@/components/organisms/Process";
import Portfolio from "@/components/organisms/Portfolio";
import {LandingSectionsId} from "@/lib/common/enums/landingSectionsId";

export default function Home() {
    return (
        <>
            <Hero></Hero>
            <InovationCollab id={LandingSectionsId.Numbers}></InovationCollab>
            <Process id={LandingSectionsId.Process}></Process>
            <Portfolio id={LandingSectionsId.Portfolio}></Portfolio>
            <Approach id={LandingSectionsId.Approach}></Approach>
            <Founders id={LandingSectionsId.Team}></Founders>
            <EvaluationProcess></EvaluationProcess>
            <CollaborationModels id={LandingSectionsId.Models}></CollaborationModels>
            <Faq id={LandingSectionsId.FAQs}></Faq>
            <ApplicationProcess></ApplicationProcess>
        </>
    );
}
