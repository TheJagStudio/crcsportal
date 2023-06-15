import React, { useRef, useEffect } from "react";
import { Grid } from "gridjs";

const Table = ({ rowLimit, columns, data, classes }) => {
	const wrapperRef = useRef(null);

	const grid = new Grid({
		columns: columns,
		search: true,
		pagination: {
			limit: rowLimit,
		},
		data: () => {
			return new Promise((resolve) => {
				setTimeout(() => resolve(data), 2000);
			});
		},
		className: {
			td: "w-10 py-2 border-2 group-hover/tr:bg-primary-400 group-hover/tr:text-white bg-white text-sm first:text-center border-primary-500 px-2",
			tr: "group/tr",
			th: "text-white py-3 first:rounded-tl-xl last:rounded-tr-xl font-semibold text-center",
			thead: "bg-gradient-to-tr from-primary-600 to-primary-700 !h-10",
			table: "overflow-hidden shadow-xl w-full",
			search: "bg-white border-2 border-primary-500 rounded-lg px-2 py-1 my-3 mb-5 w-max !outline-none",
			input: "!outline-none focus:outline-none",
			container: "",
			header: "",
			footer: "border-2 border-t-0 border-primary-500 rounded-xl rounded-t-none p-2 bg-gradient-to-br from-primary-600 to-primary-700",
			sort: "text-white h-20 w-20",
			pagination: "flex lg:flex-row flex-col gap-4 lg:gap-0 items-center justify-between",
			paginationSummary: "border border-white text-sm p-2 px-3 rounded-lg text-white",
			paginationButton: "bg-primary-300 p-2 text-sm px-3 rounded-lg mx-2 border-2 border-transparent my-2",
			paginationButtonNext: "bg-primary-300 text-sm p-2 lg:px-3 rounded-lg",
			paginationButtonCurrent: "bg-primary-500 text-sm p-2 px-3 rounded-lg mx-4 text-white font-bold border-2 border-white",
			paginationButtonPrev: "bg-primary-300 text-sm p-2 lg:px-3 rounded-lg",
			loading: "",
			notfound: "border border-primary-500 p-3 rounded-lg text-primary-500 my-4",
			error: "",
		},
	});

	useEffect(() => {
		grid.render(wrapperRef.current);
	});

	return <div className={classes} ref={wrapperRef}></div>;
};

export default Table;
