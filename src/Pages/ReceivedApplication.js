import React from "react";

// Components
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Table from "../Components/Table/Table";

// Data
import { receivedApplication } from "../Variables/Variables";

const ReceivedApplication = () => {
	return (
		<>
			<Navbar />
			<div className="p-5 w-full">
				<Table rowLimit={100} columns={["Sr No", "Society Name", "State Name", "District Name", "Type", "Received", "Diposal Before"]} data={receivedApplication} classes={"border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5 overflow-x-scroll noScrollBar"} />
			</div>
			<Footer />
		</>
	);
};

export default ReceivedApplication;
