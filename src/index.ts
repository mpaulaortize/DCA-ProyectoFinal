import "./screens/mainFeed/mainFeed";
import indexStyle from "./index.css";

import "./screens/profile/profile";
import "./screens/search/search";
import "./screens/createAccount/createAccount";
import "./screens/notifications/notifications";
import "./screens/message/message";
import "./screens/sharescreen/sharescreen";
import "./screens/settings/settings";

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

      //Para el Style quitar el display.
      const styleElement = document.createElement("style");
      styleElement.textContent = indexStyle;
      this.shadowRoot?.appendChild(styleElement);

      const mainScreen = this.ownerDocument.createElement("main-feed");
      this.shadowRoot?.appendChild(mainScreen);
      mainScreen.classList.add("mainscreen");

      const Profile = this.ownerDocument.createElement("profile-screen");
      this.shadowRoot?.appendChild(Profile);
      Profile.classList.add("profilescreen");

      const Search = this.ownerDocument.createElement("search-screen");
      this.shadowRoot?.appendChild(Search);
      Profile.classList.add("searchcreen");

      const createAccount = this.ownerDocument.createElement("create-account");
      this.shadowRoot?.appendChild(createAccount);
      Profile.classList.add("createaccount");

      const notificationScreen = this.ownerDocument.createElement(
        "notification-container"
      );
      notificationScreen.classList.add("notificationScreen");
      this.shadowRoot?.appendChild(notificationScreen);

      const MessagesScreen =
        this.ownerDocument.createElement("messages-screen");
      MessagesScreen.classList.add("MessagesScreen");
      this.shadowRoot?.appendChild(MessagesScreen);

      const sharescreen = this.ownerDocument.createElement("share-screen");
      this.shadowRoot?.appendChild(sharescreen);
      Profile.classList.add("sharescreen");

      const settings = this.ownerDocument.createElement("settings-screen");
      this.shadowRoot?.appendChild(settings);
      Profile.classList.add("settingsscreen");
    }
  }
}

customElements.define("app-container", AppContainer);
