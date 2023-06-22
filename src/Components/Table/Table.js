import React, { useRef, useEffect } from "react";
import { Grid } from "gridjs";
import { _ } from "gridjs-react";

const Table = ({ rowLimit, columns, data, classes, id, link, admin, editAction, deleteAction }) => {
	const wrapperRef = useRef(null);
	const grid = new Grid({
		columns: columns,
		search: true,
		pagination: {
			limit: rowLimit,
		},
		data: () => {
			return new Promise((resolve) => {
				if (link !== undefined) {
					fetch(link)
						.then((res) => res.json())
						.then((res) => {
							if (admin === true) {
								for (let i = 0; i < res.length; i++) {
									res[i][res[i].length] = _(
										<div id={"action_" + i} className="flex flex-row gap-1 justify-center">
											<button
												onClick={() => {
													editAction(i);
												}}
												className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded-full"
											>
												<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
													<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
													<path d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
												</svg>
											</button>
											<button
												onClick={() => {
													deleteAction(i);
												}}
												className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-full"
											>
												<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
													<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
													<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
												</svg>
											</button>
										</div>
									);
								}
							}

							resolve(res);
						});
				} else {
					setTimeout(() => resolve(data), 500);
				}
			});
		},
		className: {
			td: "w-10 py-2 group-hover/tr:bg-primary-400 group-hover/tr:text-white bg-white text-sm first:text-center px-2 transition-all drop-shadow-[0px_0px_1px_rgba(0,0,0,0.75)]",
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
			loading: "animate-pulse",
			notfound: "border border-primary-500 p-3 rounded-lg text-primary-500 my-4",
			error: "",
		},
	});

	useEffect(() => {
		grid.render(wrapperRef.current);
	});

	return <div className={classes} ref={wrapperRef} id={id}></div>;
};

export default Table;
