import profileStyles from "./userProfile.css";
import { dispatch } from "../../store/index";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/store";

export enum Attribute {
  "user" = "user",
  "name" = "name",
  "description" = "description",
}

class userProfile extends HTMLElement {
  user?: string;
  name?: string;
  description?: string;

  static get observedAttributes() {
    const attrs: Record<Attribute, null> = {
      user: null,
      name: null,
      description: null,
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
            ${profileStyles}
          </style>
            
          <section class="container">
            <img class="user" src="https://m.media-amazon.com/images/I/91LYRChMy-L._SX1248_CR0%2C0%2C1248%2C1248_.jpg"/>
            <h1 class="user-profile">Amelia Miller</h1>
            <p class="user-at">@a.miller - she / her</p>

            <section class="container-secondline">
              <a href="url" class="user-link">Facebook.laitana.com</a>
              <p class="user-description">| Sun, sand the sea and me.</p>
            </section>
            
            
            
      `;
      const containerButton = this.ownerDocument.createElement('div');
      containerButton.classList.add("containerButton");
      this.shadowRoot?.appendChild(containerButton)
      const Button = this.ownerDocument.createElement('button');
      Button.textContent = "Edit Profile"
      Button.classList.add("button-profile");
      containerButton.appendChild(Button);
      Button.addEventListener("click", () => {
          dispatch(navigate(Screens.SETTINGS));
        });
    }

   
  }
}

customElements.define("user-profile", userProfile);
export default userProfile;
