import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const ContactUs = () => {
	const data = [
		{
			position: "Central Registrar",
			name: "Shri Vijay Kumar,IAS",
			designation: "Additional Secretary & Central Registrar of Cooperative Societies",
			address: "Ministry of Cooperation,\n Floor-I, Atal Akshay Urja Bhawan,\n Lodhi Road, CGO Complex,\n New Delhi PIN 110 003\n (Landmark : Jawaharlal Nehru Statdium)",
		},
		{
			position: "Deputy Secretary",
			name: "Shri Kapil Meena,",
			designation: "Deputy Secretary",
			address: "Ministry of Cooperation,\n New Delhi - PIN 110 001",
		},
		{
			position: "Deputy Commissioner",
			name: "Shri Jitender Nagar,",
			designation: "Deputy Commissioner",
			address: "Room No 298,\nMinistry of Cooperation,\n New Delhi - PIN 110 001",
		},
		{
			position: "Assistant Commissioner",
			name: "Smt. Nisha Sagar,",
			designation: "Assistant Commissioner",
			address: "Room No 442,\nMinistry of Cooperation,\n New Delhi - PIN 110 001\nPhone : 011-23388911  ext. 4998\nEmail-ID : regmscs@gmail.com",
		},
		{
			position: "Under secretary",
			name: "Shri Amit Kumar Rawat,",
			designation: "Under secretary",
			address: "Ministry of Cooperation,\n New Delhi - PIN 110 001",
		},
		{
			position: "Deputy Director",
			name: "Ms Sucheta Sharma,",
			designation: "Deputy Director",
			address: "Ministry of Cooperation,\n New Delhi - PIN 110 001",
		},
		{
			position: "Section Officer",
			multi: true,
			name: ["Shri Rajendra Singh", "Shri Prasant Srivastava"],
			designation: ["Section Officer L & M Section", "Section Officer"],
			address: ["Room No 388\nMinistry of Cooperation,\nNew Delhi - PIN 110 001\nPhone :011-23388911 ext 4699/ 4397\nEmail ID : lm.section397@gmail.com and regmscs@gmail.com", "Ministry of Cooperation,\n New Delhi - PIN 110 001"],
		},
		{
			position: "Sr. Technical Assistant & SSO",
			multi: true,
			name: ["Shri Vinay Ginni", "Shri Amit Sachdeva", "Ms Divya Jain"],
			designation: ["Sr. Technical Assistant (Registration)", "Sr. Technical Assistant (Management)", "Senior Statistical Officer (SSO)"],
			address: ["Room No 399-A\nMinistry of Cooperation, Krishi Bhawan,\nNew Delhi - PIN 110 001\nPhone : 011-23388911 ext 4998\nEmail: regmscs@gmail.com", "Room No 388\nMinistry of Cooperation, Krishi Bhawan,\nNew Delhi - PIN 110 001\nPhone : 011-23388991 ext 4699/ 4397\nEmail-ID :lm.section397@gmail.com", "Room No 388\nMinistry of Cooperation, Krishi Bhawan,\nNew Delhi - PIN 110 001\nPhone : 011-23388991 ext 4699/ 4397\nEmail-ID :lm.section397@gmail.com"],
		},
	];
	return (
		<>
			<Navbar />
			<div className="p-5 w-full bg-white mt-3 px-10 mb-[39rem] lg:mb-[23rem]  shadow-2xl rounded-b-3xl">
				<div className="border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[75%] w-full mx-auto">
					<p className="md:text-xl text-lg font-semibold text-primary-700 text-center capitalize">CONTACT US</p>
				</div>
				{data.map((item, index) => (
					<div key={index}>
						<div
							id={item.position + "_Head"}
							className="bg-primary-500 p-4 py-3 rounded-xl shadow-lg lg:w-[75%] w-full mx-auto mt-5 overflow-x-scroll cursor-pointer noScrollBar"
							onClick={() => {
								document.getElementById(item.position + "_Head").classList.remove("rounded-xl");
								document.getElementById(item.position + "_Head").classList.add("rounded-t-xl");
								document.getElementById(item.position + "_Content").classList.add("h-fit");
								document.getElementById(item.position + "_Content").classList.remove("h-0");
								document.getElementById(item.position + "_Content").classList.add("border-2");
								document.getElementById(item.position + "_Content").classList.remove("border-none");
								document.getElementById(item.position + "_Content").classList.remove("py-0");
								for (let i = 0; i < data.length; i++) {
									if (i !== index) {
										document.getElementById(data[i].position + "_Head").classList.remove("rounded-t-xl");
										if (!document.getElementById(data[i].position + "_Head").classList.contains("rounded-xl")) {
											document.getElementById(data[i].position + "_Head").classList.add("rounded-xl");
										}
										document.getElementById(data[i].position + "_Content").classList.remove("h-fit");
										if (!document.getElementById(data[i].position + "_Content").classList.contains("h-0")) {
											document.getElementById(data[i].position + "_Content").classList.add("h-0");
										}
										document.getElementById(data[i].position + "_Content").classList.remove("border-2");
										if (!document.getElementById(data[i].position + "_Content").classList.contains("border-none")) {
											document.getElementById(data[i].position + "_Content").classList.add("border-none");
										}
										if (!document.getElementById(data[i].position + "_Content").classList.contains("py-0")) {
											document.getElementById(data[i].position + "_Content").classList.add("py-0");
										}
									}
								}
							}}
						>
							<p className="text-white font-bold">{item.position}</p>
						</div>
						<div className="flex items-center justify-center text-center">
							<div className="lg:w-[75%] w-full">
								<div id={item.position + "_Content"} className="h-0 w-full overflow-hidden border-none border-primary-500 rounded-b-xl py-0">
									{item.multi !== undefined ? (
										<div className="flex gap-5 flex-nowrap items-center justify-center px-3">
											{item.name.map((index2, index3) => (
												<p className="my-2 px-3 border-r-2 last:border-none border-primary-500">
													<b className={item.name[index3] !== "" || item.designation[index3] != "" ? "" : "hidden"}>
														<span className={item.name[index3] !== "" ? "" : "hidden"}>{item.name[index3]}</span>
														<br /> <span className={item.designation[index3] !== "" ? "" : "hidden"}>{item.designation[index3]}</span>
													</b>
													<br />
													{item.address[index3].split("\n").map((address, index2) => (
														<>
															<span key={index2}>{address}</span>
															<br />
														</>
													))}
												</p>
											))}
										</div>
									) : (
										<p className="my-2">
											<b className={item.name !== "" || item.designation != "" ? "" : "hidden"}>
												<span className={item.name !== "" ? "" : "hidden"}>{item.name}</span>
												<br /> <span className={item.designation !== "" ? "" : "hidden"}>{item.designation}</span>
											</b>
											<br />
											{item.address.split("\n").map((address, index2) => (
												<>
													<span key={index2}>{address}</span>
													<br />
												</>
											))}
										</p>
									)}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<Footer />
		</>
	);
};

export default ContactUs;
