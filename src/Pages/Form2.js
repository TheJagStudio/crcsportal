import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Form2 = () => {
	return (
		<>
			<Navbar />
			<div className="p-5 w-full">
				<div className="border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto">
					<p className="md:text-xl text-lg font-semibold text-primary-700 text-center capitalize">Form - II</p>
				</div>
				<div className="border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5">
					<iframe id="formPDF" name="formPDF" src="/docs/Form2.pdf" class="w-full mx-auto h-auto aspect-[1.4/1] rounded-lg"></iframe>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Form2;
