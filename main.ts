import {Serie} from './serie.js';
import {dataSeries} from './data.js';

let seriesTbody: HTMLElement = document.getElementById("series")!;
const seasonAverage: HTMLElement = document.getElementById("averageSeasons")!;
let card: HTMLElement = document.getElementById("card")!;
seasonAverage.innerHTML = `${getAverageSeasons(dataSeries)}`
renderSeriesInTable(dataSeries);

function displayCard(serie:Serie):void{
  console.log("Cambiando tarjeta");
  clearCard();
  let megaCard = document.createElement("div");
  megaCard.className="card mx-lg-auto";

  let cardImg = document.createElement("img");
  cardImg.className="card-img-top";
  cardImg.src=serie.imagen;
  cardImg.alt="Series image";
  cardImg.referrerPolicy="no-referrer";

  let cardBody = document.createElement("div");
  cardBody.className="card-body";
  cardBody.innerHTML = `
                        <h2 class ="card-title">${serie.name}</h2>
                        <p class ="card-text" align = "justify">${serie.description}</p>
                        <a href=${serie.url} ><p class ="card-text">${serie.url}</p></a>
                        `
  megaCard.appendChild(cardImg); 
  megaCard.appendChild(cardBody);
  card.appendChild(megaCard);


}

function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando series');
    series.forEach((serie) => {
      let trElement = document.createElement("tr");
      trElement.addEventListener('click', function(){displayCard(serie);});
        trElement.innerHTML = `<td class="table-active">${serie.id}</td>
                             <td class="table-active">${serie.name}</td>
                             <td class="table-active">${serie.channel}</td>
                             <td class="table-active">${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
  }
function getAverageSeasons(series: Serie[]): string {
let totalSeasons: number = 0;
let totalSeries: number = series.length
series.forEach((serie) => totalSeasons += serie.seasons);
let average = totalSeasons/totalSeries
let result = "Seasons average: " +average.toString()
return result;
}

function clearCard() {
  while (card.hasChildNodes()) {
    if (card.firstChild != null) {
      card.removeChild(card.firstChild);
}
  }}
