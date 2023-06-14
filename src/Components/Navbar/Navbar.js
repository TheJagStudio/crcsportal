import React from "react";

const Navbar = () => {
	const data = [
		{
			li: "Home",
			subLi: [],
		},
		{
			li: "Chart",
			subLi: [
				["State Wise", "#"],
				["Year Wise", "#"],
				["Type Wise", "#"],
			],
		},
		{
			li: "Reg. Societies",
			subLi: [
				["State-wise List", "#"],
				["All Reg. Societies(pdf)", "#"],
				["Societies Registered before 1986", "#"],
				["Calender Year-wise List", "#"],
				["Financial Year-wise List", "#"],
			],
		},
		{
			li: "Forms",
			subLi: [
				["Form I", "#"],
				["Form II", "#"],
				["Form III", "#"],
				["Form IV", "#"],
				["Form V", "#"],
			],
		},
		{
			li: "MSCS Act",
			subLi: [
				["MSCS Act,2002", "#"],
				["MSCS Rules,2002", "#"],
				["CheckList", "#"],
				["Model Bye-laws", "#"],
				["National Policy on Cooperative 2002", "#"],
			],
		},
		{
			li: "Application",
			subLi: [
				["Received Application", "#"],
				["Status of Application", "#"],
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
				["All Reg Societies", "#"],
				["Registered Users", "#"],
				["Filed Annual Returns Online", "#"],
				["Annual Returns : Offline", "#"],
				["Reminder Message", "#"],
			],
		},
		{
			li: "Liquidation",
			subLi: [
				["Societies under Liquidation", "#"],
				["Liquidation Process Initiated", "#"],
			],
		},
		{
			li: "Banks",
			subLi: [],
		},
	];

	return (
		<div className="w-full fixed top-0 p-5 text-white bg-gradient-to-tr from-primary-800 to-primary-500 z-50">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<img src="/images/emb.png" alt="logo" className="w-14 rounded-lg" />
					<div>
						<p className="uppercase font-bold text-2xl">MULTI-STATE CO-OPERATIVE SOCIETIES</p>
						<p className="font-semibold">Ministry of Cooperation, Govt. of India</p>
					</div>
				</div>
				<div>
					<img src="/images/MSCS_LOGO.png" alt="" className="w-24 " />
				</div>
			</div>
			<div className="mt-4 bg-primary-500/50 backdrop-blur-lg  rounded-lg px-5 shadow-2xl">
				<ul className="flex items-center justify-between font-semibold">
					{data.map((item, index) => (
						<li className="group relative p-3 w-full flex justify-center" key={index}>
							<div className="flex items-center gap-1 cursor-pointer">
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
												<a href={subItem[1]}>
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
	);
};

export default Navbar;
