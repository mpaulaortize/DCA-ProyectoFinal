import indexStyle from "./change-password.css";

export enum Attribute {
  "user" = "user",
}

class changePassword extends HTMLElement {
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
            Change Password
        </h1>

        <form>
             
          <label for="password">New Password</label>
          <input type="password" id="password" name="password" placeholder= "At least 6 characters" required><br><br>

          <label for="reenter-password">Re-enter New Password</label>
          <input type="password" id="reenter-password" name="reenter-password" placeholder= "At least 6 characters" required><br><br>

          <div class="button-container">
            <button type="button" class="change-password-button">Change Password</button>
            <button type="button" class="cancel-button">Cancel</button>
          </div>

        </form>
      `;
    }
  }
}

customElements.define("change-password", changePassword);
export default changePassword;
