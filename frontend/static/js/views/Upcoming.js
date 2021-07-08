import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Upcoming");
  }

  async getHtml() {
    return `
            <div class="views upcoming"> 
              <h1>Upcoming</h1>
        `;
  }
}
