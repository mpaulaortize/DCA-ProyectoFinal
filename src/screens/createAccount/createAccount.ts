import indexstyles from "./createAccount.css";

import MenuCard, {
  Attribute as MenuCardAttribute,
} from "../../components/menu-Card/menu-Card";
import createForm, {
  Attribute as createFormAttribute,
} from "../../components/createAccount-form/createAccount-form";

class createAccount extends HTMLElement {
  message: createForm[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    console.log(this.message);
  }

  render() {
    if (this.shadowRoot) this.shadowRoot.innerHTML = ``;
    const createForm = this.ownerDocument.createElement(
      "create-form"
    ) as createForm;
    createForm.setAttribute(createFormAttribute.user, "@a.miller");
    this.shadowRoot?.appendChild(createForm);
  }
}

customElements.define("create-account", createAccount);