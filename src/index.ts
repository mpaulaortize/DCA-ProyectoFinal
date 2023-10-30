import "./screens/mainFeed/mainFeed";
import indexStyle from "./index.css";
import "./screens/profile/Profile";
import "./screens/search/search";
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
    }
  }
}

customElements.define("app-container", AppContainer);
