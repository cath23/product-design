import imageContainerStyles from 'bundle-text:../../../scss/wc/projects/image-container-wc.scss';


const imageContainerTemplate = document.createElement('template');

// The /*html*/ comment is used by an extention to be able to highlight HTML inside backticks.
imageContainerTemplate.innerHTML = /*html*/`
	<div class="image-container">
		<slot class="slot"></slot>
	</div>
`;


export default class ImageContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		// Using 'cloneNode(true)' enable to re-use the component multiple times in page.
		// https://stackoverflow.com/q/69054340/7889584
		this.shadowRoot.appendChild(imageContainerTemplate.content.cloneNode(true));
	}

	connectedCallback() {
		// how to use scss with a web compoent
		// https://github.com/parcel-bundler/parcel/discussions/5847
		const style = document.createElement('style');
		this.shadowRoot.appendChild(style);
		style.textContent = imageContainerStyles;
	}
}

customElements.define('image-container-wc', ImageContainer);
