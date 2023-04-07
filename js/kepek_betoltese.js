const betoltendo_kepek =
[
    "10f.png",
    "10.png",
    "20.png",
    "07.png",
    "07f.png",
    "06.png",
    "15.png",
    "15f.png",
    "06f.png",
    "04.png",
    "03.png",
    "04d.png",
    "02.png",
    "05.png",
    "03d.png",
    "09.png",
    "02d.png",
    "05m.png",
    "11.png",
    "19.png",
    "14.png",
    "16.png",
    "09f.png",
    "17.png",
    "01.png",
    "17d.png",
    "19f.png",
    "11d.png",
    "14f.png",
    "08.png",
    "21.png",
    "22.png",
    "21f.png",
    "22f.png",
    "12.png",
    "12f.png",
    "23.png",
    "23d.png",
    "18.png",
    "18f.png",
    "13.png",
    "13f.png",
];

function kepek_betoltese()
{
    const cache = document.getElementById("cache");
    var t = "";
    for(var i in betoltendo_kepek)
    {
        var kep = betoltendo_kepek[i];
        if (kep)
        {
            t += "<img src='kepek/" + kep + "' onload=\"kep_betoltve(this);\">";
        }
    }
    cache.innerHTML = t;
}

function kep_betoltve(obj)
{
    // console.log("Kép betöltve: " + obj.src);
    obj.style.display='none';
}
