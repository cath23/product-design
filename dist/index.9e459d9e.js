function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

var $4e76faf00be33422$exports = {};
$4e76faf00be33422$exports = "@import \"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap\";\n:host {\n  width: 100%;\n  background-color: #fff9;\n  grid-template-rows: 1fr;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n  display: grid;\n}\n\n@media (max-width: 520px) {\n  :host {\n    flex-flow: column;\n    display: flex;\n  }\n}\n\n:host ::slotted(:nth-child(3)) {\n  grid-area: 2 / 1 / auto / 3;\n}\n\n";


const $28549be63774f580$var$cardContainerTemplate = document.createElement("template");
// The /*html*/ comment is for an extention to be able to highlight html inside backticks.
$28549be63774f580$var$cardContainerTemplate.innerHTML = /*html*/ `
	<slot name="card1"></slot>
	<slot name="card2"></slot>
	<slot name="card3"></slot>
`;
class $28549be63774f580$export$2e2bcd8739ae039 extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({
            mode: "open"
        });
        // Using 'cloneNode(true)' enable to re-use the component multiple times in page.
        // https://stackoverflow.com/q/69054340/7889584
        this.shadowRoot.appendChild($28549be63774f580$var$cardContainerTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        // how to use scss with a web compoent
        // https://github.com/parcel-bundler/parcel/discussions/5847
        const style = document.createElement("style");
        this.shadowRoot.appendChild(style);
        style.textContent = (0, (/*@__PURE__*/$parcel$interopDefault($4e76faf00be33422$exports)));
    }
}
customElements.define("card-container", $28549be63774f580$export$2e2bcd8739ae039);


var $8801614165131821$exports = {};
$8801614165131821$exports = "@import \"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap\";\n*, :before, :after {\n  overscroll-behavior: none;\n  scroll-behavior: smooth;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: Inter, sans-serif;\n}\n\nbody {\n  height: 100%;\n  background-color: #f9f9fb;\n}\n\n@media (max-width: 1024px) {\n  body {\n    padding-inline: 1.5rem;\n  }\n}\n\nmain {\n  height: inherit;\n}\n\nh1 {\n  letter-spacing: -.06em;\n  color: #040410cc;\n  font-size: 40px;\n  font-weight: 600;\n  line-height: 120%;\n}\n\n@media (max-width: 520px) {\n  h1 {\n    letter-spacing: -.04em;\n    font-size: 26px;\n    line-height: 115%;\n  }\n}\n\nh2 {\n  letter-spacing: -.06em;\n  color: #040410cc;\n  font-size: 32px;\n  font-weight: 600;\n  line-height: 120%;\n}\n\n@media (max-width: 520px) {\n  h2 {\n    letter-spacing: -.04em;\n    font-size: 22px;\n  }\n}\n\nh3 {\n  letter-spacing: -.06em;\n  color: #040410cc;\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 115%;\n}\n\nh3.bold {\n  letter-spacing: -.04em;\n  font-weight: 700;\n}\n\n@media (max-width: 520px) {\n  h3 {\n    letter-spacing: -.04em;\n    font-size: 18px;\n    line-height: 115%;\n  }\n\n  h3.bold {\n    letter-spacing: -.02em;\n    font-weight: 700;\n  }\n}\n\nh4 {\n  color: #04041066;\n  font-size: 14px;\n  font-weight: 800;\n  line-height: 140%;\n}\n\n@media (max-width: 520px) {\n  h4 {\n    font-size: 14px;\n  }\n}\n\np, .bf-text-regular {\n  letter-spacing: -.04em;\n  color: #040410cc;\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 150%;\n}\n\np.bold, .bf-text-regular.bold {\n  color: #040410;\n  font-weight: 700;\n}\n\n@media (max-width: 520px) {\n  p, .bf-text-regular {\n    letter-spacing: -.02em;\n    font-size: 18px;\n    font-weight: 400;\n  }\n}\n\n.bd-text-small {\n  letter-spacing: -.04em;\n  color: #040410cc;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 150%;\n}\n\n@media (max-width: 520px) {\n  .bd-text-small {\n    letter-spacing: -.02em;\n    font-size: 16px;\n    line-height: 140%;\n  }\n}\n\n.link-text {\n  color: #040410;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 100%;\n}\n\n.tag-text {\n  color: #04041066;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 145%;\n}\n\n.caption-text {\n  letter-spacing: -.04em;\n  color: #040410cc;\n  font-size: 16px;\n  line-height: 150%;\n}\n\n.quote-caption-text {\n  color: #04041066;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 150%;\n}\n\n.container-lg {\n  max-width: 1440px;\n  flex-flow: column;\n  align-items: center;\n  display: flex;\n}\n\n.container-sm {\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n.dark {\n  color: #040410cc;\n}\n\n.grey {\n  color: #04041066;\n}\n\n.bold {\n  font-weight: 700;\n}\n\n.italic {\n  font-style: italic;\n}\n\n.quote-container, .list-container {\n  height: 100%;\n  background-color: #fff9;\n  border-radius: 1rem;\n  flex-flow: column;\n  justify-content: center;\n  box-shadow: 0 0 30px #0000000f;\n  padding: 2.5rem !important;\n}\n\n:host([type=\"list\"]) .quote-container, :host([type=\"list\"]) .quote-container *, :host([type=\"quote\"]) .list-container, :host([type=\"quote\"]) .list-container * {\n  display: none;\n}\n\n.list-container .list-title {\n  vertical-align: baseline;\n  margin-bottom: 1.5rem;\n  display: inline-flex;\n}\n\n.list-container .list-title .emoji {\n  align-self: center;\n  margin-top: -9px;\n}\n\n.list-container .list-content ::slotted(li) {\n  text-indent: -1rem;\n  list-style-position: inside;\n  padding-left: 1rem !important;\n}\n\n.list-container .list-content ::slotted(:not(:last-child)) {\n  margin-bottom: .5rem !important;\n}\n\n.quote-container .quote-caption {\n  color: #04041066;\n  margin-top: .5rem;\n}\n\n";


const $24a533d2fd5d499d$var$cardTemplate = document.createElement("template");
// The /*html*/ comment is for an extention to be able to highlight html inside backticks.
$24a533d2fd5d499d$var$cardTemplate.innerHTML = /*html*/ `
    <div class="quote-container">
        <p class="quote-text bd-text-small italic"><slot name="quote-text">"This is a quoted text"</slot></p>
        <p class="quote-caption quote-caption-text"><slot name="quote-caption"> - name </slot></p>
    </div>
    <div class="list-container">
        <h3 class="list-title bold"><span class="emoji" role="img" aria-label="emoji pointer">👉</span><slot name="list-title"></slot></h3>
        <ul class="list-content bd-text-small"><slot> Insert: a li a number elements with slot="list-item"</slot></ul>
    </div>
    `;
class $24a533d2fd5d499d$export$2e2bcd8739ae039 extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({
            mode: "open"
        });
        // how to use scss with a web compoent
        // https://github.com/parcel-bundler/parcel/discussions/5847
        const style = document.createElement("style");
        this.shadowRoot.appendChild(style);
        style.textContent = (0, (/*@__PURE__*/$parcel$interopDefault($8801614165131821$exports)));
        // Using 'cloneNode(true)' enable to re-use the component multiple times in page.
        // https://stackoverflow.com/q/69054340/7889584
        this.shadowRoot.appendChild($24a533d2fd5d499d$var$cardTemplate.content.cloneNode(true));
    }
    connectedCallback() {}
}
customElements.define("card-wc", $24a533d2fd5d499d$export$2e2bcd8739ae039);




