"use client";

import ApplicationProcess from "@/components/organisms/ApplicationProcess";
import EvaluationProcess from "@/components/organisms/EvaluationProcess";
import Faq from "@/components/organisms/Faq";
import Hero from "@/components/organisms/Hero";
import InovationCollab from "@/components/organisms/InovationsCollab";
import Process from "@/components/organisms/Process";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <EvaluationProcess></EvaluationProcess>
      <InovationCollab></InovationCollab>
      <Process></Process>
      <Faq></Faq>
      <ApplicationProcess></ApplicationProcess>
    </>
  );
}
