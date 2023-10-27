import "./screens/mainFeed/mainFeed";
import "./screens/notifications/notifications";
import "./screens/message/message";

import IndexStyle from "./index.css";
import "./components/export"

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
      
    const styleElement = document.createElement("style");
    styleElement.textContent = IndexStyle;
    this.shadowRoot?.appendChild(styleElement);


      const mainScreen = this.ownerDocument.createElement("main-feed");
      mainScreen.classList.add("mainScreen"); 
      this.shadowRoot?.appendChild(mainScreen);

      const notificationScreen = this.ownerDocument.createElement("notification-container");
      notificationScreen.classList.add("notificationScreen"); 
      this.shadowRoot?.appendChild(notificationScreen);

      const MessagesScreen = this.ownerDocument.createElement("messages-screen");
      MessagesScreen.classList.add("MessagesScreen"); 
      this.shadowRoot?.appendChild(MessagesScreen);
    }
  }
}

customElements.define("app-container", AppContainer);
