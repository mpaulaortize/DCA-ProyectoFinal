import indexStyle from "./accountinfo.css";

export enum Attribute {
  "user" = "user",
}

class accountInfo extends HTMLElement {
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
        <p>By creating an account, you agree to the Raw <a href="url" class="user-link">Terms of Service</a> and <a href="url" class="user-link">Privacy Policy</a></p>
        <p>Already have an account? <a href="url" class="user-link">Log In</a></p>
      `;
    }
  }
}

customElements.define("account-info", accountInfo);
export default accountInfo;
