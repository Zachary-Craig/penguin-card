import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class PenguinCard extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--penguin-card-background-color);
    }

    .wrapper {
  width: 400px;
  border: 3px solid blue;
}
.btn-wrapper {
  margin: 24px auto;
}
.btn-wrapper button {
  font-size: 12px;
  color: blue;
  background-color: white;
}
.btn-wrapper button:hover {
  color: white;
  background-color: blue;
}

@media screen and (max-width: 799px) and (min-width: 501px) {
  .button {
    display: block;
  }
}

@media screen and (max-width: 500px) {
  .card {
    transform: scale(0.8);
  }
  .card img {
    width: 80%;
  }
}

.wrapper {
  background-color: gold;
  padding: 20px;
  margin-bottom: 10px;
}

button {
  margin: 10px;
}
.dup-button button {
  background-color: gold;
  font-size: 12px;
}
.dup-button button:hover{
  color: white;
  background-color: blue;
}
.dup-button button:focus{
  color: white;
  background-color: blue;
}

.backgroundcolorButton button {
  background-color: gold;
  font-size: 12px;
}
.backgroundcolorButton button:hover{
  color: white;
  background-color: blue;
}
.backgroundcolorButton button:focus{
  color: white;
  background-color: blue;
}

.headingButton button {
  background-color: gold;
  font-size: 12px;
}
.headingButton button:hover{
  color: white;
  background-color: blue;
}
.headingButton button:focus{
  color: white;
  background-color: blue;
}

.deleteCard button {
  background-color: gold;
  font-size: 12px;
}
.deleteCard button:hover{
  color: white;
  background-color: blue;
}
.deleteCard button:focus{
  color: white;
  background-color: blue;
}

.button-box {
  background-color: #f0f0f0;
  border: 2px solid blue;
  border-radius: 10px;
  padding: 1px;
  display: inline-block;
  box-shadow: 5px 2px 5px rgba(0, 0, 0, 0.2);
}

.card-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <main>
      <div class="card-container">
<div class="wrapper">
        <div class="card">
  <img class="image"
src="https://logos-world.net/wp-content/uploads/2020/05/Pittsburgh-Penguins-symbol.jpg"
alt="Penguins Logo" width="400" height="225">
<div class="header">
  <h3>Pittsburgh Penguins National Hockey Team</h3>
  </div>
  <h4>Description</h4>
    <div class="description">
  <h5>The Pittsburgh Penguins are an NHL hockey team from Pittsburgh, known for their championships and star players like Sidney Crosby and Mario Lemieux.</h5>
  </div>
<div class="btn-wrapper">
    <button onclick="hideDescription()">Details</button>
  </div>
  </div>
  </div>
</div>

<div class="button-box">
<div class="dup-button">
  <button>Duplicate</button>
</div>
     
<div class="backgroundcolorButton">
  <button onclick="changeBackgroundColor()"> Change Background Color</button>
    </div>

<div class="headingButton">
  <button onclick="changeHeading()"> Change Heading</button>
    </div>

<div class="deleteCard">
  <button onclick="deleteDupCard()">Delete</button>
</div>
</div>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}

customElements.define('penguin-card', PenguinCard);