import indexstyles from "./message.css"
import MessageCard, { Attribute as MessageCardAttribute,} from "../../components/message/messageC";
import MenuCard, { Attribute as MenuCardAttribute,} from "../../components/menu-Card/menu-Card";
import {datamessage } from "../../components/message/messagedata";
import "../../components/export"


class Messages extends HTMLElement {
message: MessageCard[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    datamessage.forEach((message) => {
        const messageCard = this.ownerDocument.createElement("message-card") as MessageCard;
        messageCard.setAttribute(MessageCardAttribute.user, message.user);
        messageCard.setAttribute(MessageCardAttribute.message, message.message);
        messageCard.setAttribute(MessageCardAttribute.img, message.img);
        this.message.push(messageCard);
      });
  
  }

  connectedCallback() {
    this.render();
    console.log(this.message);
    
  }

  render() {
    if (this.shadowRoot)this.shadowRoot.innerHTML = ``
     const styleElement = document.createElement("style");
     styleElement.textContent = indexstyles;
     this.shadowRoot?.appendChild(styleElement);
    
     const lineSearch = document.createElement("div");
     lineSearch.classList.add(`lineSearch`)
     this.shadowRoot?.appendChild(lineSearch);

     const title = document.createElement("h3");
     title.textContent = "Messages";
     title.classList.add("title");
     this.shadowRoot?.appendChild(title);

    const menucard = this.ownerDocument.createElement("menu-card") as MenuCard;
    menucard.setAttribute(MenuCardAttribute.user, "@a.miller");
    this.shadowRoot?.appendChild(menucard);

    this.message.forEach(user => {
      console.log(user);
      this.shadowRoot?.appendChild(user)
      
    })

    
  }
}

customElements.define("messages-screen", Messages);

