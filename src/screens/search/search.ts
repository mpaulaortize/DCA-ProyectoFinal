import indexstyles from "./search.css";

import MenuCard, {
  Attribute as MenuCardAttribute,
} from "../../components/menu-Card/menu-Card";
import { datasearchGrid } from "../../components/search-Grid/datasearch";
import searchGrid, {
  Attribute as searchGridAttribute,
} from "../../components/search-Grid/search-Grid";
import { MenuSearch } from "../../components/export";

class Search extends HTMLElement {
  message: searchGrid[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    datasearchGrid.forEach((photo) => {
      const searchGrid = this.ownerDocument.createElement(
        "search-grid"
      ) as searchGrid;
      searchGrid.setAttribute(searchGridAttribute.img, photo.img);
      searchGrid.setAttribute(searchGridAttribute.img1, photo.img1);
      searchGrid.setAttribute(searchGridAttribute.img2, photo.img2);
      this.message.push(searchGrid);
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

    const search = this.ownerDocument.createElement("search-component");
    this.shadowRoot?.appendChild(search);

    this.message.forEach((photo) => {
      console.log(photo);
      this.shadowRoot?.appendChild(photo);
    });
   const menuPhone = document.createElement("menu-search") as MenuSearch;
   this.shadowRoot?.appendChild(menuPhone);
  }
}

customElements.define("search-screen", Search);
