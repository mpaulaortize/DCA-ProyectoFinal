import indexstyles from "./createAccount.css";

import createForm, {
  Attribute as createFormAttribute,
} from "../../components/createAccount-form/createAccount-form";
import lowerMenu, {
  Attribute as lowerMenuAttribute,
} from "../../components/lower-menu/lower-menu";

// Para Cambio de pantalla
import { dispatch } from "../../store/index";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/store";

// Firebase
import firebase from "../../utils/firebase";
import { CreateAccount } from "../../types/CreateProfile";

const formAccount: Omit<CreateAccount, "id"> = {
  email: "",
  password: "",
  name: "",
};

class CreateAccountScreen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  submitForm() {
    // Llama a la función de Firebase para crear la cuenta
    firebase.CreateAccount(
      formAccount.name,
      formAccount.email,
      formAccount.password
    );
    // Despacha la acción de navegación
    dispatch(navigate(Screens.DASHBOARD));
  }

  // Manejadores de eventos para cambios en los campos del formulario
  changeName(e: any) {
    formAccount.name = e.target.value;
  }

  changeEmail(e: any) {
    formAccount.email = e.target.value;
  }

  changePassword(e: any) {
    formAccount.password = e.target.value;
  }

  render() {
    if (this.shadowRoot) this.shadowRoot.innerHTML = ``;

    const styleElement = document.createElement("style");
    styleElement.textContent = indexstyles;
    this.shadowRoot?.appendChild(styleElement);

    // Componente de formulario
    const createFormElement = this.ownerDocument.createElement(
      "create-form"
    ) as createForm;
    createFormElement.setAttribute(createFormAttribute.user, "@a.miller");
    this.shadowRoot?.appendChild(createFormElement);

    // Botón para crear la cuenta
    const createAccountButton = this.ownerDocument.createElement("button");
    createAccountButton.innerText = "Create Account";
    createAccountButton.addEventListener("click", () => this.submitForm());
    this.shadowRoot?.appendChild(createAccountButton);

    // Otros componentes, como información de cuenta y menú inferior
    const accountInfo = this.ownerDocument.createElement("account-info");
    this.shadowRoot?.appendChild(accountInfo);

    const lowerMenuElement = this.ownerDocument.createElement(
      "lower-menu"
    ) as createForm;
    lowerMenuElement.setAttribute(lowerMenuAttribute.user, "@a.miller");
    this.shadowRoot?.appendChild(lowerMenuElement);
  }
}

customElements.define("create-account", CreateAccountScreen);
