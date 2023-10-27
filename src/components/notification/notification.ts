import notificationStyle from "./notification.css";

export enum Attribute {
  "username" = "username",
  "userImage" = "userImage",
  "notificationType" = "notificationType",
}

export default class NotificationCard extends HTMLElement {
  username?: string;
  userImage?: string;
  notificationType?: string;

  static get observedAttributes() {
    const attrs: Record<Attribute, null> = {
      username: null,
      userImage: null,
      notificationType: null,
    };
    return Object.keys(attrs);
  }

  attributeChangedCallback(
    propName: Attribute,
    oldValue: string | undefined,
    newValue: string | undefined
  ) {
    switch (propName) {
      default:
        this[propName] = newValue;
        break;
    }
    this.render();
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    
  }

  render() {
    if (this.shadowRoot)this.shadowRoot.innerHTML = ` hola
    <style>
        ${notificationStyle}
    </style>

    <section>
          <img class="user-img" src="${this.userImage}"/>
          <h3>${this.username}</h3>
          <h6>${this.notificationType}</h6>
      </section>
    `
    }
  }


customElements.define("notification-card", NotificationCard);

