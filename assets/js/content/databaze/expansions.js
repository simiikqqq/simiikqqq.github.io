/* Chapter-specific explanations for Databáze. */
export default {
  "zaklady": {
    "title": "Klíče a integrita dat",
    "html": "<p>Primární klíč jednoznačně identifikuje řádek; cizí klíč odkazuje na řádek v jiné tabulce. Omezení NOT NULL, UNIQUE a FOREIGN KEY pomáhají databázi hlídat pravidla i tehdy, když s daty pracuje více aplikací.</p><p>Vztah M:N se obvykle převádí na vazební tabulku se dvěma cizími klíči. Databázový návrh tak vyjadřuje pravidla domény a omezuje nekonzistentní nebo duplicitní záznamy.</p>"
  },
  "er": {
    "title": "Z ER modelu do relačních tabulek",
    "html": "<p>Entita představuje typ objektu, o němž evidujeme data; atribut jeho vlastnost a vztah vazbu mezi entitami. Kardinalita 1:N znamená, že jednomu záznamu na první straně může odpovídat více záznamů na druhé. Vazba M:N se při převodu do relačního modelu řeší spojovací tabulkou.</p><p>U každé entity si ověř, zda má stabilní klíč. Vztah může mít i vlastní atributy, například datum přihlášení žáka do kurzu.</p>"
  },
  "normalizace": {
    "title": "Normalizace omezuje anomálie",
    "html": "<p>Normalizace pomáhá odstranit opakované skupiny a nežádoucí závislosti. Bez ní může aktualizace jedné informace vyžadovat změnu mnoha řádků; při vložení nebo odstranění záznamu se mohou ztratit nesouvisející údaje.</p><p>1NF požaduje atomické hodnoty, 2NF odstraňuje částečné závislosti neklíčových atributů na složeném klíči a 3NF tranzitivní závislosti. Normalizaci prováděj na základě funkčních závislostí, ne pouze podle vzhledu tabulky.</p>"
  },
  "sql-ddl": {
    "title": "Definice schématu a omezení",
    "html": "<p>DDL příkazy vytvářejí a mění strukturu databáze. Při návrhu tabulky zvol datové typy podle skutečného rozsahu a přesnosti hodnot; textové pole pro všechno komplikuje validaci i řazení.</p><p>Primární a cizí klíče vyjadřují identitu a vazby. NOT NULL, UNIQUE a CHECK mohou vynutit další pravidla přímo v databázi. Před změnou existujícího schématu promysli dopad na uložená data a aplikace, které tabulku používají.</p>"
  },
  "sql-dml": {
    "title": "Pořadí částí dotazu a spojování tabulek",
    "html": "<p>SELECT vybírá výstupní sloupce, FROM určuje zdroj, JOIN propojuje související řádky a WHERE filtruje jednotlivé řádky. GROUP BY vytváří skupiny, agregační funkce je shrnují a HAVING filtruje až vzniklé skupiny. ORDER BY určuje pořadí výsledku.</p><p>LEFT JOIN zachová všechny řádky levé tabulky, i když pro ně není protějšek; sloupce z pravé strany pak obsahují NULL. Při agregaci zkontroluj, zda spojení nevytváří násobné řádky.</p>"
  },
  "transakce": {
    "title": "Transakce a vlastnosti ACID",
    "html": "<p>Transakce seskupuje změny, které mají tvořit jeden logický celek. Atomicita znamená vše nebo nic, konzistence zachování pravidel, izolace omezení vzájemného ovlivňování souběžných transakcí a trvalost zachování potvrzených změn.</p><p>Při převodu peněz musí odpočet i přičtení uspět společně. Když druhý krok selže, rollback vrátí první změnu. Izolační úroveň ovlivňuje kompromis mezi souběžným výkonem a viditelností mezistavů.</p>"
  },
  "nosql": {
    "title": "Model dat podle typu přístupu",
    "html": "<p>NoSQL označuje různé rodiny databází, nikoli jediný univerzální produkt. Dokumentová databáze ukládá strukturované dokumenty, key-value úložiště rychle mapuje klíče na hodnoty a grafová databáze modeluje uzly a vztahy.</p><p>Flexibilní schéma a snadné horizontální škálování mohou být výhodou, ale odlišné systémy mají jiné dotazovací možnosti a garance. Výběr odvozuj od typických dotazů, vztahů a požadavků na konzistenci.</p>"
  },
  "indexy": {
    "title": "Indexy zrychlují čtení, ale něco stojí",
    "html": "<p>Index je pomocná struktura, která databázi usnadní vyhledání řádků podle vybraných sloupců. Může urychlit filtrování a spojování, zároveň zabírá místo a musí se aktualizovat při změně dat. Příliš mnoho indexů zpomaluje zápisy.</p><p>Pohled pojmenovává dotaz jako virtuální tabulku; uložená procedura sdružuje logiku na straně databáze. Skutečný přínos indexu ověř plánem dotazu a realistickými daty, nikoli pouze odhadem.</p>"
  }
};
