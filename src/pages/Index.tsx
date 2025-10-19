import { useState, useEffect } from "react";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Navigation } from "@/components/Navigation";
import { PresentationSection } from "@/components/PresentationSection";
import { CSEJourney } from "@/components/sections/CSEJourney";
import { WhyChooseCSE } from "@/components/sections/WhyChooseCSE";
import { WhatIsCSE } from "@/components/sections/WhatIsCSE";
import { ImportanceOfProgramming } from "@/components/sections/ImportanceOfProgramming";
import { CoreVsNonEngineering } from "@/components/sections/CoreVsNonEngineering";
import { CGPAImportance } from "@/components/sections/CGPAImportance";
import { TeamWork } from "@/components/sections/TeamWork";
import { WhatIsProgramming } from "@/components/sections/WhatIsProgramming";
import { BeginnerChallenges } from "@/components/sections/BeginnerChallenges";
import { WhatToDo } from "@/components/sections/WhatToDo";
import { QAndA } from "@/components/sections/QAndA";
import { Warning } from "@/components/sections/Warning";
import { ThankYou } from "@/components/sections/ThankYou";


const Index = () => {
    const [activeSection, setActiveSection] = useState(0);
    const totalSections = 11;

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(index);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavigate = (index: number) => {
        const section = document.querySelectorAll("section")[index];
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="relative overflow-x-hidden snap-y snap-mandatory h-screen overflow-y-scroll">
            <ParticlesBackground />
            <Navigation
                activeSection={activeSection}
                totalSections={totalSections}
                onNavigate={handleNavigate}
            />

            <PresentationSection id="cse-journey" title="">
                <CSEJourney />
            </PresentationSection>

            <PresentationSection id="why-cse" title="Why Choose CSE?">
                <WhyChooseCSE />
            </PresentationSection>

            <PresentationSection id="what-is-cse" title="What is CSE?">
                <WhatIsCSE />
            </PresentationSection>

            <PresentationSection id="programming-importance" title="Importance of Programming">
                <ImportanceOfProgramming />
            </PresentationSection>

            <PresentationSection id="core-vs-non" title="Core vs Non-Engineering Subjects">
                <CoreVsNonEngineering />
            </PresentationSection>

            <PresentationSection id="cgpa" title="Is CGPA Really That Necessary?">
                <CGPAImportance />
            </PresentationSection>

            <PresentationSection id="teamwork" title="Team Work">
                <TeamWork />
            </PresentationSection>

            <PresentationSection id="what-programming" title="What is Programming & SPL">
                <WhatIsProgramming />
            </PresentationSection>

            <PresentationSection id="challenges" title="Beginner Problem Solver Challenges">
                <BeginnerChallenges />
            </PresentationSection>

            <PresentationSection id="warning" title="">
                <Warning />
            </PresentationSection>
            <PresentationSection id="action-plan" title="What Should You Actually Do?">
                <WhatToDo />
            </PresentationSection>

            <PresentationSection id="qna" title="">
                <QAndA />
            </PresentationSection>
            <PresentationSection id="thankyou" title="">
                <ThankYou />
            </PresentationSection>


        </div>
    );
};

export default Index;
