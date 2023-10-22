import AudioStyles from "./audio-Card.css";

export enum Attribute {
  "img" = "img",
}

class AudioCard extends HTMLElement {
  img?: string;

  static get observedAttributes() {
    const attrs: Record<Attribute, null> = {
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

        <style>${AudioStyles}</style>
        

        <section class="container">
            <section class="audioContainer">
                <img class="audioImg"src="/img/Audio.png">
            </section>
            <section class="imgContainer">
                <img class="imgUser"src="${this.img}"></img>
            </section>
        </section>
        `;
    }
  }
}

customElements.define("audio-card", AudioCard);
export default AudioCard;
