import indexStyle from "./createAccount-form.css";

export enum Attribute {
  "user" = "user",
}

class createForm extends HTMLElement {
  user?: string;

  static get observedAttributes() {
    const attrs: Record<Attribute, null> = {
      user: null,
    };
    return Object.keys(attrs);
  }

  attributeChangedCallback(
    propName: Attribute,
    oldValue: string | undefined,
    newValue: string | undefined
  ) {
    switch (propName) {
      default:
        this[propName] = newValue;
        break;
    }
    this.render();
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
      <style>
        ${indexStyle}
      </style>

        <h1>
            Create an Account
        </h1>

        <form>
             
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder= "First and last name" required><br><br>

          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder= "Enter your email" required><br><br>

          <label for="password">Password</label>
          <input type="password" id="password" name="password" placeholder= "At least 6 characters" required><br><br>

          <label for="reenter-password">Re-enter Password:</label>
          <input type="password" id="reenter-password" name="reenter-password" placeholder= "At least 6 characters" required><br><br>

          <button type="submit">Create Account</button>
        </form>

        <p>By creating an account, you agree to the Raw <a href="url" class="user-link">Terms of Service</a> and <a href="url" class="user-link">Privacy Policy</a></p>
        <p>Already have an account? <a href="url" class="user-link">Log In</a></p>
      `;
    }
  }
}

customElements.define("create-form", createForm);
export default createForm;
