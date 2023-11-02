import indexstyles from "./createAccount.css";

import MenuCard, {
  Attribute as MenuCardAttribute,
} from "../../components/menu-Card/menu-Card";
import createForm, {
  Attribute as createFormAttribute,
} from "../../components/createAccount-form/createAccount-form";
import lowerMenu, {
  Attribute as lowerMenuAttribute,
} from "../../components/lower-menu/lower-menu";

//para Cambio de pantalla
import { dispatch } from "../../store/index";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/store";

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


     const styleElement = document.createElement("style");
     styleElement.textContent = indexstyles;
     this.shadowRoot?.appendChild(styleElement);


    const createForm = this.ownerDocument.createElement(
      "create-form"
    ) as createForm;
    createForm.setAttribute(createFormAttribute.user, "@a.miller");
    this.shadowRoot?.appendChild(createForm);


    const button = this.ownerDocument.createElement('button')
        button.innerText = "Create Account";
  
        
        button.addEventListener("click", async () => {
            dispatch(navigate(Screens.DASHBOARD));
            console.log(createAccount);
            dispatch(await saveRecipe(createAccount));
          });
          this.shadowRoot?.appendChild(button);

          const accountInfo = this.ownerDocument.createElement('account-info')
          this.shadowRoot?.appendChild(accountInfo)

          const lowerMenu = this.ownerDocument.createElement(
            "lower-menu"
          ) as createForm;
          lowerMenu.setAttribute(lowerMenuAttribute.user, "@a.miller");
          this.shadowRoot?.appendChild(lowerMenu);

  }
 
 


}

customElements.define("create-account", createAccount);
