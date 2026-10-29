import { CATEGORIES, LESSON_EXPANSIONS, MATHEMATIKA_SLIDE_NOTES } from './content/index.js?v=19';

(() => {
  'use strict';

  const categories = CATEGORIES;
  const app = document.getElementById('app');
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const searchInput = document.getElementById('search');
  const searchResults = document.getElementById('search-results');
  const themeKey = 'maturita-theme';
  const allChapters = categories.flatMap(category =>
    category.chapters.map(chapter => ({ category, chapter }))
  );
  const subjectCategories = categories.filter(category =>
    category.type !== 'question-bank' && category.type !== 'coming-soon'
  );
  const subjectChapters = subjectCategories.reduce((total, category) => total + category.chapters.length, 0);
  const questionBanks = categories.filter(category => category.type === 'question-bank');
  const upcomingSections = categories.filter(category => category.type === 'coming-soon');
  let currentCategory = null;
  let currentSlides = [];
  let currentSlide = 0;
  let sidebarCollapsed = true;
  document.body.classList.add('sidebar-collapsed');

  function announce(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      toast.setAttribute('role', 'status');
      document.body.append(toast);
    }
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(announce.timeout);
    announce.timeout = setTimeout(() => toast.classList.remove('visible'), 2600);
  }

  function escapeHtml(value = '') {
    return String(value).replace(/[&<>"']/g, char => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[char]);
  }

  function renderSidebar(activeCategory, activeChapter) {
    const groups = new Map();
    categories.forEach(category => {
      if (!groups.has(category.group)) groups.set(category.group, []);
      groups.get(category.group).push(category);
    });

    let html = `<a class="nav-overview ${activeCategory ? '' : 'active'}" href="#/">
      <span class="nav-home" aria-hidden="true">⌂</span><span>Přehled</span></a>`;
    groups.forEach((items, group) => {
      html += `<p class="nav-label">${escapeHtml(group)}</p>`;
      items.forEach(category => {
        const active = category.id === activeCategory;
        html += `<a class="nav-subject ${active ? 'active' : ''}" style="--subject:${escapeHtml(category.color)}" href="#/${encodeURIComponent(category.id)}">
          <span class="subject-dot">${escapeHtml(category.icon)}</span><span>${escapeHtml(category.title)}</span></a>`;
        if (active) {
          html += `<div class="nav-chapters">${category.chapters.map(chapter =>
            `<a class="${chapter.id === activeChapter ? 'active' : ''}" href="#/${encodeURIComponent(category.id)}/${encodeURIComponent(chapter.id)}">
              <span>${escapeHtml(chapter.title)}</span>
            </a>`).join('')}</div>`;
        }
      });
    });
    sidebar.innerHTML = html;
  }

  function renderHome() {
    const first = allChapters[0];
    app.innerHTML = `
      <section class="welcome fade">
        <div class="welcome-copy">
          <span class="eyebrow"><i></i> STUDIJNÍ MATERIÁLY</span>
          <h1>Uč se do hloubky.<br><em>Svým tempem.</em></h1>
          <p>Výklad, příklady a souvislosti pro maturitní témata. Každá kapitola je rozdělená do přehledných studijních bloků, ke kterým se můžeš vracet.</p>
          <a class="button button-primary" href="${first ? `#/${encodeURIComponent(first.category.id)}/${encodeURIComponent(first.chapter.id)}` : '#/'}">
            Prohlédnout materiály <span aria-hidden="true">→</span>
          </a>
        </div>
        <div class="welcome-art" aria-hidden="true">
          <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
          <div class="book book-back"></div><div class="book book-front"><span>M</span></div>
          <span class="spark spark-one">✳</span><span class="spark spark-two">✦</span>
          <div class="art-note">Každý den<br>o kousek dál.</div>
        </div>
      </section>

      <section class="stats" aria-label="Obsah studijních materiálů">
        <div class="stat"><span class="stat-icon stat-violet">◎</span><div><strong>${subjectCategories.length}</strong><span>předmětů</span></div></div>
        <div class="stat"><span class="stat-icon stat-orange">▤</span><div><strong>${subjectChapters}</strong><span>studijních témat</span></div></div>
        <div class="stat"><span class="stat-icon stat-green">▣</span><div><strong>Responzivní</strong><span>mobil i počítač</span></div></div>
        <div class="stat"><span class="stat-icon stat-blue">⌁</span><div><strong>Offline režim</strong><span>po prvním načtení</span></div></div>
      </section>

      <section class="section-block">
        <div class="section-heading"><div><span class="eyebrow">OBSAH PORTÁLU</span><h2>Předměty</h2></div>
          <span class="heading-note">${subjectCategories.length} předmětů · ${subjectChapters} témat</span></div>
        <div class="subject-grid">${subjectCategories.map(category => {
          return `<a class="subject-card" style="--subject:${escapeHtml(category.color)}" href="#/${encodeURIComponent(category.id)}">
            <div class="subject-card-top"><span class="subject-icon">${escapeHtml(category.icon)}</span><span class="card-arrow" aria-hidden="true">↗</span></div>
            <h3>${escapeHtml(category.title)}</h3><p>${escapeHtml(category.desc)}</p>
            <div class="card-topic-count">${category.chapters.length} studijních témat <span aria-hidden="true">→</span></div>
          </a>`;
        }).join('')}</div>
      </section>
      ${questionBanks.length || upcomingSections.length ? `<section class="section-block question-bank-block">
        <div class="section-heading"><div><span class="eyebrow">PŘÍPRAVA K MATURITĚ</span><h2>Otázky a rozbory</h2></div></div>
        <div class="preparation-list">${[...questionBanks, ...upcomingSections].map(section => `<a class="question-bank-card" style="--subject:${escapeHtml(section.color)}" href="#/${encodeURIComponent(section.id)}">
          <span class="subject-icon">${escapeHtml(section.icon)}</span>
          <span class="question-bank-copy"><strong>${escapeHtml(section.title)}</strong><small>${escapeHtml(section.desc)}</small></span>
          ${section.status
            ? `<span class="upcoming-status">${escapeHtml(section.status)}</span>`
            : `<span class="card-topic-count">${section.chapters.length} otázek <span aria-hidden="true">→</span></span>`}
        </a>`).join('')}</div>
      </section>` : ''}
      <p class="home-footnote">Od základů programování až po dokumentaci softwaru — výklad, příklady i souvislosti na jednom místě.</p>`;
  }

  function renderCategory(category) {
    const isQuestionBank = category.type === 'question-bank';
    if (category.type === 'coming-soon') {
      app.innerHTML = `<div class="fade" style="--subject:${escapeHtml(category.color)}">
        <div class="breadcrumbs"><a href="#/">Přehled</a><span>/</span><span>${escapeHtml(category.title)}</span></div>
        <header class="subject-heading"><span class="subject-icon">${escapeHtml(category.icon)}</span><div><span class="eyebrow">${escapeHtml(category.group)}</span><h1>${escapeHtml(category.title)}</h1><p>${escapeHtml(category.desc)}</p></div></header>
        <section class="upcoming-message"><span class="upcoming-status">${escapeHtml(category.status)}</span><h2>Materiály připravujeme</h2><p>Obsah této sekce doplníme později.</p></section>
      </div>`;
      return;
    }
    app.innerHTML = `<div class="fade" style="--subject:${escapeHtml(category.color)}">
      <div class="breadcrumbs"><a href="#/">Přehled</a><span>/</span><span>${escapeHtml(category.title)}</span></div>
      <header class="subject-heading"><span class="subject-icon">${escapeHtml(category.icon)}</span><div><span class="eyebrow">${escapeHtml(category.group)}</span><h1>${escapeHtml(category.title)}</h1><p>${escapeHtml(category.desc)}</p></div></header>
      <div class="section-heading chapter-list-heading"><div><span class="eyebrow">${isQuestionBank ? 'MATURITNÍ OKRUHY' : 'VÝUKOVÉ MATERIÁLY'}</span><h2>${isQuestionBank ? 'Seznam otázek' : 'Vyber si téma'}</h2></div><span class="heading-note">${category.chapters.length} ${isQuestionBank ? 'otázek' : 'témat'}</span></div>
      <ol class="chapter-list">${category.chapters.map((chapter, index) => {
        return `<li><a href="#/${encodeURIComponent(category.id)}/${encodeURIComponent(chapter.id)}" class="chapter-card">
          <span class="chapter-number">${isQuestionBank ? `Otázka ${index + 1}` : String(index + 1).padStart(2, '0')}</span>
          <span class="chapter-info"><strong>${escapeHtml(chapter.title)}</strong><small>${escapeHtml(chapter.sub || (chapter.body ? 'Výklad, příklady a souvislosti' : 'Obsah připravujeme'))}</small></span>
          <span class="chapter-arrow" aria-hidden="true">→</span>
        </a></li>`;
      }).join('')}</ol></div>`;
  }

  function initChapter(category, chapter) {
    currentCategory = category;
    const index = category.chapters.indexOf(chapter);
    const isQuestionBank = category.type === 'question-bank';
    const previous = category.chapters[index - 1];
    const next = category.chapters[index + 1];
    const body = chapter.body || '<div class="callout callout-warn"><b>Obsah připravujeme</b><p>Tahle kapitola zatím čeká na doplnění. Její obsah můžeš přidat do modulu daného předmětu v <code>assets/js/content/</code>.</p></div>';
    currentSlides = createSlides(body, category, chapter);
    currentSlide = 0;
    const wordCount = currentSlides.map(slide => slide.html.replace(/<[^>]+>/g, ' ')).join(' ').split(/\s+/).filter(Boolean).length;
    const readMinutes = Math.max(1, Math.ceil(wordCount / 150));

    app.innerHTML = `<div class="breadcrumbs"><a href="#/">Přehled</a><span>/</span><a href="#/${encodeURIComponent(category.id)}">${escapeHtml(category.title)}</a><span>/</span><span>${escapeHtml(chapter.title)}</span></div>
      <div class="chapter-layout fade" style="--subject:${escapeHtml(category.color)}">
        <article class="chapter-article">
          <header class="chapter-header"><span class="subject-icon">${escapeHtml(category.icon)}</span><div>
            <span class="eyebrow">${escapeHtml(category.title)} · ${isQuestionBank ? `OTÁZKA ${index + 1} Z ${category.chapters.length}` : `KAPITOLA ${index + 1} Z ${category.chapters.length}`}</span>
            <h1>${escapeHtml(chapter.title)}</h1><p>${escapeHtml(chapter.sub || 'Studijní materiál k maturitě')}</p>
            <div class="chapter-meta">${chapter.level ? `<span class="level-tag">${escapeHtml(chapter.level)}</span>` : ''}${isQuestionBank ? '' : `<span>◷ přibližně ${readMinutes} min čtení</span>`}</div>
          </div></header>
          <div class="slide-stage" aria-live="polite"></div>
          <div class="slide-controls">
            <button class="button button-quiet" id="slide-prev" type="button">← Zpět</button>
            <span class="slide-counter" id="slide-counter" aria-live="polite"></span>
            <button class="button button-primary" id="slide-next" type="button">Další slide →</button>
          </div>
          <div class="chapter-links">
            ${previous ? `<a class="button button-quiet" href="#/${encodeURIComponent(category.id)}/${encodeURIComponent(previous.id)}"><span aria-hidden="true">←</span> Předchozí téma</a>` : '<span></span>'}
            ${next ? `<a class="button button-quiet button-next" href="#/${encodeURIComponent(category.id)}/${encodeURIComponent(next.id)}">Další téma <span aria-hidden="true">→</span></a>` : '<span></span>'}
          </div>
        </article>
        <nav class="slide-index" aria-label="Obsah slidů"></nav>
      </div>`;

    renderSlide();
    document.getElementById('slide-prev').addEventListener('click', () => showSlide(currentSlide - 1));
    document.getElementById('slide-next').addEventListener('click', () => showSlide(currentSlide + 1));
    app.querySelector('.slide-index').addEventListener('click', event => {
      const link = event.target.closest('[data-slide-index]');
      if (link) showSlide(Number(link.dataset.slideIndex));
    });
  }

  const studyGuides = {
    matematika: {
      title: 'Jak postupovat při řešení',
      html: '<p>Nejdřív si vlastními slovy pojmenuj, co se v úloze hledá. Potom vypiš známé údaje a podmínky, například definiční obor, jednotky nebo omezení jmenovatele. Zápis tě ochrání před tím, abys hned dosazoval do prvního vzorce, který poznáš.</p><ol><li>Rozhodni, který vztah nebo věta propojuje zadané a hledané hodnoty.</li><li>Pokud to jde, uprav vztah nejprve symbolicky a až potom dosaď čísla.</li><li>Zapiš každý algebraický krok a u rovnic udělej stejnou úpravu na obou stranách.</li><li>Výsledek dosaď zpět, ověř podmínky a posuď, zda jeho velikost dává smysl.</li></ol><p>U geometrie přidej náčrt; u funkcí tabulku nebo graf; u slovních úloh nakonec napiš odpověď větou.</p>'
    },
    cestina: {
      title: 'Jak si ověřit jazykové pravidlo',
      html: '<p>U pravopisu a tvarosloví nezačínej tipováním. Najdi větný kontext, urč slovní druh a gramatické vztahy a teprve pak vyber pravidlo. U koncovek se ptej, na kterém slově závisí; u čárek si vyznač hranice vět a spojovací výrazy.</p><ol><li>Větu si přečti celou — stejné slovo může mít v různém kontextu jinou funkci.</li><li>Urči základní skladební dvojici a závislost rozvíjejících členů.</li><li>Použij pravidlo na konkrétní tvar a ověř si, zda funguje i po změně čísla nebo pádu.</li><li>Po napsání textu proveď druhou kontrolu zaměřenou vždy na jeden typ chyby.</li></ol><p>Pomůcky jsou užitečné, ale rozhoduje větný význam a spisovná norma. Výjimky si zapisuj spolu s vlastním příkladem.</p>'
    },
    literatura: {
      title: 'Jak rozebrat literární téma',
      html: '<p>Literární pojem nebo dílo si vždy zařaď do souvislostí: období, autor, žánr a doba vzniku. Historický kontext vysvětluje, proč autoři volili určitá témata a prostředky, ale nenahrazuje rozbor samotného textu.</p><ol><li>Nejprve stručně urč téma, motivy, žánr a kompozici.</li><li>Všímej si vypravěče, postav, času a prostoru i toho, jak se příběh skládá.</li><li>Vyber konkrétní jazykový prostředek a vysvětli jeho účinek, nejen jeho název.</li><li>Spojuj autorův život a historické období s dílem pouze tam, kde to osvětluje jeho význam.</li><li>Svůj výklad podlož konkrétním motivem, situací nebo citací.</li></ol><p>U literárních směrů porovnávej jejich typické znaky na dílech, ne pouze podle seznamu autorů.</p>'
    },
    sloh: {
      title: 'Od zadání k hotovému textu',
      html: '<p>Dobrý text začíná správným přečtením zadání. Podtrhni požadovaný útvar, téma, adresáta, účel a případné povinné body. Ještě před psaním si ujasni, jaký jazyk a míru formálnosti bude čtenář očekávat.</p><ol><li>Napiš osnovu s logickým začátkem, rozvinutím tématu a zakončením.</li><li>Ke každému odstavci přiřaď jednu hlavní myšlenku; navazuj spojovacími výrazy.</li><li>Kontroluj, zda text skutečně plní funkci útvaru a neodbíhá od tématu.</li><li>Nech si čas na kontrolu: nejdřív obsah a kompozice, potom věty, pravopis a interpunkce.</li></ol><p>Po dopsání si text přečti jako adresát: je zřejmé, proč vznikl, co sděluje a co má čtenář pochopit nebo udělat?</p>'
    },
    hwsw: {
      title: 'Jak porovnávat technická řešení',
      html: '<p>Každou součást, architekturu nebo službu popiš přes její účel, princip fungování, přínosy a omezení. Samotný seznam parametrů nestačí — vysvětli, jak se projeví při běžném použití a s čím se dané řešení musí sladit.</p><ol><li>Urči, do které části systému prvek patří a s čím komunikuje.</li><li>Sleduj tok dat nebo instrukcí: co prvek přijímá, zpracovává a předává dál.</li><li>Rozliš kapacitu, rychlost, latenci a spolehlivost; nejsou to zaměnitelné vlastnosti.</li><li>Při výběru uveď konkrétní scénář a omezení, například cenu, kompatibilitu či spotřebu.</li><li>Vysvětli i alternativu a situaci, ve které by byla vhodnější.</li></ol><p>Technické pojmy si procvičuj ve vztazích: krátké srovnání dvou možností bývá názornější než izolovaná definice.</p>'
    },
    programovani: {
      title: 'Od problému k ověřenému programu',
      html: '<p>Než začneš psát kód, popiš vstupy, výstupy a pravidla problému. Malý příklad spočítej ručně; pomůže odhalit nejasnosti dřív, než se skryjí v implementaci.</p><ol><li>Rozděl úlohu na kroky a vyber vhodnou datovou strukturu.</li><li>Sepiš pseudokód nebo jednoduchý příklad dřív, než zvolíš syntaxi.</li><li>Implementuj po malých částech a po každém kroku ověř očekávaný výsledek.</li><li>Testuj běžný vstup, prázdný nebo nejmenší vstup, hranice i neplatná data.</li><li>Najdeš-li chybu, zmenši vstup na nejjednodušší případ, který ji stále vyvolá.</li></ol><p>U algoritmu vysvětli také časovou a paměťovou náročnost a podmínky, za kterých jeho odhad platí.</p>'
    },
    web: {
      title: 'Od struktury k přístupnému webu',
      html: '<p>Webovou stránku navrhuj od obsahu a uživatele, ne od ozdob. Sémantická struktura dokumentu pomáhá prohlížeči, vyhledávači i lidem používajícím klávesnici nebo čtečku obrazovky.</p><ol><li>Rozděl obsah na smysluplné části a použij odpovídající HTML prvky.</li><li>Styly navrhuj tak, aby obsah zůstal čitelný na úzkém displeji i při zvětšeném písmu.</li><li>Ověř kontrast, popisky formulářů, alternativní texty a ovládání bez myši.</li><li>JavaScript přidávej pro interakci; základní obsah má dávat smysl i bez ní.</li><li>Otestuj různé šířky, klávesnici a chybové stavy — nejen ideální zobrazení.</li></ol><p>Při vysvětlování webové technologie vždy uveď, jakou část systému řeší a jak spolupracuje s ostatními.</p>'
    },
    databaze: {
      title: 'Od datového modelu k dotazu',
      html: '<p>Nejdřív si ujasni, jaká fakta systém ukládá a jak spolu souvisejí. Model navrhuj podle pravidel domény; tabulky nemají jen kopírovat podobu obrazovky aplikace.</p><ol><li>Urči entity, jejich stabilní identifikátory a povinné atributy.</li><li>U každého vztahu stanov kardinalitu a rozhodni, kam patří cizí klíč.</li><li>Opakované údaje a aktualizace z více míst jsou signálem k promyšlení normalizace.</li><li>U dotazu nejprve urč zdrojové tabulky a vazby, potom filtraci, seskupení a řazení.</li><li>Transakci posuzuj jako celek: co se musí potvrdit společně a co při chybě vrátit zpět.</li></ol><p>Výsledek dotazu si ověř na malé ručně sestavené sadě řádků, včetně případů bez shody.</p>'
    },
    dokumentace: {
      title: 'Jak psát dokumentaci pro čtenáře',
      html: '<p>Dobrá softwarová dokumentace odpovídá na otázku konkrétního čtenáře a umožní mu něco udělat: projekt spustit, funkci použít nebo systém bezpečně upravit. Rozděl informace podle publika — uživatel, vývojář a správce potřebují rozdílný detail.</p><ol><li>Napiš účel dokumentu a předpokládané znalosti čtenáře.</li><li>Začni nejčastějším úkolem a uveď ověřený postup krok za krokem.</li><li>Vysvětli zkratky, předpoklady, chyby a očekávaný výsledek.</li><li>Příklady udržuj aktuální a odkazy kontroluj po přesunech souborů.</li><li>Piš stručně a používej běžné, konkrétní formulace místo nejasných slibů.</li></ol><p>Dokumentace není jednorázová příloha. Je součástí vývoje a má se měnit spolu s programem.</p>'
    }
  };
  const studyExamples = {
    matematika: {
      title: 'Kontrola výsledku a zápisu',
      html: '<p>Správný postup nekončí nalezením čísla. Vrať se k původnímu zadání a ověř, že výsledek splňuje všechny podmínky. Při krácení zlomku například zůstává vyloučená hodnota, která nulovala původní jmenovatel, i když už se ve zkráceném výrazu neobjevuje.</p><ul><li>U rovnice dosaď vypočtený kořen do původního, nikoli jen upraveného tvaru.</li><li>U procent a úroků odhadni, zda výsledek odpovídá směru změny a době úročení.</li><li>U geometrie připoj jednotky a ověř, že délka, obsah nebo objem mají správný rozměr.</li><li>U pravděpodobnosti zkontroluj, že výsledek leží mezi 0 a 1.</li></ul><p>V řešení ponech klíčové mezikroky: díky nim lze najít chybu a obhájit, proč výsledek platí.</p>'
    },
    cestina: {
      title: 'Od pravidla ke konkrétní větě',
      html: '<p>Pravidla si nejlépe upevníš na celých větách, protože pravopis často závisí na významu a gramatické stavbě. Když řešíš shodu přísudku s podmětem, nejdřív najdi podmět a jeho řídící jméno; nejbližší slovo nemusí být rozhodující.</p><ul><li>Najdi slovesný přísudek a polož otázku, kdo nebo co danou činnost vykonává.</li><li>U několikanásobného podmětu sleduj, zda obsahuje rod mužský životný.</li><li>U zájmen rozliš pád podle vazby ve větě, ne pouze podle toho, jak slovo zní.</li><li>U interpunkce si vyznač počet vět a jejich vzájemný vztah.</li></ul><p>Po určení řešení zkus větu přeformulovat. Pokud změna významu změní i pravopisnou volbu, je význam důležitou součástí pravidla.</p>'
    },
    literatura: {
      title: 'Od pojmu k interpretaci',
      html: '<p>Pojmy z literární teorie mají smysl tehdy, když jimi dokážeš vysvětlit účinek konkrétního textu. Nestačí například říct, že se v básni objevuje metafora: pojmenuj obraz, jeho kontext a to, jak mění náladu nebo význam.</p><ul><li>Všimni si opakujících se motivů a jejich proměny v průběhu díla.</li><li>Odděl autora od vypravěče; jejich názory nemusejí být totožné.</li><li>Popiš, zda kompozice odhaluje události postupně, retrospektivně nebo v paralelních liniích.</li><li>Propoj formu s obsahem: například dialog, rytmus či perspektiva ovlivňují čtenářův dojem.</li></ul><p>U ústní odpovědi začni jasným tvrzením, vysvětli je a dolož konkrétním znakem díla. Kontext doplň jako souvislost, ne jako izolovaný životopis.</p>'
    },
    sloh: {
      title: 'Redakční kontrola textu',
      html: '<p>Při revizi neopravuj všechno najednou. První čtení věnuj zadání a logice, druhé stavbě odstavců a třetí jazykové správnosti. Tak snáz odhalíš, že text může být bez pravopisných chyb, ale přesto neplní požadovaný útvar.</p><ul><li>Ověř adresáta, účel a všechny body zadání.</li><li>Zkontroluj, zda každý odstavec rozvíjí jednu hlavní myšlenku.</li><li>Všímej si opakovaných slov, dlouhých souvětí a nejasných zájmen.</li><li>U formálních útvarů zkontroluj náležitosti a přiměřenou zdvořilost.</li><li>Nahlas si přečti závěr: má text skutečné zakončení?</li></ul><p>Neopravuj text jen podle toho, jak věta zní. U nejistého tvaru urč větný vztah a teprve potom použij příslušné pravidlo.</p>'
    },
    hwsw: {
      title: 'Vlastnosti, kompromisy a příklady',
      html: '<p>Technické řešení obvykle optimalizuje jednu vlastnost za cenu jiné. Rychlejší úložiště může stát víc za jednotku kapacity; bezpečnostní opatření mohou přidat kroky uživateli; vyšší výkon může vyžadovat více energie a chlazení.</p><ul><li>Rozlišuj teoretický parametr od výsledku v konkrétní zátěži.</li><li>U protokolů a sběrnic vysvětli, co propojují a jak se pozná omezení přenosu.</li><li>U operačních systémů odliš správu prostředků od uživatelských aplikací.</li><li>U bezpečnosti pojmenuj hrozbu, slabinu, dopad i vhodné opatření.</li></ul><p>Při srovnání dvou možností uveď stejné podmínky pro obě. Teprve pak je závěr o jejich výhodách smysluplný.</p>'
    },
    programovani: {
      title: 'Příklady, testy a čitelnost',
      html: '<p>Každý algoritmus si nejprve vyzkoušej na malé sadě hodnot, u které dokážeš ručně předpovědět výsledek. Potom přidej případy, které mění průběh programu: prázdné pole, jeden prvek, duplicity, záporné hodnoty nebo vstup na hranici.</p><ul><li>Rozliš chybu ve specifikaci, návrhu algoritmu, implementaci a testovacích datech.</li><li>Proměnnou pojmenuj podle významu a funkci drž u jedné srozumitelné odpovědnosti.</li><li>U změny stavu sleduj, kde se hodnota nastaví a kde se znovu používá.</li><li>U rekurze ověř základní případ i to, že každý krok přibližuje vstup k ukončení.</li></ul><p>Čitelné řešení lze vysvětlit krok za krokem a upravit bez toho, aby se rozpadla jeho původní logika.</p>'
    },
    web: {
      title: 'Jak ověřit výsledek v prohlížeči',
      html: '<p>Funkční stránka není automaticky kvalitní stránka. Ověř, zda lidé rozumějí struktuře, dokážou projít rozhraním a dostanou zpětnou vazbu při úspěchu i chybě.</p><ul><li>Procházej stránku jen klávesnicí a sleduj viditelné pořadí fokusu.</li><li>Zvětši text a zúž okno; důležité informace se nesmějí ztratit.</li><li>Ověř formulář s prázdnou, chybnou i platnou hodnotou.</li><li>Kontroluj konzoli a síťové požadavky při používání JavaScriptu a fetch.</li><li>U externích knihoven rozuměj tomu, jak ovlivní velikost, výkon a údržbu stránky.</li></ul><p>Vysvětli rozdíl mezi tím, co poskytuje HTML, co řeší CSS a proč je potřeba JavaScript. Rozdělení rolí ulehčuje návrh i hledání chyb.</p>'
    },
    databaze: {
      title: 'Jak přemýšlet nad výsledkem dotazu',
      html: '<p>Před spuštěním složitějšího SQL dotazu si nakresli malou tabulku výsledku: které sloupce mají vzniknout a co představuje jeden řádek. To pomůže odhalit chybné spojení i nechtěné násobení řádků při vztahu jedna ku více.</p><ul><li>Rozliš filtr řádků před seskupením od podmínky nad skupinami.</li><li>Rozhodni, co se má stát, když související řádek neexistuje.</li><li>U agregací ověř, co přesně počítáš — řádky, různé hodnoty, součet nebo průměr.</li><li>U aktualizace dat ověř podmínku WHERE a změny proveď v transakci, pokud tvoří jeden celek.</li></ul><p>Správnost ověř na datech s duplicitou i bez odpovídající vazby. Jediný běžný případ často chybu v návrhu neukáže.</p>'
    },
    dokumentace: {
      title: 'Příklad: přečti si projekt jako nový přispěvatel',
      html: '<p>Představ si, že sis právě stáhl cizí aplikaci. Zkus pouze podle její dokumentace zjistit, jakou verzi Node.js potřebuješ, jak nastavit lokální konfiguraci a jak spustit testy. Pokud některou informaci musíš hádat, dokumentaci doplň.</p><ol><li>Ověř, že všechny cesty k souborům a odkazy v README skutečně existují.</li><li>Zkopíruj ukázkový příkaz do čistého prostředí a ověř jeho výsledek.</li><li>Porovnej návod k API s aktuální implementací a automatickými testy.</li><li>Vyhledej staré názvy funkcí, konfigurací a proměnných prostředí.</li><li>Před zveřejněním odstraň tajné klíče, soukromá data a interní adresy.</li></ol><p>Nejlepší závěrečnou kontrolou je člověk, který projekt předtím neviděl. Sleduj, kde se zastaví a jakou informaci v tu chvíli potřebuje.</p>'
    }
  };

  function createSlides(body, category, chapter) {
    if (category.type === 'question-bank') {
      return [{
        title: 'Tematické okruhy',
        html: body.replace(/^<h2>Tematické okruhy<\/h2>/, ''),
        number: 1
      }];
    }

    const template = document.createElement('template');
    template.innerHTML = body;
    const chunks = [];
    let heading = chapter.title;
    let content = [];
    let continuation = 0;
    const flush = () => {
      if (!content.length) return;
      const title = heading || 'Téma';
      chunks.push({ title: continuation ? `${title} (pokračování)` : title, html: content.join('') });
      content = [];
      continuation += 1;
    };
    [...template.content.children].forEach(element => {
      if (['H2', 'H3'].includes(element.tagName)) {
        flush();
        heading = element.textContent.trim();
        continuation = 0;
      } else {
        content.push(element.outerHTML);
        if (content.length >= 4) flush();
      }
    });
    flush();
    if (category.id === 'matematika') {
      const notes = MATHEMATIKA_SLIDE_NOTES[chapter.id] || {};
      chunks.forEach(slide => {
        const title = slide.title.replace(/ \(pokračování\)$/, '');
        if (notes[title] && !slide.title.endsWith('(pokračování)')) {
          slide.html += notes[title];
        }
      });
    }
    const topics = chunks.map(slide => slide.title).filter(title => title && title !== 'Téma').slice(0, 7);
    const topicList = topics.length
      ? `<ul>${topics.map(title => `<li>${escapeHtml(title)}</li>`).join('')}</ul>`
      : '<p>Začni přehledem základních pojmů a pokračuj jejich použitím na konkrétních situacích.</p>';
    if (category.id !== 'matematika') {
    chunks.unshift({
      title: 'Mapa tématu',
      html: `<p>Tato kapitola se věnuje tématu <strong>${escapeHtml(chapter.title)}</strong>${chapter.sub ? ` — ${escapeHtml(chapter.sub)}` : ''}. Nejde jen o zapamatování názvů: důležité je rozumět pojmům, jejich souvislostem a umět je vysvětlit na příkladu.</p><p>V lekci najdeš:</p>${topicList}<p>Procházej výklad po částech. Zastav se u příkladů a zkus si vlastními slovy vysvětlit hlavní myšlenku i důvod zvoleného postupu.</p>`
    });
    }
    const expansion = LESSON_EXPANSIONS[category.id]?.[chapter.id];
    if (expansion) chunks.push(expansion);
    if (category.id !== 'matematika') {
    const guide = studyGuides[category.id];
    if (guide) chunks.push(guide);
    const example = studyExamples[category.id];
    if (example) chunks.push(example);
    }
    if (chunks.length === 0) chunks.push({ title: 'Výklad tématu', html: '<p>Obsah tohoto tématu připravujeme.</p>' });
    return chunks.map((slide, index) => ({
      title: slide.title,
      html: slide.html,
      number: index + 1
    }));
  }

  function renderSlide() {
    const slide = currentSlides[currentSlide];
    if (!slide) return;
    const stage = app.querySelector('.slide-stage');
    const index = app.querySelector('.slide-index');
    stage.innerHTML = `<section class="lesson-content lesson-slide" aria-labelledby="current-slide-title">
      <span class="slide-kicker">${currentCategory?.type === 'question-bank' ? 'OTÁZKOVÝ OKRUH' : `STUDIJNÍ BLOK ${String(slide.number).padStart(2, '0')}`}</span>
      <h2 id="current-slide-title" tabindex="-1">${escapeHtml(slide.title)}</h2>
      <div class="slide-body">${slide.html}</div>
    </section>`;
    index.innerHTML = `<strong>V této kapitole</strong>${currentSlides.map((item, slideIndex) =>
      `<button type="button" class="${slideIndex === currentSlide ? 'active' : ''}" data-slide-index="${slideIndex}" aria-current="${slideIndex === currentSlide ? 'step' : 'false'}">
        <span>${String(slideIndex + 1).padStart(2, '0')}</span>${escapeHtml(item.title)}
      </button>`).join('')}`;
    app.querySelector('#slide-counter').textContent = `Slide ${currentSlide + 1} z ${currentSlides.length}`;
    app.querySelector('#slide-prev').disabled = currentSlide === 0;
    app.querySelector('#slide-next').disabled = currentSlide === currentSlides.length - 1;
    app.querySelector('#slide-next').textContent = currentSlide === currentSlides.length - 1
      ? (currentCategory?.type === 'question-bank' ? 'Konec otázky' : 'Konec tématu')
      : 'Další slide →';
    initCopyButtons();
    initQuizzes();
  }

  function showSlide(index) {
    if (index < 0 || index >= currentSlides.length || index === currentSlide) return;
    currentSlide = index;
    renderSlide();
    app.querySelector('#current-slide-title').focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }

  function initCopyButtons() {
    app.querySelectorAll('.lesson-content pre').forEach(pre => {
      const button = document.createElement('button');
      button.className = 'copy-button';
      button.type = 'button';
      button.textContent = 'Kopírovat';
      button.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(pre.querySelector('code')?.innerText || pre.innerText);
          button.textContent = 'Zkopírováno ✓';
          setTimeout(() => { button.textContent = 'Kopírovat'; }, 1500);
        } catch (error) {
          console.warn('Kód se nepodařilo zkopírovat.', error);
          announce('Kopírování není v tomto prohlížeči dostupné.');
        }
      });
      pre.append(button);
    });
  }

  function initQuizzes() {
    app.querySelectorAll('.quiz').forEach((quiz, quizIndex) => {
      const title = document.createElement('h3');
      title.className = 'quiz-title';
      title.textContent = 'Dobrovolné procvičení — bez skóre';
      quiz.prepend(title);
      quiz.querySelectorAll('.q').forEach((question, questionIndex) => {
        const options = [...question.querySelectorAll('.opt')];
        const correct = Number(question.dataset.correct);
        const feedback = document.createElement('p');
        feedback.className = 'quiz-feedback';
        feedback.setAttribute('aria-live', 'polite');
        feedback.id = `quiz-${quizIndex}-question-${questionIndex}-feedback`;
        question.append(feedback);
        options.forEach((option, optionIndex) => {
          option.setAttribute('aria-pressed', 'false');
          option.setAttribute('aria-describedby', feedback.id);
          option.addEventListener('click', () => {
            if (question.dataset.solved) return;
            options.forEach(item => {
              item.classList.remove('bad', 'ok');
              item.setAttribute('aria-pressed', 'false');
            });
            option.setAttribute('aria-pressed', 'true');
            if (optionIndex === correct) {
              question.dataset.solved = 'true';
              options.forEach((item, itemIndex) => {
                item.disabled = true;
                if (itemIndex === correct) item.classList.add('ok');
              });
              feedback.textContent = 'Správně. Pokračuj, až budeš chtít.';
              feedback.classList.add('feedback-good');
              feedback.classList.remove('feedback-retry');
            } else {
              option.classList.add('bad');
              feedback.textContent = 'Zkus to znovu — je to jen procvičení, bez známky.';
              feedback.classList.add('feedback-retry');
              feedback.classList.remove('feedback-good');
            }
          });
        });
      });
    });
  }

  function normalize(value) {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  const searchIndex = allChapters.map(({ category, chapter }) => ({
    category,
    chapter,
    text: normalize(`${category.title} ${chapter.title} ${chapter.sub || ''} ${(chapter.body || '').replace(/<[^>]+>/g, ' ')} ${LESSON_EXPANSIONS[category.id]?.[chapter.id]?.html?.replace(/<[^>]+>/g, ' ') || ''}`)
  }));

  function updateSearch() {
    const query = normalize(searchInput.value.trim());
    if (!query) {
      searchResults.classList.remove('open');
      searchInput.setAttribute('aria-expanded', 'false');
      return;
    }
    const matches = searchIndex.filter(item => item.text.includes(query)).slice(0, 10);
    searchResults.innerHTML = matches.length ? matches.map(({ category, chapter }) =>
      `<a role="option" href="#/${encodeURIComponent(category.id)}/${encodeURIComponent(chapter.id)}">
        <span class="result-icon">${escapeHtml(category.icon)}</span><span>${escapeHtml(chapter.title)}<small>${escapeHtml(category.title)}</small></span><span class="result-arrow">↗</span>
      </a>`).join('') : '<p class="no-results">Nic jsme nenašli. Zkus jiné slovo.</p>';
    searchResults.classList.add('open');
    searchInput.setAttribute('aria-expanded', 'true');
  }

  function route(focusHeading = false) {
    const [categoryId, chapterId] = location.hash.replace(/^#\/?/, '').split('/');
    const category = categories.find(item => item.id === decodeURIComponent(categoryId || ''));
    const chapter = category?.chapters.find(item => item.id === decodeURIComponent(chapterId || ''));
    document.querySelector('.layout').classList.toggle('home-layout', !category);
    sidebarToggle.hidden = !category;
    if (!category) renderHome();
    else if (!chapter) renderCategory(category);
    else initChapter(category, chapter);
    renderSidebar(category?.id, chapter?.id);
    closeMenu();
    updateSidebarToggle();
    searchResults.classList.remove('open');
    searchInput.setAttribute('aria-expanded', 'false');
    window.scrollTo(0, 0);
    document.title = `${chapter ? `${chapter.title} · ` : category ? `${category.title} · ` : ''}Maturitní plán`;
    if (focusHeading) {
      const heading = app.querySelector('h1');
      if (heading) {
        heading.setAttribute('tabindex', '-1');
        heading.focus({ preventScroll: true });
      }
    }
  }

  function closeMenu() {
    document.body.classList.remove('menu-open');
    document.getElementById('menu-btn').setAttribute('aria-expanded', 'false');
  }

  function updateSidebarToggle() {
    const expanded = !sidebarCollapsed;
    sidebarToggle.setAttribute('aria-expanded', String(expanded));
    sidebarToggle.setAttribute('aria-label', expanded ? 'Skrýt navigaci' : 'Otevřít navigaci');
    sidebarToggle.title = expanded ? 'Skrýt navigaci' : 'Otevřít navigaci';
    sidebarToggle.querySelector('span').textContent = expanded ? '<' : '>';
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    document.getElementById('theme-icon').textContent = theme === 'dark' ? '☀' : '☾';
    document.getElementById('theme-btn').setAttribute('aria-label', theme === 'dark' ? 'Přepnout na světlý režim' : 'Přepnout na tmavý režim');
    try {
      localStorage.removeItem('maturita-done');
    } catch (error) {
      console.warn('Staré označení dokončených kapitol se nepodařilo odstranit.', error);
    }

    try {
      localStorage.setItem(themeKey, theme);
    } catch (error) {
      console.warn('Nastavení motivu se nepodařilo uložit.', error);
    }
  }

  searchInput.addEventListener('input', updateSearch);
  searchResults.addEventListener('click', () => {
    searchResults.classList.remove('open');
    searchInput.value = '';
    searchInput.setAttribute('aria-expanded', 'false');
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.search')) {
      searchResults.classList.remove('open');
      searchInput.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      event.preventDefault();
      searchInput.focus();
    }
    if (event.key === 'Escape') {
      searchResults.classList.remove('open');
      searchInput.setAttribute('aria-expanded', 'false');
      searchInput.blur();
      closeMenu();
    }
  });

  document.getElementById('menu-btn').addEventListener('click', event => {
    const isOpen = document.body.classList.toggle('menu-open');
    event.currentTarget.setAttribute('aria-expanded', String(isOpen));
  });
  sidebarToggle.addEventListener('click', () => {
    sidebarCollapsed = !sidebarCollapsed;
    document.body.classList.toggle('sidebar-collapsed', sidebarCollapsed);
    updateSidebarToggle();
  });
  document.getElementById('mobile-scrim').addEventListener('click', closeMenu);
  sidebar.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.getElementById('theme-btn').addEventListener('click', () => {
    applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
  });
  window.addEventListener('hashchange', () => route(true));
  document.addEventListener('keydown', event => {
    if (!app.querySelector('.slide-stage') || !currentSlides.length) return;
    if (event.key === 'ArrowRight' && !['INPUT', 'TEXTAREA', 'BUTTON'].includes(document.activeElement.tagName)) showSlide(currentSlide + 1);
    if (event.key === 'ArrowLeft' && !['INPUT', 'TEXTAREA', 'BUTTON'].includes(document.activeElement.tagName)) showSlide(currentSlide - 1);
  });

  try {
    const savedTheme = localStorage.getItem(themeKey);
    applyTheme(savedTheme === 'light' ? 'light' : 'dark');
  } catch (error) {
    console.warn('Motiv se nepodařilo načíst z místního úložiště.', error);
    applyTheme('dark');
  }

  if ('serviceWorker' in navigator && window.isSecureContext) {
    navigator.serviceWorker.register(new URL('service-worker.js', document.baseURI), {
      scope: new URL('./', document.baseURI).pathname
    }).catch(error => {
      console.warn('Offline režim se nepodařilo aktivovat.', error);
    });
  }
  route(false);
})();
