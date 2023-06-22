import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Checklist = () => {
	return (
		<>
			<Navbar />
			<div className="p-5 w-full bg-white mt-3 px-10 mb-[39rem] lg:mb-[23rem]  shadow-2xl rounded-b-3xl">
				<div className="border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto">
					<p className="md:text-xl text-lg font-semibold text-primary-700 text-center capitalize">Check List regarding documents to be submitted with the proposal for New Registration</p>
				</div>
				<div className="border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5">
					<p className="md:text-sm text-lg font-semibold text-primary-700 text-center capitalize">Check List regarding documents to be submitted with the proposal for the registration of a Multi state Cooperative Society.</p>
					<div className="px-6 mb-8">
						<p className="font-bold text-primary-500 text-xl my-8">[A]</p>
						<ol className="list-decimal px-8">
							<li className="font-medium text-justify lg:text-left">Form 1: To be submitted in the format annexed with the MSCS Act 2002 along with the documents required under Form I.</li>
							<li className="font-medium text-justify lg:text-left">A certificate from the bank stating credit balance there in favour of the proposed multi-state co-operative society.</li>
							<li className="font-medium text-justify lg:text-left">A scheme explaining how the proposed multi state co-operative society has reasonable prospects of becoming a viable unit.</li>
							<li className="font-medium text-justify lg:text-left">Four copies of bye-laws in original.</li>
							<li className="font-medium text-justify lg:text-left">Proposed area of operation for registration shall initially be permitted for two contagious states only.</li>
							<li className="font-medium text-justify lg:text-left">List of at least 50 members from each state. The lsit has to be submitted in the format annexed with the MSCS Act 2002 along with the copies of ID prooofs of the members duly attested by Chief promoter.</li>
							<li className="font-medium text-justify lg:text-left">Certified copies of the resolutions passed by the proposed society along with the certified copy of the resolution of the promoters which shall specify the name and address of one of the applicant(s) to whom the Central Registrar may address correspondence under the rules before registration and dispatch or hand over registration documents.</li>
							<li className="font-medium text-justify lg:text-left">Contact number and e-mail address of the Chief Promoter or Society on cover page.</li>
						</ol>
					</div>
					<div className="px-6 mb-8">
						<p className="font-bold text-primary-500 text-xl my-8">[B]</p>
						<p className="font-bold text-primary-500 text-xl my-8">For societies having objects related to thrift and credit and for multi-purpose societies following additional documents are required to be submitted along with documents mentioned at point [A] above:</p>
						<ol className="list-decimal px-8">
							<li className="font-medium text-justify lg:text-left">No objection Certificate from the Registrar of Cooperative Societies of the States/U.T. where the area of operation of the society is proposed to be confined.</li>
							<li className="font-medium text-justify lg:text-left">A certificate to the effect that the credentials of the Chief Promoter/Promoters have been verified by the Registrar of Co-operative Societies of the state where the head office is proposed to be located.</li>
							</ol>
					</div>
					<div className="px-6 mb-8">
						<p className="font-bold text-primary-500 text-xl my-8">All documents to be submitted in original with the signatures of the Chief Promoter/Promoters on each page.</p>
						<p className="font-medium text-justify lg:text-left">Note: Societies which are already registered under the MSCS Act, 2002 and are desirous of expanding their area of operations falling under category (B) above shall be required to submit an NoC as mentioned at [B](1)</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Checklist;
