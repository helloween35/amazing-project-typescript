import Header from './components/Header';
import LoginForm from './components/LoginForm';

export default class Main {
  public constructor() {
    addEventListener("DOMContentLoaded", () => {
      this.header = new Header();
      this.loginForm = new LoginForm();
    });
  }
}

const main = new Main();