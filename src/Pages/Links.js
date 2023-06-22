import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Table from "../Components/Table/Table";

import { Link } from "react-router-dom";

import { rejectionOrder } from "../Variables/Variables";
const Links = () => {
	const data = [
		{
			name: "Deptt. of Agriculture & Cooperation",
			link: "https://agricoop.nic.in/",
		},
		{
			name: "Andhra Pradesh",
			link: "http://www.cooperation.ap.gov.in/",
		},
		{
			name: "Assam",
			link: "http://online.assam.gov.in/cooperation",
		},
		{
			name: "Karnataka",
			link: "http://sahakara.kar.gov.in/",
		},
		{
			name: "Punjab",
			link: "https://punjabcooperation.gov.in/",
		},
		{
			name: "Bihar",
			link: "http://cooperative.bih.nic.in/",
		},
		{
			name: "Chhattisgarh",
			link: "https://coop.cg.gov.in/",
		},
		{
			name: "Jharkhand",
			link: "http://coop.jharkhand.gov.in/",
		},
		{
			name: "Madhya Pradesh",
			link: "https://cooperatives.mp.gov.in/hi",
		},
		{
			name: "Maharashtra",
			link: "http://sahakarayukta.maharashtra.gov.in/Site/Home/Index.aspx",
		},
		{
			name: "Kerala",
			link: "https://www.kerala.gov.in/index.php?option=com_content&view=category&layout=blog&id=48&Itemid=334",
		},
		{
			name: "Odisha",
			link: "http://www.rcsorissa.nic.in/",
		},
		{
			name: "Rajasthan",
			link: "http://www.rajcooperatives.nic.in/",
		},
		{
			name: "Gujarat",
			link: "http://rcs.gujarat.gov.in/index.htm",
		},
		{
			name: "West Bengal",
			link: "https://coopwb.org/",
		},
	];

	return (
		<>
			<Navbar />
			<div className="p-5 w-full bg-white mt-3 px-10 mb-[39rem] lg:mb-[23rem]  shadow-2xl rounded-b-3xl">
				<div className="border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto">
					<p className="md:text-xl text-lg font-semibold text-primary-700 text-center capitalize">Related Links</p>
				</div>
				<div className="border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-6">
					<ul className="mx-5">
						{data.map((item, i) => (
							<li className="list-disc text-sm font-medium origin-left hover:font-bold hover:scale-110 transition-all duration-300">
								<Link to={item.link}>{item.name}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Links;
