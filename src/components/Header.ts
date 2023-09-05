import Common from '../common';

export default class Header {

	public constructor() {

		// Közös eszközöket tartalmazó osztály példányosítása
		this.common = new Common;

		// Ez egy ilyen kamu flag, amikor az event lefut, ezt állítja true-ra, és ezen keresztül ellőrzi a fejlécben, hogy kell-e a szöveg.
		this.loggedIn = false; 

		// összeállítja a fejléc html-ét, majd beinjektálja a megfelelő selectorral ellátott div-be
		this.render();

		// Ebben iratkozunk fel a loginForm event-re, amit bejelentkezéskor "sütünk el"
		this.init();
	}

	init() {
		this.initListenUserLogin();
	}

	initListenUserLogin() {
		const loginForm = document.getElementById("loginForm");
		if (loginForm) {			
			loginForm.addEventListener("userLogin", () => {
			 	this.loggedIn = true;

			 	this.render();
			}, false);
		} 
	}

	render() {
		let html = `<nav class="navbar navbar-light bg-light d-flex justify-content-end mb-5">
			<div class="container">
				<form class="d-flex">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
					<button class="btn btn-outline-primary" type="submit">Search</button>
				</form>`
				if (this.loggedIn) {
					html += `	
					<div id="profile">
						<div class="alert alert-success mb-0">Beléptél</div>
					</div>`;
				}
			
			html += `</div>
		</nav>`;

		this.common.renderElement("header", html);
	}
}