const MOUNTAINS = [
{name: "Kilimanjaro", height: 5895, place: "Tanzania"},
{name: "Everest", height: 8848, place: "Nepal"},
{name: "Mount Fuji", height: 3776, place: "Japan"},
{name: "Vaalserberg", height: 323, place: "Netherlands"},
{name: "Denali", height: 6168, place: "United States"},
{name: "Popocatepetl", height: 5465, place: "Mexico"},
{name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

//console.log(Object.keys(MOUNTAINS[0])); //Printer object navnene for 1. kolonne

//opretter tabel
let table = document.createElement("table");

//kolonne navne - the keys
let headers = Object.keys(MOUNTAINS[0]);

let tableHeader = document.createElement("thead"); //vil være den øverste række - header rækken
let headerRow = document.createElement("tr"); //laver headerRow til en række

for (let key = 0; key < headers.length; key++) {
    let th = document.createElement("th");
    th.textContent = headers[key]; //hver th bliver en key, keys er name, height, place
    headerRow.appendChild(th);
}

tableHeader.appendChild(headerRow); //tilføjer headerRow(er en række) til tableHeader(Samling af lister) - bliver en række
table.appendChild(tableHeader); //tilføjer rækken til tabellen

//opretter de ændre rækker
let tableBody = document.createElement("tbody"); //en samling af body-rækker

for (let m = 0; m < MOUNTAINS.length; m++) {
    let row = document.createElement("tr"); //opretter en række

    for (let key = 0; key < 3; key++) {
        let td = document.createElement("td");
        let value = MOUNTAINS[m][headers[key]] //bliver til teskten på m'ende object, og key'ende plads i object - altså hvis MOUNTAINS[1][header[0]] så vil det være "Everest"
        td.textContent = value;

        // Højrejuster celler med tal
        if (typeof value === "number") {
            td.style.textAlign = "right";
        }

        row.appendChild(td);
    } 

    tableBody.appendChild(row)
}
table.appendChild(tableBody);

document.getElementById("mountains").appendChild(table);

