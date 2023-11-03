import AudioStyles from "./audio-Card.css";

export enum Attribute {
  "img" = "img",
}

class AudioCard extends HTMLElement {
  img?: string;

  static get observedAttributes() {
    const attrs: Record<Attribute, null> = {
      img: null,
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
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `

        <style>${AudioStyles}</style>
      
        `;

const container = this.ownerDocument.createElement('section');
container.classList.add('container');


const audioContainer = this.ownerDocument.createElement('section');
audioContainer.classList.add('audioContainer');


const audioImg = this.ownerDocument.createElement('img');
audioImg.classList.add('audioImg');
audioImg.src = '/img/Audio.png';
const songNameParagraph = this.ownerDocument.createElement('p');
songNameParagraph.classList.add('songName');
songNameParagraph.style.display = 'none';
container.appendChild(songNameParagraph);
audioImg.addEventListener('click', () => {
  // Muestra el nombre de la canción
  songNameParagraph.textContent = 'Nombre de la canción'; // Reemplaza con el nombre real de la canción
  songNameParagraph.style.display = 'block'; // Muestra el párrafo
});

audioContainer.appendChild(audioImg);


const imgContainer = this.ownerDocument.createElement('section');
imgContainer.classList.add('imgContainer');


const imgUser = this.ownerDocument.createElement('img');
imgUser.classList.add('imgUser');
imgUser.src = `${this.img}`;
imgUser.addEventListener('click', () => {
  // Crea una ventana emergente o un modal para mostrar la imagen más grande
  const modal = this.ownerDocument.createElement('div');
  modal.classList.add('modal');

  // Crea una imagen más grande en el modal
  const enlargedImg = this.ownerDocument.createElement('img');
  enlargedImg.src = `${this.img}`;

  // Agrega la imagen más grande al modal
  modal.appendChild(enlargedImg);

  // Agrega el modal al DOM
  this.shadowRoot?.appendChild(modal);

  // Agrega un evento de clic para cerrar el modal cuando se hace clic fuera de la imagen
  modal.addEventListener('click', () => {
    this.shadowRoot?.removeChild(modal);
  });
});


imgContainer.appendChild(imgUser);


container.appendChild(audioContainer);
container.appendChild(imgContainer);


this.shadowRoot.appendChild(container);
    }
  }
}

customElements.define("audio-card", AudioCard);
export default AudioCard;