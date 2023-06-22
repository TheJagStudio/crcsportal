import React from "react";

const Navbar = () => {
	const data = [
		{
			li: "Home",
			subLi: [],
			link: "/",
		},
		{
			li: "Chart",
			subLi: [
				["State Wise", "/state-wise-chart"],
				["Year Wise", "/year-wise-chart"],
				["Type Wise", "/type-wise-chart"],
			],
		},
		{
			li: "Reg. Societies",
			subLi: [
				["State-wise List", "/state-wise-list"],
				["All Reg. Societies(pdf)", "/docs/ALL_REG_MSCS.pdf", "pdf"],
				["Societies Registered before 1986", "/docs/OldListMSCS.pdf", "pdf"],
				["Calender Year-wise List", "/calender-year-wise-list"],
				["Financial Year-wise List", "/financial-year-wise-list"],
			],
		},
		{
			li: "Forms",
			subLi: [
				["Form I", "form1"],
				["Form II", "form2"],
				["Form III", "form3"],
				["Form IV", "form4"],
				["Form V", "form5"],
			],
		},
		{
			li: "MSCS Act",
			subLi: [
				["MSCS Act,2002", "/docs/GuidelineAct2002.pdf", "pdf"],
				["MSCS Rules,2002", "/docs/Rules2002.pdf", "pdf"],
				["CheckList", "checklist"],
				["Model Bye-laws", "model-by-laws"],
				["National Policy on Cooperative 2002", "/docs/NatPolicy02.pdf", "pdf"],
			],
		},
		{
			li: "Application",
			subLi: [
				["Received Application", "/received-application"],
				["Status of Application", "/status-application"],
			],
		},
		{
			li: "MSCS-MIS",
			subLi: [
				["New User Registration", "/registration"],
				["User Login", "/login"],
				["Admin User", "/admin/login"],
			],
		},
		{
			li: "Reports",
			subLi: [
				["All Reg Societies", "/search-record"],
				["Registered Users", "/registered-users"],
				["Filed Annual Returns Online", "/filed-AR-New"],
				["Annual Returns : Offline", "/filed-AR-Offline"],
				["Reminder Message", "/reminder-msg"],
			],
		},
		{
			li: "Liquidation",
			subLi: [
				["Societies under Liquidation", "liquidation-list"],
				["Liquidation Process Initiated", "/docs/LiquidationInitiated.pdf", "pdf"],
			],
		},
		{
			li: "Banks",
			subLi: [],
			link: "banks",
		},
	];

	return (
		<div className="flex w-full sticky -top-28 z-50 transition-all duration-500 overflow-visible">
			<div className="w-full overflow-visible">
				<div id="navbar" className="rounded-b-2xl w-full p-5 md:py-5 pt-4 py-1 max-h-[12.5rem] text-white bg-gradient-to-tr from-primary-800 to-primary-500 transition-all duration-500">
					<div className="flex items-center justify-between">
						<div className="flex items-center sm:gap-4 gap-3">
							<img src="/images/emb.png" alt="logo" className="sm:w-14 w-10 rounded-lg" />
							<div>
								<p className="uppercase font-bold lg:text-2xl sm:text-xl text-base">MULTI-STATE CO-OPERATIVE SOCIETIES</p>
								<p className="font-semibold sm:text-base text-sm">Ministry of Cooperation, Govt. of India</p>
							</div>
						</div>
						<div>
							<img src="/images/MSCS_LOGO.png" alt="" className="sm:w-24 w-16" />
						</div>
					</div>
					<div className="mt-4 bg-gradient-to-tl from-primary-500 to-primary-600 rounded-lg px-5 shadow-2xl lg:block">
						<ul className=" items-center justify-between font-semibold hidden lg:flex">
							{data.map((item, index) => (
								<li className="group relative p-3 w-full flex justify-center" key={index}>
									<div
										onClick={() => {
											if (item.subLi.length == 0) {
												window.location = item.link;
											}
										}}
										className="flex items-center gap-1 cursor-pointer"
									>
										<p className="whitespace-nowrap">{item.li}</p>
										{item.subLi.length > 0 && (
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
												<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
											</svg>
										)}
									</div>
									{item.subLi.length > 0 && (
										<div className="absolute top-12 flex">
											<div>
												<div className="overflow-hidden w-max group-hover:pb-2 rounded-b-lg bg-primary-900 shadow-lg max-h-0 group-hover:max-h-[100%] transition-all duration-300">
													{item.subLi.map((subItem, subIndex) => (
														<a href={subItem[1]} target={subItem[2] !== undefined ? "_blank" : ""}>
															<p className="px-5 my-2 hover:scale-105 origin-left transition-all duration-300" key={subIndex}>
																{subItem[0]}
															</p>
														</a>
													))}
												</div>
											</div>
										</div>
									)}
								</li>
							))}
						</ul>
						<ul className="flex lg:hidden items-center justify-between font-semibold">
							{data.slice(0, 2).map((item, index) => (
								<li className="group relative p-3 w-full flex justify-center" key={index}>
									<div
										onClick={() => {
											if (item.subLi.length == 0) {
												window.location = item.link;
											}
										}}
										className="flex items-center gap-1 cursor-pointer"
									>
										<p className="whitespace-nowrap">{item.li}</p>
										{item.subLi.length > 0 && (
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
												<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
											</svg>
										)}
									</div>
									{item.subLi.length > 0 && (
										<div className="absolute top-12 flex right-0">
											<div>
												<div className="overflow-hidden w-max group-hover:pb-2 rounded-b-lg bg-primary-900 shadow-lg max-h-0 group-hover:max-h-[100%] transition-all duration-300">
													{item.subLi.map((subItem, subIndex) => (
														<a href={subItem[1]} target={subItem[2] !== undefined ? "_blank" : ""}>
															<p className="px-5 my-2 hover:scale-105 origin-left transition-all duration-300" key={subIndex}>
																{subItem[0]}
															</p>
														</a>
													))}
												</div>
											</div>
										</div>
									)}
								</li>
							))}
							<li
								onClick={() => {
									let mobileSubmenu = document.getElementById("mobileSubmenu");
									let navbar = document.getElementById("navbar");
									if (mobileSubmenu.classList.contains("max-h-[100%]")) {
										mobileSubmenu.classList.remove("max-h-[100%]");
										mobileSubmenu.classList.add("max-h-0");
									} else {
										mobileSubmenu.classList.remove("max-h-0");
										mobileSubmenu.classList.add("max-h-[100%]");
									}
									if (navbar.classList.contains("max-h-[100%]")) {
										navbar.classList.add("max-h-[12.5rem]");
										navbar.classList.remove("max-h-[100%]");
									} else {
										navbar.classList.add("max-h-[100%]");
										navbar.classList.remove("max-h-[12.5rem]");
									}
								}}
								className="p-3 w-full flex justify-center"
							>
								Other
							</li>
						</ul>
					</div>
					<div className="flex lg:hidden w-full">
						<div className="w-full">
							<div id="mobileSubmenu" className="mt-3 w-full max-h-0 z-50 flex items-center justify-center overflow-hidden transition-all duration-500">
								<ul className="w-full">
									{data.slice(2, data.length + 1).map((item, index) => (
										<li key={index} className="group flex flex-col items-center justify-between bg-gradient-to-bl from-primary-500 to-primary-600 rounded-lg w-full h-fit p-3 px-5 my-2 cursor-pointer transition-all duration-300">
											<div
												onClick={() => {
													if (item.subLi.length == 0) {
														window.location = item.link;
													}
												}}
												className="flex w-full items-center justify-between border-transparent border-b-2 group-hover:border-white pb-2"
											>
												{item.li}
												{item.subLi.length > 0 && (
													<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
														<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
													</svg>
												)}
											</div>
											{item.subLi.length > 0 && (
												<div className="flex">
													<div>
														<div className="overflow-hidden w-max group-hover:pb-2 rounded-b-lg max-h-0 group-hover:max-h-[100%] transition-all duration-300">
															{item.subLi.map((subItem, subIndex) => (
																<a href={subItem[1]} target={subItem[2] !== undefined ? "_blank" : ""}>
																	<p className="px-5 my-2 hover:scale-105 origin-left transition-all duration-300" key={subIndex}>
																		{subItem[0]}
																	</p>
																</a>
															))}
														</div>
													</div>
												</div>
											)}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
