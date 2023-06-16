import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Table from "../Components/Table/Table";

import { amendmentCerti } from "../Variables/Variables"
const AmendmentCertificate = () => {
	return (
		<>
			<Navbar />
			<div className="p-5 w-full">
				<div className="border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto">
					<p className="md:text-xl text-lg font-semibold text-primary-700 text-center capitalize">Amendment Certificate</p>
				</div>
				<Table rowLimit={30} columns={["S No", "Society Name", "Proposal Type", "State/UT", "District Name", "Certificate Date", "Certificate"]} classes={"border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5 overflow-x-scroll noScrollBar"} data={amendmentCerti} />
			</div>
			<Footer />
		</>
	)
}

export default AmendmentCertificate