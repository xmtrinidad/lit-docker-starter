import { LitElement, html, css } from 'lit-element';

export class LandingView extends LitElement {
  static get properties() {
    return {
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
      <h1>Landing View Works</h1>
    `;
  }
}

customElements.define('landing-view', LandingView);
