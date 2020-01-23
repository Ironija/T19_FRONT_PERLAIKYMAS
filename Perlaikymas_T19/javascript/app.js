/*

// 1 variantas su TypeError: NetworkError when attempting to fetch resource

// PVZ >>> https://postit.lt/data/v2/?address=sav&city=vilnius&group=street&key=AN9O98ChMrliIeqnBwnX
// Sugeneruotas raktas >>> https://postit.lt/data/v2/?address= + searchField.value + &city=kedainiai&group=street&key=uDzUkOWiBNmTTgt1edGn

"use srtict"

(function () {

    const paieskosLaukas = document.querySelector("input.form-control");
    const paieskosMygtukas = document.querySelector("#submit");
    const paieskosRezultatas = document.querySelector(".result");

    paieskosMygtukas.addEventListener("click", ieskoti);

    function rodytiZinute(zinute) {
        let prompt = document.createElement("p");
        prompt.textContent = zinute;
        paieskosRezultatas.appendChild(prompt);
    }

    function pridetiEilute(table, name, content) {
        let eilute = document.createElement("tr");
        table.appendChild(eilute);
        let stulpelioAntraste = document.createElement("th");
        stulpelioAntraste.textContent = antraste;
        eilute.appendChild(stulpelioAntraste);
        let stulpelioTurinys = document.createElement("td");
        stulpelioTurinys.textContent = turinys;
        eilute.appendChild(stulpelioTurinys);
    }

    function rodytiInformacija(pastoKodas) {
        let table = document.createElement("table");
        table.classList.add("table");
        table.classList.add("table-dark");
        table.classList.add("table-bordered");
        paieskosRezultatas.appendChild(table);
        pridetiEilute(table, "Pašto kodas", pastoKodas ["post_code"]);
        pridetiEilute(table, "Gatvė", pastoKodas["street"]);
        pridetiEilute(table, "Namo nr.", pastoKodas["number"]);
        pridetiEilute(table, "Miestas / vietovė", pastoKodas["city"]);
        pridetiEilute(table, "Savivaldybė", pastoKodas["municipality"]);
        pridetiEilute(table, "Aptarnaujantis paštas", pastoKodas["post"]);
    }

    async function ieskoti() {
        const response = await fetch("https://postit.lt/data/v2/?address=" + searchField.value + "city=kedainiai&group&group=street&key=uDzUkOWiBNmTTgt1edGn");
        const pastoKodas = await response.json();
        console.log(response);
        while (paieskosRezultatas.hasChildNodes()) {
            paieskosRezultatas.removeChild(paieskosRezultatas.firstChild);
        }
        if (postCode["Response"] === true) {
            rodytiInformacija(pastoKodas);
        }
        else {
            rodytiZinute("Patikslinkite paiešką");
        }
    }
})();
*/

/*

// 2 variantas su console.log

// PVZ >>> https://postit.lt/data/v2/?address=sav&city=vilnius&group=street&key=AN9O98ChMrliIeqnBwnX
// Sugeneruotas raktas >>> https://postit.lt/data/v2/?address= + searchField.value + &city=kedainiai&group=street&key=uDzUkOWiBNmTTgt1edGn
*/

const paieskosLaukas = document.querySelector("input.form-control");
const paieskosMygtukas = document.querySelector("#submit");

paieskosMygtukas.addEventListener("click", rodytiInformacija);

async function rodytiInformacija() {

    const duomenys = await fetch("https://postit.lt/data/v2/?address=" + paieskosLaukas.value + "&city=kedainiai&group=street&key=uDzUkOWiBNmTTgt1edGn")
        .then(res => res.json())
    console.log(duomenys.data[7]);
}

/*
// neveikia: network error

fetch("https://postit.lt/data/v2/?address=" + paieskosLaukas.value + "&city=kedainiai&group=street&key=uDzUkOWiBNmTTgt1edGn")
    .then((res) => res.json())
    .then((duomenys) => {
        document.querySelector(".result").innerHTML = duomenys;
    })
    .catch((err) => console.log(err))
}
*/

rodytiInformacija();