import indexstyles from "./login.css";
import LoginForm, {
  Attribute as LoginFormAttribute,
} from "../../components/logInComponent/logInComponent";
import { signInWithEmailAndPassword } from "firebase/auth"; // Importa la función adecuada desde tu archivo firebase

// Importa las funciones necesarias de tu código existente

class LoginScreen extends HTMLElement {
  loginFormElement: LoginForm | null = null;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    if (this.shadowRoot) this.shadowRoot.innerHTML = ``;

    const styleElement = document.createElement("style");
    styleElement.textContent = indexstyles;
    this.shadowRoot?.appendChild(styleElement);

    // Componente de formulario de inicio de sesión
    this.loginFormElement = this.ownerDocument.createElement(
      "login-form"
    ) as LoginForm;
    this.shadowRoot?.appendChild(this.loginFormElement);

    // Botón para iniciar sesión
    const loginButton = this.ownerDocument.createElement("button");
    loginButton.innerText = "Login";
    this.shadowRoot?.appendChild(loginButton);

    loginButton.addEventListener("click", async () => {
      if (this.loginFormElement) {
        const emailInput = this.loginFormElement.getEmailInput();
        const passwordInput = this.loginFormElement.getPasswordInput();

        if (emailInput && passwordInput) {
          const email = emailInput.value;
          const password = passwordInput.value;

          if (email.trim() !== "") {
            try {
              // Utiliza la función de inicio de sesión adecuada
              signInWithEmailAndPassword(auth, email, password);
              // Realiza las acciones necesarias para el inicio de sesión exitoso
              console.log("Inicio de sesión exitoso");
              // Añade aquí la navegación a la pantalla correspondiente
            } catch (error) {
              console.error("Error al iniciar sesión:", error);
            }
          } else {
            alert("Por favor, ingrese un correo electrónico válido.");
          }
        } else {
          console.error(
            "Error al obtener los inputs del formulario de inicio de sesión."
          );
        }
      }
    });

    // Otros componentes, como información de cuenta y menú inferior
  

    const lowerMenuElement = this.ownerDocument.createElement(
      "lower-menu"
    ) as LoginForm;
    lowerMenuElement.setAttribute(LoginFormAttribute.user, "@a.miller");
    this.shadowRoot?.appendChild(lowerMenuElement);
  }
}

customElements.define("login-screen", LoginScreen);
