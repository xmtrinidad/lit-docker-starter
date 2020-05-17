import { LitElement, html, css } from 'lit-element';

export class LoginView extends LitElement {
  static get properties() {
    return {
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .input-container {
        margin: 8px 0;
      }
    `;
  }

  render() {
    return html`
      <h1>Login</h1>
      <form action="">
        <div class="input-container">
          <label for="username">Username</label>
          <input type="text" id="username">
        </div>
        <div class="input-container">
          <label for="password">Password</label>
          <input type="password" id="password">
        </div>
      </form>
    `;
  }
}

customElements.define('login-view', LoginView);
