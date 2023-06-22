import React from "react";

const TabContent = ({ id, activeTab, children }) => {
	return activeTab === id ? (
		<div className="w-full min-h-screen">
			<div className="flex flex-wrap items-center justify-center md:justify-start mx-auto w-full">{children}</div>
		</div>
	) : null;
};

export default TabContent;
