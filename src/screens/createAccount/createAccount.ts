import indexstyles from "./createAccount.css";

import createForm, {
  Attribute as createFormAttribute,
} from "../../components/createAccount-form/createAccount-form";
import lowerMenu, {
  Attribute as lowerMenuAttribute,
} from "../../components/lower-menu/lower-menu";

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

    const lowerMenu = this.ownerDocument.createElement(
      "lower-menu"
    ) as createForm;
    lowerMenu.setAttribute(lowerMenuAttribute.user, "@a.miller");
    this.shadowRoot?.appendChild(lowerMenu);
  }
}

customElements.define("create-account", createAccount);
