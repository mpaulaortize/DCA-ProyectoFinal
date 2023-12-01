import indexStyle from "./logInComponent.css";

export enum Attribute {
  "user" = "user",
}

class LoginForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  private render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <style>
          ${indexStyle}
        </style>

        <h1>Login</h1>

        <form>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required><br><br>

          <label for="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required><br><br>

          <button id="login-button" type="button">Login</button>
        </form>
      `;
    }
  }

  getEmailInput(): HTMLInputElement | null {
    return this.shadowRoot?.getElementById("email") as HTMLInputElement | null;
  }

  getPasswordInput(): HTMLInputElement | null {
    return this.shadowRoot?.getElementById(
      "password"
    ) as HTMLInputElement | null;
  }
}

customElements.define("login-form", LoginForm);
export default LoginForm;
