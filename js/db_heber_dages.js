const db_heber_dages =
{
    cim: "Héber dáges lene / forte, mappíq pont",
    rajzolo: function(dages)
    {
        const feladvany = "<p class='" + heber_betu + "' style='font-size: " + (betumeret * 2) + "px;'>"
                        + dages.heber
                        + "</p>";
        
        const megfejtes = "<p>"
                        + " <b>" + dages.nev + "</b><br>"
                        + " [" + dages.ejtese + "]<br>"
                        + "</p>";
        
        return({feladvany : feladvany,
                megfejtes : megfejtes});
    },
    elemek:
    [
        {"heber": "אּ", "nev": "alef dáges lénével",      "ejtese": "néma"            },
        {"heber": "בּ", "nev": "bét dágessel (l/f)",      "ejtese": "b"               },
        {"heber": "גּ", "nev": "gimel dágessel (l/f)",    "ejtese": "g/gg"            },
        {"heber": "דּ", "nev": "dálet dágessel (l/f)",    "ejtese": "d/dd"            },
        {"heber": "הּ", "nev": "hé mappíq ponttal",       "ejtese": "h (szó végén is)"},
        {"heber": "וּ", "nev": "wáw dáges fortéval",      "ejtese": "vv"              },
        {"heber": "זּ", "nev": "zajin dages fortéval",    "ejtese": "zz"              },
        {"heber": "חּ", "nev": "hét dáges lénével",       "ejtese": "h"               },
        {"heber": "טּ", "nev": "tét dáges fortéval",      "ejtese": "tt"              },
        {"heber": "יּ", "nev": "jód dáges fortéval",      "ejtese": "jj"              },
        {"heber": "כּ", "nev": "kaf dágessel (l/f)",      "ejtese": "k/kk (kemény)"   },
        {"heber": "ךּ", "nev": "kaf fin. dágessel (l/f)", "ejtese": "k/kk (kemény)"   },
        {"heber": "לּ", "nev": "lámed dáges fortéval",    "ejtese": "ll"              },
        {"heber": "מּ", "nev": "mém dáges fortéval",      "ejtese": "mm"              },
        {"heber": "םּ", "nev": "mém fin. d. fortéval",    "ejtese": "mm"              },
        {"heber": "נּ", "nev": "nún dáges fortéval",      "ejtese": "nn"              },
        {"heber": "ןּ", "nev": "nún fin. d. fortéval",    "ejtese": "nn"              },
        {"heber": "סּ", "nev": "számek d. fortéval",      "ejtese": "ssz"             },
        {"heber": "עּ", "nev": "ajin dages lénével",      "ejtese": "néma"            },
        {"heber": "פּ", "nev": "pe dágessel (l/f)",       "ejtese": "p/pp"            },
        {"heber": "ףּ", "nev": "pe fin. dágessel (l/f)",  "ejtese": "p/pp"            },
        {"heber": "צּ", "nev": "cáde dáges fortéval",     "ejtese": "cc"              },
        {"heber": "ץּ", "nev": "cáde fin. d. fortéval",   "ejtese": "cc"              },
        {"heber": "קּ", "nev": "qóf dáges fortéval",      "ejtese": "kk"              },
        {"heber": "רּ", "nev": "rés dages lénével",       "ejtese": "r"               },
        {"heber": "שּׂ", "nev": "szín dáges fortéval",     "ejtese": "ssz"             },
        {"heber": "שּׁ", "nev": "sín dáges fortéval",      "ejtese": "ss"              },
        {"heber": "תּ", "nev": "táv dágessel (l/f)",      "ejtese": "t/tt"            }
    ]
};
