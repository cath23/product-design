import cardStyles from 'bundle-text:../../scss/wc/card-wc.scss';
import CardContainer from './card-container-wc';


const cardTemplate = document.createElement('template');
// The /*html*/ comment is for an extention to be able to highlight html inside backticks.
cardTemplate.innerHTML = /*html*/`<p class="quote-text"><slot name="quote-text">"This is a quoted text"</slot></p>
    <p class="quote-name"><slot name="quote-name"> - name </slot></p>
    <ul class="list"></ul>`;

const listItemTemplate = document.createElement('template');
listItemTemplate.innerHTML = /*html*/`<slot name="list-item"> Insert: asd</slot>`;

export default class Card extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        // how to use scss with a web compoent
        // https://github.com/parcel-bundler/parcel/discussions/5847
        const style = document.createElement('style');
        this.shadowRoot.appendChild(style);
        style.textContent = cardStyles;


        // console.log("list", listItems);
        // console.log("template", cardTemplate.content.querySelector(".list"));

        // listItems.forEach(item => {
        //     console.log(item);
        //     cardTemplate.content.querySelector(".list").appendChild(listItemTemplate.content);
        // });

        // Using 'cloneNode(true)' enable to re-use the component multiple times in page.
        // https://stackoverflow.com/q/69054340/7889584
    }

    get list() {
        return this.list;
    }

    connectedCallback() {

        const listItems = this.querySelectorAll('.card>span[slot^=list]');
        let counter = 0;
        const itemHTML = listItemTemplate.content.innerHTML;
        let frag = document.createDocumentFragment();
        let listHTML = '';
        listItems.forEach((item, index) => {
            // frag.append(listItemTemplate.content.cloneNode(true));
            // cardTemplate.content.childNodes[4].appendChild(listItemTemplate.content.cloneNode(true));
            counter++;
            // console.log(cardTemplate.content.querySelectorAll('li'));
        });
        cardTemplate.content.childNodes[4].appendChild(listItemTemplate.content.cloneNode(true));

        // cardTemplate.content.innerHTML += listHTML;
        // cardTemplate.content.querySelector(".list").append(frag);


        // cardTemplate.content.childNodes[4].appendChild(frag.childNodes[0]);
        console.log(cardTemplate.content.childNodes[4]);
        console.log(this.id);
        console.log("listItemTemplate.content", listItemTemplate.content);
        console.log("frag", frag.childNodes);
        console.log("cardTemplate.content.querySelector('.list').childNodes", cardTemplate.content.querySelector(".list").childNodes[0]);
        // console.log(cardTemplate.content);
        console.log(counter);
        this.shadowRoot.appendChild(cardTemplate.content.cloneNode(true));
    }
}

customElements.define('card-wc', Card);
// todo load content/data from a json file and create another jsfile that will be contentLoader.js
// todo and will be imported to firstAm.js which will use contentLoader.js's functions to load
// todo all the content for the whole page.

export {Card};