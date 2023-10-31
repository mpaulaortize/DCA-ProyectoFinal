
import searchStyle from "./search.css"

    class SearchComponent extends HTMLElement {

    
    constructor() {
      super();
      this.attachShadow({ mode: "open"});
      

    }
  
      
  
    connectedCallback() {
      this.render();
      
    }
  
    render() {
        if (this.shadowRoot)this.shadowRoot.innerHTML = ` 
        <style>
            ${searchStyle}
        </style>
       
        <section class="container">

           <section class="iconSearch">
             <img class="icon" src="/img/Iconbuscar.png"></img>
                    <div class="search">
                    <p>Buscar</p>
                    </section>
                  
                    </div>
                    <div class="line">
                    </div>
                    </section>
                    

    `
    }
  }
  
  customElements.define("search-component", SearchComponent);
  export default SearchComponent
  