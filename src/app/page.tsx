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

export default function Home() {
  return (
    <>
      <Hero></Hero>
        <InovationCollab></InovationCollab>
        <Process></Process>
        <Portfolio></Portfolio>
      <Approach></Approach>
      <Founders></Founders>
        <EvaluationProcess></EvaluationProcess>
      <CollaborationModels></CollaborationModels>
      <Faq></Faq>
      <ApplicationProcess></ApplicationProcess>
    </>
  );
}
