window.onload = function()
{
    document.body.addEventListener("keyup", function(e)
    {
        // console.log("Gombnyomás: " + e.keyCode);
        const GOMB_ENTER  = 13;
        const GOMB_ESC    = 27;
        const GOMB_SPACE  = 32;
        const GOMB_BALRA  = 37;
        const GOMB_FEL    = 38;
        const GOMB_JOBBRA = 39;
        const GOMB_LE     = 40;
        
        if (e.keyCode == GOMB_SPACE &&
            kategoriavalasztas_bekapcsolva() == false)
        {
            if (nev_felfedve() == false)
            {
                nev_felfedese();
            }
            else
            {
                kovetkezo_betu();
            }
        }
        if (e.keyCode == GOMB_ESC ||
            e.keyCode == GOMB_ENTER)
        {
            if (kategoriavalasztas_bekapcsolva() == false)
            {
                kategoriavalaszto_megjelenitese();
            }
            else
            {
                kategoriak_kivalasztasa();
            }
        }
        if ((e.keyCode == GOMB_BALRA || e.keyCode == GOMB_FEL) &&
             kategoriavalasztas_bekapcsolva() == false)
        {
            elozo_betu();
        }
        if ((e.keyCode == GOMB_JOBBRA || e.keyCode == GOMB_LE) &&
             kategoriavalasztas_bekapcsolva() == false)
        {
            kovetkezo_betu();
        }
    })
};

function kategoriak_megjelenitese()
{
    const vezerlogombok = "Betűméret: "
                        + "<button onclick='betumeret_novelese();'>+</button>"
                        + "<button onclick='betumeret_csokkentese();'>-</button><br>"
                        + "<button onclick='kategoriak_kivalasztasanak_torlese();'>kijelölések törlése</button><br>";
                     // + "Kikérdezés iránya:<br>"
                     // + "<button onclick='kikerdezes_megforditasa();'>Magyarra fordítás</button><br>"
                     // + "<button onclick='kikerdezes_megforditasa();'>Idegen nyelvre fordítás</button><br>";
    
    var kategoria_tabla = "<table class='kategoriak_kivalasztasa' rules='all'>";
    for (var i in kategoriak)
    {
        kategoria_tabla += "<tr class='kategoria'>"
                         + " <td><input id='kategoria_" + i + "' type='checkbox' style='width: " + betumeret + "px; height: " + betumeret + "px;'></td>"
                         + " <td>" + kategoriak[i].cim + " (" + kategoriak[i].elemek.length + " db)</td>"
                         + "</tr>";
    }
    kategoria_tabla += "</table>"
                     + "<button onclick=\"kategoriak_kivalasztasa();\">Kiválasztottak betöltése</button>";
    
    kategoriak_kivalasztasa_obj.innerHTML = vezerlogombok
                                          + kategoria_tabla;
}

function kategoriak_kivalasztasa()
{
    betoltott_elemek = [];
    for(var i in kategoriak)
    {
        var kategoria = kategoriak[i];
        var kivalasztva = document.getElementById("kategoria_" + i).checked;
        if (kivalasztva)
        {
            for(var elem in kategoria.elemek)
            {
                betoltott_elemek.push(
                {
                    "kategoria" : kategoria,
                    "elem"      : kategoria.elemek[elem],
                });
            }
        }
    }
    
    betu_kivalasztasa(betoltott_elemek[0]);
    kategoriavalaszto_megjelenitese_elrejtese();
}

function kategoriak_kivalasztasanak_torlese()
{
    for(var i in kategoriak)
    {
        document.getElementById("kategoria_" + i).checked = false;
    }
}

function kategoriavalaszto_megjelenitese_elrejtese()
{
    if (kategoriavalasztas_bekapcsolva())
    {
        kategoriavalaszto_elrejtese();
    }
    else
    {
        kategoriavalaszto_megjelenitese();
    }
}

function kategoriavalaszto_elrejtese()
{
    kikerdezo_obj.style.display = "block";
    kategoriak_kivalasztasa_obj.style.display = "none";
}

function kategoriavalaszto_megjelenitese()
{
    kategoriak_kivalasztasa_obj.style.display = "block";
    kikerdezo_obj.style.display = "none";
    cim_obj.innerHTML = "Kikérdező";
}

function kategoriavalasztas_bekapcsolva()
{
    return(kategoriak_kivalasztasa_obj.style.display != "none");
}


var betumeret = 32;
function betumeret_novelese()
{
    betumeret += 8;
    betumeret_frissitese();
}

function betumeret_csokkentese()
{
    betumeret = Math.max(betumeret - 8, 8);
    betumeret_frissitese();
}

function betumeret_frissitese()
{
    document.getElementById("keret").style.fontSize = betumeret + "px";
    kategoriak_megjelenitese();
    for(var gomb of document.getElementsByTagName("button"))
    {
        gomb.style.fontSize = betumeret + "px";
    }
    navigalo_gomb_megfejtes_obj.style.fontSize = "32px";
    navigalo_gomb_random_obj.style.fontSize = "32px";
    navigalo_gomb_kovetkezo_obj.style.fontSize = "32px";
    // kategoriavalaszto_megjelenitese();
}

function random_betu()
{
    const random_index = Math.floor(Math.random() * betoltott_elemek.length);
    var betu = betoltott_elemek[random_index];
    betu_kivalasztasa(betu);
}

function betu_kivalasztasa(betu)
{
    var rajzok = betu.kategoria.rajzolo(betu.elem, betu.kategoria.fejlec);
    feladvany_obj.innerHTML = rajzok.feladvany;
    megfejtes_obj.innerHTML = rajzok.megfejtes;
    megfejtes_obj.style.display = "none";
    kivalasztott_kep_index = betoltott_elemek.indexOf(betu);
    navigalo_gombok.style.display = "none";
    nev_felfedese_gomb_obj.style.display = "inline-block";
    cim_obj.innerHTML = betu.kategoria.cim;
    
    // feladvany_obj.style.fontSize = betumeret + "px";
    // megfejtes_obj.style.fontSize = betumeret + "px";
    // nev_felfedese_gomb_obj.style.fontSize = betumeret + "px";
}

function elozo_betu()
{
    kivalasztott_kep_index = (kivalasztott_kep_index > 0 ? kivalasztott_kep_index - 1 : betoltott_elemek.length - 1);
    var betu = betoltott_elemek[kivalasztott_kep_index];
    betu_kivalasztasa(betu);
}

function kovetkezo_betu()
{
    kivalasztott_kep_index = (kivalasztott_kep_index < betoltott_elemek.length - 1 ? kivalasztott_kep_index + 1 : 0);
    var betu = betoltott_elemek[kivalasztott_kep_index];
    betu_kivalasztasa(betu);
}

function nev_felfedese()
{
    megfejtes_obj.style.display = "block";
    navigalo_gombok.style.display = "inline-block";
    nev_felfedese_gomb_obj.style.display = "none";
}

function nev_felfedve()
{
    return(megfejtes_obj.style.display != "none");
}