import { dataSeries } from './data.js';
var seriesTbody = document.getElementById("series");
var seasonAverage = document.getElementById("averageSeasons");
var card = document.getElementById("card");
seasonAverage.innerHTML = "".concat(getAverageSeasons(dataSeries));
renderSeriesInTable(dataSeries);
function displayCard(serie) {
    console.log("Cambiando tarjeta");
    clearCard();
    var cardImg = document.createElement("img");
    cardImg.className = "card-img-top";
    cardImg.src = serie.imagen;
    cardImg.alt = "Series image";
    cardImg.referrerPolicy = "no-referrer";
    var cardBody = document.createElement("div");
    cardBody.className = "card-body";
    cardBody.innerHTML = "<h2 class =\"card-title\">".concat(serie.name, "</h2>\n                        <p class =\"card-text\" align = \"justify\">").concat(serie.description, "</p>\n                        <a href=").concat(serie.url, " ><p class =\"card-text\">").concat(serie.url, "</p></a>\n                        ");
    card.appendChild(cardImg);
    card.appendChild(cardBody);
}
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.addEventListener('click', function () { displayCard(serie); });
        trElement.innerHTML = "<td class=\"table-active\">".concat(serie.id, "</td>\n                             <td class=\"table-active\">").concat(serie.name, "</td>\n                             <td class=\"table-active\">").concat(serie.channel, "</td>\n                             <td class=\"table-active\">").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    var totalSeasons = 0;
    var totalSeries = series.length;
    series.forEach(function (serie) { return totalSeasons += serie.seasons; });
    var average = totalSeasons / totalSeries;
    var result = "Seasons average: " + average.toString();
    return result;
}
function clearCard() {
    while (card.hasChildNodes()) {
        if (card.firstChild != null) {
            card.removeChild(card.firstChild);
        }
    }
}
