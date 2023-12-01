import { datanotifications } from "../../components/notification/dataNotification";
import NotificationCard, {
  Attribute as NotificationCardAttribute,
} from "../../components/notification/notification";
import MenuCard, {
  Attribute as MenuCardAttribute,
} from "../../components/menu-Card/menu-Card";
import "../../components/export";
import indexstyles from "./notifications.css";
import { MenuNotification } from "../../components/export";

// Firebase
import firebase from "../../utils/firebase";
import { getNotifications } from "../../utils/firebase";
import { Notifications } from "../../types/notificationType";

//Parametros
const formData: Omit<Notifications, "id"> = {
  username: "",
  img: "",
  notificationtype: "",
  time: "",
};

class NotificationContainer extends HTMLElement {
  notification: NotificationCard[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    datanotifications.forEach((notification) => {
      const notificationsCard = this.ownerDocument.createElement(
        "notification-card"
      ) as NotificationCard;
      notificationsCard.setAttribute(
        NotificationCardAttribute.username,
        notification.username
      );
      notificationsCard.setAttribute(
        NotificationCardAttribute.notificationtype,
        notification.notificationtype
      );
      notificationsCard.setAttribute(
        NotificationCardAttribute.img,
        notification.img
      );
      notificationsCard.setAttribute(
        NotificationCardAttribute.time,
        notification.time
      );
      this.notification.push(notificationsCard);
    });
  }

  connectedCallback() {
    this.render();
    console.log(this.notification);
  }

  // valores
  changeimg(e: any) {
    formData.username = e.target.value;
    formData.img = e.target.value;
    formData.notificationtype = e.target.value;
    formData.time = e.target.value;
  }

  async render() {
    try {
      if (this.shadowRoot) this.shadowRoot.innerHTML = ``;
      const styleElement = document.createElement("style");
      styleElement.textContent = indexstyles;
      this.shadowRoot?.appendChild(styleElement);

      // Agregar MenuProfile
      const menucard = this.ownerDocument.createElement(
        "menu-card"
      ) as MenuCard;
      menucard.setAttribute(MenuCardAttribute.user, "@a.miller");
      this.shadowRoot?.appendChild(menucard);

      const title1 = document.createElement("h1");
      title1.textContent = "New";
      title1.classList.add("title1");
      this.shadowRoot?.appendChild(title1);

      const newNotification =
        this.ownerDocument.createElement("notification-new");
      this.shadowRoot?.appendChild(newNotification);

      const lineSearch1 = document.createElement("div");
      lineSearch1.classList.add(`lineSearch`);
      this.shadowRoot?.appendChild(lineSearch1);

      const generalContainer = document.createElement("section");
      generalContainer.classList.add("general");
      this.shadowRoot?.appendChild(generalContainer);

      const title = document.createElement("h1");
      title.textContent = "This week";
      title.classList.add("title");
      this.shadowRoot?.appendChild(title);

      const datacontainer = document.createElement("div");
      datacontainer.classList.add(`data`);
      this.shadowRoot?.appendChild(datacontainer);

      // Obtener los datos de los posts desde Firebase
      const postData = await getNotifications();

      // Crear contenedor para las imágenes de los posts
      const imageContainer = document.createElement("div");
      imageContainer.classList.add(`image-container`);
      this.shadowRoot?.appendChild(imageContainer);

      // Se agrega la data
      postData.forEach((post: any) => {
        console.log(post); // Agrega esta línea para verificar si hay datos en post
        const card = this.ownerDocument.createElement(
          "notification-card"
        ) as NotificationCard;
        card.setAttribute(NotificationCardAttribute.username, post.username);
        card.setAttribute(NotificationCardAttribute.img, post.img);
        card.setAttribute(
          NotificationCardAttribute.notificationtype,
          post.notificationtype
        );
        imageContainer.appendChild(card);
        card.setAttribute(NotificationCardAttribute.time, post.time);
      });

      const lineSearch = document.createElement("div");
      lineSearch.classList.add(`lineSearch`);
      this.shadowRoot?.appendChild(lineSearch);

      const title2 = document.createElement("h1");
      title2.textContent = "This month";
      title2.classList.add("title2");
      this.shadowRoot?.appendChild(title2);

      const notificationmonth =
        this.ownerDocument.createElement("notification-month");
      this.shadowRoot?.appendChild(notificationmonth);
    } catch (error) {
      console.error(error);
    }
  }
}
customElements.define("notification-container", NotificationContainer);
