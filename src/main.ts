import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Content from './components/Content';

export default class Main {
  private loginForm : LoginForm;
  private header : Header;
  private content : Content;

  /**
   * Konstruktor :)
   */
  public constructor() {
    localStorage.setItem("nickname", "abc");
    localStorage.setItem("password", "123");

    if (localStorage.getItem("isLoggedIn") === null) {
      localStorage.setItem("isLoggedIn", false);
    }

    this.init();
  }

  /**
   * Ez a szoftver belépési pontja, miután a DOM lerenderelődött, inicializálja a fejlecet és a login form osztályokat is.
   * @private
   */
  private init() {
    addEventListener("DOMContentLoaded", () => {
      this.loginForm = new LoginForm();
      this.header = new Header();
      this.content = new Content();
    });
  }
}

const main = new Main();