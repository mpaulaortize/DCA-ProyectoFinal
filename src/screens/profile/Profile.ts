import indexstyles from "./message.css";
import MenuCard, {
  Attribute as MenuCardAttribute,
} from "../../components/menu-Card/menu-Card";
import userProfile, {
  Attribute as userProfileAttribute,
} from "../../components/userProfile/userProfile";

class Profile extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) this.shadowRoot.innerHTML = ``;

    const menucard = this.ownerDocument.createElement("menu-card") as MenuCard;
    menucard.setAttribute(MenuCardAttribute.user, "@a.miller");
    this.shadowRoot?.appendChild(menucard);

    const Profile = this.ownerDocument.createElement(
      "user-profile"
    ) as userProfile;
    Profile.setAttribute(userProfileAttribute.user, "@a.miller");
    this.shadowRoot?.appendChild(Profile);
  }
}

customElements.define("profile-screen", Profile);
