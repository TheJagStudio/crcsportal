import React, { useEffect } from "react";
import LatestNews from "../Components/LatestNews/LatestNews";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
const Homepage = () => {
	const latestData = [
		{
			title: "Latest Hearings",
			list: ["Shree Ninaidevi Multi Specialty Cooperative Hospital and Research Center Ltd.,MAHARASHTRA", "Global Federati on of Natural Farming Cooperative Ltd.,UTTAR PRADESH", "Tamil Nadu Multi State Societies Cooperative Housing Federation Ltd.,TAMIL NADU"],
			readMoreLink: "#",
		},
		{
			title: "Latest Certificates",
			list: ["Chambal Agriculture Marketing Cooperative Ltd,MADHYA PRADESH", "Heaven Multi State Agro Cooperative Society Ltd,UTTAR PRADESH", "Lakshyavedh multi specialty cooperative Hospital and Research Center Ltd. society ltd.,MAHARASHTRA"],
			readMoreLink: "#",
		},
		{
			title: "Latest Order Sheet",
			list: ["Home Multi State Cooperative Housing Society Ltd", "Lokmanya Multipurpose Cooperative Society Limited, Belgaum, Karnataka: Order Sheet of Hearing held on 14.02.2022", "Lotus Agricultural and Marketing Cooperative Society Ltd., Pitampura, New Delhi: Order Sheet of Hearing held on 04.02.2022"],
			readMoreLink: "#",
		},
	];

	const newsData = [
		["/MSCS/UploadsDocs/Circulars/Liquidator Change Order_subh kalyan Multistate Cooperative Credit Society Ltd_dated 05.06.2023.pdf", "Liquidator Change Order_subh kalyan Multistate Cooperative Credit Society Ltd dated 05.06.2023.pdf"],
		["/MSCS/UploadsDocs/Circulars/Liquidator_extension_order.pdf", "Liquidator extension order"],
		["/MSCS/UploadsDocs/Circulars/Sales_officer_order_scan.pdf", "Under Section 97 of the Multi State Co-operative Societies Act,2002"],
		["/MSCS/UploadsDocs/Circulars/Order-Sale_Officer_dt_28_Mar_2023.pdf", "Under Section 97 of the Multi State Co-operative Societies Act,2002"],
		["/MSCS/UploadsDocs/Circulars/Order_for_Sale_Officer_dt_28.03.2023.pdf", "Under Section 97 of the Multi State Co-operative Societies Act,2002"],
		["/MSCS/UploadsDocs/Circulars/Gazette_of_India_21-03-2023.pdf", "Gazette of India 21-03-2023"],
		["/MSCS/UploadsDocs/Circulars/Liquidation_order_of_Swarn_India_Multi_State_Credit_Cooperative_Society_ltd.pdf", "Liquidation order of Swarn India Multi State Credit Cooperative Society ltd"],
		["/MSCS/UploadsDocs/Circulars/Notice_for_initiation_of_winding_up_process_of_Real_India_Credit_Cooperative_Society_ltd_Sirohi_Rajasthan_datd_07_march2023.pdf", "Notice for initiation of winding up process of Real India Credit Cooperative Society ltd Sirohi Rajasthan datd 07 march 2023"],
		["/MSCS/UploadsDocs/Circulars/Provisions_for_liquidation_process.pdf", "Provisions of Multi-State Cooperative Societies Act,2002 &amp; Rules made there under for Liquidation proceedings of a multi-state cooperative society-reg."],
		["/MSCS/UploadsDocs/Circulars/Liquidator_extension_order_of_Shree_Swastik_Credit_Cooperative_Society_ltd_(1).pdf", "Liquidator extension order of Shree Swastik Credit Cooperative Society ltd"],
		["/MSCS/UploadsDocs/Circulars/under_scetion_86_of_MSCS20230127_15290898.pdf", "Under section 86 of the multi state Co-operative society Act,2002"],
		["/MSCS/UploadsDocs/Circulars/Liquidation_order_31-01-2023_Rubi_credit_cooperative_society_Ltd_Ajmer_Rajasthan.pdf", "Liquidation order 31-01-2023 Rubi credit cooperative society Ltd Ajmer Rajasthan"],
		["/MSCS/UploadsDocs/Circulars/Letter_issued_to_Winner_Royal_Varsha_Credit_cooperative_society_Ltd_Banswara_Rajasthan_19-01-2023.pdf", "Letter issued to Winner Royal Varsha Credit cooperative society Ltd Banswara Rajasthan 19-01-2023"],
		["/MSCS/UploadsDocs/Circulars/Show_Cause_Notice_to_Pride_Multi_State_Credit_Cooperative_Society_dated_10_jan_2023.pdf", "Show Cause Notice to Pride Multi State Credit Cooperative Society dated 10 jan 2023"],
		["/MSCS/UploadsDocs/Circulars/Madhavpura_Mercantile_Coop_Bank_Ltd.pdf", "Madhavpura Mercantile Coop Bank Ltd"],
		["/MSCS/UploadsDocs/Circulars/notice_dated_15.12.2022_to_concerned_societies_for_not_filing_annual_return.pdf", "Notice dated 15.12.2022 to concerned societies for not filing annual return"],
		["/MSCS/UploadsDocs/Circulars/notice_dated_14.12.2022_to_concerned_societies_for_not_filing_annual_return.pdf", "Notice dated 14.12.2022 to concerned societies for not filing annual return"],
		["/MSCS/UploadsDocs/Circulars/notice_dated_16.12.2022_to_concerned_societies_for_not_filing_annual_return.pdf", "Notice dated 16.12.2022 to concerned societies for not filing annual return"],
		["/MSCS/UploadsDocs/Circulars/notice_dated_19.12.2022_to_concerned_societies_for_not_filing_annual_return.pdf", "notice dated 19.12.2022 to concerned societies for not filing annual return"],
		["/MSCS/UploadsDocs/Circulars/notice_dated_21.12.2022_to_conerned_societies_for_not_filing_annual_return.pdf", "Notice dated 21.12.2022 to conerned societies for not filing annual return"],
		["/MSCS/UploadsDocs/Circulars/RCS_Bihar.pdf", "Hearing Notice"],
		["/MSCS/UploadsDocs/Circulars/Notice_before_winding_up_Swarn_India_multistate_credit_cooperative_society_Ltd_Muzaffarpur_Bihar_16-11-2022-1.pdf", "Notice before winding up_Swarn India multistate credit cooperative society Ltd Muzaffarpur Bihar 16-11-2022"],
		["/MSCS/UploadsDocs/Circulars/extension_order_of_liquidator_of_Lakshya_multipurpose_cooperative_society_ltd_Bathinda_Punjab_13-12-2022.pdf", "extension order of liquidator of Lakshya multipurpose cooperative society ltd Bathinda Punjab_13-12-2022"],
		["/MSCS/UploadsDocs/Circulars/Notice_before_windingup_Rubi_2022.pdf", "Rubi Credit Cooperative Society Ltd"],
		["/MSCS/UploadsDocs/Circulars/Memon_bank.pdf", "Liquidator appointment order upload"],
		["/MSCS/UploadsDocs/Circulars/GeeLimited_Nov2022.pdf", "Hearing in the matter of M/s Gee Limited on 14.11.2022"],
		["/MSCS/UploadsDocs/Circulars/Cir_2_637997854924159061_Computarisation_Sep2022.pdf", "Computerization of office of Central Registrar of Cooperative Societies."],
		["/MSCS/UploadsDocs/Circulars/Cir_2_637902105948524781_Liquidation Order-25-05-2022.pdf", "Arth Credit Cooperative Society Ltd, Jodhpur, Rajasthan: Order for winding up of the Society."],
		["/MSCS/UploadsDocs/Circulars/Cir_2_637890750010636606_Notice for winding up-Navjeevan_25-05-2022.pdf", "Navjeevan Credit Cooperative Society Ltd, Barmer, Rajasthan: Notice issued to initiate winding up process of the Society."],
		["/MSCS/UploadsDocs/Circulars/Cir_2_637886572734210661_Order 18-05-2022-SCCSL batch VI-VII.pdf", "Order dated 18-05-2022-SCCSL batch VI-VII related to sahara Credit Cooperative Society Ltd."],
		["/MSCS/UploadsDocs/Circulars/Cir_2_637886572290077426_Order 18-05-2022-SUMSL-batch I -II.pdf", "Order dated 18-05-2022-SUMSL-batch I-II related to Saharayaan Universal multipurpose society Ltd."],
		["/MSCS/UploadsDocs/Circulars/Cir_2_637886571947500427_Order 18-05-2022-HICCL-batch I.pdf", "Order dated 18-05-2022-HICCL-batch I related to Humara India Credit Cooperative Society Ltd."],
		["/MSCS/UploadsDocs/Circulars/Cir_2_637881456632499806_Order-12-05-2022-SCCSL-batch V.pdf", "Order dated 12-05-2022-SCCSL-batch-V related to sahara Credit Cooperative Society Ltd."],
		["/MSCS/UploadsDocs/Circulars/Cir_2_637881456205370559_Order-12-05-2022-SCCSL-batch IV.pdf", "Order dated 12-05-2022-SCCSL-batch-IV related to sahara Credit Cooperative Society Ltd."],
		["/MSCS/UploadsDocs/Circulars/Cir_2_637881455729257168_Order 12-05-2022-SCCSL-batch-III.pdf", "Order dated 12-05-2022-SCCSL-batch-III related to sahara Credit Cooperative Society Ltd."],
		["/MSCS/UploadsDocs/Circulars/Cir_2_637876766665968001_Order 07-05-2022-SCCSL.pdf", "Order dated 07-05-2022 related to sahara Credit Cooperative Society Ltd."],
		["/MSCS/UploadsDocs/Circulars/Cir_2_637876767016813027_Order 07-05-2022-SUMSL.pdf", "Order dated 07-05-2022 related to Saharayn Universal Multipurpose Society Ltd."],
		["/MSCS/UploadsDocs/Circulars/Cir_2_637876767275617778_Order 07-05-2022-HICCL.pdf", "Order dated 07-05-2022 related to Humara India Credit Cooperative Society Ltd."],
		["/MSCS/UploadsDocs/Circulars/Cir_2_637872744724388801_Minutes-29-04-2022-Nodal Officers.pdf", "Minutes of the meeting held on 29-04-2022 with the Nodal Officers of Sahara Credit Cooperative Society Ltd, Saharayn Universal Multipurpose Society Ltd and Humara India Credit Cooperative society Ltd."],
		["/MSCS/UploadsDocs/Circulars/Cir_2_637871436680858289_Order dated 02-05-2022-SCCSL.pdf", "Order dated 02-05-2022 related to sahara Credit Cooperative Society Ltd."],
		["/MSCS/UploadsDocs/Circulars/Cir_2_637865644792041569_Liquidation Order_Super Bazaar_25-04-2022.pdf", "Liquidation order of The Cooperative Store Ltd. (Super Bazar), New Delhi."],
		["/MSCS/UploadsDocs/Circulars/Cir_2_637859637379826290_Letter dated 08-04-2022 to Cheif Secretary all States.pdf", "Hon’ble Delhi High Court Order dated 22.03.2022 in the matter of Sahara Credit Cooperative Society Ltd., Saharayn Universal Multipurpose Society Ltd. and Humara India Credit Cooperative Society Ltd.- regarding not to collect any further deposits."],
		["/MSCS/UploadsDocs/Circulars/Cir_2_637850245920579193_SaharaPressApril2022.pdf", "Hon’ble Delhi High Court vide Order dated 22.03.2022 passed in W.P. (C) 669/2021, W.P. (C) 670/2021; W.P. (C) 817/2021 has restrained Sahara Credit Cooperative Society Ltd., Lucknow, Uttar Pradesh, Saharayn Universal Multipurpose Society Ltd., Bhopal, Madhya Pradesh &amp; Humara India Credit Cooperative Society Ltd., Kolkata, West Bengal from collecting any deposits from the public."],
		["/MSCS/UploadsDocs/Circulars/Cir_2_637842817685340066_UserRegisterationMSCS_Mar2022.pdf", "URGENT :Creation of User (registration) of the societies/banks on the portal of the Multi State Cooperative Societies -reg"],
		["/MSCS/UploadsDocs/Circulars/Cir_2_637329254319255862_UPConstructive_LO_Aug2020.pdf", "The Uttar Pradesh Cooperative Construction and Development Limited (Reg No. MSCS/CR/170/2004): Notice issued for winding up-reg"],
		["/MSCS/UploadsDocs/Circulars/Cir_2_637278268030644935_CommBank_Cir_June2020.pdf", "Communication related to Multi State Urban Cooperative Banks (as also, Multi State Cooperative Societies Ltd)"],
		["/MSCS/UploadsDocs/Circulars/Cir_2_637268105626883968_ConductBoM_Bank_2020.pdf", "Conduct of Board Meetings through Video Conferencing or other audio video means-reg."],
		["/MSCS/UploadsDocs/Circulars/Cir_2_637208265035817675_circularcovid19_Mar2020.pdf", "Circular related to Multi State Cooperative Societies in view of COVID 19-reg"],
		["/MSCS/UploadsDocs/Circulars/Cir_2_637139161082034358_ReturningOfficer_MSCS_Dec2019.pdf", "Panel of Returning Officer for Conducting the Elections of the Board of Directors of the Multi-State Co-operative Societies and Banks.-reg"],
		["/MSCS/UploadsDocs/Circulars/Cir_2_637122666517060621_Untitled.pdf", "Obtaining prior approval of CRCS for opening of a new branch/es or place/s of business of a Multi State Cooperative Societies-reg"],
		["/Circular/2016/RuleBranches_Nov2016.pdf", "Documents/Informations to be furnished for approval of Central Registrar for opening of a new branch/es or place/s of business of a Multi State Cooperative Societies"],
		["/Circular/2018/Cir_MoneyLaundering_Jan2018.pdf", "Applicability of Prevention of Money Laundering Act (PMLA) , 2002 to Multi State Cooperative Societies (MSCSs)"],
		["/Circular/2017/Cir_TimelyBOD_28July2017.pdf", "Timely conduct of statutory audit &amp; election to the Board of Directors of the cooperative societies "],
		["/MSCS/UploadsDocs/Circulars/Cir_2_636767718333074399_Scan.pdf", "Furnishing of Information to Registrar of Cooperative Societies : Full details of their existing branches"],
		["/Circular/2017/Cir_MatterHousing_28July2017.pdf", "Matters relating to Housing Cooperative Societies "],
		["/Circular/2017/Cir_DisQualify_24July2017.pdf", "Disqualification for being member of the Board of Multi State Cooperative Societies / Banks "],
		["/Circular/2017/Cir_CollectionDeposit_July2017.pdf", "Collection of deposits by Multi State Cooperative Societies - Dated 03-07-2017"],
		["/Circular/2017/DiversionFunds_June2017.pdf", "Prohibition of diversion of funds from core business to other activities - Dated 09-06-2017"],
		["/Circular/2017/DecisionMakingProcess_June2017.pdf", "Association of employees in management decision making process - Dated 09-06-2017"],
		["/Circular/2016/ExtensionArea.pdf", "Claimimg extension of their area of operation without any registration from CRCS"],
		["/Circular/Sep/NAFCUB16915.pdf", "NOC for the existing Societies already registered under the Provision of MSCS Act, 2002"],
		["/Circular/NOC2015.pdf", "No Objection Certificate(NOC) from Registrar of Cooperative Societies of States/UTs of Multi State Cooperative Societies having objects and functions relating to thrift and Credit and for Multipurpose Cooperative Societies"],
	];
	useEffect(() => {
		let latestNews = document.getElementById("latestNews");
		setInterval(() => {
			let width = latestNews.offsetWidth;
			latestNews.scrollBy(width, 0);
			if (latestNews.scrollLeft + width * 2 >= latestNews.scrollWidth) {
				latestNews.scrollLeft = 0;
			}
		}, 2000);
	}, []);
	return (
		<>
			<Navbar />
			<div className="mt-3 p-5 w-[95vw] mx-auto flex flex-col-reverse lg:flex-row gap-5 h-fit transition-all duration-500">
				<div className="lg:w-[70vw] w-full">
					<div className="border-2 border-primary-600 p-4 rounded-xl shadow-lg ">
						<p className="text-xl font-semibold text-primary-700 -900">Multi State Cooperative Societies ACT, 2002</p>
					</div>
					<p className="text-justify my-5 px-4">
						An Act to consolidate and amend the law relating to co-operative societies, with objects not confined to one State and serving the interests of members in more than one State, to facilitate the voluntary formation and democratic functioning of co-operatives as people's institutions based on self-help and mutual aid and to enable them to promote their economic and social betterment and to provide functional autonomy ,was being felt necessary by the various cooperative societies, and federation of various cooperative societies as well as by the Government. In order to achieve the objective The <strong>Multi State Cooperative Societies Bill</strong> was introduced in the Parliament.The bill having been passed by both the Houses of Parliament received the assent of the
						President on 3rd July 2002 and it came on the Statute Book as The Multi State Cooperative Societies ACT 2002 (39 of 2002).
					</p>
					<div className="border-2 border-primary-600 p-4 rounded-xl shadow-lg ">
						<p className="text-xl font-semibold text-primary-700 -900">News / Events </p>
					</div>
					<marquee className="text-justify my-5 px-4 w-full max-h-[500px]" behavior="scroll" direction="down">
						<ul className="list-disc">
							{newsData.map((item, index) => (
								<li key={index} className="hover:font-semibold transition-all ">
									<a href={item[0]}>{item[1]}</a>
								</li>
							))}
						</ul>
					</marquee>
				</div>
				<div id="latestNews" className="w-full lg:w-[30vw] flex flex-row gap-5 lg:gap-5 lg:flex-col overflow-x-scroll noScrollBar px-2 snap-proximity snap-x drop-shadow-lg scroll-smooth">
					{latestData.map((data, index) => (
						<LatestNews key={index} data={data} />
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Homepage;
