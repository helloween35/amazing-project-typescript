import Common from '../common';

export default class LoginForm {

	constructor() {
		this.common = new Common();
		this.render();
		this.init();
	}

	init() {
		this.initFormSubmission();
	}

	initFormSubmission() {
		const userLogin = new Event("userLogin");
		const loginForm = document.getElementById("loginForm");

		if (typeof loginForm !== "null") {
			loginForm.addEventListener("submit", event => {
				event.preventDefault();

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
			});
		}
	}

	render() {
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