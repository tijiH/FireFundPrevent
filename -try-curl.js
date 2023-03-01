async function getPastEvents(){

const { default: fetch } = await import('node-fetch');


fetch('https://firefund.finance')
  .then(response => response.text())
  .then(html => {
    // Faire quelque chose avec le contenu de la page (html)
    console.log(html);
  })
  .catch(error => console.error(error));

}

getPastEvents()