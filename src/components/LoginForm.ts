import Common from '../common';
import Auth from '../auth';

export default class LoginForm {
	private common : Common;
	private auth : Auth;

	public constructor() {
		this.common = new Common();
		this.auth = new Auth;

		this.renderLoginForm();
		this.init();
	}

	/**
	 * Init metódusok gyűjtője
	 */
	private init() {
		this.initFormSubmission();
	}

	/**
	 * Amikor érzékeli, hogy a form submit megtörtént, megállítja a beápített mműködést
	 * @private
	 */
	private initFormSubmission() {
		const loginForm = document.getElementById("loginForm");
		if (loginForm !== null) {
			loginForm.addEventListener("submit", event => {
				event.preventDefault();
				this.submitForm();
			});
		}
	}

	/**
	 *
	 * @param loginForm
	 * @private
	 */
	private submitForm() {
		const nickname = loginForm.getElementsByClassName("nickname")[0].value;
		const password = loginForm.getElementsByClassName("password")[0].value;

		if (
			nickname == localStorage.getItem("nickname") &&
			password == localStorage.getItem("password")
		) {
			this.auth.dispatchLoginEvent();
			this.renderLoginForm();
		} else {
			alert("Elbasztad, rossz jelszó!");
		}
	}

	/**
	 * Összerakja a login form HTML vázát és meghívja a Common.renderElement metódust, ami kirajzolja a képernyőre
	 * @private
	 */
	private renderLoginForm() {
		console.log(localStorage.getItem("isLoggedIn"));
		let html = `
		<div class="row">`;

		if (localStorage.getItem("isLoggedIn") == "false") {
			html += `<form id="loginForm">
				<div class="col mb-2">
					<label>Név: </label>
					<input type="text" id="nickname" name="nickname" class="form-control nickname" placeholder="Nickname" aria-label="Nickname">
				</div>
				<div class="col">
					<label>Jelszó: </label>
					<input type="text" id="password" name="password" class="form-control password" placeholder="Last name" aria-label="Last name">
				</div>
				<div class="col mt-3">
					<button class="btn btn-primary">Belépek, baszod!</button>
				</div>
			</form>`;
		} else {
			html += `<div class="alert alert-warning">Már beléptél, minek akarnál megint? Stréber!</div>`;
		}
		html += `</div>`

		this.common.renderElement("form", html);
	}
}