class Navigation extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div id="row1" class="navRow">
            <a href="https://ldl.linguistics.gmu.edu/" data-title="GMU LangDoc Lab Group"><img src="icons/lab_group_hires.png" width="51" height="42" alt="GMU LangDoc Lab Group" /></a>
            <a href="https://akuzipik.info/" data-title="Yupik Corpus"><img src="icons/corpus_hires.png" width="52" height="37" alt="Yupik Corpus" /></a>
            <a href="https://morphology.akuzipik.info/" data-title="Morphological Analyzer"><img src="icons/analyzer_hires.png" width="52" height="51" alt="Morphological Analyzer" /></a>
        </div>
        <div id="row2" class="navRow">
            <a href="https://saintlawrenceislandyupik.github.io/web_tools/index_utilities.html" data-title="Orthotactic Spellchecker"><img src="icons/spellchecker_hires.png" width="53" height="51" alt="Orthotactic Spellchecker" /></a>
            <a href="contact.html" data-title="Contact Us"><img src="icons/contact_hires.png" width="52" height="37" alt="Contact Us" /></a>
            <a href="about.html" data-title="About"><img src="icons/about.png" width="51" height="43" alt="About the Dictionary"></a>
        </div>
    `;
  }
}

customElements.define('nav-component', Navigation);