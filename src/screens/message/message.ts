import indexstyles from "./message.css";
import MessageCard, {
  Attribute as MessageCardAttribute,
} from "../../components/message/messageC";
import MenuCard, {
  Attribute as MenuCardAttribute,
} from "../../components/menu-Card/menu-Card";
import { datamessage } from "../../components/message/messagedata";
import "../../components/export";
import { MenuNotification } from "../../components/export";


class Messages extends HTMLElement {
  message: MessageCard[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    datamessage.forEach((message) => {
      const messageCard = this.ownerDocument.createElement(
        "message-card"
      ) as MessageCard;
      messageCard.setAttribute(MessageCardAttribute.user, message.user);
      messageCard.setAttribute(MessageCardAttribute.message, message.message);
      messageCard.setAttribute(MessageCardAttribute.img, message.img);
      messageCard.setAttribute(MessageCardAttribute.time, message.time);
      this.message.push(messageCard);
    });
  }

  connectedCallback() {
    this.render();
    console.log(this.message);
  }

  render() {
    if (this.shadowRoot) this.shadowRoot.innerHTML = ``;
    const styleElement = document.createElement("style");
    styleElement.textContent = indexstyles;
    this.shadowRoot?.appendChild(styleElement);

    const menucard = this.ownerDocument.createElement("menu-card") as MenuCard;
    menucard.setAttribute(MenuCardAttribute.user, "@a.miller");
    this.shadowRoot?.appendChild(menucard);

    const search = this.ownerDocument.createElement("search-component");
    this.shadowRoot?.appendChild(search);

    const title = document.createElement("h3");
    title.textContent = "Messages";
    title.classList.add("title");
    this.shadowRoot?.appendChild(title);

    const general = document.createElement("div");
    general.classList.add(`general`);
    this.shadowRoot?.appendChild(general);

    const datacontainer = document.createElement("div");
    datacontainer.classList.add(`data`);
    this.shadowRoot?.appendChild(datacontainer);

    this.message.forEach((user) => {
      console.log(user);
      datacontainer.appendChild(user);
    });

    const yourmessages = this.ownerDocument.createElement("your-messages");
    yourmessages.classList.add("yourmessage");
    general.appendChild(yourmessages);

    const menumessage = document.createElement("menu-message") as MenuNotification;
     this.shadowRoot?.appendChild(menumessage);
    
  }
}

customElements.define("messages-screen", Messages);
