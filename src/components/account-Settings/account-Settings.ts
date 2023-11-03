import indexStyle from "./account-Settings.css";

export enum Attribute {
  "user" = "user",
}

class accountSettings extends HTMLElement {
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
            Account Settings
        </h1>

        <form>
             
        <div class="input-container">
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Amelia Miller">
            <p class="input-description">
              To help people discover your account, use the name people know you by, whether it's your full name, nickname, or business name. You can only change the name twice within a 14-day period.
            </p>
          </div>

          <div class="input-container">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" placeholder="amiller">
            <p class="input-description">
              In most cases, you will be able to change your username back to amiller for 14 more days.
            </p>
          </div>

          <div class="input-container">
            <label for="description">Description</label>
            <input type="text" id="description" name="description" placeholder="Sun, sand, the sea, and me.">
                </div>

          <div class="input-container">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="amiller@gmail.com">
          </div>

          <div class="input-container">
            <label for="phone">Cellphone Number</label>
            <input class="phonenumber-input" type="text" id="phone" name="phone" placeholder="304 540 6396">
          </div>

          <div>
            <p>If you want to change the password. <a href="url" class="user-link">Click here</a></p>
          </div>

          <div class="button-container">
            <button type="submit" class="save-changes-button">Save Changes</button>
            <button type="button" class="cancel-button">Cancel</button>
          </div>
        </form>

      `;
    }
  }
}

customElements.define("account-settings", accountSettings);
export default accountSettings;
