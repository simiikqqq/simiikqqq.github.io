/* Matematika: maturitní přehled, vzorové postupy a procvičování. */
const chapter = (id, title, sub, body) => ({
  id,
  title,
  sub,
  level: 'maturitní přehled',
  body
});

export default {
  id: 'matematika',
  group: 'Společná část',
  title: 'Matematika',
  icon: '📐',
  color: '#f5b83d',
  desc: 'Srozumitelný výklad, postupy a procvičování.',
  chapters: [
    chapter('vyrazy', 'Číselné obory a výrazy', 'Zlomky, mocniny, odmocniny, absolutní hodnota a intervaly', `
      <h2>Číselné obory a podmínky</h2>
      <p><b>N</b> přirozená, <b>Z</b> celá, <b>Q</b> racionální a <b>R</b> reálná čísla; platí N ⊂ Z ⊂ Q ⊂ R. Iracionální čísla jako √2 nebo π nelze vyjádřit zlomkem. Před úpravou výrazu stanov podmínky: jmenovatel nesmí být nula a odmocněnec sudé odmocniny musí být nezáporný.</p>
      <h2>Zlomky a mocniny</h2>
      <div class="formula">a/b ± c/d = (ad ± bc)/bd &nbsp; · &nbsp; aᵐ · aⁿ = aᵐ⁺ⁿ &nbsp; · &nbsp; aᵐ/aⁿ = aᵐ⁻ⁿ &nbsp; · &nbsp; (aᵐ)ⁿ = aᵐⁿ</div>
      <p>Nejdřív rozlož čitatele i jmenovatele, potom krátíš společné <em>činitele</em>, ne jednotlivé členy součtu. Záporný exponent převrací mocninu: a⁻ⁿ = 1/aⁿ pro a ≠ 0.</p>
      <h2>Jak bezpečně upravovat výrazy</h2>
      <p>Dodržuj pořadí operací: závorky, mocniny a odmocniny, násobení a dělení, nakonec sčítání a odčítání. Zlomky sčítej až po převedení na společného jmenovatele; při násobení zlomků naopak násob čitatele s čitatelem a jmenovatele se jmenovatelem. Zápis 2(x+3) znamená 2·x+2·3, nikoli 2x+3.</p>
      <p>Před krácením vždy rozlož čitatele i jmenovatele na součin. Ve zlomku (x+2)/x nelze „zkrátit x“, protože x je jen část součtu; naproti tomu x(x+2)/x lze pro x≠0 upravit na x+2. Zkouška dosazením konkrétní hodnoty pomůže odhalit chybu, ale nenahrazuje algebraické zdůvodnění.</p>
      <h2>Odmocniny, absolutní hodnota a intervaly</h2>
      <div class="formula">√(a²) = |a| &nbsp; · &nbsp; √(ab) = √a · √b (a,b ≥ 0) &nbsp; · &nbsp; |x| = vzdálenost x od nuly</div>
      <p>Například √(x−1) vyžaduje x ≥ 1. Interval (2;5) krajní body neobsahuje, [2;5] je obsahuje. Absolutní hodnota se při řešení rozpadá na případy podle znaménka výrazu uvnitř.</p>
      <h2>Absolutní hodnota jako vzdálenost</h2>
      <p>Výraz |x−a| vyjadřuje vzdálenost čísla x od bodu a na číselné ose. Proto |x−3|=2 znamená dva body vzdálené od trojky o 2: x=1 nebo x=5. Nerovnost |x−3|&lt;2 popisuje všechna čísla uvnitř této vzdálenosti, tedy interval (1;5). Tento geometrický význam často usnadní zápis řešení.</p>
      <p>U sudé odmocniny pracujeme v reálných číslech pouze s nezáporným odmocněncem; například √(x−1) vyžaduje x≥1. Pozor také na odmocninu ze součtu: obecně √(a+b) není √a+√b. Pravidlo pro součin lze použít jen za uvedených podmínek.</p>
      <h2>Vzorový příklad: lomený výraz</h2>
      <p>Zjednoduš (x²−9)/(x+3). Podmínka původního výrazu je x ≠ −3. Rozložíme čitatel: (x−3)(x+3)/(x+3) = <b>x−3</b>, stále však pouze pro x ≠ −3. Krácení nevrací zakázanou hodnotu do definičního oboru.</p>
      <p>Nejprve řešíme podmínku, teprve potom upravujeme: x+3 nesmí být nula, proto x≠−3. Čitatel je rozdíl čtverců, takže x²−9=(x−3)(x+3). Krátíme společný činitel x+3, nikoli členy součtu. Výraz x−3 je tedy roven původnímu zlomku pro všechna přípustná x, ale u x=−3 původní zlomek stále neexistuje.</p>
      <h2>Procvičení</h2>
      <ol><li>Zjednoduš 3/4 − 5/6.</li><li>Vypočítej 2⁻³ · 2⁵.</li><li>Urči podmínky výrazu √(2x−6)/(x−5).</li><li>Zjednoduš √50 − 2√8.</li></ol>
      <h2>Výsledky a postupy</h2>
      <ol><li>Společný jmenovatel 12: 9/12 − 10/12 = <b>−1/12</b>.</li><li>Sečteme exponenty: 2² = <b>4</b>.</li><li>2x−6 ≥ 0 dává x ≥ 3; současně x ≠ 5. Výsledek: <b>[3;∞), x ≠ 5</b>.</li><li>√50=5√2 a √8=2√2; 5√2−4√2 = <b>√2</b>.</li></ol>
      <h2>Využití v praxi: měřítko a spotřeba</h2>
      <p>Při čtení plánu v měřítku 1:50 odpovídá 4 cm na výkresu skutečné délce 4·50=200 cm. Zlomky využiješ při rozdělení materiálu a mocniny při převodech jednotek obsahu a objemu: 1 m²=10 000 cm², protože převádíme obě rozměrové strany.</p>
    `),
    chapter('algebraicke-vyrazy', 'Algebraické výrazy a rozklad', 'Mnohočleny, vzorce, vytýkání a lomené výrazy', `
      <h2>Úpravy mnohočlenů</h2>
      <p>Sčítat lze pouze podobné členy se stejnou proměnnou a exponentem. Při násobení roznásob každý člen prvního závorkového výrazu každým členem druhého; před roznásobením zkontroluj znaménka.</p>
      <div class="formula">(a+b)² = a²+2ab+b² &nbsp; · &nbsp; (a−b)² = a²−2ab+b² &nbsp; · &nbsp; a²−b² = (a−b)(a+b)</div>
      <h2>Rozklad na součin</h2>
      <p>Vytkni největší společný činitel. Když vznikne kvadratický trojčlen, hledej dvojici čísel se součinem c a součtem b pro x²+bx+c. Rozklad usnadní řešení rovnic i krácení zlomků.</p>
      <div class="box tip"><b>Kontrola</b>Roznásob výsledek zpět. Pokud nedostaneš původní mnohočlen, rozklad nebo znaménko je chybné.</div>
      <h2>Roznásobování a vzorce</h2>
      <p>Roznásobení vychází z distributivního zákona: a(b+c)=ab+ac. U dvou dvojčlenů proto násob každý člen prvního závorkového výrazu každým členem druhého. Například (x+2)(x+3)=x²+3x+2x+6=x²+5x+6. Podobné členy sečteme až po roznásobení.</p>
      <p>Vzorce pro druhou mocninu dvojčlenu si ověř roznásobením: (a+b)²=(a+b)(a+b)=a²+2ab+b². Častá chyba je vynechaný prostřední člen; (a+b)² rozhodně není a²+b². Rozdíl čtverců a²−b² naopak rozložíš jako (a−b)(a+b).</p>
      <h2>Volba vhodného rozkladu</h2>
      <p>Postupuj od nejjednodušší možnosti: nejprve vytkni společný činitel, potom hledej vzorec (rozdíl čtverců nebo druhou mocninu dvojčlenu) a nakonec zkus rozklad trojčlenu. U ax²+bx+c s a≠1 hledej dvě čísla se součinem ac a součtem b, rozděl prostřední člen a vytýkej po skupinách.</p>
      <h2>Vzorový příklad: rozklad trojčlenu</h2>
      <p>Rozlož x²−5x+6. Hledáme čísla se součinem 6 a součtem −5: jsou to −2 a −3. Proto x²−5x+6 = <b>(x−2)(x−3)</b>. Zkouška: x²−3x−2x+6 odpovídá původnímu výrazu.</p>
      <p>Člen x² má koeficient 1, proto hledáme dvě čísla, která dají po vynásobení poslední člen 6 a po sečtení prostřední koeficient −5. Obě čísla musí být záporná, aby jejich součin byl kladný a součet záporný. Zkouška roznásobením je důležitá: (x−2)(x−3)=x²−3x−2x+6=x²−5x+6.</p>
      <h2>Procvičení</h2>
      <ol><li>Uprav (2x−3)(x+4).</li><li>Rozlož 3x²−12x.</li><li>Rozlož x²+7x+12.</li><li>Zkrať (x²−16)/(x²+8x+16) a uveď podmínku.</li></ol>
      <h2>Výsledky a postupy</h2>
      <ol><li>Rozevřeme závorky: 2x²+8x−3x−12 = <b>2x²+5x−12</b>.</li><li>Vytkneme 3x: <b>3x(x−4)</b>.</li><li>Součin 12, součet 7: <b>(x+3)(x+4)</b>.</li><li>Rozklad (x−4)(x+4)/(x+4)². Podmínka x ≠ −4; po krácení <b>(x−4)/(x+4)</b>.</li></ol>
      <h2>Využití v praxi: rozměry a optimalizace</h2>
      <p>Rozklad pomůže určit rozměry plochy: obdélník s obsahem x²−9 lze popsat jako strany (x−3) a (x+3). Kvadratický výraz se používá také při hledání rozměru nebo ceny, pro kterou je zisk či obsah největší; faktorizace odhalí nulové body a možné hraniční hodnoty.</p>
    `),
    chapter('rovnice', 'Rovnice', 'Lineární, kvadratické, lomené a iracionální rovnice', `
      <h2>Lineární rovnice</h2>
      <p>Proveď stejné ekvivalentní úpravy na obou stranách, odstraň zlomky násobením společným jmenovatelem a neznámou izoluj. Po úpravě ověř, zda ses nedělil nulou.</p>
      <h2>Ekvivalentní úpravy a kontrola</h2>
      <p>Ekvivalentní úprava zachovává množinu řešení. K oběma stranám můžeme přičíst stejné číslo nebo je vynásobit stejným nenulovým číslem. Dělení výrazem s neznámou vyžaduje zvláštní opatrnost: před dělením například x nejprve rozvaž případ x=0, jinak by se mohl ztratit kořen.</p>
      <p>U rovnice 3(x−2)=9 nejprve dělíme 3 a pak přičteme 2: x−2=3, x=5. Zkouška v původní rovnici dává 3·(5−2)=9. Zkoušej až po dosazení do původního zadání, zvlášť pokud ses zbavoval jmenovatelů nebo umocňoval.</p>
      <h2>Rovnice se zlomky a odmocninami</h2>
      <p>U rovnice se zlomky nejprve napiš podmínky, za kterých jsou jmenovatele nenulové. Potom rovnici vynásob nejmenším společným násobkem jmenovatelů, uprav vzniklou rovnici a všechny nalezené hodnoty ověř v původním výrazu. Například u 1/x=2 platí x≠0; řešení x=1/2 podmínku splňuje.</p>
      <p>U odmocnin nejprve urč podmínky a izoluj odmocninu na jedné straně. Po umocnění musí následovat zkouška, protože umocnění není vždy ekvivalentní úprava: z rovnice √x=−2 po umocnění by vyšlo x=4, ale původní rovnice nemá řešení. Levá strana druhé odmocniny je nezáporná.</p>
      <h2>Kvadratická rovnice</h2>
      <div class="formula">ax²+bx+c=0, a≠0 &nbsp; · &nbsp; D=b²−4ac &nbsp; · &nbsp; x₁,₂=(−b±√D)/(2a)</div>
      <p>D&gt;0: dva reálné kořeny; D=0: jeden dvojnásobný; D&lt;0: žádný reálný kořen. Vietovy vztahy: x₁+x₂=−b/a, x₁x₂=c/a.</p>
      <p>Než použiješ vzorec, zkus rovnici upravit na součin nebo vytknout společný činitel; bývá to kratší a snižuje riziko početní chyby. Před dosazením do diskriminantu zapiš a, b, c včetně znamének. Například v x²−5x+6=0 je b=−5, takže D=(−5)²−4·1·6=1.</p>
      <h2>Vzorový příklad: kvadratická rovnice</h2>
      <p>Řeš x²−5x+6=0. Rozklad (x−2)(x−3)=0. Součin je nulový, když je nulový alespoň jeden činitel: <b>x=2 nebo x=3</b>. Zkouška: oba kořeny po dosazení rovnici splní.</p>
      <p>Po rozkladu používáme pravidlo o nulovém součinu: součin je nula právě tehdy, když je nulový alespoň jeden jeho činitel. Proto položíme x−2=0 a x−3=0 a získáme oba kořeny. Zkouška například pro x=2 dává 4−10+6=0. Kořeny jsou zároveň průsečíky grafu paraboly s osou x.</p>
      <h2>Lomené a iracionální rovnice</h2>
      <p>U lomené rovnice nejdřív vyluč nuly jmenovatelů; po odstranění zlomků ověř kořeny v původním zadání. U rovnice s odmocninou izoluj odmocninu, umocni a vždy proveď zkoušku — umocnění může přidat cizí kořen.</p>
      <h2>Procvičení</h2>
      <ol><li>Vyřeš 3(2x−1)=5x+7.</li><li>Vyřeš x²−7x+12=0.</li><li>Vyřeš x²−4=0.</li><li>Vyřeš √(x+1)=3.</li></ol>
      <h2>Výsledky a postupy</h2>
      <ol><li>6x−3=5x+7, tedy <b>x=10</b>.</li><li>(x−3)(x−4)=0, tedy <b>x=3 nebo x=4</b>.</li><li>Rozdíl čtverců (x−2)(x+2)=0, tedy <b>x=±2</b>.</li><li>Podmínka x≥−1; umocníme: x+1=9, tedy <b>x=8</b>. Zkouška: √9=3.</li></ol>
      <h2>Využití v praxi: hledání neznámé hodnoty</h2>
      <p>Rovnicí popíšeš situaci, kde se neznámá cena, délka nebo množství řídí známým vztahem. Například „tři stejné vstupenky a servisní poplatek 7 Kč stojí 52 Kč“ vede na 3x+7=52, tedy x=15 Kč za vstupenku. Zkouška v původním vztahu ověřuje, že model i výsledek dávají smysl.</p>
    `),
    chapter('nerovnice', 'Nerovnice a intervaly', 'Lineární, kvadratické a lomené nerovnice', `
      <h2>Lineární nerovnice</h2>
      <p>Řeší se podobně jako rovnice, ale při násobení nebo dělení záporným číslem se znaménko nerovnosti obrací. Výsledek zapisujeme intervalem nebo množinou.</p>
      <h2>Co znamená řešení nerovnice</h2>
      <p>Řešením obvykle není jedno číslo, ale celý interval čísel, pro který je výrok pravdivý. Zápis x&gt;2 odpovídá intervalu (2;∞); ostrá závorka znamená, že dvojka do řešení nepatří. U x≥2 použijeme [2;∞), protože rovnost je dovolena. Nekonečno se vždy zapisuje s kulatou závorkou.</p>
      <p>Po vyřešení si můžeš vybrat z každého výsledného intervalu zkušební číslo a dosadit je do původní nerovnice. Tím ověříš znaménko, zvlášť u součinu nebo podílu, kde může být řešení na více oddělených částech osy.</p>
      <h2>Kvadratická nerovnice</h2>
      <p>Najdi kořeny příslušného kvadratického trojčlenu a rozděl číselnou osu na intervaly. Parabola je pro a&gt;0 nad osou mimo interval mezi kořeny a pod ní uvnitř; pro a&lt;0 naopak. U ≤ nebo ≥ zahrň kořeny.</p>
      <h2>Znaménková tabulka krok za krokem</h2>
      <p>U lomeného výrazu najdi všechny body, ve kterých je čitatel nulový nebo jmenovatel není definovaný, a seřaď je na číselnou osu. Tyto body rozdělí osu na intervaly, v nichž se znaménko výrazu nemění. V každém intervalu otestuj jedno číslo; nulu čitatele zahrň pouze při neostré nerovnosti, nulu jmenovatele nikdy.</p>
      <p>Například (x−1)/(x+2) má kritické body −2 a 1. V intervalu (−∞;−2) jsou oba činitelé záporné, podíl je kladný. Mezi −2 a 1 mají různá znaménka, podíl je záporný; nad 1 je kladný. Pro ostré „větší než nula“ tedy vyjde (−∞;−2)∪(1;∞).</p>
      <h2>Vzorový příklad: znaménková analýza</h2>
      <p>Řeš (x−1)(x+2)&gt;0. Nulové body jsou −2 a 1. Součin je kladný, když mají oba činitelé stejné znaménko: <b>x∈(−∞;−2)∪(1;∞)</b>. Při ostré nerovnosti krajní body nepatří do řešení.</p>
      <p>Body −2 a 1 nejprve vyznačíme na ose, protože v nich se může změnit znaménko součinu. Vlevo od −2 jsou oba činitelé záporné, jejich součin je kladný. Mezi kořeny mají opačná znaménka a součin je záporný; napravo jsou oba kladné. Protože požadujeme přísně větší hodnotu než nula, kořeny vynecháme.</p>
      <h2>Lomené nerovnice</h2>
      <p>Urči nuly čitatele i jmenovatele. Nula jmenovatele je vždy vyloučena; nula čitatele se zahrnuje jen u neostré nerovnosti. Znaménko zkontroluj v každém vzniklém intervalu.</p>
      <h2>Procvičení</h2>
      <ol><li>Vyřeš 2−3x&lt;8.</li><li>Vyřeš x²−9≤0.</li><li>Vyřeš (x−2)(x+1)≥0.</li><li>Vyřeš (x−1)/(x+2)&gt;0.</li></ol>
      <h2>Výsledky a postupy</h2>
      <ol><li>−3x&lt;6; dělení záporným číslem obrátí znaménko: <b>x&gt;−2</b>.</li><li>Kořeny −3, 3; parabola otevřená nahoru je nekladná mezi kořeny: <b>[−3;3]</b>.</li><li>Kořeny −1, 2; součin nezáporný vně: <b>(−∞;−1]∪[2;∞)</b>.</li><li>Kritické body −2 (pól) a 1 (nula); kladný je podíl na krajních intervalech: <b>(−∞;−2)∪(1;∞)</b>.</li></ol>
      <h2>Využití v praxi: limity a bezpečné rozmezí</h2>
      <p>Nerovnice popisují požadavky typu „nejvýše“, „alespoň“ a „v bezpečném intervalu“. Například rozpočet 500 Kč na sešity po 35 Kč vyjadřuje 35n≤500; protože počet kusů je celé číslo, lze koupit nejvýše 14 sešitů. Intervaly přehledně zachytí přípustné hodnoty.</p>
    `),
    chapter('soustavy', 'Soustavy rovnic a slovní úlohy', 'Dosazovací a sčítací metoda, průsečík přímek', `
      <h2>Dvě lineární rovnice o dvou neznámých</h2>
      <p>Řešením je uspořádaná dvojice splňující obě rovnice. Dosazovací metoda je výhodná, když lze snadno vyjádřit jednu neznámou. Sčítací metoda využije násobky rovnic, kterými jednu neznámou odstraníme.</p>
      <p>Geometricky jde o průsečík dvou přímek: jedna společná dvojice znamená jeden průsečík, žádná řešení rovnoběžné přímky, nekonečně mnoho řešení totožné přímky.</p>
      <h2>Dosazovací a sčítací metoda podrobně</h2>
      <p>Dosazovací metodou z jedné rovnice vyjádři neznámou, například y=7−x, a tento výraz vlož do druhé rovnice. Získáš rovnici s jedinou neznámou; po jejím vyřešení dopočítej druhou souřadnici. Metoda je přehledná, když má některá neznámá koeficient 1 nebo −1.</p>
      <p>Při sčítací metodě uprav rovnice tak, aby u jedné neznámé vznikly opačné koeficienty. Rovnice sečti, tato neznámá se odečte a zůstane jedna rovnice. Když koeficienty opačné nejsou, vynásob jednu nebo obě rovnice vhodným číslem. Násobit musíš všechny členy na obou stranách.</p>
      <h2>Jak poznat počet řešení</h2>
      <p>Po úpravách může vyjít jedno konkrétní řešení, spor typu 0=5 nebo pravdivá rovnost typu 0=0. Spor znamená, že přímky jsou rovnoběžné a nemají průsečík; pravdivá rovnost znamená, že obě rovnice popisují tutéž přímku a řešení je nekonečně mnoho. Při praktické slovní úloze navíc ověř, zda odpověď odpovídá smyslu zadání.</p>
      <h2>Vzorový příklad: sčítací metoda</h2>
      <p>x+y=7, x−y=1. Sečteme rovnice: 2x=8, tedy x=4. Dosadíme do první: 4+y=7, tedy y=3. Řešení je <b>(4;3)</b>; obě rovnice ověříme dosazením.</p>
      <p>Neznámá y má v rovnicích stejné koeficienty s opačnými znaménky, takže se po sečtení vyruší. Získané x=4 dosadíme zpět do jednodušší rovnice a dopočítáme y=3. Ověření obou rovnic: 4+3=7 a 4−3=1. Je důležité zkontrolovat obě, protože výsledek musí splňovat celý systém.</p>
      <h2>Slovní úlohy</h2>
      <p>Označ neznámé, převeď věty na vztahy a zapiš soustavu. Výsledek interpretuj v kontextu a ověř jednotky i podmínky (například počet kusů musí být celé nezáporné číslo).</p>
      <h2>Procvičení</h2>
      <ol><li>Vyřeš x+y=10, x−y=2.</li><li>Vyřeš 2x+y=11, x−y=1.</li><li>Součet dvou čísel je 18, jejich rozdíl 4. Urči čísla.</li><li>2 dospělé a 3 dětské lístky stojí 390 Kč. Dospělý lístek je o 50 Kč dražší. Urči ceny.</li></ol>
      <h2>Výsledky a postupy</h2>
      <ol><li>Sečtením 2x=12, x=6; potom y=4. <b>(6;4)</b>.</li><li>Dosadíme y=x−1 do první rovnice: 2x+x−1=11, tedy x=4 a y=3. <b>(4;3)</b>.</li><li>x+y=18, x−y=4; sečteme 2x=22. Čísla jsou <b>11 a 7</b>.</li><li>Označ dětský lístek d, dospělý d+50. 2(d+50)+3d=390, 5d=290; <b>d=58 Kč, dospělý 108 Kč</b>.</li></ol>
      <h2>Využití v praxi: porovnání tarifů</h2>
      <p>Dvě nabídky lze porovnat soustavou nebo rovnicí. Tarif A stojí 100 Kč paušál a 2 Kč za jednotku; tarif B 40 Kč paušál a 3 Kč za jednotku. Při 60 jednotkách stojí oba 220 Kč: 100+2x=40+3x dává x=60. Pod touto spotřebou je výhodnější B, nad ní A.</p>
    `),
    chapter('funkce', 'Funkce a jejich vlastnosti', 'Definiční obor, obor hodnot, grafy a transformace', `
      <h2>Co je funkce</h2>
      <p>Funkce f přiřazuje každému x z definičního oboru D(f) právě jednu hodnotu y=f(x). Obor hodnot H(f) tvoří všechny skutečně dosažené výstupy. Nulové body splňují f(x)=0; průsečík s osou y je (0;f(0)), pokud 0∈D(f).</p>
      <h2>Definiční obor krok za krokem</h2>
      <p>Definiční obor hledáme z podmínek, které musí splňovat předpis. Ve jmenovateli nesmí být nula, pod sudou odmocninou musí být nezáporné číslo a argument logaritmu musí být kladný. Pokud se vyskytuje více omezení, musí platit současně — výsledkem je jejich průnik.</p>
      <p>Například pro f(x)=√(x−1)/(x−3) potřebujeme x−1≥0, tedy x≥1, a současně x≠3. Proto D(f)=[1;3)∪(3;∞). Zápis samotné podmínky x≥1 by přehlédl zakázanou hodnotu ze jmenovatele.</p>
      <h2>Vlastnosti z předpisu i grafu</h2>
      <ul><li>Sudá: f(−x)=f(x), graf souměrný podle osy y.</li><li>Lichá: f(−x)=−f(x), graf souměrný podle počátku.</li><li>Monotónnost: na intervalu roste nebo klesá; extrém je lokální či globální maximum/minimum.</li><li>Prostá funkce nenabývá stejné hodnoty pro různá x.</li></ul>
      <p>Graf čti zleva doprava: průsečíky s osou x jsou nulové body a průsečík s osou y získáš dosazením x=0. Kde křivka stoupá, funkce roste; kde klesá, klesá. Nejvyšší nebo nejnižší bod v daném úseku je extrém. Vždy rozlišuj, zda se vlastnost posuzuje na celém definičním oboru, nebo pouze na zadaném intervalu.</p>
      <h2>Posuny a změny grafu</h2>
      <div class="formula">f(x)+c: posun svisle &nbsp; · &nbsp; f(x−a): posun doprava o a &nbsp; · &nbsp; −f(x): zrcadlení podle osy x</div>
      <p>Všimni si znaménka uvnitř závorky: f(x−a) posouvá graf doprava, zatímco f(x+a) doleva.</p>
      <h2>Vzorový příklad: definiční obor</h2>
      <p>Pro f(x)=√(x−2)/(x−4) musí platit x−2≥0 a x−4≠0. Spojením podmínek dostaneme <b>D(f)=[2;∞), x≠4</b>. Podmínky z čitatele i jmenovatele platí současně.</p>
      <p>První podmínka dává interval [2;∞), protože odmocnina může být i nulová. Druhá podmínka z něj vyloučí číslo 4. Výsledek proto lze zapsat přehledněji jako [2;4)∪(4;∞). Dosazením libovolného přípustného x do předpisu dostaneme reálnou hodnotu; pro x=4 bychom dělili nulou.</p>
      <h2>Procvičení</h2>
      <ol><li>Urči D(f) pro f(x)=1/(x+3).</li><li>Urči D(f) pro f(x)=√(5−x).</li><li>Najdi nulový bod f(x)=2x−6.</li><li>Je f(x)=x² sudá, lichá, nebo ani jedno?</li></ol>
      <h2>Výsledky a postupy</h2>
      <ol><li>Jmenovatel nesmí být nula: <b>R bez hodnoty −3</b>.</li><li>5−x≥0, tedy <b>(−∞;5]</b>.</li><li>2x−6=0, tedy <b>x=3</b>.</li><li>f(−x)=(−x)²=x²=f(x), funkce je <b>sudá</b>.</li></ol>
      <h2>Využití v praxi: modelování dat</h2>
      <p>Funkce převádí vstup na výstup a popisuje například cenu za spotřebu, vzdálenost v čase nebo převod teplot. Z grafu odečteš hodnotu i trend, z definičního oboru poznáš, kde model platí. Lineární model je jednoduchý, ale pro dlouhou extrapolaci ověř, zda předpoklad konstantní změny odpovídá realitě.</p>
    `),
    chapter('linearni-kvadraticka-funkce', 'Lineární a kvadratická funkce', 'Přímka, parabola, vrchol a průsečíky', `
      <h2>Lineární funkce</h2>
      <div class="formula">y=ax+b &nbsp; · &nbsp; a = směrnice &nbsp; · &nbsp; b = průsečík s osou y</div>
      <p>Pro a&gt;0 funkce roste, pro a&lt;0 klesá; pro a=0 je konstantní. Nulový bod získáš z ax+b=0. Dvě přímky jsou rovnoběžné, mají-li stejnou směrnici.</p>
      <p>Směrnice a určuje změnu y při změně x o jednu jednotku. Je-li a=2, při posunu o 1 doprava se y zvýší o 2; je-li a=−2, sníží se o 2. Člen b určí výchozí hodnotu f(0), tedy místo, kde přímka protne svislou osu. Dva různé body určují přímku: změnu y vyděl změnou x a získáš směrnici.</p>
      <h2>Kvadratická funkce</h2>
      <div class="formula">y=ax²+bx+c &nbsp; · &nbsp; xᵥ=−b/(2a) &nbsp; · &nbsp; yᵥ=f(xᵥ)</div>
      <p>Grafem je parabola. Pro a&gt;0 je otevřená nahoru a vrchol je minimum; pro a&lt;0 dolů a vrchol je maximum. Diskriminant rozhodne o průsečících s osou x.</p>
      <h2>Jak načrtnout parabolu</h2>
      <p>Nejprve urči směr otevření podle znaménka a a vypočítej vrchol. Osa souměrnosti je svislá přímka x=xᵥ. Potom najdi průsečík s osou y (pro x=0 vyjde c) a případné kořeny. Tyto údaje stačí k rozumnému náčrtu; body paraboly leží souměrně po obou stranách osy.</p>
      <p>Vrcholový tvar y=a(x−p)²+q přímo ukazuje vrchol V=(p;q). Pozor na znaménko: výraz (x+3)² znamená posun vrcholu o 3 doleva, takže xová souřadnice vrcholu je −3.</p>
      <h2>Vzorový příklad: vrchol paraboly</h2>
      <p>f(x)=x²−4x+3. Souřadnice vrcholu: xᵥ=−(−4)/2=2, yᵥ=4−8+3=−1. Tedy V=(2;−1). Kořeny: (x−1)(x−3)=0, takže průsečíky s osou x jsou <b>1 a 3</b>.</p>
      <p>Vrchol leží na ose souměrnosti. Nejprve dosadíme koeficienty a=1, b=−4 do xᵥ=−b/(2a), takže xᵥ=2. Pak vypočteme funkční hodnotu f(2)=−1. Kořeny určují průsečíky s osou x a potvrzují, že vrchol leží mezi nimi. Protože a&gt;0, je vrchol nejnižším bodem paraboly.</p>
      <h2>Procvičení</h2>
      <ol><li>Urči směrnici a nulový bod y=−2x+6.</li><li>Najdi průsečík y=3x−1 s osou y.</li><li>Urči vrchol y=x²+6x+5.</li><li>Urči počet reálných kořenů 2x²+2x+3=0.</li></ol>
      <h2>Výsledky a postupy</h2>
      <ol><li>a=−2; −2x+6=0, tedy <b>x=3</b>.</li><li>Pro x=0 je y=−1, průsečík <b>(0;−1)</b>.</li><li>xᵥ=−6/2=−3; yᵥ=9−18+5=−4, tedy <b>V=(−3;−4)</b>.</li><li>D=2²−4·2·3=−20&lt;0, tedy <b>žádné reálné kořeny</b>.</li></ol>
      <h2>Využití v praxi: přímka a trajektorie</h2>
      <p>Lineární funkce modeluje konstantní přírůstek — například cenu za spotřebované jednotky. Kvadratická funkce popisuje parabolickou trajektorii a její vrchol může představovat nejvyšší bod letu. Kořeny udávají průsečíky s terénem; interpretuj je pouze v časovém intervalu, který model skutečně popisuje.</p>
    `),
    chapter('exponencialni-logaritmicke', 'Exponenciální a logaritmické funkce', 'Mocniny, logaritmy, rovnice a podmínky', `
      <h2>Exponenciální funkce</h2>
      <p>f(x)=aˣ, kde a&gt;0 a a≠1. Definiční obor je R, obor hodnot (0;∞), graf prochází bodem (0;1). Pro a&gt;1 roste, pro 0&lt;a&lt;1 klesá.</p>
      <div class="formula">aˣ=aʸ ⇔ x=y &nbsp; (a&gt;0, a≠1)</div>
      <p>Mocnina znamená opakované násobení pouze pro kladný celočíselný exponent; pravidla pro zlomkové a záporné exponenty jsou jejich rozšířením. Při růstu o p procent násobíme hodnotu faktorem 1+p/100, při poklesu faktorem 1−p/100. Opakovaná procentní změna proto vede na mocninu tohoto faktoru, nikoli na opakované přičítání stejné částky.</p>
      <h2>Logaritmus</h2>
      <div class="formula">logₐx=y ⇔ aʸ=x &nbsp; · &nbsp; logₐ(xy)=logₐx+logₐy &nbsp; · &nbsp; logₐ(xⁿ)=n logₐx</div>
      <p>Podmínky: a&gt;0, a≠1, x&gt;0. Logaritmus je inverzní funkce k exponenciále; při řešení logaritmické rovnice proto vždy kontroluj kladnost argumentů.</p>
      <p>Logaritmus odpovídá na otázku „na jakou mocninu musím umocnit základ, abych dostal zadané číslo?“ Například log₂8=3, protože 2³=8. Pro počítání na kalkulačce lze použít změnu základu logₐx=log x/log a. Logaritmus součtu se ale rozdělit nedá: log(a+b) obecně není log a+log b.</p>
      <h2>Řešení exponenciálních rovnic</h2>
      <p>Pokud lze obě strany převést na stejný základ, porovnej exponenty: 2ˣ=8 znamená 2ˣ=2³, tedy x=3. Když stejný základ nenajdeš, izoluj exponenciální člen a použij logaritmus. U exponenciální nerovnice navíc sleduj monotónnost: pro základ větší než 1 se směr nerovnosti zachová, pro 0&lt;a&lt;1 se při porovnávání exponentů obrátí.</p>
      <h2>Vzorový příklad: logaritmická rovnice</h2>
      <p>Řeš log₂(x−1)=3. Podmínka x&gt;1. Přepis do exponenciálního tvaru: x−1=2³=8, tedy <b>x=9</b>. Zkouška: log₂8=3.</p>
      <p>Podmínku x−1&gt;0 stanovíme ještě před úpravou. Definice logaritmu říká, že log₂8=3 právě proto, že 2³=8; stejným způsobem převádíme původní rovnici na x−1=8. Po vyřešení dostaneme x=9, které splňuje podmínku. Zkouška v původní rovnici vrací hodnotu 3.</p>
      <h2>Procvičení</h2>
      <ol><li>Vyřeš 2ˣ=16.</li><li>Vyřeš 3ˣ⁺¹=27.</li><li>Vypočítej log₅(1/25).</li><li>Vyřeš log₃(x+1)=2.</li></ol>
      <h2>Výsledky a postupy</h2>
      <ol><li>16=2⁴, proto <b>x=4</b>.</li><li>27=3³; x+1=3, tedy <b>x=2</b>.</li><li>1/25=5⁻², proto <b>−2</b>.</li><li>Podmínka x&gt;−1; x+1=3²=9, tedy <b>x=8</b>.</li></ol>
      <h2>Využití v praxi: růst a pokles</h2>
      <p>Exponenciální model popisuje opakované procentní změny: růst o 3 % za období násobí hodnotu faktorem 1,03. Podobně se modeluje rozpad či znehodnocení faktorem menším než 1. Logaritmus odpoví na opačnou otázku: za kolik období dosáhne investice nebo populace zadané hodnoty.</p>
    `),
    chapter('goniometrie', 'Goniometrie a trigonometrie', 'Poměry, jednotková kružnice a řešení trojúhelníků', `
      <h2>Sinus, kosinus a tangens</h2>
      <div class="formula">sin α = protilehlá/přepona &nbsp; · &nbsp; cos α = přilehlá/přepona &nbsp; · &nbsp; tg α = sin α/cos α</div>
      <p>V pravoúhlém trojúhelníku jde o poměry stran; na jednotkové kružnici jsou sin a cos souřadnice bodu. Základní vztah: sin²α+cos²α=1. Pozor na režim kalkulačky: stupně (°) a radiány (π rad = 180°).</p>
      <h2>Jednotková kružnice a znaménka</h2>
      <p>Jednotková kružnice má poloměr 1 a střed v počátku soustavy souřadnic. Bod odpovídající úhlu α má souřadnice (cos α; sin α). Díky tomu lze definovat goniometrické funkce i pro úhly větší než 90° a pro záporné úhly. Znaménko sinu a kosinu určuje kvadrant: v prvním jsou obě hodnoty kladné, ve druhém je kladný sinus a záporný kosinus.</p>
      <p>Radián měří úhel pomocí délky oblouku: celý obvod jednotkové kružnice je 2π, tedy 2π radiánů. Převody: 180°=π rad a 90°=π/2 rad. Před použitím kalkulačky si vždy ověř režim úhlů; chybný režim změní výsledek, i když je postup správný.</p>
      <h2>Význačné hodnoty a grafy</h2>
      <p>sin 30°=1/2, cos 30°=√3/2; sin 45°=cos 45°=√2/2; sin 60°=√3/2, cos 60°=1/2. Sinus a kosinus mají periodu 360° (2π); tangens 180° (π).</p>
      <p>Sinus a kosinus nabývají hodnot od −1 do 1 a jejich grafy se opakují po 360°. Tangens je podíl sin/cos, a proto není definován tam, kde cos α=0. Periodicita znamená, že k řešení goniometrické rovnice často patří nekonečně mnoho úhlů; v konkrétním zadání vyber jen ty, které leží v požadovaném intervalu.</p>
      <h2>Sinová a kosinová věta</h2>
      <div class="formula">a/sin α=b/sin β=c/sin γ &nbsp; · &nbsp; c²=a²+b²−2ab cos γ</div>
      <p>Sinovou větu použij při známé straně a protilehlém úhlu. Kosinová věta funguje pro libovolný trojúhelník a pro pravý úhel přechází v Pythagorovu větu.</p>
      <p>U sinové věty musíš znát alespoň jednu dvojici protilehlé strany a úhlu; jinak nelze poměry sestavit. Kosinová věta se hodí, znáš-li dvě strany a úhel mezi nimi, nebo všechny tři strany. Po výpočtu úhlu dopočítej zbývající úhly z faktu, že jejich součet v trojúhelníku je 180°.</p>
      <h2>Vzorový příklad: výška trojúhelníku</h2>
      <p>Pravoúhlý trojúhelník má přeponu 10 a úhel 30°. Protilehlá odvěsna je 10·sin30°=10·1/2=<b>5</b>. Přilehlá odvěsna je 10·cos30°=<b>5√3</b>.</p>
      <p>Nejprve podle zadaného úhlu určíme, která odvěsna je protilehlá a která přilehlá. Sinus spojuje protilehlou odvěsnu s přeponou, kosinus přilehlou odvěsnu s přeponou. Význačné hodnoty sin30°=1/2 a cos30°=√3/2 dosadíme přímo. Výsledek přibližně 8,66 u druhé odvěsny je menší než přepona, jak musí být.</p>
      <h2>Procvičení</h2>
      <ol><li>V pravoúhlém trojúhelníku je přepona 13 a odvěsna 5. Urči druhou odvěsnu.</li><li>Vypočítej sin30°+cos60°.</li><li>Urči přeponu při odvěsnách 6 a 8.</li><li>Vypočítej třetí stranu, jsou-li strany 5 a 7 a sevřený úhel 60°.</li></ol>
      <h2>Výsledky a postupy</h2>
      <ol><li>Pythagorova věta: √(13²−5²)=√144=<b>12</b>.</li><li>1/2+1/2=<b>1</b>.</li><li>√(6²+8²)=√100=<b>10</b>.</li><li>Kosinová věta: c²=25+49−70·1/2=39, tedy <b>c=√39</b>.</li></ol>
      <h2>Využití v praxi: výška bez přímého měření</h2>
      <p>Výšku stožáru lze odhadnout z vodorovné vzdálenosti d a úhlu elevace α: tan α = h/d, tedy h=d·tan α. Při d=20 m a α=35° vychází h≈14 m; připočti výšku měřicího přístroje. Přesnost ovlivňuje sklon terénu i chyba měření úhlu.</p>
    `),
    chapter('posloupnosti', 'Posloupnosti a řady', 'Aritmetická, geometrická a nekonečná geometrická řada', `
      <h2>Aritmetická posloupnost</h2>
      <div class="formula">aₙ=a₁+(n−1)d &nbsp; · &nbsp; sₙ=n(a₁+aₙ)/2</div>
      <p>Rozdíl sousedních členů d je stálý. Pro součet lze párovat první a poslední člen: každý pár má stejný součet.</p>
      <p>Index n označuje pořadí členu, ne jeho hodnotu. Ve vzorci aₙ=a₁+(n−1)d začínáme od a₁, proto počet kroků mezi prvním a n-tým členem je n−1. Tato drobnost bývá častým zdrojem chyby při hledání posledního členu posloupnosti.</p>
      <h2>Geometrická posloupnost</h2>
      <div class="formula">aₙ=a₁qⁿ⁻¹ &nbsp; · &nbsp; sₙ=a₁(qⁿ−1)/(q−1), q≠1</div>
      <p>Poměr sousedních členů q je stálý. Nekonečná geometrická řada má součet jen pro |q|&lt;1: s∞=a₁/(1−q).</p>
      <p>Ověření typu posloupnosti: u aritmetické odečti sousední členy, u geometrické je vyděl. Například 3, 6, 12, 24 má stále stejný poměr 2, není aritmetická. Znaménko q také ovlivní průběh: pro q&lt;0 se členy střídají ve znaménku.</p>
      <h2>Posloupnost zadaná rekurentně</h2>
      <p>Rekurentní zadání určuje člen pomocí předchozího, například a₁=2 a aₙ₊₁=aₙ+3. Vypočítáš tedy postupně a₂=5, a₃=8 a dále. Rekurence dobře popisuje proces krok za krokem, ale pro vzdálený člen může být užitečnější odvodit explicitní vzorec, který aₙ vypočítá přímo.</p>
      <h2>Vzorový příklad: aritmetická posloupnost</h2>
      <p>a₁=3, d=4. Desátý člen: a₁₀=3+9·4=39. Součet prvních deseti: s₁₀=10(3+39)/2=<b>210</b>.</p>
      <p>Od prvního členu k desátému uděláme devět kroků, proto ve vzorci násobíme d číslem 10−1. Pro součet lze spárovat první a poslední člen, druhý a předposlední; každý pár má součet 3+39=42. Pět takových párů dá 5·42=210, což vysvětluje vzorec sₙ=n(a₁+aₙ)/2.</p>
      <h2>Procvičení</h2>
      <ol><li>a₁=5, d=3. Urči a₈.</li><li>Sečti prvních 10 členů posloupnosti 2, 5, 8, …</li><li>a₁=2, q=3. Urči a₅.</li><li>Urči součet nekonečné řady 6+3+1,5+…</li></ol>
      <h2>Výsledky a postupy</h2>
      <ol><li>a₈=5+7·3=<b>26</b>.</li><li>a₁₀=2+9·3=29; s₁₀=10(2+29)/2=<b>155</b>.</li><li>a₅=2·3⁴=<b>162</b>.</li><li>q=1/2; |q|&lt;1, s∞=6/(1−1/2)=<b>12</b>.</li></ol>
      <h2>Využití v praxi: pravidelné spoření</h2>
      <p>Aritmetická posloupnost vystihuje plán, kdy každý měsíc přidáš ke spoření stejnou částku navíc; součet členů dá celkový vklad. Geometrická posloupnost modeluje zhodnocení pevnou procentní sazbou. Rozlišuj samotný vklad od hodnoty účtu po úročení.</p>
    `),
    chapter('planimetrie', 'Planimetrie', 'Rovinné útvary, podobnost, Pythagorova věta a kružnice', `
      <h2>Trojúhelníky a čtyřúhelníky</h2>
      <div class="formula">S△=a·vₐ/2 &nbsp; · &nbsp; S obdélníku=ab &nbsp; · &nbsp; S lichoběžníku=(a+c)v/2</div>
      <p>Pythagorova věta c²=a²+b² platí v pravoúhlém trojúhelníku. Obsah trojúhelníku je polovina součinu strany a příslušné výšky. U podobných útvarů se délky násobí k, obvody k a obsahy k².</p>
      <h2>Podobnost a Pythagorova věta</h2>
      <p>Podobné útvary mají shodné odpovídající úhly a poměr všech odpovídajících délek je stejný. Znáš-li koeficient podobnosti k, obvod se změní k-krát a obsah k²-krát. Při zvětšení délek třikrát se tedy obsah zvětší devětkrát. Před výpočtem si označ, které strany si odpovídají.</p>
      <p>Pythagorova věta platí pouze pro pravoúhlý trojúhelník; c označuje přeponu naproti pravému úhlu. Lze ji použít i opačně: jestliže pro nejdelší stranu platí c²=a²+b², je trojúhelník pravoúhlý. Při výpočtu délky dopočítej odmocninu až po umocnění obou odvěsen.</p>
      <h2>Kruh a kružnice</h2>
      <div class="formula">o=2πr &nbsp; · &nbsp; S=πr² &nbsp; · &nbsp; délka oblouku l=(α/360°)·2πr</div>
      <p>Kružnice je obvodová čára, kruh zahrnuje i plochu uvnitř. U výseče se stejným podílem z celého úhlu dělí obvod kruhu i jeho obsah.</p>
      <p>Je-li znám průměr d, poloměr je r=d/2. Délka kružnice závisí na první mocnině poloměru, obsah na jeho druhé mocnině. Výseč s úhlem 90° tvoří čtvrtinu kruhu, takže její obsah je πr²/4. Ve výsledku ponech π přesně, pokud zadání nepožaduje desetinné zaokrouhlení.</p>
      <h2>Vzorový příklad: obsah trojúhelníku</h2>
      <p>Trojúhelník má základnu 12 cm a výšku 7 cm. S=12·7/2=<b>42 cm²</b>. Výška musí být kolmá na zvolenou základnu.</p>
      <p>Obsah trojúhelníku je polovina obsahu rovnoběžníku se stejnou základnou a výškou: takový rovnoběžník lze rozdělit úhlopříčkou na dva shodné trojúhelníky. Proto násobíme základnu kolmou výškou a výsledek dělíme dvěma. Jednotka je cm², protože násobíme dvě délky.</p>
      <h2>Procvičení</h2>
      <ol><li>Obdélník má strany 8 cm a 5 cm. Urči obvod a obsah.</li><li>Pravoúhlý trojúhelník má odvěsny 9 a 12. Urči přeponu.</li><li>Kruh má poloměr 4 cm. Urči obsah.</li><li>Podobné trojúhelníky mají poměr délek 2:3. Menší obsah je 20 cm². Urči větší obsah.</li></ol>
      <h2>Výsledky a postupy</h2>
      <ol><li>o=2(8+5)=<b>26 cm</b>; S=8·5=<b>40 cm²</b>.</li><li>c=√(9²+12²)=√225=<b>15</b>.</li><li>S=π·4²=<b>16π cm²</b> ≈ 50,27 cm².</li><li>Poměr obsahů je 2²:3²=4:9; větší S=20·9/4=<b>45 cm²</b>.</li></ol>
      <h2>Využití v praxi: materiál na podlahu</h2>
      <p>Obsah místnosti pomůže odhadnout počet dlaždic nebo množství barvy. Místnost 4×5 m má 20 m²; při rezervě 10 % objednej 22 m² krytiny. U nepravidelného půdorysu plochu rozděl na jednoduché útvary a jejich obsahy sečti.</p>
    `),
    chapter('stereometrie', 'Stereometrie', 'Tělesa, povrchy, objemy a prostorová představivost', `
      <h2>Hranoly a válec</h2>
      <div class="formula">V hranolu=Sₚ·v &nbsp; · &nbsp; V válce=πr²v &nbsp; · &nbsp; S válce=2πr(r+v)</div>
      <p>Sₚ označuje obsah podstavy a v výšku tělesa. Objem měří prostor (jednotky³), povrch součet ploch (jednotky²).</p>
      <p>Hranol má dvě shodné rovnoběžné podstavy a objem vznikne násobením jejich obsahu výškou. Válec je kruhový hranol; jeho plášť po rozvinutí tvoří obdélník o stranách obvod podstavy 2πr a výška v. Proto celkový povrch obsahuje dvě kruhové podstavy i plášť.</p>
      <h2>Jehlan, kužel a koule</h2>
      <div class="formula">V jehlanu=Sₚv/3 &nbsp; · &nbsp; V kužele=πr²v/3 &nbsp; · &nbsp; V koule=4πr³/3</div>
      <div class="formula">S koule=4πr² &nbsp; · &nbsp; S kužele=πr(r+s), kde s²=r²+v²</div>
      <p>U kužele nezaměň výšku v a stranu s. Strana, výška a poloměr tvoří pravoúhlý trojúhelník.</p>
      <p>Koeficient 1/3 u jehlanu a kužele znamená, že mají třetinový objem oproti hranolu nebo válci se stejnou podstavou a výškou. Svislá výška je kolmá vzdálenost podstavy od vrcholu; u šikmého kužele se nesmí zaměnit se stranou pláště. Při povrchu kužele používáme šikmou stranu, při objemu svislou výšku.</p>
      <h2>Jednotky a rozklad složitějšího tělesa</h2>
      <p>Před dosazováním sjednoť jednotky všech rozměrů. Například 20 cm a 0,5 m nejprve převeď na stejnou jednotku; jinak výpočet objemu nedává smysl. Složitější těleso rozděl na známé tvary a jejich objemy sečti, případně od objemu celku odečti vyříznutou část. Povrch počítej jen z ploch, které jsou skutečně viditelné.</p>
      <h2>Vzorový příklad: objem válce</h2>
      <p>Válec s r=3 cm a v=10 cm: V=π·3²·10=<b>90π cm³</b> ≈ 282,74 cm³. Jednotka objemu je krychlová.</p>
      <p>Každý vodorovný řez válcem je stejný kruh o obsahu πr². Válcovou nádobu si proto můžeme představit jako tento obsah opakovaný po celé výšce; násobíme πr²·v. Nejdříve umocníme poloměr, až potom násobíme výškou. Jednotka cm² z podstavy krát cm výšky dává cm³.</p>
      <h2>Procvičení</h2>
      <ol><li>Krychle má hranu 4 cm. Urči objem a povrch.</li><li>Válec má r=2 cm a v=5 cm. Urči objem.</li><li>Koule má r=3 cm. Urči povrch.</li><li>Kužel má r=3 cm, v=4 cm. Urči stranu s a objem.</li></ol>
      <h2>Výsledky a postupy</h2>
      <ol><li>V=4³=<b>64 cm³</b>; S=6·4²=<b>96 cm²</b>.</li><li>V=π·2²·5=<b>20π cm³</b>.</li><li>S=4π·3²=<b>36π cm²</b>.</li><li>s=√(3²+4²)=<b>5 cm</b>; V=π·9·4/3=<b>12π cm³</b>.</li></ol>
      <h2>Využití v praxi: kapacita nádoby</h2>
      <p>Válcová nádrž s poloměrem 0,5 m a výškou 2 m má objem π·0,5²·2≈1,57 m³, tedy přibližně 1 570 litrů. Při objednávce materiálu na plášť použij povrch, při odhadu obsahu nádrže objem. Nezapomeň převést jednotky.</p>
    `),
    chapter('analyticka', 'Analytická geometrie', 'Souřadnice, vzdálenost, vektory, přímky a kružnice', `
      <h2>Body, vzdálenost a střed úsečky</h2>
      <div class="formula">|AB|=√((x₂−x₁)²+(y₂−y₁)²) &nbsp; · &nbsp; S=((x₁+x₂)/2;(y₁+y₂)/2)</div>
      <p>Vzdálenost bodů získáš z rozdílů jejich souřadnic pomocí Pythagorovy věty. Střed úsečky vypočítáš jako průměr souřadnic krajních bodů zvlášť pro x a y. Znaménka souřadnic zachovej při dosazování do závorek; druhá mocnina pak odstraní znaménko rozdílu.</p>
      <h2>Vektory a skalární součin</h2>
      <div class="formula">AB=(x₂−x₁;y₂−y₁) &nbsp; · &nbsp; |u|=√(u₁²+u₂²) &nbsp; · &nbsp; u·v=u₁v₁+u₂v₂</div>
      <p>Vektory jsou kolmé, právě když u·v=0. Skalární součin zároveň platí u·v=|u||v|cos φ.</p>
      <p>Vektor popisuje velikost i směr posunutí. Jeho souřadnice jsou rozdílem koncového a počátečního bodu. Délka vektoru vychází z Pythagorovy věty a skalární součin umožní zjistit úhel mezi vektory. Je-li součin kladný, úhel je ostrý; při záporném součinu je tupý; nulový součin značí kolmost.</p>
      <h2>Přímka a kružnice</h2>
      <p>Obecná rovnice přímky ax+by+c=0 má normálový vektor n=(a;b). Směrnicový tvar y=kx+q udává směrnici k. Kružnice se středem S=(m;n) a poloměrem r: (x−m)²+(y−n)²=r².</p>
      <p>Dvě přímky se protínají v bodě, který splňuje obě rovnice; jejich průsečík tedy najdeš řešením soustavy. Pro úhel mezi přímkami lze použít jejich směrové vektory. Rovnice kružnice v základním tvaru přímo odhalí střed a poloměr; obecný tvar převedeme doplněním na čtverec.</p>
      <h2>Vzorový příklad: vzdálenost bodů</h2>
      <p>A=(1;2), B=(4;6). Rozdíly souřadnic jsou 3 a 4; |AB|=√(3²+4²)=<b>5</b>. Výpočet odpovídá přeponě pravoúhlého trojúhelníku.</p>
      <p>Rozdíl xových souřadnic udává vodorovný posun 3 a rozdíl yových souřadnic svislý posun 4. Tyto posuny jsou odvěsny pravoúhlého trojúhelníku, jehož přeponou je hledaná úsečka AB. Pythagorova věta dává √(9+16)=√25=5. Vzdálenost je vždy nezáporná.</p>
      <h2>Procvičení</h2>
      <ol><li>Urči vzdálenost A=(0;0), B=(6;8).</li><li>Urči střed úsečky s krajními body (−2;4) a (6;0).</li><li>Jsou vektory (2;3) a (3;−2) kolmé?</li><li>Urči střed a poloměr kružnice x²+y²−4x+6y−12=0.</li></ol>
      <h2>Výsledky a postupy</h2>
      <ol><li>√(6²+8²)=<b>10</b>.</li><li>((−2+6)/2;(4+0)/2)=<b>(2;2)</b>.</li><li>Skalární součin 2·3+3·(−2)=0, tedy <b>ano</b>.</li><li>Doplníme na čtverce: (x−2)²+(y+3)²=25; <b>S=(2;−3), r=5</b>.</li></ol>
      <h2>Využití v praxi: poloha a trasa</h2>
      <p>Souřadnice umožňují určit vzdálenost dvou bodů v mapě nebo ověřit, zda se dvě trasy protínají. Při převodu GPS nebo plánových souřadnic na vzdálenost použij odpovídající měřítko; výpočet v rovině je přesný jen tehdy, když lze zakřivení povrchu zanedbat.</p>
    `),
    chapter('kombinatorika', 'Kombinatorika', 'Faktoriál, permutace, variace a kombinace', `
      <h2>Rozhodovací otázky</h2>
      <p>Při počítání možností se ptej: vybírám všechny prvky, nebo jen k z n? Záleží na pořadí? Mohou se prvky opakovat? Součinové pravidlo násobí počty kroků; součtové pravidlo sčítá navzájem se vylučující možnosti.</p>
      <div class="formula">n!=1·2·…·n &nbsp; · &nbsp; Pₙ=n! &nbsp; · &nbsp; V(n,k)=n!/(n−k)! &nbsp; · &nbsp; C(n,k)=n!/[k!(n−k)!]</div>
      <p>Permutace řadí všech n prvků; variace vybírá k a pořadí je důležité; kombinace vybírá k bez ohledu na pořadí. S opakováním se počet možností mění.</p>
      <h2>Jak vybrat správný vzorec</h2>
      <p>Nejdřív si ujasni, co tvoří jeden výsledek. Pokud záleží na pořadí všech n různých prvků, počítej n!. Pokud vybíráš k prvků a jejich pořadí je důležité, jde o variace; pokud pořadí důležité není, jde o kombinace. Následně zjisti, zda se smí prvky opakovat, protože to mění počet možností.</p>
      <p>Rozdíl mezi kombinací a variací ukáže volba dvojice ze tří osob: tým {A,B} je stejný jako {B,A}, takže počítáme kombinaci. U prvního a druhého místa v soutěži jsou (A,B) a (B,A) různé výsledky, proto počítáme variaci.</p>
      <h2>Počítání s opakováním</h2>
      <p>Jestliže je na každé z k pozic možné nezávisle zvolit jeden z n symbolů a opakování je povoleno, existuje nᵏ možností. Čtyřmístný kód z číslic má tedy 10⁴ možností. Je-li opakování zakázáno, počet možností se s každou obsazenou pozicí zmenšuje: n(n−1)…(n−k+1).</p>
      <h2>Vzorový příklad: výběr komise</h2>
      <p>Z 8 žáků volíme tříčlennou komisi, pořadí nehraje roli: C(8,3)=8!/(3!5!)=(8·7·6)/(3·2·1)=<b>56 možností</b>.</p>
      <p>Pořadí vybraných tří žáků v komisi není důležité, proto jde o kombinace, ne variace. Ve vzorci C(8,3) se faktor 3! postará o to, abychom stejnou trojici nezapočítali šestkrát v různém pořadí. Po zkrácení faktoriálů stačí vynásobit 8·7·6 a vydělit 3·2·1.</p>
      <h2>Procvičení</h2>
      <ol><li>Kolika způsoby lze seřadit 5 různých knih?</li><li>Kolik dvouciferných čísel lze vytvořit z číslic 1,2,3 bez opakování?</li><li>Kolika způsoby vybereme 2 osoby ze 6?</li><li>Kolik různých pořadí má slovo MAMA?</li></ol>
      <h2>Výsledky a postupy</h2>
      <ol><li>Permutace pěti prvků: 5!=<b>120</b>.</li><li>Variace V(3,2)=3·2=<b>6</b>.</li><li>Kombinace C(6,2)=6·5/2=<b>15</b>.</li><li>Čtyři znaky, dva páry stejných: 4!/(2!2!)=<b>6</b>.</li></ol>
      <h2>Využití v praxi: možnosti a kapacita</h2>
      <p>Kombinatorika spočítá počet různých rozvrhů, týmů nebo kódů. Čtyřmístný PIN má při povoleném opakování 10⁴=10 000 možností; bez opakování jich je 10·9·8·7=5 040. Počet variant pomáhá odhadnout kapacitu systému i to, jak rychle lze možností procházet.</p>
    `),
    chapter('pravdepodobnost', 'Pravděpodobnost', 'Náhodné jevy, doplněk, sjednocení a podmíněná pravděpodobnost', `
      <h2>Klasická pravděpodobnost</h2>
      <div class="formula">P(A)=počet příznivých výsledků/počet všech stejně možných výsledků</div>
      <p>Platí 0≤P(A)≤1. Doplněk jevu: P(Ā)=1−P(A). U součtu jevů platí P(A∪B)=P(A)+P(B)−P(A∩B); průnik odečteme, protože jinak by se započítal dvakrát.</p>
      <p>Klasický vzorec lze použít jen tehdy, když jsou všechny elementární výsledky stejně pravděpodobné. U férové kostky má každý výsledek pravděpodobnost 1/6; u výběru karet je užitečné nejprve určit celkový počet stejně možných karet. Pravděpodobnost vyjadřuj jako zlomek, desetinné číslo nebo procento, ale vždy zachovej přesný význam.</p>
      <h2>Nezávislé a podmíněné jevy</h2>
      <div class="formula">P(A∩B)=P(A)P(B) pro nezávislé jevy &nbsp; · &nbsp; P(A|B)=P(A∩B)/P(B)</div>
      <p>Výběr bez vracení mění pravděpodobnost dalších tahů. Stromový diagram pomáhá násobit pravděpodobnosti podél cesty a sčítat různé cesty vedoucí k témuž výsledku.</p>
      <h2>Nezávislost není totéž co neslučitelnost</h2>
      <p>Dva jevy jsou nezávislé, když výsledek jednoho nezmění pravděpodobnost druhého; tehdy můžeme násobit jejich pravděpodobnosti. Neslučitelné jevy nemohou nastat současně, takže jejich průnik je prázdný a pravděpodobnosti při sjednocení sčítáme. Například při jednom hodu kostkou jsou „padne 1“ a „padne 6“ neslučitelné, ale nikoli nezávislé.</p>
      <p>U výběru bez vracení se mění jmenovatel i počet příznivých výsledků v dalším tahu. Při výběru s vracením se situace po každém tahu obnoví. Do stromového diagramu piš pravděpodobnosti k jednotlivým větvím; násobení po cestě a sčítání různých cest platí jen pro správně sestavený model.</p>
      <h2>Vzorový příklad: alespoň jedna šestka</h2>
      <p>Při dvou hodech kostkou hledáme alespoň jednu šestku. Je jednodušší spočítat doplněk: žádná šestka má pravděpodobnost (5/6)²=25/36. Proto P=1−25/36=<b>11/36</b>.</p>
      <p>„Alespoň jedna“ zahrnuje jednu i dvě šestky. Přímým počítáním bychom museli rozlišit dvě možnosti; doplněk je jednodušší. Při prvním i druhém hodu nesmí padnout šestka, pravděpodobnost obou nezávislých událostí je (5/6)·(5/6). Od jedné odečteme pravděpodobnost, že šestka nepadne ani jednou.</p>
      <h2>Procvičení</h2>
      <ol><li>Jaká je pravděpodobnost sudého čísla při hodu kostkou?</li><li>V sáčku jsou 3 červené a 2 modré kuličky. Pravděpodobnost červené?</li><li>Hodíme dvakrát mincí. Pravděpodobnost dvou znaků?</li><li>Z balíčku 10 karet, z toho 4 esa, taháme jednu kartu. Pravděpodobnost, že to není eso?</li></ol>
      <h2>Výsledky a postupy</h2>
      <ol><li>Sudé jsou 2,4,6: 3/6=<b>1/2</b>.</li><li>3 příznivé z 5: <b>3/5</b>.</li><li>Nezávislé hody: 1/2·1/2=<b>1/4</b>.</li><li>Ne-es jsou 6 z 10: <b>3/5</b>.</li></ol>
      <h2>Využití v praxi: kontrola kvality</h2>
      <p>Pravděpodobnost odhaduje četnost jevů v dlouhé řadě opakování. Pokud je vadných přibližně 2 % výrobků, v náhodném vzorku 100 kusů očekáváme kolem dvou vadných, nikoli však přesně dva. Pro důležitá rozhodnutí zohledni velikost vzorku a nejistotu odhadu.</p>
    `),
    chapter('statistika', 'Statistika a data', 'Průměr, medián, modus, četnost a rozptyl', `
      <h2>Četnosti a grafy</h2>
      <p>Statistický soubor tvoří hodnoty sledovaného znaku. Absolutní četnost udává počet výskytů, relativní četnost jejich podíl na celku. Součet relativních četností je 1 (nebo 100 %). Výsledky zobrazuj tabulkou, sloupcovým grafem, histogramem či kruhovým diagramem podle typu dat.</p>
      <p>Nejprve si ověř, koho nebo co soubor popisuje, kolik pozorování obsahuje a jak byly hodnoty získány. Sloupcový diagram se hodí pro oddělené kategorie, histogram pro číselná data rozdělená do intervalů. Osa grafu musí mít popsanou veličinu i jednotku; zkrácená osa může malé rozdíly opticky nadsadit.</p>
      <h2>Střední hodnoty</h2>
      <div class="formula">aritmetický průměr x̄=(x₁+…+xₙ)/n &nbsp; · &nbsp; vážený průměr=Σ(wᵢxᵢ)/Σwᵢ</div>
      <p>Medián je prostřední hodnota po seřazení (u sudého počtu průměr dvou prostředních); modus je nejčastější hodnota. Extrémní hodnoty výrazně mění průměr, medián bývá vůči nim odolnější.</p>
      <p>Průměr využívá každou hodnotu, proto reaguje na odlehlé údaje. Medián rozdělí seřazený soubor na dvě poloviny a lépe vystihuje typickou hodnotu při výrazných extrémech. Modus lze určit i u kategorií, například nejčastější barvu. Při výběru ukazatele se ptej, jaké vlastnosti dat chceš popsat.</p>
      <h2>Rozptyl a směrodatná odchylka</h2>
      <div class="formula">σ²=Σ(xᵢ−x̄)²/n &nbsp; · &nbsp; σ=√σ²</div>
      <p>Rozptyl vyjadřuje průměr čtvercových odchylek od průměru; směrodatná odchylka je ve stejných jednotkách jako původní data.</p>
      <p>Nejprve od každé hodnoty odečti průměr, odchylku umocni, výsledky sečti a vyděl počtem pozorování. Umocnění zabrání vyrušení kladných a záporných odchylek; odmocnění na konci vrátí směrodatnou odchylku do původních jednotek. Malá odchylka znamená, že se hodnoty drží blízko průměru, velká značí rozptýlenější soubor.</p>
      <h2>Vzorový příklad: medián a průměr</h2>
      <p>Data 2, 4, 4, 10. Průměr=(2+4+4+10)/4=5. Seřazené prostřední hodnoty jsou 4 a 4, medián=4; modus=4. Velká hodnota 10 zvyšuje průměr oproti mediánu.</p>
      <p>Průměr získáme součtem všech čtyř hodnot a dělením počtem pozorování. Pro medián nejprve data seřadíme; protože počet hodnot je sudý, zprůměrujeme dvě prostřední, která jsou obě 4. Modus je hodnota s nejvyšší četností. Číslo 10 zvyšuje průměr, ale medián se jeho velikostí výrazně ovlivnit nenechá.</p>
      <h2>Procvičení</h2>
      <ol><li>Urči průměr a medián dat 1, 3, 5.</li><li>Urči modus dat 2, 2, 3, 5, 5, 5.</li><li>Známky 1,2,3 mají četnosti 2,3,1. Urči průměr.</li><li>Urči rozpětí souboru 4, 7, 9, 12.</li></ol>
      <h2>Výsledky a postupy</h2>
      <ol><li>Průměr=9/3=<b>3</b>; prostřední hodnota je <b>3</b>.</li><li>Nejčastější hodnota je <b>5</b>.</li><li>Vážený průměr=(1·2+2·3+3·1)/6=11/6≈<b>1,83</b>.</li><li>Rozpětí=max−min=12−4=<b>8</b>.</li></ol>
      <h2>Využití v praxi: interpretace měření</h2>
      <p>Ve výrobě porovnáš průměr rozměrů s cílovou hodnotou a směrodatnou odchylku s povoleným rozptylem. Medián se hodí, pokud soubor obsahuje ojedinělou extrémní chybu měření. Vždy uveď počet pozorování a jednotky; samotný průměr bez kontextu může skrýt problém.</p>
    `),
    chapter('komplexni', 'Komplexní čísla', 'Algebraický tvar, komplexní rovina a Moivreova věta', `
      <h2>Algebraický tvar</h2>
      <div class="formula">z=a+bi &nbsp; · &nbsp; i²=−1 &nbsp; · &nbsp; |z|=√(a²+b²) &nbsp; · &nbsp; z̄=a−bi</div>
      <p>Reálnou částí je a, imaginární b. Číslo lze zobrazit bodem (a;b) v komplexní rovině. Sčítáme po složkách; při násobení roznásobíme a použijeme i²=−1.</p>
      <p>Imaginární jednotka i je definována vztahem i²=−1. Komplexní číslo a+bi proto můžeme sčítat a násobit podobně jako mnohočlen, jen při každém výskytu i² dosadíme −1. Čísla jsou stejná právě tehdy, když se shodují jejich reálné i imaginární části.</p>
      <h2>Dělení a goniometrický tvar</h2>
      <p>Při dělení rozšiř zlomek komplexně sdruženým číslem jmenovatele, aby jmenovatel byl reálný. Goniometrický tvar z=r(cosφ+i sinφ), kde r=|z|, usnadňuje mocnění a odmocňování.</p>
      <div class="formula">Moivre: zⁿ=rⁿ(cos nφ+i sin nφ)</div>
      <p>Komplexně sdružené číslo a−bi změní znaménko imaginární části; součin (a+bi)(a−bi)=a²+b² je reálný. Při dělení proto rozšiř čitatele i jmenovatele sdruženým číslem jmenovatele. V goniometrickém tvaru je r vzdálenost bodu od počátku a φ jeho úhel s kladnou reálnou osou; kvadrant určuje správné znaménko úhlu.</p>
      <h2>Geometrický význam operací</h2>
      <p>V komplexní rovině odpovídá sčítání vektorovému skládání. Násobení komplexním číslem mění délku faktorem jeho modulu a zároveň otáčí o jeho argument. To vysvětluje, proč je goniometrický tvar výhodný při umocňování: podle Moivrovy věty umocníme modul a argument vynásobíme exponentem.</p>
      <h2>Vzorový příklad: násobení</h2>
      <p>(2+3i)(1−i)=2−2i+3i−3i². Protože i²=−1, výsledek je <b>5+i</b>. Modulus původního čísla 2+3i je √(2²+3²)=√13.</p>
      <p>Rozevřeme závorky stejně jako u dvojčlenů a členy s i sečteme: −2i+3i=i. Poslední člen je −3i²; dosazením i²=−1 se změní na +3. Reálná část je tedy 2+3=5. Modulus je vzdálenost bodu (2;3) od počátku, proto použijeme Pythagorovu větu.</p>
      <h2>Procvičení</h2>
      <ol><li>Vypočítej (3+2i)+(1−5i).</li><li>Vypočítej (1+i)².</li><li>Urči |−3+4i|.</li><li>Vypočítej (4+2i)/(1−i).</li></ol>
      <h2>Výsledky a postupy</h2>
      <ol><li>Sečteme reálné a imaginární části: <b>4−3i</b>.</li><li>1+2i+i²=1+2i−1=<b>2i</b>.</li><li>√(9+16)=<b>5</b>.</li><li>Rozšíříme (1+i): (4+2i)(1+i)/2=(2+6i)/2=<b>1+3i</b>.</li></ol>
      <h2>Využití v praxi: střídavé obvody</h2>
      <p>Ve střídavých elektrických obvodech lze komplexním číslem popsat amplitudu a fázový posun napětí či proudu. Reálná a imaginární složka oddělují soufázovou a posunutou část. Výpočty s impedancí pak používají stejnou aritmetiku komplexních čísel jako tato kapitola.</p>
    `),
    chapter('financni', 'Finanční matematika', 'Procenta, jednoduché a složené úročení, růst a pokles', `
      <h2>Procenta a procentní změna</h2>
      <div class="formula">část = základ · p/100 &nbsp; · &nbsp; nový základ při růstu = původní · (1+p/100)</div>
      <p>Po sobě jdoucí procentní změny se násobí koeficienty. Růst o 10 % a následný pokles o 10 % se nevrátí na původní částku.</p>
      <p>Koeficient 1,08 představuje 100 % původní hodnoty plus 8 % navíc; koeficient 0,8 znamená, že po slevě zůstalo 80 %. Při opačné otázce, kdy znáš cenu po slevě a hledáš původní cenu, děl hodnotu koeficientem slevy. Slevu 20 % tedy vracíme dělením 0,8, nikoli přičtením 20 % ke zlevněné ceně.</p>
      <h2>Vícenásobná změna a inflace</h2>
      <p>Pro několik období růstu použij opakovaně stejný koeficient: po n obdobích je hodnota K₀(1+p)ⁿ. Při různé změně v jednotlivých obdobích se koeficienty násobí. Inflace zvyšuje nominální ceny; reálnou kupní sílu porovnávej po přepočtu o cenovou hladinu, ne jen podle počtu korun.</p>
      <h2>Jednoduché a složené úročení</h2>
      <div class="formula">jednoduché: K=K₀(1+in) &nbsp; · &nbsp; složené: K=K₀(1+i)ⁿ</div>
      <p>K₀ je počáteční vklad, i úroková sazba v desetinném tvaru a n počet období. Například 5 % zapisujeme i=0,05. Při pravidelném připisování úroku se další úrok počítá i z dřívějších úroků.</p>
      <p>U jednoduchého úročení se úrok v každém období počítá pouze z původního vkladu; u složeného se připisuje k jistině a v dalším období se úročí i on. Sazba a počet období musí používat stejnou časovou jednotku: roční sazbu nelze bez úpravy dosadit za měsíční počet období.</p>
      <h2>Vzorový příklad: složený úrok</h2>
      <p>10 000 Kč na 3 roky při 5 % ročně: K=10 000·1,05³=11 576,25 Kč. Po zaokrouhlení na celé koruny má klient <b>11 576 Kč</b>; úrok je 1 576 Kč.</p>
      <p>Sazbu 5 % nejprve převedeme na desetinné číslo 0,05; růstový koeficient je 1+0,05=1,05. Po každém roce se zůstatek násobí tímto koeficientem, proto po třech letech používáme třetí mocninu. Celkový úrok spočteme odečtením počátečního vkladu od konečné částky. Skutečné finanční produkty mohou výsledek měnit poplatky, daně a četnost připisování úroků.</p>
      <h2>Procvičení</h2>
      <ol><li>Kolik je 15 % z 800 Kč?</li><li>Cena 2 000 Kč vzroste o 8 %. Urči novou cenu.</li><li>Vklad 5 000 Kč se úročí 4 % složeně po dobu 2 let. Urči konečnou částku.</li><li>Výrobek po slevě 20 % stojí 1 200 Kč. Jaká byla původní cena?</li></ol>
      <h2>Výsledky a postupy</h2>
      <ol><li>800·0,15=<b>120 Kč</b>.</li><li>2 000·1,08=<b>2 160 Kč</b>.</li><li>5 000·1,04²=<b>5 408 Kč</b>.</li><li>1 200 je 80 % původní ceny; 1 200/0,8=<b>1 500 Kč</b>.</li></ol>
      <h2>Využití v praxi: porovnání nabídek</h2>
      <p>Při porovnání spořicích účtů převeď sazbu na desetinné číslo, ověř dobu připisování úroku a poplatky. Složený úrok může po letech vytvořit výrazný rozdíl, ale čistý výsledek ovlivní také zdanění, inflace a podmínky produktu. Matematický model je podklad pro rozhodnutí, ne náhrada kontroly smlouvy.</p>
    `)
  ]
};
