import React from "react";

const AdminNavbar = () => {
	return (
		<>
			<nav className="header fixed top-0 left-0 bg-gradient-to-br from-primary-100 to-primary-200 w-full print:hidden p-4 shadow-xl z-40">
				<div className="header-container relative flex w-full print:hidden">
					<div className="flex w-full items-center justify-between">
						<div
							id="menuToggler"
							className="ml-[5%] h-8 w-8 rounded-full bg-white flex flex-col gap-1 items-center justify-center cursor-pointer transition-all duration-300"
							onClick={() => {
								document.getElementById("sidebarUpperLinks").classList.toggle("items-center");
								document.getElementById("sidebarUpperLinks").classList.toggle("items-start");
								document.getElementById("sidebarLowerLinks").classList.toggle("items-center");
								document.getElementById("sidebarLowerLinks").classList.toggle("items-start");
								document.getElementById("sidebarContainer").classList.toggle("w-[5%]");
								document.getElementById("sidebarContainer").classList.toggle("w-[10%]");
								document.getElementById("menuToggler").classList.toggle("ml-[5%]");
								document.getElementById("menuToggler").classList.toggle("ml-[10%]");
								document.getElementById("mainContainer").classList.toggle("pl-[6%]");
								document.getElementById("mainContainer").classList.toggle("pl-[10%]");
								document.getElementById("menuToggler").getElementsByTagName("div")[0].classList.toggle("rotate-45");
								document.getElementById("menuToggler").getElementsByTagName("div")[0].classList.toggle("translate-y-1.5");
								document.getElementById("menuToggler").getElementsByTagName("div")[1].classList.toggle("scale-0");
								document.getElementById("menuToggler").getElementsByTagName("div")[2].classList.toggle("-rotate-45");
								document.getElementById("menuToggler").getElementsByTagName("div")[2].classList.toggle("-translate-y-1.5");
								let menuLinks = document.getElementsByClassName("menuLink");
								for (let i = 0; i < menuLinks.length; i++) {
									menuLinks[i].classList.toggle("pl-2");
									menuLinks[i].classList.toggle("px-2");
									menuLinks[i].getElementsByTagName("p")[0].classList.toggle("w-0");
									menuLinks[i].getElementsByTagName("p")[0].classList.toggle("overflow-hidden");
								}
							}}
						>
							<div className="w-4 h-[2px] transition-all duration-300 bg-primary-500"></div>
							<div className="w-4 h-[2px] transition-all duration-300 bg-primary-500"></div>
							<div className="w-4 h-[2px] transition-all duration-300 bg-primary-500"></div>
						</div>

						<div className="-mr-1.5 flex items-center space-x-2">
							<button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:hidden">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5.5 w-5.5 text-slate-500 dark:text-navy-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
									<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
								</svg>
							</button>
							<div className="flex">
								<div className="relative mr-4 flex h-8">
									<input placeholder="Search here..." className="form-input peer h-full rounded-full px-4 pl-9 text-xs+ bg-transparent border-2 border-primary-700 text-primary-800 w-60 placeholder:text-primary-800" type="text" />
									<div className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-primary-800">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
											<path d="M3.316 13.781l.73-.171-.73.171zm0-5.457l.73.171-.73-.171zm15.473 0l.73-.171-.73.171zm0 5.457l.73.171-.73-.171zm-5.008 5.008l-.171-.73.171.73zm-5.457 0l-.171.73.171-.73zm0-15.473l-.171-.73.171.73zm5.457 0l.171-.73-.171.73zM20.47 21.53a.75.75 0 101.06-1.06l-1.06 1.06zM4.046 13.61a11.198 11.198 0 010-5.115l-1.46-.342a12.698 12.698 0 000 5.8l1.46-.343zm14.013-5.115a11.196 11.196 0 010 5.115l1.46.342a12.698 12.698 0 000-5.8l-1.46.343zm-4.45 9.564a11.196 11.196 0 01-5.114 0l-.342 1.46c1.907.448 3.892.448 5.8 0l-.343-1.46zM8.496 4.046a11.198 11.198 0 015.115 0l.342-1.46a12.698 12.698 0 00-5.8 0l.343 1.46zm0 14.013a5.97 5.97 0 01-4.45-4.45l-1.46.343a7.47 7.47 0 005.568 5.568l.342-1.46zm5.457 1.46a7.47 7.47 0 005.568-5.567l-1.46-.342a5.97 5.97 0 01-4.45 4.45l.342 1.46zM13.61 4.046a5.97 5.97 0 014.45 4.45l1.46-.343a7.47 7.47 0 00-5.568-5.567l-.342 1.46zm-5.457-1.46a7.47 7.47 0 00-5.567 5.567l1.46.342a5.97 5.97 0 014.45-4.45l-.343-1.46zm8.652 15.28l3.665 3.664 1.06-1.06-3.665-3.665-1.06 1.06z"></path>
										</svg>
									</div>
								</div>
							</div>

							<button
								onClick={() => {
									let body = document.querySelector("body");
									if (body.style.filter === "grayscale(100%)") {
										body.style.filter = "grayscale(0%)";
									} else {
										body.style.filter = "grayscale(100%)";
									}
								}}
								className="btn h-8 w-8 rounded-full p-1.5 bg-white flex items-center justify-center"
							>
								<svg width="800px" height="800px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true">
									<path fill="var(--primary-500)" d="M44.55 10.526C18.234 10.526 0 31.58 0 42.106s5.263 18.42 15.79 18.42c10.526 0 15.789 2.632 15.789 10.527c0 10.526 7.895 18.42 18.421 18.42c34.21 0 50-18.42 50-36.841c0-31.58-23.87-42.106-55.45-42.106zm-7.024 10.527a6.58 6.58 0 1 1 0 13.158a6.58 6.58 0 0 1 0-13.158zm21.053 0a6.58 6.58 0 1 1 0 13.158a6.58 6.58 0 0 1 0-13.158zm19.053 10.526a6.579 6.579 0 1 1 0 13.158a6.579 6.579 0 0 1 0-13.158zm-58.527 1.263a6.58 6.58 0 1 1 0 13.158a6.58 6.58 0 0 1 0-13.158zM54 63.158a7.895 7.895 0 0 1 7.895 7.895c0 4.36-5.535 7.894-9.895 7.894a7.895 7.895 0 0 1-7.895-7.894c0-4.36 5.535-7.895 9.895-7.895z" />
								</svg>
							</button>

							<div className="flex">
								<button className="btn relative h-8 w-8 rounded-full p-0 bg-white flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500 dark:text-navy-100" stroke="currentColor" fill="none" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.375 17.556h-6.75m6.75 0H21l-1.58-1.562a2.254 2.254 0 01-.67-1.596v-3.51a6.612 6.612 0 00-1.238-3.85 6.744 6.744 0 00-3.262-2.437v-.379c0-.59-.237-1.154-.659-1.571A2.265 2.265 0 0012 2c-.597 0-1.169.234-1.591.65a2.208 2.208 0 00-.659 1.572v.38c-2.621.915-4.5 3.385-4.5 6.287v3.51c0 .598-.24 1.172-.67 1.595L3 17.556h12.375zm0 0v1.11c0 .885-.356 1.733-.989 2.358A3.397 3.397 0 0112 22a3.397 3.397 0 01-2.386-.976 3.313 3.313 0 01-.989-2.357v-1.111h6.75z"></path>
									</svg>

									<span className="absolute -top-px -right-px flex h-3 w-3 items-center justify-center">
										<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-80"></span>
										<span className="inline-flex h-2 w-2 rounded-full bg-secondary"></span>
									</span>
								</button>
							</div>

							<a href="/" target="_blank">
								<button className="btn h-8 w-8 rounded-full p-0 bg-white flex items-center justify-center">
									<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500">
										<path fillRule="evenodd" clipRule="evenodd" d="M1.25 10C1.25 14.8325 5.16751 18.75 10 18.75C14.8325 18.75 18.75 14.8325 18.75 10C18.75 5.16751 14.8325 1.25 10 1.25C5.16751 1.25 1.25 5.16751 1.25 10ZM17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10Z" fill="currentColor" />
										<path fillRule="evenodd" clipRule="evenodd" d="M6.25 10C6.25 14.5222 7.74111 18.25 10 18.25C12.2589 18.25 13.75 14.5222 13.75 10C13.75 5.47778 12.2589 1.75 10 1.75C7.74111 1.75 6.25 5.47778 6.25 10ZM12.25 10C12.25 13.7621 11.0548 16.75 10 16.75C8.94518 16.75 7.75 13.7621 7.75 10C7.75 6.23795 8.94518 3.25 10 3.25C11.0548 3.25 12.25 6.23795 12.25 10Z" fill="currentColor" />
										<path d="M3.60174 5.46733L4.60789 4.35483C4.70859 4.4459 4.817 4.53499 4.9328 4.62175C6.2041 5.57424 8.2323 6.16108 10.4482 6.16108C12.3391 6.16108 14.1005 5.73495 15.3792 5.00363C15.687 4.82759 15.9613 4.63663 16.1979 4.43451L17.1722 5.57496C16.8622 5.83981 16.511 6.08431 16.1239 6.3057C14.6076 7.17293 12.5898 7.66108 10.4482 7.66108C7.92613 7.66108 5.58282 6.98307 4.03339 5.82219C3.88117 5.70814 3.73712 5.58977 3.60174 5.46733Z" fill="currentColor" />
										<path d="M3.60174 14.5486L4.60789 15.6611C4.70859 15.57 4.817 15.4809 4.9328 15.3941C6.2041 14.4417 8.2323 13.8548 10.4482 13.8548C12.3391 13.8548 14.1005 14.2809 15.3792 15.0123C15.687 15.1883 15.9613 15.3793 16.1979 15.5814L17.1722 14.4409C16.8622 14.1761 16.511 13.9316 16.1239 13.7102C14.6076 12.843 12.5898 12.3548 10.4482 12.3548C7.92613 12.3548 5.58282 13.0328 4.03339 14.1937C3.88117 14.3078 3.73712 14.4261 3.60174 14.5486Z" fill="currentColor" />
										<path d="M1.75 10.75V9.25H18.25V10.75H1.75Z" fill="currentColor" />
									</svg>
								</button>
							</a>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default AdminNavbar;
