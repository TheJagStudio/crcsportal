import React from "react";

// Components
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Table from "../Components/Table/Table";

// Data
import { filedAROfln } from "../Variables/Variables";

const FiledAROffline = () => {
	return (
		<>
			<Navbar />
			<div className="p-5 w-full bg-white mt-3 px-10 mb-[39rem] lg:mb-[23rem]  shadow-2xl rounded-b-3xl">
				<div className={`border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto`}>
					<p className="md:text-xl text-lg font-semibold text-primary-700 text-center capitalize">Alert Message sent to societies for Non filing of Annual Returns : 9755</p>
				</div>
				<Table rowLimit={100} columns={["Sr No", "Name", "Reg No", "State/UT", "Year", "Message Date"]} data={filedAROfln} classes={"border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5 overflow-x-scroll noScrollBar"} />
			</div>
			<Footer />
		</>
	);
};

export default FiledAROffline;
