import MenuStyle from "./menu-Card.css";

export enum Attribute {
  "user" = "user",
}

class MenuCard extends HTMLElement {
  publication?: string;
  likes?: string;
  user?: string;
  caption?: string;

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
        ${MenuStyle}
      </style>

      <div class="icon">
      
        <img class="logo-completo" src="/img/raw.png"/>

        <div class="left">
          <img class="icons" src="/img/notifications.png"/>
          <img class="icons" src="/img/messages.png"/>
          <img class="user" src="https://m.media-amazon.com/images/I/91LYRChMy-L._SX1248_CR0%2C0%2C1248%2C1248_.jpg"/>
        </div>

      </div>

        <nav class="navbar">
          <ul>
              <a><img src="/img/Iconsearch.png"/></a>
              <a><img src="/img/Iconnotifications.png"/></a>
              <a><img src="/img/Iconhome.png"/></a>
              <a><img src="/img/Iconmessages.png"/></a>
              <a><img class="user" src="https://m.media-amazon.com/images/I/91LYRChMy-L._SX1248_CR0%2C0%2C1248%2C1248_.jpg"/></a>
          </ul>
        </nav>
      `;
    }
  }
}

customElements.define("menu-card", MenuCard);
export default MenuCard;
