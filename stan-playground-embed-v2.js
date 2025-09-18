/*
Define a custom HTML element <stan-playground-embed> that embeds a Stan Playground iframe.

Usage:
<stan-playground-embed>
<iframe width="100%" height="500" frameborder="0"></iframe>

<script type="text/plain" class="stan-program">
... Stan program ...

<script type="text/plain" class="stan-data">
... JSON data ...

</stan-playground-embed>

(The closing tags for the script elements are omitted above to avoid HTML parsing issues.)
*/
class StanPlaygroundEmbed extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Initialize immediately if document is ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () =>
        this.initialize()
      );
    } else {
      this.initialize();
    }
  }

  initialize() {
    // Get existing iframe
    this.iframe = this.querySelector("iframe");
    if (!this.iframe) {
      console.error("Missing iframe element in stan-playground-embed");
      return;
    }

    // Extract and hide program and data elements
    const programElement = this.querySelector("script.stan-program");
    const dataElement = this.querySelector("script.stan-data");

    if (!programElement || !dataElement) {
      console.error("Missing stan-program or stan-data script elements");
      return;
    }

    const stanProgram = programElement.textContent.trim();
    const stanData = dataElement.textContent.trim();

    const encodePlain = (text) =>
      "data:text/plain;charset=utf-8," + encodeURIComponent(text);

    const stanUrl = encodePlain(stanProgram);
    const dataUrl = encodePlain(stanData);

    // Set iframe src
    this.iframe.src = `https://stan-playground.flatironinstitute.org/?stan=${stanUrl}&data=${dataUrl}`;
  }
}

customElements.define("stan-playground-embed", StanPlaygroundEmbed);