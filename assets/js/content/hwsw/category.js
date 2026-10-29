/* Teorie HW a SW study content. */
export default {
  "id": "hwsw",
  "group": "Profilová část",
  "title": "Teorie HW a SW",
  "icon": "🖥️",
  "color": "#5ad1b0",
  "desc": "Architektura počítače, komponenty, OS, sítě, licence.",
  "chapters": [
    {
      "id": "architektura",
      "title": "Architektura počítače",
      "sub": "von Neumann, Harvard",
      "level": "základ",
      "body": "<h2>Von Neumannova architektura</h2><p>Program i data sdílí společnou paměť. Části: <b>ALU</b>, <b>řadič</b>, <b>paměť</b>, <b>vstupní a výstupní zařízení</b>.</p>\n    <div class=\"box def\"><b>Harvardská architektura</b>Oddělená paměť pro program a data – používají ji mikrokontroléry a cache L1.</div>\n    <h2>Cyklus procesoru</h2><ol><li>Fetch – načtení instrukce</li><li>Decode – dekódování</li><li>Execute – provedení</li><li>Write back – zápis výsledku</li></ol>"
    },
    {
      "id": "cpu",
      "title": "Procesor",
      "sub": "jádra, takt, cache, instrukční sady",
      "level": "základ",
      "body": "<h2>Parametry</h2><ul><li><b>Frekvence</b> (GHz), <b>počet jader a vláken</b></li><li><b>Cache</b> L1/L2/L3</li><li><b>TDP</b> – tepelný výkon</li><li><b>Patice</b> (AM5, LGA1700)</li></ul>\n    <h2>CISC × RISC</h2><table><tr><th>CISC</th><th>RISC</th></tr><tr><td>složité instrukce, x86</td><td>jednoduché instrukce, ARM</td></tr></table>"
    },
    {
      "id": "pameti",
      "title": "Paměti",
      "sub": "RAM, ROM, SSD, HDD",
      "level": "základ",
      "body": "<h2>Hierarchie pamětí</h2><p>Registry → cache → RAM → SSD → HDD. Čím blíž CPU, tím rychlejší, menší a dražší.</p>\n    <table><tr><th>Typ</th><th>Volatilní</th><th>Použití</th></tr><tr><td>SRAM</td><td>ano</td><td>cache</td></tr><tr><td>DRAM (DDR5)</td><td>ano</td><td>operační paměť</td></tr><tr><td>Flash (NAND)</td><td>ne</td><td>SSD, USB</td></tr><tr><td>HDD</td><td>ne</td><td>archivace</td></tr></table>"
    },
    {
      "id": "zakladni-deska",
      "title": "Základní deska a sběrnice",
      "sub": "chipset, PCIe, USB, SATA",
      "level": "základ",
      "body": "<h2>Součásti</h2><ul><li>patice CPU, sloty RAM</li><li>chipset – řídí komunikaci</li><li>sloty PCIe, M.2, SATA</li><li>UEFI/BIOS, CMOS baterie</li></ul>\n    <h2>Sběrnice</h2><table><tr><th>Sběrnice</th><th>Použití</th></tr><tr><td>PCIe 4.0/5.0</td><td>grafika, NVMe</td></tr><tr><td>SATA III</td><td>disky (6 Gb/s)</td></tr><tr><td>USB 3.2 / 4</td><td>periferie</td></tr></table>\n    <div class=\"box def\"><b>Form factor</b>ATX, micro-ATX, mini-ITX – rozměry desky.</div>"
    },
    {
      "id": "periferie",
      "title": "Periferie",
      "sub": "monitory, tiskárny, vstupní zařízení",
      "level": "základ",
      "body": "<h2>Monitory</h2><p>Typy panelů: TN (rychlé), IPS (barvy), VA (kontrast), OLED. Parametry: rozlišení, obnovovací frekvence, odezva.</p>\n    <h2>Tiskárny</h2><ul><li>inkoustové</li><li>laserové (toner, fotoválec)</li><li>3D tiskárny (FDM, SLA)</li></ul>"
    },
    {
      "id": "os",
      "title": "Operační systémy",
      "sub": "procesy, plánování, souborové systémy",
      "level": "střední",
      "body": "<h2>Funkce OS</h2><ul><li>správa procesů a paměti</li><li>souborový systém (NTFS, ext4, FAT32)</li><li>ovladače a správa zařízení</li><li>uživatelé a oprávnění</li></ul>\n    <h2>Stavy procesu</h2><p>nový → připravený → běžící → čekající → ukončený</p>\n    <pre><code># základní příkazy Linux\nls -la        # výpis souborů\ncd /etc       # změna adresáře\nchmod 755 x   # práva\nps aux        # procesy</code></pre>"
    },
    {
      "id": "site",
      "title": "Počítačové sítě",
      "sub": "OSI, TCP/IP, IP adresace",
      "level": "střední",
      "body": "<h2>Model OSI</h2><table><tr><th>#</th><th>Vrstva</th><th>Příklad</th></tr><tr><td>7</td><td>aplikační</td><td>HTTP, DNS</td></tr><tr><td>6</td><td>prezentační</td><td>TLS</td></tr><tr><td>5</td><td>relační</td><td>sessions</td></tr><tr><td>4</td><td>transportní</td><td>TCP, UDP</td></tr><tr><td>3</td><td>síťová</td><td>IP, router</td></tr><tr><td>2</td><td>linková</td><td>Ethernet, switch</td></tr><tr><td>1</td><td>fyzická</td><td>kabel, Wi-Fi</td></tr></table>\n    <h2>IPv4</h2><p>32 bitů, zápis 192.168.1.10/24. Maska /24 = 255.255.255.0 → 254 použitelných adres.</p>"
    },
    {
      "id": "licence",
      "title": "Software a licence",
      "sub": "freeware, open source, GPL, MIT",
      "level": "teorie",
      "body": "<h2>Typy licencí</h2><table><tr><th>Typ</th><th>Popis</th></tr><tr><td>Proprietární</td><td>placená, uzavřený kód</td></tr><tr><td>Freeware</td><td>zdarma, kód uzavřený</td></tr><tr><td>Shareware</td><td>zkušební verze</td></tr><tr><td>GPL</td><td>open source, odvozené dílo musí být také GPL</td></tr><tr><td>MIT</td><td>velmi volná, jen zachovat autora</td></tr></table>"
    },
    {
      "id": "ciselne-soustavy",
      "title": "Číselné soustavy",
      "sub": "binární, hexadecimální, převody",
      "level": "základ",
      "body": "<h2>Převody</h2><table><tr><th>DEC</th><th>BIN</th><th>HEX</th></tr><tr><td>10</td><td>1010</td><td>A</td></tr><tr><td>15</td><td>1111</td><td>F</td></tr><tr><td>255</td><td>1111 1111</td><td>FF</td></tr></table>\n    <details class=\"task\"><summary>Převeď 45 do dvojkové soustavy</summary><p>45 = 32 + 8 + 4 + 1 → <b>101101</b></p></details>"
    },
    {
      "id": "logika",
      "title": "Logické obvody",
      "sub": "AND, OR, NOT, XOR",
      "level": "základ",
      "body": "<h2>Pravdivostní tabulka</h2><table><tr><th>A</th><th>B</th><th>AND</th><th>OR</th><th>XOR</th></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td></tr></table>"
    },
    {
      "id": "bezpecnost",
      "title": "Bezpečnost IT",
      "sub": "malware, šifrování, zálohování",
      "level": "střední",
      "body": "<h2>Hrozby</h2><ul><li>viry, červi, trojské koně, ransomware</li><li>phishing, sociální inženýrství</li><li>DDoS</li></ul><h2>Ochrana</h2><p>Aktualizace, antivir, firewall, 2FA, zálohy 3-2-1.</p>"
    },
    {
      "id": "virtualizace",
      "title": "Virtualizace a cloud",
      "sub": "hypervisor, IaaS, PaaS, SaaS",
      "level": "střední",
      "body": "<h2>Hypervisor</h2><p>Typ 1 (bare metal – VMware ESXi), typ 2 (VirtualBox). Kontejnery – Docker.</p><h2>Cloud</h2><p>IaaS (servery), PaaS (platforma), SaaS (hotová aplikace – Gmail).</p>"
    }
  ]
};
