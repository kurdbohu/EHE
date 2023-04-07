const db_heber_massalhangzok =
{
    cim: "Héber mássalhangzók",
    rajzolo: function(massalhangzo)
    {
        const feladvany = "<p class='" + heber_betu + "' style='font-size: " + (betumeret * 2) + "px;'>"
                        + massalhangzo.heber
                        + "</p>"
                        + " <div id='kepkeret'>"
                        + "  <img id='kep' src='" + (massalhangzo.kep != "" ? "kepek/" + massalhangzo.kep : "") + "' style='height: " + (betumeret * 2) + "px;'>"
                        + " </div>";
        
        const megfejtes = "<p>"
                        + " <b>" + massalhangzo.nev + "</b><br>"
                        + " [" + massalhangzo.ejtese + "]<br>"
                        + massalhangzo.jelentese + ", " 
                        + massalhangzo.szam
                        + "</p>";
        
        return({feladvany : feladvany,
                megfejtes : megfejtes});
    },
    elemek:
    [   // gombnyomás
        {"magyar": "a", "heber": "א", "kep": "01.png",  "nev": "álef",                    "ejtese": "néma",               "jelentese": "ökör",         "szam": 1},
        {"magyar": "b", "heber": "ב", "kep": "02.png",  "nev": "vét",                     "ejtese": "v",                  "jelentese": "ház",          "szam": 2},
        {"magyar": "g", "heber": "ג", "kep": "03.png",  "nev": "gimel",                   "ejtese": "g",                  "jelentese": "teve",         "szam": 3},
        {"magyar": "d", "heber": "ד", "kep": "04.png",  "nev": "dálet",                   "ejtese": "d",                  "jelentese": "ajtó",         "szam": 4},
        {"magyar": "x", "heber": "ה", "kep": "05.png",  "nev": "hé",                      "ejtese": "h (szó végén néma)", "jelentese": "nyílás",       "szam": 5},
        {"magyar": "w", "heber": "ו", "kep": "06.png",  "nev": "wáw",                     "ejtese": "v",                  "jelentese": "horog",        "szam": 6},
        {"magyar": "z", "heber": "ז", "kep": "07.png",  "nev": "zajin",                   "ejtese": "z",                  "jelentese": "fegyver",      "szam": 7},
        {"magyar": "h", "heber": "ח", "kep": "08.png",  "nev": "hét",                     "ejtese": "hh (kemény)",        "jelentese": "kerítés",      "szam": 8},
        {"magyar": "j", "heber": "ט", "kep": "09.png",  "nev": "tét",                     "ejtese": "t",                  "jelentese": "cső, kígyó",   "szam": 9},
        {"magyar": "y", "heber": "י", "kep": "10.png",  "nev": "jód",                     "ejtese": "j",                  "jelentese": "kéz",          "szam": 10},
        {"magyar": "k", "heber": "כ", "kep": "11.png",  "nev": "kaf",                     "ejtese": "kh (lágy)",          "jelentese": "marok",        "szam": 20},
        {"magyar": "k", "heber": "ך", "kep": "",        "nev": "kaf finalis",             "ejtese": "kh (lágy)",          "jelentese": "marok",        "szam": 20},
        {"magyar": "l", "heber": "ל", "kep": "12.png",  "nev": "lámed",                   "ejtese": "l",                  "jelentese": "fullánk",      "szam": 30},
        {"magyar": "m", "heber": "מ", "kep": "13.png",  "nev": "mém",                     "ejtese": "m",                  "jelentese": "víz",          "szam": 40},
        {"magyar": "m", "heber": "ם", "kep": "",        "nev": "mém finalis",             "ejtese": "m",                  "jelentese": "víz",          "szam": 40},
        {"magyar": "n", "heber": "נ", "kep": "14.png",  "nev": "nún",                     "ejtese": "n",                  "jelentese": "hal",          "szam": 50},
        {"magyar": "n", "heber": "ן", "kep": "",        "nev": "nún finalis",             "ejtese": "n",                  "jelentese": "hal",          "szam": 50},
        {"magyar": "s", "heber": "ס", "kep": "15.png",  "nev": "számek",                  "ejtese": "sz",                 "jelentese": "támasz",       "szam": 60},
        {"magyar": "[", "heber": "ע", "kep": "16.png",  "nev": "ajin",                    "ejtese": "néma",               "jelentese": "szem, forrás", "szam": 70},
        {"magyar": "p", "heber": "פ", "kep": "17.png",  "nev": "fe",                      "ejtese": "f",                  "jelentese": "száj",         "szam": 80},
        {"magyar": "p", "heber": "ף", "kep": "",        "nev": "pe finalis",              "ejtese": "f",                  "jelentese": "száj",         "szam": 80},
        {"magyar": "c", "heber": "צ", "kep": "18.png",  "nev": "cáde",                    "ejtese": "c",                  "jelentese": "szigony",      "szam": 90},
        {"magyar": "c", "heber": "ץ", "kep": "",        "nev": "cáde finalis",            "ejtese": "c",                  "jelentese": "szigony",      "szam": 90},
        {"magyar": "q", "heber": "ק", "kep": "19.png",  "nev": "qóf",                     "ejtese": "k (erős)",           "jelentese": "a tű foka",    "szam": 100},
        {"magyar": "r", "heber": "ר", "kep": "20.png",  "nev": "rés",                     "ejtese": "r",                  "jelentese": "koponyatető",  "szam": 200},
        {"magyar": "f", "heber": "שׂ", "kep": "21.png",  "nev": "szín (bal diakrit. pont)", "ejtese": "sz",                "jelentese": "fog",          "szam": 300},
        {"magyar": "v", "heber": "שׁ", "kep": "22.png",  "nev": "sín (jobb diakrit. pont)", "ejtese": "s",                 "jelentese": "fog",          "szam": 300},
        {"magyar": "t", "heber": "ת", "kep": "23.png",  "nev": "táv",                      "ejtese": "t",                 "jelentese": "jel",          "szam": 400},
    ]
};
