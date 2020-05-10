import { LitElement, html, css } from 'lit-element';

export class AppRoot extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render() {
    return html`
      <h1>App Root</h1>
    `;
  }
}

customElements.define('app-root', AppRoot);
