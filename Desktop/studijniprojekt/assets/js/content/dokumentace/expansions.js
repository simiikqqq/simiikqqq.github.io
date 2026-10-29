/* Chapter-specific explanations for Technická dokumentace. */
export default {
  "normy": {
    "title": "Markdown: čitelný zdroj i hotový dokument",
    "html": "<p>Markdown umožňuje zapisovat dokumentaci jako prostý text a přitom zachovat strukturu. Nadpisy, seznamy, odkazy a kód se vykreslí v editoru nebo na GitHubu bez složitého formátování. Proto se hodí pro README, návody i poznámky k projektu.</p><p>Udržuj logickou hierarchii nadpisů, krátké odstavce a popisné názvy odkazů. Kód obal zpětnými apostrofy, bloky kódu trojicí apostrofů a u podporovaných rendererů přidej jazyk pro zvýraznění syntaxe.</p><pre><code>## Instalace\n\n1. Nainstaluj závislosti.\n2. Zkopíruj `.env.example` do `.env`.\n3. Spusť `npm run dev`.\n\n```bash\nnpm test\n```</code></pre>"
  },
  "promitani": {
    "title": "README má čtenáři pomoci začít",
    "html": "<p>Představ si člověka, který projekt právě našel a nezná jeho vnitřní strukturu. README má rychle odpovědět: co projekt dělá, k čemu slouží, co potřebuji a jak jej spustím? Umísti nejpoužívanější cestu hned nahoru.</p><p>Nepiš pouze seznam závislostí — uveď ověřené příkazy, potřebnou verzi nástrojů a ukázku očekávaného výsledku. Pokud konfigurace obsahuje tajné hodnoty, nabídni bezpečný příklad bez skutečných přístupových údajů.</p><p>Detailní referenci přesuň do tematických souborů v adresáři docs a propojuj ji relativními odkazy.</p>"
  },
  "uml": {
    "title": "Požadavky a architektura pro vývojáře",
    "html": "<p>Technický popis návrhu zachycuje problém, požadavky a důležitá rozhodnutí. Rozlišuj požadované chování systému od způsobu, kterým ho implementuješ. Dokumentuj hlavně rozhodnutí, která nejsou z kódu zřejmá: volbu technologie, bezpečnostní omezení nebo hranice komponent.</p><p>UML použij jako komunikační pomůcku: kontext pro hranice systému, komponenty pro rozdělení aplikace, sekvenční diagram pro konkrétní scénář. Každý diagram popiš, udržuj stručný a aktualizuj spolu s kódem; zastaralý diagram mate více než žádný.</p>"
  },
  "schemata": {
    "title": "Dokumentace funkcí a API",
    "html": "<p>U veřejné funkce popiš účel, vstupy, výstupy, vedlejší účinky a možné chyby. U HTTP API přidej metodu, cestu, schéma těla požadavku, autentizaci, stavové kódy i ukázku odpovědi. Čtenář potřebuje vědět nejen jak volání zapsat, ale také co se stane při neplatném vstupu nebo nedostupné službě.</p><p>Komentuj především důvody a omezení, ne samozřejmý průběh kódu. Příklady pravidelně spouštěj nebo generuj z testovaných ukázek, aby při změně implementace nezestárly.</p>"
  },
  "projekt": {
    "title": "Návod pro instalaci, vývoj a provoz",
    "html": "<p>Vývojářský návod popisuje předpoklady, instalaci nástrojů, konfiguraci prostředí, spuštění testů a způsob vytvoření sestavení. Odděl lokální vývoj od produkčního nasazení: používají jinou konfiguraci, přístupy a bezpečnostní požadavky.</p><p>Pro provoz popiš potřebné proměnné prostředí, migrace dat, zálohování, logy a obnovu po chybě. Neuváděj reálné tokeny ani hesla; používej názvy proměnných a bezpečné zástupné hodnoty.</p><p>Malý projekt může mít vše stručně v README. Jak roste množství informací, rozděl návody podle úkolů a publika.</p>"
  },
  "wireframy": {
    "title": "Verzování, změny a kontrola dokumentace",
    "html": "<p>Textové soubory Markdown lze verzovat spolu se zdrojovým kódem. Pull request pak ukazuje změny dokumentace vedle změn chování programu a ostatní je mohou zkontrolovat. Při změně instalace, nastavení nebo veřejného rozhraní zahrň aktualizaci návodu do stejné změny.</p><p>Ověř všechny relativní odkazy a příkazy, odstraň zastaralé instrukce a zkontroluj, zda příklady neobsahují citlivé údaje. Piš pro konkrétní čtenáře: uživatel potřebuje způsob použití, přispěvatel lokální vývoj a správce provoz.</p>"
  }
};
