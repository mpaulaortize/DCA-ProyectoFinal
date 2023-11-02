import profileStyles from "./userProfile.css";

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
            
            <button type="button" class="button-profile" href="" >Edit Profile</button>
      `;
    }
  }
}

customElements.define("user-profile", userProfile);
export default userProfile;
