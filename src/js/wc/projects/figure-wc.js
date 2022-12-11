import figureStyles from 'bundle-text:../../../scss/wc/projects/figure-wc.scss';

const figureTemplate = document.createElement('template');
/**
 * The figureTemplate contains two card variants: 'quote' and 'list' card
 * To choose the variant you want to use just add a 'type' attribute when consuming the component
 * and pass the variant of your preference. Eg <card-wc type:"quote"><card-wc/>.
 * The corresponding variant is handled directly via the component's CSS.
 */
// todo change the above text
// The /*html*/ comment is used by an extention to be able to highlight HTML inside backticks.
figureTemplate.innerHTML = /*html*/`
	<div class="figure-container">
		<figure class='figure single'>
			<slot name='image'></slot>
			<figcaption class='group__wrapper__caption caption-text'><slot name='caption'></slot>Multiple sub-levels / not flat hierarchy</figcaption>
		</figure>
		<div class="entity group">
			<figure class='figure'>
				<slot name='image1'></slot>
				<figcaption class='group__wrapper__caption caption-text'><slot name='caption1'></slot>Multiple sub-levels / not flat hierarchy</figcaption>
			</figure>
			<figure class='figure'>
				<slot name='image2'></slot>
				<figcaption class='group__wrapper__caption caption-text'><slot name='caption2'></slot>Multiple sub-levels / not flat hierarchy</figcaption>
			</figure>
			<figure class='figure'>
				<slot name='image3'></slot>
				<figcaption class='group__wrapper__caption caption-text'><slot name='caption3'></slot>Multiple sub-levels / not flat hierarchy</figcaption>
			</figure>
		</div>
	</div>
    `;

export default class Figure extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		// how to use scss with a web compoent
		// https://github.com/parcel-bundler/parcel/discussions/5847
		const style = document.createElement('style');
		this.shadowRoot.appendChild(style);
		style.textContent = figureStyles;
		// Using 'cloneNode(true)' enable to re-use the component multiple times in page.
		// https://stackoverflow.com/q/69054340/7889584
		this.shadowRoot.appendChild(figureTemplate.content.cloneNode(true));
	}

	connectedCallback() {
	}
}

customElements.define('figure-wc', Figure);
