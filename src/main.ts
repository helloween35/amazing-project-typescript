import Header from './components/Header';
import LoginForm from './components/LoginForm';

export default class Main {
  private loginForm : LoginForm;
  private header : Header;

  /**
   * Konstruktor :)
   */
  public constructor() {
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
    });
  }
}

const main = new Main();