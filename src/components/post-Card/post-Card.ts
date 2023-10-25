import poststyles from "./post-Card.css";

export enum Attribute {
  "user" = "user",
  "comment" = "comment",
  "img" = "img",
}

class PostCard extends HTMLElement {
  user?: string;
  comment?: string;
  img?: string;

  static get observedAttributes() {
    const attrs: Record<Attribute, null> = {
      user: null,
      comment: null,
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
            ${poststyles}
          </style>
            
          <section class="container">
            <section class="userMessage">
              <div class="user">
                <p>${this.user}</p>
              </div>
              <div class="message">
                <h2>${this.comment}</h2>
              </div>
            </section>

            <section class="roundComponents">
              <img class="profileimg" src="${this.img}">
              <div class="plus">
                <img class="imgPlus" src="/img/plus.png">
              </div>
            </section>
          </section>
      `;
    }
  }
}

customElements.define("post-card", PostCard);
export default PostCard;
