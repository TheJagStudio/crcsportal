import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Table from "../Components/Table/Table";

const OrderSheet = () => {
	return (
		<>
			<Navbar />
			<div className="p-5 w-full">
				<div className="border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto">
					<p className="md:text-xl text-lg font-semibold text-primary-700 text-center capitalize">COMPLAINTS & ISSUES</p>
				</div>
				<Table rowLimit={30} columns={["S No", "Subject of the Topic", "Issued Date", "Download File"]} classes={"border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5 overflow-x-scroll noScrollBar"} />
			</div>
			<Footer />
		</>
	);
};

export default OrderSheet;
