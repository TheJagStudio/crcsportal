import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Table from "../Components/Table/Table";

import { latestCerti } from "../Variables/Variables"
const LatestCerificate = () => {
	return (
		<>
			<Navbar />
			<div className="p-5 w-full bg-white mt-3 px-10 mb-[39rem] lg:mb-[23rem]  shadow-2xl rounded-b-3xl">
				<div className="border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto">
					<p className="md:text-xl text-lg font-semibold text-primary-700 text-center capitalize">Latest Certificates</p>
				</div>
				<Table rowLimit={30} columns={["S No", "Society Name", "Proposal Type", "State/UT", "District Name", "Certificate Date", "Certificate"]} classes={"border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5 overflow-x-scroll noScrollBar"} data={latestCerti} />
			</div>
			<Footer />
		</>
	)
}

export default LatestCerificate