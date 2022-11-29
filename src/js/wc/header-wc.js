import headerStyles from 'bundle-text:../../scss/wc/header-wc.scss';
import goBackImg from '../../assets/goBack-emoji.png';

const headerTemplate = document.createElement('template');

/**
 * The headerTemplate contains two header variants: 'main' and secondary header
 * To choose the variant you want to use just add a 'type' attribute when consuming the component
 * and pass the variant of your preference. Eg <header-wc type:"main"><header-wc/>.
 * If no type is passed, the secondary header will be used.
 * The corresponding variant is handled directly via the component's CSS.
 */
// The /*html*/ comment is used by an extention to be able to highlight HTML inside backticks.
headerTemplate.innerHTML = /*html*/`
	<div class="header-container container-lg">
		<div class="header-home">
			<a href="/" class="header-home_logo">
				<svg class="header-home_logo-svg" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path class="border dot" d="M3 0H0V3H3V0Z" fill="#161616"/>
					<path class="border line" d="M40 0H6V3H40V0Z" fill="#161616"/>
					<path class="border line" d="M40 34V2H37V34H40Z" fill="#161616"/>

					<path class="border dot" d="M37 40H40V37H37V40Z" fill="#161616"/>
					<path class="border line" d="M0 40L34 40V37L0 37V40Z" fill="#161616"/>
					<path class="border line" d="M3 38L3 6H0L0 38H3Z" fill="#161616"/>
					<path class="letter letter1" fill="url(#grad1)" d="M15.316 26H18.466L13.372 19.628L18.142 13.994H14.992L10.744 19.358V13.994H8.188V26H10.744V22.31L11.68 21.194L15.316 26Z" fill="#161616"/>
					<path class="letter letter2"  fill="url(#grad2)" d="M29.316 26H32.466L27.372 19.628L32.142 13.994H28.992L24.744 19.358V13.994H22.188V26H24.744V22.31L25.68 21.194L29.316 26Z" fill="#161616"/>
				</svg>
			</a>
			<a href="/index.html" class="header-home_back-link link-text goBack-anm"><img class="header-home_back-emoji" src="${goBackImg}"><span>Go back</span></a>
		</div>
		<ul class="header-navigation_list">
			<li class="header-navigation_list-item active"><a href="/index.html" class="header-navigation_link link-text">Work</a></li>
			<li class="header-navigation_list-item"><a href="/about-page.html" class="header-navigation_link link-text">About</a></li>
		</ul>
	</div>
`;

export default class HeaderWc extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({mode: 'open'});
		// how to use scss with a web compoent
		// https://github.com/parcel-bundler/parcel/discussions/5847
		const style = document.createElement('style');
		this.shadowRoot.appendChild(style);
		style.textContent = headerStyles;



		// Using 'cloneNode(true)' enable to re-use the component multiple times in page.
		// https://stackoverflow.com/q/69054340/7889584
		this.shadowRoot.appendChild(headerTemplate.content.cloneNode(true));

	}

	connectedCallback() {
	}
}

customElements.define('header-wc', HeaderWc);