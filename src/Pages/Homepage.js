import React, { useEffect } from "react";

// Components
import LatestNews from "../Components/LatestNews/LatestNews";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

// Data
import { newsData, latestData } from "../Variables/Variables";

const Homepage = () => {
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
						<p className="md:text-xl text-lg font-semibold text-primary-700 -900">Multi State Cooperative Societies ACT, 2002</p>
					</div>
					<p className="text-justify my-5 px-4">
						An Act to consolidate and amend the law relating to co-operative societies, with objects not confined to one State and serving the interests of members in more than one State, to facilitate the voluntary formation and democratic functioning of co-operatives as people's institutions based on self-help and mutual aid and to enable them to promote their economic and social betterment and to provide functional autonomy ,was being felt necessary by the various cooperative societies, and federation of various cooperative societies as well as by the Government. In order to achieve the objective The <strong>Multi State Cooperative Societies Bill</strong> was introduced in the Parliament.The bill having been passed by both the Houses of Parliament received the assent of the
						President on 3rd July 2002 and it came on the Statute Book as The Multi State Cooperative Societies ACT 2002 (39 of 2002).
					</p>
					<div className="border-2 border-primary-600 p-4 rounded-xl shadow-lg ">
						<p className="md:text-xl text-lg font-semibold text-primary-700 -900">News / Events </p>
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
