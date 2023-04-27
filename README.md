chat object (r.55) - vsetky texty a options / definicia konverzacie
toggle(r.23) - switch na show/hide chatbota
close - viaze sa na text kt. chces zavret chatbota(r.432), ale aj na krizik(r.33, r.581)
toggle + close su definovane v ramci /function myInit/



const insertNewChatItem(r.350) - funkcia kt. appendne .chat-ask alebo .chat-response element a scrollne container

const printChoice(r.399) - funkcia si vytvori / "vykresli" to na co si klikol z moznosti

const printResponse(r.357 - 363) - funkcia si vytvori dalsiu otazku / response z moznosti kt. si klikol (z funkcie printChoice)

// choices -> choice ma v sebe(v HTML) data-next="n" , kde n je options.next textik




const submitButtonState - funkcia na nastavenia casu aby ssa nedalo klikat a restartovat chat kazdu sekundu (5000 ms je v argumente)

var customlinks + var custombtns (r.385 - r.395) - povodne som chcel odtrackovat kliknutia na linky tu, ale v sucasnosti je v BR vytvoreny filter vo weblayeri.

// animacie su iba v CSS, icona/avatar - tiez v CSS ::before el.
