const gorog_betutipusok = ["gorog_betu", "times_betu"];
const heber_betutipusok = ["heber_betu", "times_betu"];
var gorog_betu = gorog_betutipusok[1];
var heber_betu = heber_betutipusok[0];

function betutipus_valtasa()
{
    betutipus_valtasa_obj.innerHTML = "B";
    
    const gorog_betuindex = gorog_betutipusok.indexOf(gorog_betu);
    const kovetkezo_gorog_betu = (gorog_betuindex < gorog_betutipusok.length - 1 ? gorog_betuindex + 1 : 0);
    gorog_betu = gorog_betutipusok[kovetkezo_gorog_betu];
    betutipus_valtasa_obj.innerHTML += (kovetkezo_gorog_betu + 1);
    
    // betutipus_valtasa_obj.innerHTML += "-";
    const heber_betuindex = heber_betutipusok.indexOf(heber_betu);
    const kovetkezo_heber_betu = (heber_betuindex < heber_betutipusok.length - 1 ? heber_betuindex + 1 : 0);
    heber_betu = heber_betutipusok[kovetkezo_heber_betu];
    // betutipus_valtasa_obj.innerHTML += (kovetkezo_heber_betu + 1);
}