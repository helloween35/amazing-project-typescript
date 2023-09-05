import Common from '../common';

export default class LoginForm {
	private common : Common;

	public constructor() {
		this.common = new Common();

		this.render();
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
		const userLogin = new Event("userLogin");
		const loginForm = document.getElementById("loginForm");

		if (loginForm !== null) {
			loginForm.addEventListener("submit", event => {
				event.preventDefault();
				this.submitForm(loginForm);
			});
		}
	}

	/**
	 *
	 * @param loginForm
	 * @private
	 */
	private submitForm(loginForm : HTMLElement) {
		const nickname = loginForm.getElementsByClassName("nickname")[0].value;
		const password = loginForm.getElementsByClassName("password")[0].value;

		if (
			nickname == localStorage.getItem("nickname") &&
			password == localStorage.getItem("password")
		) {
			alert("Na, csak sikerült végre!");
			loginForm.dispatchEvent(userLogin);
		} else {
			alert("Elbasztad, rossz jelszó!");
		}
	}

	/**
	 * Összerakja a login form HTML vázát és meghívja a Common.renderElement metódust, ami kirajzolja a képernyőre
	 * @private
	 */
	private render() {
		const html = `
		<div class="row">
			<form id="loginForm">
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
			</form>
		</div>`;

		this.common.renderElement("form", html);
	}
}