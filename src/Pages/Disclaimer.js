import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Disclaimer = () => {
	return (
		<>
			<Navbar />
			<div className="bg-white mt-3 p-5 px-10 w-full mb-[39rem] lg:mb-[23rem]  shadow-2xl rounded-b-3xl mx-auto gap-5 h-fit transition-all duration-500">
				<div className="border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto">
					<p className="md:text-xl text-lg font-semibold text-primary-700 text-center capitalize">Disclaimer</p>
				</div>
				<div className="border-2 border-primary-600 p-8 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5">
					<p className="text-primary-500 font-semibold leading-[25px]">
						This Website is designed & developed by National Informatics Center. The content owned and maintained by Department of Agriculture, Cooperation and Farmers Welfare, Ministry of Agriculture and Farmers Welfare, Government of India. The contents of this website are for information purposes only, enabling the public at large to have a quick and an easy access to information and do not have any legal sanctity. Though every effort is made to provide accurate and updated information, it is likely that the some details like Seed Dealers, Seed varieties etc. may have changed prior to their update in the website. Hence, we do not assume any legal liability on the completeness, accuracy or usefulness of the contents provided in this website. The links are provided to other
						external sites in some web pages/documents. We do not take responsibility for the accuracy of the contents in those sites. The hyperlink given to external sites do not constitute an endorsement of information, products or services offered by these sites. Despite our best efforts, we do not guarantee that the documents in this site are free from infection by computer viruses etc.
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Disclaimer;
