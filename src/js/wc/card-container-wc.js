import cardContainerStyles from 'bundle-text:../../scss/wc/card-container-wc.scss';


const cardContainerTemplate = document.createElement('template');

// The /*html*/ comment is for an extention to be able to highlight html inside backticks.
cardContainerTemplate.innerHTML = /*html*/`
	<slot name="card1"></slot>
	<slot name="card2"></slot>
	<slot name="card3"></slot>
`;


export default class CardContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		// Using 'cloneNode(true)' enable to re-use the component multiple times in page.
		// https://stackoverflow.com/q/69054340/7889584
		this.shadowRoot.appendChild(cardContainerTemplate.content.cloneNode(true));


	}

	connectedCallback() {
		// how to use scss with a web compoent
		// https://github.com/parcel-bundler/parcel/discussions/5847
		const style = document.createElement('style');
		this.shadowRoot.appendChild(style);
		style.textContent = cardContainerStyles;
	}
}

customElements.define('card-container', CardContainer);
