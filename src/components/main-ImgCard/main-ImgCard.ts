import CardStyle from "./main-ImgCard.css";

export enum Attribute {
  "publication" = "publication",
  "likes" = "likes",
  "user" = "user",
  "caption" = "caption",
}

class ImgCard extends HTMLElement {
  publication?: string;
  likes?: string;
  user?: string;
  caption?: string;

  static get observedAttributes() {
    const attrs: Record<Attribute, null> = {
      publication: null,
      likes: null,
      user: null,
      caption: null,
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
        ${CardStyle}
    </style>

    <section>
        <div class="body-card">
          <img class="post-img" src="${this.publication}"/>

          <div class="icon">
            <div class="right">
              <img src="/img/Icondefault.png"/>
              <img src="/img/Iconcomment.png"/>
              <img src="/img/Iconshare.png"/>
            </div>
              
            <img src="/img/Iconsave.png"/>

          </div>

          <div class="botton-info">
            <span>${this.likes} likes</span>
            <p><strong>${this.user}</strong><br>${this.caption}</p>
            <a href="/html/">Add a comment</a>
          </div>
      </section>
    `;

    
    }
  }
}

customElements.define("main-imgcard", ImgCard);
export default ImgCard;
