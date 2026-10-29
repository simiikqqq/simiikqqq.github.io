/* Chapter-specific explanations for Programování. */
export default {
  "algoritmy": {
    "title": "Popis algoritmu a jeho efektivita",
    "html": "<p>Algoritmus musí být jednoznačný, konečný a vést k výsledku pro přípustné vstupy. Vývojový diagram zobrazuje tok kroků a rozhodování, pseudokód popisuje logiku bez závislosti na konkrétním programovacím jazyce.</p><p>Správnost a efektivita jsou různé otázky: nejprve ověř, že postup vrací požadovaný výsledek, potom analyzuj jeho časovou a paměťovou náročnost. Vstupní předpoklady, například seřazené pole, musí být součástí popisu.</p>"
  },
  "promenne": {
    "title": "Typy dat a reprezentace hodnot",
    "html": "<p>Datový typ určuje, jakou hodnotu proměnná může nést a jaké operace jsou pro ni smysluplné. Celá čísla, desetinná čísla, logické hodnoty a řetězce se ukládají a porovnávají odlišně; převod mezi typy může ztratit přesnost nebo selhat.</p><p>Pole uchovává uspořádanou kolekci, jejíž prvky se často vybírají indexem. U řetězců ověř, zda jazyk pracuje s bajty, znaky nebo kódovými body — diakritika může odhalit rozdíl.</p>"
  },
  "razeni": {
    "title": "Kdy použít třídění a binární vyhledávání",
    "html": "<p>Bubble sort je názorný, ale pro velká pole neefektivní: počet porovnání roste přibližně kvadraticky. Quicksort má průměrně O(n log n), jeho chování však závisí na volbě pivota a v nejhorším případě může být kvadratické.</p><p>Binární vyhledávání zkracuje hledaný interval na polovinu, ale předpokládá seřazená data. Při implementaci hlídej podmínku cyklu a posun hranic tak, aby se interval v každém kroku zmenšil a hledaný prvek se neztratil.</p>"
  },
  "oop": {
    "title": "Třída, objekt a návrh rozhraní",
    "html": "<p>Třída popisuje společnou strukturu a chování, objekt je konkrétní instance. Zapouzdření chrání vnitřní stav, dědičnost sdílí nebo rozšiřuje chování, polymorfismus dovoluje pracovat s různými objekty přes společné rozhraní a abstrakce skrývá nepodstatné detaily.</p><p>Dědičnost používej, když mezi typy skutečně platí vztah „je druhem“. Pokud objekty pouze sdílejí nějakou schopnost, může být vhodnější kompozice nebo rozhraní.</p>"
  },
  "datove-struktury": {
    "title": "Datová struktura podle potřeb operací",
    "html": "<p>Zásobník obsluhuje poslední vloženou položku jako první (LIFO), fronta první vloženou (FIFO). Seznamy a pole se liší dostupností prvku podle indexu i cenou vkládání; stromy organizují hierarchická data a hash tabulky nabízejí rychlé hledání podle klíče.</p><p>Neexistuje nejlepší struktura pro každou situaci. Před volbou si sepiš, jak často budeš vyhledávat, vkládat, mazat nebo procházet data a jak důležité je zachovat pořadí.</p>"
  },
  "rekurze": {
    "title": "Ukončení a zásobník volání",
    "html": "<p>Rekurzivní funkce řeší problém tím, že jej převede na menší variantu téhož problému. Potřebuje základní případ, který skončí bez dalšího volání, a rekurzivní krok, jenž k tomuto případu skutečně postupuje.</p><p>U faktoriálu je základním případem obvykle 0! = 1 nebo 1! = 1. Při každém volání se n zmenší. Bez ukončovací podmínky nebo při chybném směru rekurze se zaplní zásobník. Pro velké vstupy může být vhodnější iterace nebo ukládání již spočítaných výsledků.</p>"
  },
  "vyjimky": {
    "title": "Ošetřování chyb a bezpečná práce se soubory",
    "html": "<p>Výjimka signalizuje situaci, kterou běžný tok programu neočekával. Zachytávej jen chyby, se kterými umíš smysluplně naložit; příliš obecné zachycení může skrýt skutečnou příčinu. Blok finally slouží k úklidu prostředků bez ohledu na úspěch operace.</p><p>Při práci se soubory ověř existenci a oprávnění, definuj chování při chybě a soubor po použití zavři. V moderních jazycích pomáhá konstrukce pro automatickou správu prostředků.</p>"
  },
  "git": {
    "title": "Historie změn a spolupráce ve větvích",
    "html": "<p>Git zaznamenává snímky projektu do historie. Commit by měl představovat srozumitelnou, tematicky ucelenou změnu; větev umožňuje pracovat odděleně a později změny začlenit. Konflikt při slučování znamená, že Git nedokázal automaticky rozhodnout mezi souběžnými úpravami.</p><p>Před commitem zkontroluj, které soubory jsou ve staging area. Při řešení konfliktu porozuměj oběma verzím a ověř výsledný kód testem, místo pouhého odstranění značek konfliktu.</p>"
  },
  "navrhove-vzory": {
    "title": "Vzory jako pojmenovaná řešení problémů",
    "html": "<p>Návrhový vzor popisuje opakující se problém a osvědčenou strukturu řešení, není to hotový kód k bezmyšlenkovitému kopírování. Singleton omezuje vytváření instance, Factory odděluje vytvoření objektu a Observer oznamuje změny přihlášeným odběratelům.</p><p>Každý vzor přidává určitou strukturu a náklady. Použij ho tehdy, když řeší skutečný problém v návrhu; zbytečná abstrakce zhorší čitelnost i údržbu.</p>"
  },
  "testovani": {
    "title": "Testovací úrovně a důvěra ve změny",
    "html": "<p>Jednotkový test ověřuje malou část logiky, integrační test spolupráci komponent a systémový test chování celého řešení. Akceptační test ověřuje, zda produkt splňuje potřebu uživatele. Testovací pyramida obvykle obsahuje mnoho rychlých jednotkových testů a méně rozsáhlých testů systému.</p><p>Black-box testování vychází z požadavků a pozorovatelného chování; white-box využívá znalost vnitřní struktury. Dobré testy pokrývají běžné i hraniční případy a nezávisí na náhodném pořadí spuštění.</p>"
  }
};
