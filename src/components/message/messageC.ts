import messagestyles from "./message.css";

export enum Attribute {
  "user" = "user",
  "message" = "message",
  "img" = "img",
}

class MessageCard extends HTMLElement {
  user?: string;
  message?: string;
  img?: string;

  static get observedAttributes() {
    const attrs: Record<Attribute, null> = {
      user: null,
      message: null,
      img: null,
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
              ${messagestyles}
            </style>

            <section class="container">
              <section class="userMessage">
                <div class="user">
                  <p>${this.user}</p>
                </div>
            
                <div class="message">
                  <h2>${this.message}</h2>
                </div>
              </section>
            
              <section class="roundComponents">
                <img class="imgprofiles" src="${this.img}"></img>
              </section>
            </section>
        `;
    }
  }
}

customElements.define("message-card", MessageCard);
export default MessageCard;