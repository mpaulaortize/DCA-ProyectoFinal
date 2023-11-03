import indexstyles from "./profile.css";

import MenuCard, {
  Attribute as MenuCardAttribute,
} from "../../components/menu-Card/menu-Card";
import userProfile, {
  Attribute as userProfileAttribute,
} from "../../components/userProfile/userProfile";
import { dataGrid } from "../../components/feed-Grid/dataprofile";
import profileGrid, {
  Attribute as profileGridAttribute,
} from "../../components/feed-Grid/profile-Grid";

class Profile extends HTMLElement {
  message: profileGrid[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    dataGrid.forEach((photo) => {
      const profileGrid = this.ownerDocument.createElement(
        "profile-grid"
      ) as profileGrid;
      profileGrid.setAttribute(profileGridAttribute.img, photo.img);
      profileGrid.setAttribute(profileGridAttribute.img1, photo.img1);
      profileGrid.setAttribute(profileGridAttribute.img2, photo.img2);
      this.message.push(profileGrid);
    });
  }

  connectedCallback() {
    this.render();
    console.log(this.message);
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

    this.message.forEach((photo) => {
      console.log(photo);
      this.shadowRoot?.appendChild(photo);
    });
  }
}

customElements.define("profile-screen", Profile);
