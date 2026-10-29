/* Webové technologie study content. */
export default {
  "id": "web",
  "group": "Profilová část",
  "title": "Webové technologie",
  "icon": "🌐",
  "color": "#ffd166",
  "desc": "HTML, CSS, JavaScript, HTTP, responzivita, PHP.",
  "chapters": [
    {
      "id": "html",
      "title": "HTML5",
      "sub": "struktura, sémantické tagy, formuláře",
      "level": "základ",
      "body": "<h2>Kostra dokumentu</h2><pre><code>&lt;!DOCTYPE html&gt;\n&lt;html lang=\"cs\"&gt;\n&lt;head&gt;\n  &lt;meta charset=\"UTF-8\"&gt;\n  &lt;title&gt;Stránka&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;header&gt;&lt;/header&gt;\n  &lt;main&gt;&lt;/main&gt;\n  &lt;footer&gt;&lt;/footer&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre>\n    <h2>Sémantické tagy</h2><p><code>header, nav, main, article, section, aside, footer</code> – pomáhají SEO a přístupnosti.</p>"
    },
    {
      "id": "css",
      "title": "CSS3",
      "sub": "selektory, box model, flexbox, grid",
      "level": "základ",
      "body": "<h2>Box model</h2><p>content → padding → border → margin. <code>box-sizing: border-box</code> započítá padding a border do šířky.</p>\n    <h2>Flexbox</h2><pre><code>.row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}</code></pre>\n    <h2>Grid</h2><pre><code>.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n}</code></pre>\n    <h2>Specificita</h2><p>inline &gt; #id &gt; .třída / :pseudo &gt; element</p>"
    },
    {
      "id": "js",
      "title": "JavaScript",
      "sub": "DOM, události, fetch",
      "level": "střední",
      "body": "<h2>Práce s DOM</h2><pre><code>const btn = document.querySelector(\"#btn\");\nbtn.addEventListener(\"click\", () => {\n  document.body.classList.toggle(\"dark\");\n});</code></pre>\n    <h2>Fetch API</h2><pre><code>const res = await fetch(\"/api/data\");\nconst data = await res.json();</code></pre>"
    },
    {
      "id": "responzivita",
      "title": "Responzivní design",
      "sub": "media queries, mobile first",
      "level": "základ",
      "body": "<h2>Mobile first</h2><p>Píšeme styly pro mobil a pomocí media queries přidáváme pro větší obrazovky.</p>\n    <pre><code>.menu { display: none; }\n@media (min-width: 768px) {\n  .menu { display: flex; }\n}</code></pre>\n    <div class=\"box tip\"><b>Nezapomeň</b>&lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"&gt;</div>"
    },
    {
      "id": "http",
      "title": "HTTP a fungování webu",
      "sub": "metody, stavové kódy, DNS",
      "level": "základ",
      "body": "<h2>Metody</h2><p><code>GET</code> čtení, <code>POST</code> vytvoření, <code>PUT/PATCH</code> úprava, <code>DELETE</code> smazání.</p>\n    <h2>Stavové kódy</h2><table><tr><th>Kód</th><th>Význam</th></tr><tr><td>200</td><td>OK</td></tr><tr><td>301</td><td>trvalé přesměrování</td></tr><tr><td>404</td><td>nenalezeno</td></tr><tr><td>500</td><td>chyba serveru</td></tr></table>"
    },
    {
      "id": "php",
      "title": "PHP a serverová část",
      "sub": "",
      "level": "střední",
      "body": "<h2>Základy PHP</h2><pre><code>&lt;?php\n$jmeno = $_POST[\"jmeno\"] ?? \"host\";\necho \"Ahoj \" . htmlspecialchars($jmeno);\n?&gt;</code></pre>\n    <h2>Připojení k databázi (PDO)</h2><pre><code>$pdo = new PDO(\"mysql:host=localhost;dbname=skola\", \"root\", \"\");\n$st = $pdo-&gt;prepare(\"SELECT * FROM zak WHERE id = ?\");\n$st-&gt;execute([$id]);</code></pre>\n    <div class=\"box warn\"><b>Bezpečnost</b>Vždy používej prepared statements kvůli SQL injection.</div>"
    },
    {
      "id": "seo",
      "title": "SEO a přístupnost",
      "sub": "meta tagy, alt, WCAG",
      "level": "základ",
      "body": "<h2>SEO</h2><p>Title, meta description, nadpisy h1–h6, sémantika, rychlost načítání.</p><h2>Přístupnost</h2><p>Atribut alt u obrázků, kontrast, ovládání klávesnicí, ARIA.</p>"
    },
    {
      "id": "frameworky",
      "title": "Frameworky a nástroje",
      "sub": "React, Bootstrap, npm",
      "level": "teorie",
      "body": "<ul><li><b>CSS:</b> Bootstrap, Tailwind</li><li><b>JS:</b> React, Vue, Angular</li><li><b>Nástroje:</b> npm, Vite, Git</li></ul>"
    }
  ]
};
