/* Chapter-specific explanations for Teorie HW a SW. */
export default {
  "architektura": {
    "title": "Tok instrukcí a Von Neumannovo úzké hrdlo",
    "html": "<p>Procesor načítá instrukce, dekóduje je a provádí; data a instrukce se přenášejí mezi procesorem a pamětí. Ve Von Neumannově modelu sdílejí společnou paměťovou cestu, což může omezit souběžné načítání. Harvardova architektura odděluje paměť programu a dat.</p><p>Model je zjednodušený, ale pomáhá vysvětlit roli řadiče, ALU, registrů a paměti. Moderní procesory přidávají cache, pipeline a další optimalizace.</p>"
  },
  "cpu": {
    "title": "Výkon procesoru nelze popsat jediným číslem",
    "html": "<p>Taktovací frekvence udává počet cyklů za sekundu, nikoli přímo počet dokončených programových úloh. Výkon závisí také na architektuře, počtu jader, instrukční sadě, cache, propustnosti paměti a typu zátěže.</p><p>Více jader pomůže úlohám, které lze rozdělit; jednovláknový program z nich nemusí těžit. TDP souvisí s návrhem chlazení a spotřebou za určité zátěže, není to přesný údaj o okamžité spotřebě.</p>"
  },
  "pameti": {
    "title": "Hierarchie pamětí a kompromis mezi rychlostí a kapacitou",
    "html": "<p>Registry a cache jsou blízko procesoru a velmi rychlé, ale mají malou kapacitu. RAM nabízí více pracovního prostoru, avšak po vypnutí ztrácí obsah. SSD a HDD uchovávají data trvale; SSD nemá pohyblivé části, zatímco HDD ukládá data magneticky na rotující plotny.</p><p>Častý přístup k datům z cache snižuje čekání procesoru. Pokud se pracovní data nevejdou do RAM, systém může využít stránkování na úložišti, které je výrazně pomalejší.</p>"
  },
  "zakladni-deska": {
    "title": "Kompatibilita komponent a role sběrnic",
    "html": "<p>Základní deska propojuje procesor, paměť, úložiště a rozšiřující zařízení. Při sestavení počítače musí odpovídat patice procesoru, podporovaný typ RAM, formát desky i napájení. M.2 popisuje formát konektoru, zatímco NVMe a SATA jsou odlišné způsoby komunikace s úložištěm.</p><p>PCI Express používá linky s různou šířkou a generací. Skutečná rychlost závisí na schopnostech obou zařízení i na tom, jak jsou linky na desce přiděleny.</p>"
  },
  "periferie": {
    "title": "Vstup, výstup a volba periferie",
    "html": "<p>Vstupní zařízení převádí činnost nebo signál uživatele do podoby zpracovatelné počítačem; výstupní zařízení předává výsledky člověku nebo jinému systému. Některé prvky, například dotykový displej, plní obě role.</p><p>U monitoru vybírej rozlišení a obnovovací frekvenci podle grafické karty a použití. Inkoustová tiskárna se hodí pro barevné fotografie, laserová často pro rychlý tisk textu; výsledek závisí také na nákladech na spotřební materiál.</p>"
  },
  "os": {
    "title": "Procesy, plánování a souborový systém",
    "html": "<p>Operační systém rozděluje prostředky mezi procesy, spravuje paměť a poskytuje aplikacím rozhraní k zařízení. Proces je spuštěný program se svým stavem; vlákna v jednom procesu mohou sdílet jeho paměť. Plánovač rozhoduje, který připravený proces dostane procesor.</p><p>Souborový systém určuje, jak jsou data organizována a jaká metadata a oprávnění se ukládají. NTFS, ext4 a FAT32 se liší funkcemi i limity; přenosný disk proto vybírej také podle zařízení, která jej budou číst.</p>"
  },
  "site": {
    "title": "Od fyzického přenosu k síťové aplikaci",
    "html": "<p>Vrstvený model odděluje úlohy komunikace. Ethernet nebo Wi‑Fi zajišťují přenos v místní síti, IP směruje pakety mezi sítěmi, TCP nebo UDP řeší přenos dat a aplikační protokoly, například HTTP a DNS, podporují služby pro uživatele.</p><p>IPv4 adresa má 32 bitů. Prefix /24 určuje, kolik bitů tvoří síťovou část; počet hostitelských adres závisí také na síťové adrese a broadcastu. Soukromá adresa se pro komunikaci na internetu běžně překládá pomocí NAT.</p>"
  },
  "licence": {
    "title": "Licence určuje práva a povinnosti uživatele",
    "html": "<p>To, že je program zdarma, samo o sobě neznamená, že lze volně upravovat nebo šířit jeho zdrojový kód. Freeware popisuje způsob distribuce, zatímco open-source licence stanoví podmínky používání, úprav a dalšího šíření.</p><p>MIT je permisivní licence s požadavkem zachovat oznámení o autorských právech a licenci. GPL je copyleftová: při distribuci odvozeného díla mohou vzniknout povinnosti zpřístupnit zdrojový kód za odpovídajících podmínek. Rozhodující je vždy konkrétní text licence.</p>"
  },
  "ciselne-soustavy": {
    "title": "Zápis čísla v jiné soustavě",
    "html": "<p>V poziční soustavě má každá číslice váhu odpovídající mocnině základu. Binární číslo 101101₂ znamená 1·2⁵ + 0·2⁴ + 1·2³ + 1·2² + 0·2¹ + 1·2⁰, tedy 45 v desítkové soustavě.</p><p>Hexadecimální soustava používá číslice 0–9 a A–F; jedna hexadecimální číslice odpovídá čtyřem bitům. Převod binárního zápisu do hexadecimálního proto usnadní seskupení bitů zprava po čtveřicích.</p>"
  },
  "logika": {
    "title": "Logické operace a jejich pravdivost",
    "html": "<p>AND je pravdivé pouze tehdy, jsou-li pravdivé oba vstupy; OR je pravdivé, pokud je pravdivý alespoň jeden. XOR je pravdivé při různých vstupech a NOT obrací hodnotu. Zápis v tabulce pravdivostních hodnot usnadňuje ověřit složený logický výraz.</p><p>Logické brány jsou fyzicky realizované elektronickými obvody. Základní operace lze skládat do klopných obvodů, sčítaček a dalších částí procesoru.</p>"
  },
  "bezpecnost": {
    "title": "Hrozba, riziko a vícevrstvá ochrana",
    "html": "<p>Malware je škodlivý software, phishing se snaží vylákat citlivé údaje a ransomware může data zašifrovat a požadovat výkupné. Útok často využívá kombinaci technické zranitelnosti a lidské chyby, proto samotný antivir nestačí.</p><p>Pravidelné aktualizace, unikátní hesla, vícefaktorové ověření a zálohy snižují různé typy rizik. Pravidlo 3‑2‑1 znamená mít více kopií dat, na různých typech médií a alespoň jednu kopii odděleně od běžného systému.</p>"
  },
  "virtualizace": {
    "title": "Virtuální stroje, kontejnery a cloudové služby",
    "html": "<p>Hypervisor umožňuje na jednom fyzickém počítači provozovat více virtuálních strojů s vlastním operačním systémem. Kontejner sdílí jádro hostitelského systému a izoluje hlavně aplikaci a její závislosti, proto bývá lehčí, ale není totožný s plným virtuálním strojem.</p><p>IaaS nabízí infrastrukturu, PaaS prostředí pro vývoj a běh aplikací a SaaS hotový software. Rozdělení odpovědnosti za aktualizace, konfiguraci a zabezpečení se podle modelu služby mění.</p>"
  }
};
