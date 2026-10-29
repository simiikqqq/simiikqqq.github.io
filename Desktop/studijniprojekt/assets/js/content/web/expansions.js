/* Chapter-specific explanations for Webové technologie. */
export default {
  "html": {
    "title": "Sémantika, formuláře a přístupnost HTML",
    "html": "<p>HTML popisuje význam a strukturu obsahu. Nadpisy mají tvořit logickou hierarchii, odkazy vedou na jiné místo a tlačítka spouštějí akci. Sémantické prvky usnadňují orientaci asistivním technologiím i automatickému zpracování stránky.</p><p>Formulář propojí ovládací prvek s popiskem a ověřuje vstup. Atributy typu, required a autocomplete pomáhají prohlížeči, ale nenahrazují srozumitelný návod a chybovou zprávu.</p>"
  },
  "css": {
    "title": "Kaskáda, box model a rozvržení",
    "html": "<p>CSS pravidla se uplatňují podle kaskády, specificity a pořadí. Box model tvoří obsah, padding, border a margin; při box-sizing: border-box se padding a border započítávají do deklarované šířky.</p><p>Flexbox řeší uspořádání prvků převážně v jednom směru, Grid řádky i sloupce. Pro responzivní rozvržení začni použitelnou úzkou variantou a rozšiř ji v okamžiku, kdy se obsah přestane pohodlně vejít.</p>"
  },
  "js": {
    "title": "Události, asynchronní práce a DOM",
    "html": "<p>JavaScript může reagovat na události uživatele a měnit DOM. Událostní posluchač odděluje obsluhu akce od samotné značky. Při práci s formulářem ověř vstup a uživateli jasně sděl, co se stalo.</p><p>fetch vrací Promise; čekání pomocí await zjednodušuje čtení asynchronního kódu. Kontroluj stav odpovědi, zpracuj chyby sítě a ověř, že odpověď skutečně obsahuje očekávaná data.</p>"
  },
  "responzivita": {
    "title": "Rozvržení pro různé displeje",
    "html": "<p>Responzivní design upravuje rozvržení podle dostupné šířky a potřeb uživatele, ne podle konkrétního seznamu telefonů. Relativní jednotky, pružné obrázky a CSS Grid nebo Flexbox pomáhají využít prostor bez pevných rozměrů.</p><p>Breakpoint zvol podle okamžiku, kdy obsah potřebuje jiný způsob uspořádání. Ověř úzké i široké okno, zvětšení textu a ovládání dotykem; samotná změna počtu sloupců nestačí.</p>"
  },
  "http": {
    "title": "Požadavky, odpovědi a stavové kódy",
    "html": "<p>HTTP propojuje klienta a server prostřednictvím požadavku a odpovědi. Metoda popisuje záměr; GET načítá, POST odesílá data, PUT nebo PATCH mění prostředek a DELETE jej odstraňuje. Stavový kód říká, jak server požadavek zpracoval.</p><p>DNS převádí doménová jména na síťové adresy. HTTPS chrání komunikaci pomocí TLS, ale samo o sobě nezaručuje, že obsah webu je pravdivý nebo bezpečný.</p>"
  },
  "php": {
    "title": "Zpracování požadavku na serveru",
    "html": "<p>Serverová část přijme požadavek, ověří vstup, provede potřebnou logiku a vrátí odpověď. Data od klienta považuj za nedůvěryhodná; před zobrazením je escapuj pro příslušný kontext a před SQL je předávej přes parametrizované dotazy.</p><p>Hesla se neukládají jako prostý text. Přihlašovací údaje k databázi patří do bezpečné konfigurace, nikoli do veřejného zdrojového kódu. Oddělení prezentace, logiky a dat usnadňuje testování i údržbu.</p>"
  },
  "seo": {
    "title": "Srozumitelnost pro lidi i asistivní technologie",
    "html": "<p>Přístupnost začíná smysluplnou strukturou, správnými popisky a možností ovládat stránku klávesnicí. Obrázek předává důležitou informaci prostřednictvím alternativního textu; dekorativní obrázek má být pro čtečku skrytý.</p><p>SEO využívá jasný titulek, popisný obsah, logické nadpisy a technickou dostupnost stránky. Klíčová slova sama o sobě nenahradí užitečný obsah ani dobrý výkon. Kontroluj kontrast a stav fokusu, nejen barvy v návrhu.</p>"
  },
  "frameworky": {
    "title": "Knihovny a frameworky jako nástroje",
    "html": "<p>Framework nabízí dohodnutou strukturu a řadu hotových řešení; knihovna poskytuje funkce, které volá aplikace. React pomáhá skládat uživatelské rozhraní z komponent, Bootstrap přináší CSS komponenty a npm spravuje balíčky JavaScriptového ekosystému.</p><p>Volba nástroje má odpovídat velikosti a potřebám projektu. Zvaž velikost výsledné aplikace, dostupnost aktualizací, licenční podmínky i to, zda tým rozumí abstrahovanému chování.</p>"
  }
};
