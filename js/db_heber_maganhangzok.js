const db_heber_maganhangzok =
{
    cim: "Héber magánhangzók",
    rajzolo: function(maganhangzo)
    {
        const feladvany = "<p class='" + heber_betu + "' style='font-size: " + (betumeret * 2) + "px;'>"
                        + maganhangzo.heber
                        + "<br>"
                        + maganhangzo.heber_nev + "</p>";
        
        const megfejtes = "<p>"
                        + " <b>" + maganhangzo.nev + "</b><br>"
                        + " [" + maganhangzo.ejtese + "]<br>"
                        + "</p>";
        
        return({feladvany : feladvany,
                megfejtes : megfejtes});
    },
    elemek:
    [
        {"nev": "Qámec",       "heber_nev": "קָמֶץ",      "heber": "בָּ",       "ejtese": "á"},
        {"nev": "Patah",       "heber_nev": "פַּתַח",      "heber": "בַּ",       "ejtese": "a"},
        {"nev": "Híreq",       "heber_nev": "חִירֶק",     "heber": "בִּ",       "ejtese": "i"},
        {"nev": "Céré",        "heber_nev": "צֵרֵי",      "heber": "בֵּ",       "ejtese": "é"},
        {"nev": "Szegól",      "heber_nev": "סֶגֹל",      "heber": "בֶּ",       "ejtese": "e"},
        {"nev": "Hólem",       "heber_nev": "חֹולֶם",     "heber": "בֹּ / בֹּו",  "ejtese": "ó"},
        {"nev": "Qibbúc",      "heber_nev": "קִבּוּץ",     "heber": "בֻּ",       "ejtese": "u"},
        {"nev": "Súreq",       "heber_nev": "שׁוּרֶק",     "heber": "בּוּ",      "ejtese": "ú"},
        {"nev": "Qámec hátúf", "heber_nev": "קָמֶץ חָטוּף", "heber": "בָּ",       "ejtese": "o"}
    ]
};