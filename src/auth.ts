export default class Auth {

    public constructor() {
       //
    }

    public dispatchLoginEvent() {
        const userLogin = new Event("userLogin");
        const loginForm = document.getElementById("loginForm");
        if(loginForm !== null) {
            loginForm.dispatchEvent(userLogin);
        }
        localStorage.setItem("isLoggedIn", true);
    }

    public dispatchLogoutEvent() {
        const userLogout = new Event("userLogout");
        const loginForm = document.getElementById("loginForm");
        if(loginForm !== null) {
            loginForm.dispatchEvent(userLogout);
        }
        localStorage.setItem("isLoggedIn", false);
    }

}