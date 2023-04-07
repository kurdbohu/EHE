function gorog_szokikerdezo(szo)
{
    const feladvany = "<p class='" + gorog_betu + "'>"
                    + szo.gorog
                    + "</p>";
    
    const megfejtes = "<p class='magyar_betu'>"
                    + szo.magyar
                    + "</p>";
    
    return({feladvany : feladvany,
            megfejtes : megfejtes}); 
}

function heber_szokikerdezo(szo)
{
    const feladvany = "<p class='" + heber_betu + "' style='font-size: " + (betumeret * 2) + "px;'>"
                    + szo.heber
                    + "</p>";
    
    const megfejtes = (szo.kiejtes ? "<p class='magyar_betu'>[" + szo.kiejtes + "]</p>" : "")
                    + "<p class='magyar_betu'>"
                    + szo.magyar
                    + "</p>";
    
    return({feladvany : feladvany,
            megfejtes : megfejtes});
}
