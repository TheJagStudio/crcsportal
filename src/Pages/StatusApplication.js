import React from "react";

// Components
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Table from "../Components/Table/Table";

// Data
import { statusApplication } from "../Variables/Variables";

const StatusApplication = () => {
	return (
		<>
			<Navbar />
			<div className="p-5 w-full">
				<Table rowLimit={50} columns={["Sr. No", "Society Name", "Proposal Type", "State", "District", "Application Date", "Notice", "Order", "Certificate"]} data={statusApplication} classes={"border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5 overflow-x-scroll noScrollBar"} />
			</div>
			<Footer />
		</>
	);
};

export default StatusApplication;
