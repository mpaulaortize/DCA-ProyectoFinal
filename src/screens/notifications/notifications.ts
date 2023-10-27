import {datanotifications} from "../../components/notification/dataNotification";
import NotificationCard, {Attribute as NotificationCardAttribute,} from "../../components/notification/notification";
import "../../components/export"

    class NotificationContainer extends HTMLElement {
    notif: NotificationCard[] = [];
    
    constructor() {
      super();
      this.attachShadow({ mode: "open"});
  
      datanotifications.forEach((notif) => {
        const notificationsCard = this.ownerDocument.createElement("notification-card" )as NotificationCard;
        notificationsCard.setAttribute(NotificationCardAttribute.username, notif.username);
        notificationsCard.setAttribute(NotificationCardAttribute.userImage, notif.userImage);
        notificationsCard.setAttribute(NotificationCardAttribute.notificationType, notif.notificationType);
        this.notif.push(notificationsCard);
      });
      

    }
  
      
  
    connectedCallback() {
      this.render();
      
    }
  
    render() {
        if (this.shadowRoot)this.shadowRoot.innerHTML = `holaa`
        // const styleElement = document.createElement("style");
        // styleElement.textContent = IndexStyle;
        // this.shadowRoot?.appendChild(styleElement);
        const generalContainer = document.createElement("section");
        generalContainer.classList.add("general");
        this.shadowRoot?.appendChild(generalContainer);

        // const notifcard = document.createElement("notification-card");
        // notifcard.classList.add("general");
        // this.shadowRoot?.appendChild(notifcard);
    }
  }
  
  customElements.define("notification-container", NotificationContainer);
  