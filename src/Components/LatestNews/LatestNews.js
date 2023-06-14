import React from "react";

const LatestNews = ({ data }) => {
	return (
		<div className="bg-white p-5 border-2 border-primary-600 rounded-lg mb-3 shadow-lg">
			<p className="text-xl font-semibold mb-5 text-primary-700">{data?.title}</p>
			{data?.list?.map((item, index) => (
				<div key={index} className="border text-white border-white rounded-lg p-2 my-3 text-sm bg-gradient-to-tl from-primary-700 to-primary-500">
					<p>{item}</p>
				</div>
			))}
			<div className="flex justify-end">
				<a href={data?.readMoreLink} className="text-right text-primary-700 hover:font-bold hover:scale-110 transition-all origin-right font-semibold cursor-pointer">
					Read More
				</a>
			</div>
		</div>
	);
};

export default LatestNews;
