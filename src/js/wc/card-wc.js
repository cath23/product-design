import cardStyles from 'bundle-text:../../scss/wc/card-wc.scss';

const cardTemplate = document.createElement('template');
/**
 * The cardTemplate contains two card variants: 'quote' and 'list' card
 * To choose the variant you want to use just add a 'type' attribute when consuming the component
 * and pass the variant of your preference. Eg <card-wc type:"quote"><card-wc/>.
 * The corresponding variant is handled directly via the component's CSS.
 */
// The /*html*/ comment is used by an extention to be able to highlight HTML inside backticks.
cardTemplate.innerHTML = /*html*/`
    <div class="quote-container">
        <p class="quote-text bd-text-small italic"><slot name="quote-text">"This is a quoted text"</slot></p>
        <p class="quote-caption quote-caption-text"><slot name="quote-caption"> - name </slot></p>
    </div>
    <div class="list-container">
        <h3 class="list-title bold"><span class="emoji" role="img" aria-label="emoji pointer">👉&nbsp</span><slot name="list-title"></slot></h3>
        <ul class="list-content bd-text-small"><slot> Insert: a li a number elements with slot="list-item"</slot></ul>
    </div>
    `;

export default class Card extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
		// how to use scss with a web compoent
		// https://github.com/parcel-bundler/parcel/discussions/5847
		const style = document.createElement('style');
		this.shadowRoot.appendChild(style);
		style.textContent = cardStyles;

		// Using 'cloneNode(true)' enable to re-use the component multiple times in page.
		// https://stackoverflow.com/q/69054340/7889584
		this.shadowRoot.appendChild(cardTemplate.content.cloneNode(true));
	}

	connectedCallback() {
	}
}

customElements.define('card-wc', Card);
