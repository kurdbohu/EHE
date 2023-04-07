const db_heber_felhangzok =
{
    cim: "Héber félhangzók",
    rajzolo: function(felhangzo)
    {
        const feladvany = "<p class='" + heber_betu + "' style='font-size: " + (betumeret * 2) + "px;'>"
                        + felhangzo.heber
                        + "</p>"
                        + (felhangzo.tipus == "betu" ? "<p class='" + heber_betu + "'>" + felhangzo.heber_nev + "</p>" : "");
        
        const megfejtes = "<p>"
                        + " <b>" + felhangzo.jelentes + "</b><br>"   
                        + " [" + felhangzo.ejtese + "]<br>"
                        + "</p>";
        
        return({feladvany : feladvany,
                megfejtes : megfejtes});
    },
    elemek:
    [
        {"tipus": "betu", "heber_nev": "שְׁוָא",      "heber": "בְּ",              "ejtese": "ö",          "jelentes": "söwá mobile"},
        {"tipus": "betu", "heber_nev": "חָתֵף פַּתַח",  "heber": "בֲּ",              "ejtese": "a",          "jelentes": "hatéf patah"},
        {"tipus": "betu", "heber_nev": "חָתֵף סֶגוֹל", "heber": "בֱּ",              "ejtese": "e",          "jelentes": "hatéf szegól"},
        {"tipus": "betu", "heber_nev": "חָתֵף קָמֶץ",  "heber": "בֳּ",              "ejtese": "o",          "jelentes": "hatéf qámec"},
        {"tipus": "betu", "heber_nev": "-",        "heber": " ַה /  ַע / ַח", "ejtese": "../ah/a/ah", "jelentes": "belopott patah (furtive patah)"},
        
        {"tipus": "szo", "heber": "כֹּחַ",   "ejtese": "kóah",    "jelentes": "erő, hatalom"},
        {"tipus": "szo", "heber": "רוּחַ",  "ejtese": "rúah",    "jelentes": "lélek, szél"},
        {"tipus": "szo", "heber": "רֵעַ",   "ejtese": "réa",     "jelentes": "társ"},
        {"tipus": "szo", "heber": "גָּבוֹהַּ", "ejtese": "gábóah",  "jelentes": "magas (nem kell tudni)"},
        {"tipus": "szo", "heber": "מִזבֵּחַ", "ejtese": "mizbéah", "jelentes": "oltár"},
    ]
};