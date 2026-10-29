/* Technická dokumentace study content. */
export default {
  "id": "dokumentace",
  "group": "Profilová část",
  "title": "Technická dokumentace",
  "icon": "📝",
  "color": "#06b6d4",
  "desc": "Markdown, README, dokumentace projektu, zdrojového kódu a API.",
  "chapters": [
    {
      "id": "normy",
      "title": "Markdown od základů",
      "sub": "nadpisy, seznamy, odkazy, obrázky a kód",
      "level": "základ",
      "body": "<h2>Co je Markdown</h2><p>Markdown je lehký značkovací jazyk pro psaní strukturovaného textu v obyčejných textových souborech. Zdroj zůstává čitelný i bez speciálního editoru a nástroje jej mohou převést do HTML nebo jiné podoby.</p><h2>Nadpisy a odstavce</h2><pre><code># Název projektu\n\n## Instalace\n\nText odstavce se odděluje prázdným řádkem.\n### Podrobnosti</code></pre><p>Úrovně nadpisů piš v logické hierarchii. Jeden hlavní nadpis obvykle označuje název dokumentu; další části začínají nadpisem druhé úrovně.</p><h2>Seznamy, odkazy a zvýraznění</h2><pre><code>- první bod\n- druhý bod\n\n1. první krok\n2. druhý krok\n\n**důležité** a *zvýraznění*\n[Dokumentace](docs/README.md)</code></pre><h2>Kód, obrázky a citace</h2><pre><code>![Diagram architektury](docs/architecture.png)\n\n&gt; Poznámka k použití\n\n```js\nconsole.log(\"Ahoj\");\n```</code></pre><p>Jazyk za třemi zpětnými apostrofy zapíná barevné zvýraznění kódu v mnoha editorech. Cesty k souborům piš relativně k dokumentu, aby odkazy fungovaly v repozitáři.</p>"
    },
    {
      "id": "promitani",
      "title": "README a dokumentace pro uživatele",
      "sub": "instalace, spuštění, funkce a řešení problémů",
      "level": "základ",
      "body": "<h2>Účel souboru README</h2><p>README je vstupní stránka repozitáře. Čtenář by měl během chvíle pochopit, co software řeší, komu je určen a jak jej vyzkoušet. Začni názvem a krátkým popisem, ne dlouhým vývojářským deníkem.</p><h2>Doporučená osnova</h2><ol><li>Název, účel a hlavní funkce projektu.</li><li>Požadavky a stručná instalace.</li><li>Příkaz ke spuštění a ukázka typického použití.</li><li>Konfigurace, proměnné prostředí a další možnosti.</li><li>Odkazy na podrobnější dokumentaci, licenci a podporu.</li></ol><h2>Ukázka příkazů</h2><pre><code># Instalace závislostí\nnpm install\n\n# Spuštění vývojového serveru\nnpm run dev</code></pre><p>Příkazy vždy ověř v čistém prostředí. README, které slibuje nefunkční instalaci, uživateli nepomůže.</p><h2>Uživatelský návod</h2><p>Větší projekt může mít zvláštní příručku s postupy, snímky obrazovky, častými otázkami a návodem pro obnovu po chybě. Rozděl text podle úkolů, které chce uživatel provést.</p>"
    },
    {
      "id": "uml",
      "title": "Dokumentace návrhu software",
      "sub": "požadavky, architektura a UML diagramy",
      "level": "střední",
      "body": "<h2>Požadavky a cíle</h2><p>Dokumentace návrhu vysvětluje, co systém má dělat a jak je jeho řešení rozdělené. Funkční požadavek popisuje pozorovatelné chování; nefunkční požadavek například odezvu, bezpečnost, přístupnost nebo spolehlivost.</p><p>Požadavky formuluj jednoznačně a ověřitelně. Záznam rozhodnutí může obsahovat kontext, zvažované možnosti, přijaté řešení a jeho důsledky.</p><h2>Architektura a diagramy</h2><ul><li><b>Kontextový diagram</b> ukazuje hranice systému a okolní služby.</li><li><b>Diagram komponent</b> zachycuje části aplikace a jejich rozhraní.</li><li><b>Sekvenční diagram</b> popisuje výměnu zpráv v jednom scénáři.</li><li><b>Diagram tříd</b> zachycuje typy, vlastnosti a vztahy.</li></ul><h2>Diagram jako vysvětlení</h2><p>UML diagram zjednodušuje vybraný pohled; nenahrazuje vysvětlení systému. U každého obrázku uveď název, účel, legendu a případné předpoklady. Diagram pravidelně aktualizuj spolu se zdrojovým kódem.</p>"
    },
    {
      "id": "schemata",
      "title": "Dokumentace zdrojového kódu a API",
      "sub": "komentáře, typy, parametry a příklady",
      "level": "střední",
      "body": "<h2>Komentuj záměr, ne každý řádek</h2><p>Kvalitní kód často vysvětluje sám sebe názvy funkcí a proměnných. Komentář přidej tam, kde je potřeba objasnit důvod neobvyklého rozhodnutí, omezení nebo obchodní pravidlo. Pokud komentář pouze opakuje následující příkaz, spíše zlepši název kódu.</p><h2>Popis funkce a jejího kontraktu</h2><pre><code>/**\n * Vrátí cenu včetně daně.\n * @param {number} price Cena bez daně v Kč.\n * @param {number} rate Sazba jako desetinné číslo.\n * @returns {number} Cena po zaokrouhlení na haléře.\n */\nfunction priceWithTax(price, rate) {\n  return Math.round(price * (1 + rate) * 100) / 100;\n}</code></pre><p>Dokumentace API vysvětluje účel endpointu nebo funkce, parametry, návratovou hodnotu, chyby, oprávnění a příklady požadavků i odpovědí. U veřejného rozhraní popiš také zpětnou kompatibilitu.</p><h2>Příklady musí odpovídat skutečnosti</h2><p>Ukázkový kód je často první věc, kterou si čtenář zkopíruje. Udržuj jej spustitelný, uváděj potřebné importy a aktualizuj ho při změně API. Automaticky generované reference mohou vycházet z anotací v kódu, ale nenahrazují návod vysvětlující záměr a typické scénáře.</p>"
    },
    {
      "id": "projekt",
      "title": "Dokumentace projektu od zadání po předání",
      "sub": "požadavky, instalace, architektura a provoz",
      "level": "praxe",
      "body": "<h2>Dokumentace doprovází vývoj</h2><p>Projektové informace zapisuj průběžně, dokud jsou známé důvody rozhodnutí. Dobře připravené předání umožní jinému vývojáři projekt nainstalovat, spustit testy a bezpečně pokračovat v práci.</p><h2>Obsah technické dokumentace</h2><ul><li><b>Cíl a rozsah</b> — jaký problém řešíme a co je mimo záběr.</li><li><b>Požadavky</b> — funkce, omezení, role a předpoklady.</li><li><b>Architektura</b> — komponenty, datové toky a důležitá rozhodnutí.</li><li><b>Vývoj</b> — nástroje, instalace, konfigurace, spuštění a testy.</li><li><b>Nasazení a provoz</b> — prostředí, migrace, logy a obnova po chybě.</li><li><b>Uživatelský návod</b> — běžné úkoly a řešení problémů.</li></ul><h2>Struktura složek</h2><pre><code>projekt/\n├── README.md\n├── docs/\n│   ├── architecture.md\n│   ├── decisions/\n│   └── user-guide.md\n├── src/\n└── tests/</code></pre><p>Strukturu přizpůsob velikosti projektu. Pro malou aplikaci je stručný README lepší než desítky prázdných dokumentů.</p>"
    },
    {
      "id": "wireframy",
      "title": "Markdown na GitHubu a údržba dokumentace",
      "sub": "relativní odkazy, checklisty, historie změn",
      "level": "praxe",
      "body": "<h2>GitHub Flavored Markdown</h2><p>GitHub podporuje běžný Markdown a několik praktických rozšíření. Task list se hodí pro plán práce, tabulka pro přehled variant a upozornění pro důležitou informaci.</p><pre><code>- [x] Připravit strukturu\n- [ ] Doplnit příklady\n\n| Část | Účel |\n| --- | --- |\n| README | rychlý start |\n| docs/ | detailní návody |</code></pre><h2>Odkazy v repozitáři</h2><p>Relativní odkaz <code>[Architektura](docs/architecture.md)</code> zůstává uvnitř projektu přenositelný. U obrázků použij cestu v repozitáři a smysluplný alternativní text. Ověř, že cíl odkazu existuje po přesunu dokumentu.</p><h2>Dokumentace v pull requestu</h2><p>Vývojová dokumentace je součást změny kódu. Když se mění nastavení, instalace, veřejná funkce nebo uživatelské chování, aktualizuj odpovídající návod ve stejném pull requestu. Historie Git pak ukazuje, která změna textu souvisí se změnou programu.</p><h2>Kontrola před předáním</h2><ul><li>Je možné projekt podle návodu nainstalovat a spustit?</li><li>Jsou příklady aktuální a relativní odkazy funkční?</li><li>Jsou tajné klíče a osobní údaje nahrazeny ukázkovými hodnotami?</li><li>Rozumí dokumentu cílový čtenář bez ústního vysvětlení?</li></ul>"
    }
  ]
};
