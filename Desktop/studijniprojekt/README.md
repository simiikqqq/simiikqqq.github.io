# Maturitní plán

Statická studijní aplikace v češtině. Nevyžaduje instalaci balíčků ani sestavení. Lekce se čtou jako navigovatelné slidy; aplikace nesleduje skóre ani dokončení kapitol.

## Spuštění

Protože aplikace používá JavaScriptové moduly, spusť ji přes lokální HTTP server:

```powershell
python -m http.server 8000
```

Pak otevři `http://localhost:8000`. Stejně ji lze nasadit na HTTPS hosting, například GitHub Pages.

## Struktura

```text
index.html
assets/
  css/styles.css
  js/
    app.js
    content/
      index.js
      matematika/         category.js, expansions.js, slide-notes.js
      cestina/            category.js, expansions.js
      literatura/         category.js, expansions.js
      sloh/               category.js, expansions.js
      hwsw/               category.js, expansions.js
      programovani/       category.js, expansions.js
      web/                category.js, expansions.js
      databaze/           category.js, expansions.js
      dokumentace/        category.js, expansions.js
      ustni/              category.js
      literatura-ustni/   category.js
      rozbory-knih/       category.js
service-worker.js
```

- `assets/js/content/` obsahuje samostatnou složku pro každý předmět a maturitní sekci.
- `category.js` v každé složce obsahuje název, popis a kapitoly daného předmětu či sekce.
- `expansions.js` obsahuje rozšířené výklady ke kapitolám daného předmětu. Sekce bez rozšířených lekcí tento soubor nemají.
- `assets/js/content/index.js` je centrální registr. Při přidání nové složky zaregistruj její modul právě zde.
- Matematická učebnice je v `assets/js/content/matematika/category.js`; doplňující výklady ke stručnějším slidům jsou v `slide-notes.js`. Kapitoly vysvětlují pojmy i postupy na příkladech, doplňují praktické použití a obsahují čtyři úlohy s navazujícím řešením. Typografie otevřených kapitol i jejich navigace je nastavena společně v `assets/css/styles.css` pro všechny předměty.
- `assets/js/app.js` vykresluje rozhraní, navigaci slidů a vyhledávání.
- `assets/css/styles.css` obsahuje motivy a responzivní vzhled.
- Navigaci předmětů lze na počítači skrýt a otevřít tlačítkem se šipkou na levém okraji; obsah kapitoly se po skrytí menu roztáhne do uvolněného prostoru. Na mobilu se navigace otevírá tlačítkem v horní liště.
- `service-worker.js` ukládá aplikaci a všechny obsahové moduly do mezipaměti pro použití offline po prvním načtení. Při přidání nové složky doplň její soubory do seznamu v tomto souboru.

Výchozí je tmavý barevný režim; volbu motivu si aplikace ukládá pouze v místním úložišti prohlížeče. Mezi slidy lze přecházet tlačítky, přehledem slidů nebo šipkami na klávesnici. Rozvržení se přizpůsobuje mobilům, tabletům i počítačům.
