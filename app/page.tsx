import React from "react";
import CompanionCard from "@/components/CompanionCard";
import CompanionLists from "@/components/CompanionLists";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";

const Page = () => {
	return (
		<main>
			<h1 className="">Popular Companions</h1>

			<section className="home-section">
				<CompanionCard
					id="123"
					name="Neura the Brainy Explorer"
					topic="Neural Network of the Brain"
					duration={45}
					subject="science"
					color="#E5D0FF"
				/>
				<CompanionCard
					id="456"
					name="Countsy the Number Wizard"
					topic="Derivatives & Integrals"
					duration={30}
					subject="maths"
					color="#FFDA6E"
				/>
				<CompanionCard
					id="789"
					name="Verba the Vocabulary Builder"
					topic="English Literature"
					duration={30}
					subject="language"
					color="#BDE7FF"
				/>
			</section>

			<section className="home-section">
				<CompanionLists
					title="Recently completed lessons"
					companions={recentSessions}
					classNames="w-2/3 max-lg:w-full"
				/>
				<CTA />
			</section>
		</main>
	);
};

export default Page;
