import {LitElement, html, css} from 'lit-element';


export default class Input extends LitElement {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        const $input = this.shadowRoot.querySelector('input');
        e.preventDefault();
        if (!$input.value) return;
        this.dispatchEvent(new CustomEvent('submit', { detail: $input.value }));
        $input.value = '';
    }

    static get styles(){
        return css`
            form {
                position: relative;
                font-size: 24px;
                border-bottom: 1px solid #ededed;
            }
            input[type=text] {
                padding: 16px 16px 16px 60px;
                border: none;
                background: rgba(0, 0, 0, 0.003);
                position: relative;
                margin: 0;
                width: 100%;
                font-size: 20px;
                font-family: inherit;
                font-weight: inherit;
                line-height: 1.4em;
                border: 0;
                outline: none;
                color: inherit;
                padding: 6px;
                border: 1px solid #CCC;
              
                box-sizing: border-box;
            }
            
            label{
                 font-size: 20px;
                text-align: center;
                 position : center;
                 
            }

        `
    }

    render(props) {
        return html`
      
        <form @submit="${this.onSubmit}">
              <label for="first">Votre liste</label>
              
                <input type="text" id="first" placeholder="Add new Todo" />
           
        </form>
      `;
    }
}


customElements.define('todo-input', Input);
