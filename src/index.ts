import "./screens/mainFeed/mainFeed";
//import "./components/export"

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ``;
      const something = this.ownerDocument.createElement("main-feed");
      this.shadowRoot?.appendChild(something);
    }
  }
}

customElements.define("app-container", AppContainer);
