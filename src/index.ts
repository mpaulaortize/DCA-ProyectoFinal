import "./screens/mainFeed/mainFeed";
import indexStyle from "./index.css";

import "./screens/profile/profile";
import "./screens/search/search";
import "./screens/createAccount/createAccount";
import "./screens/notifications/notifications";
import "./screens/message/message";
import "./screens/sharescreen/sharescreen";
import "./screens/settings/settings";
import "./screens/passwordScreen/passwordScreen";

//Para navegation
import { addObserver } from "./store/index";
import { appState } from "./store/index";
import { Screens } from "./types/store";

//import "./components/export"

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <section></section>
      `;

      console.log(appState.screen);

      switch (appState.screen) {
        case Screens.LOGIN:
          const createAccount =
            this.ownerDocument.createElement("create-account");
          this.shadowRoot?.appendChild(createAccount);
          break;

        case Screens.DASHBOARD:
          const mainScreen = this.ownerDocument.createElement("main-feed");
          this.shadowRoot?.appendChild(mainScreen);
          break;

        case Screens.MESSAGESS:
          const MessagesScreen =
            this.ownerDocument.createElement("messages-screen");
          MessagesScreen.classList.add("MessagesScreen");
          this.shadowRoot?.appendChild(MessagesScreen);
          break;

        case Screens.NOTIFICATION:
          const notificationScreen = this.ownerDocument.createElement(
            "notification-container"
          );
          notificationScreen.classList.add("notificationScreen");
          this.shadowRoot?.appendChild(notificationScreen);
          break;

        case Screens.SEARCH:
          const Search = this.ownerDocument.createElement("search-screen");
          this.shadowRoot?.appendChild(Search);
          break;

        case Screens.USER_PROFILE:
          const Profile = this.ownerDocument.createElement("profile-screen");
          this.shadowRoot?.appendChild(Profile);
          break;

          case Screens.SETTINGS:
            const settings = this.ownerDocument.createElement("settings-screen");
            this.shadowRoot?.appendChild(settings);
          break;

          case Screens.PASSWORD:
            const passwordScreen = this.ownerDocument.createElement("password-screen");
            this.shadowRoot?.appendChild(passwordScreen);
          break;

        default:
          break;
      }
    }
  }

  //Para el Style quitar el display.
  //const styleElement = document.createElement("style");
  //styleElement.textContent = indexStyle;
  //this.shadowRoot?.appendChild(styleElement);

  //const mainScreen = this.ownerDocument.createElement("main-feed");
  //this.shadowRoot?.appendChild(mainScreen);
  //mainScreen.classList.add("mainscreen");

  //const Profile = this.ownerDocument.createElement("profile-screen");
  //this.shadowRoot?.appendChild(Profile);
  //Profile.classList.add("profilescreen");

  //const Search = this.ownerDocument.createElement("search-screen");
  //this.shadowRoot?.appendChild(Search);
  //Profile.classList.add("searchcreen");

  //const createAccount = this.ownerDocument.createElement("create-account");
  //this.shadowRoot?.appendChild(createAccount);
  //Profile.classList.add("createaccount");

  //const notificationScreen = this.ownerDocument.createElement(
  //  "notification-container"
  //);
  //notificationScreen.classList.add("notificationScreen");
  //this.shadowRoot?.appendChild(notificationScreen);

  //const MessagesScreen =
  //  this.ownerDocument.createElement("messages-screen");
  //MessagesScreen.classList.add("MessagesScreen");
  //this.shadowRoot?.appendChild(MessagesScreen);

  //const sharescreen = this.ownerDocument.createElement("share-screen");
  //this.shadowRoot?.appendChild(sharescreen);
  //Profile.classList.add("sharescreen");

  //const settings = this.ownerDocument.createElement("settings-screen");
  //this.shadowRoot?.appendChild(settings);
  //Profile.classList.add("settingsscreen");

  //const passwordScreen =
  //  this.ownerDocument.createElement("password-screen");
  //this.shadowRoot?.appendChild(passwordScreen);
  //Profile.classList.add("passwordscreen");
}

customElements.define("app-container", AppContainer);
