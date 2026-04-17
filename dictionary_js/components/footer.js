class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div id="footer1">© 2026 St. Lawrence Island</div>
        <div id="footer2"><b>Data and entries sourced from: </b>
            <br> 
            Badten, L.W. (Aghnaghaghpik), 
            Kaneshiro, V.O. (Uqiitlek), 
            Oovi, M. (Uvegtu), & 
            Koonooka, C. (Petuwaq). (2008). 
            <i>St. Lawrence Island/Siberian Yupik Eskimo dictionary. </i>
            University of Alaska Fairbanks: Alaska Native Language Center.
        </div>
    `;
  }
}

customElements.define('footer-component', Footer);
