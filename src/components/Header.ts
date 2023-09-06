import Common from '../common';
import Auth from '../auth';

export default class Header {
	private auth : Auth;
	private common : Common;

	public constructor() {

		// Közös eszközöket tartalmazó osztály példányosítása
		this.common = new Common;
		this.auth = new Auth;

		// összeállítja a fejléc html-ét, majd beinjektálja a megfelelő selectorral ellátott div-be
		this.renderHeader();

		// Ebben iratkozunk fel a loginForm event-re, amit bejelentkezéskor "sütünk el"
		this.init();
	}

	/**
	 * Init metódusok gyűjtője
 	 */
	private init() {
		this.initListenUserLogin();
		this.initLogout();
	}

	/**
	 * Figyeli, hogy elsült-e a userLogin esemény, ami akkor zajlik le, amikor a felhasználó SIKERESEN belép
	 */
	private initListenUserLogin() {
		const loginForm = document.getElementById("loginForm");
		if (loginForm) {
			loginForm.addEventListener("userLogin", () => {
			 	this.renderHeader();
			}, false);
		}
	}

	private initLogout() {
		const logoutButton = document.querySelector(".logout");
		if(logoutButton !== null) {
			logoutButton.addEventListener("click", () => {
				this.auth.dispatchLogoutEvent();
				this.renderHeader();
			})
		}
	}

	/**
	 * Összerakja a fejléc HTML vázát és meghívja a Common.renderElement metódust, ami kirajzolja a képernyőre
	 */
	private renderHeader() {
		let html = `<nav class="navbar navbar-light bg-light d-flex justify-content-end mb-5">
			<div class="container">
				<form class="d-flex">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
					<button class="btn btn-outline-primary" type="submit">Search</button>
				</form>`
				if (localStorage.getItem("isLoggedIn") !== "false") {
					html += `<p class="logout">Kilépés</p>`;
				}
			html += `</div>
		</nav>`;

		this.common.renderElement("header", html);
	}
}