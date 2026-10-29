/* Programování study content. */
export default {
  "id": "programovani",
  "group": "Profilová část",
  "title": "Programování",
  "icon": "💻",
  "color": "#4da3ff",
  "desc": "Algoritmy, datové struktury, OOP, praktické úlohy.",
  "chapters": [
    {
      "id": "algoritmy",
      "title": "Algoritmizace",
      "sub": "vlastnosti algoritmu, vývojové diagramy",
      "level": "základ",
      "body": "<h2>Vlastnosti algoritmu</h2><ul><li>konečnost</li><li>determinovanost</li><li>hromadnost</li><li>rezultativnost</li></ul>\n    <h2>Řídicí struktury</h2><p>Sekvence, větvení (<code>if</code>), cyklus (<code>for</code>, <code>while</code>).</p>\n    <pre><code>// největší prvek pole\nfunction max(arr) {\n  let m = arr[0];\n  for (const x of arr) if (x > m) m = x;\n  return m;\n}</code></pre>"
    },
    {
      "id": "promenne",
      "title": "Proměnné a datové typy",
      "sub": "primitivní typy, pole, řetězce",
      "level": "základ",
      "body": "<h2>Základní typy</h2><table><tr><th>Typ</th><th>Příklad</th></tr><tr><td>int</td><td>42</td></tr><tr><td>float/double</td><td>3.14</td></tr><tr><td>bool</td><td>true</td></tr><tr><td>char / string</td><td>\"ahoj\"</td></tr></table>\n    <pre><code>int vek = 18;\nstring jmeno = \"Šíma\";\nint[] znamky = { 1, 2, 1 };</code></pre>"
    },
    {
      "id": "razeni",
      "title": "Řadicí a vyhledávací algoritmy",
      "sub": "bubble, quick, binární vyhledávání",
      "level": "střední",
      "body": "<h2>Bubble sort</h2><pre><code>function bubble(a) {\n  for (let i = 0; i < a.length; i++)\n    for (let j = 0; j < a.length - i - 1; j++)\n      if (a[j] > a[j + 1]) [a[j], a[j + 1]] = [a[j + 1], a[j]];\n  return a;\n}</code></pre>\n    <h2>Binární vyhledávání</h2><pre><code>function bin(a, x) {\n  let l = 0, r = a.length - 1;\n  while (l <= r) {\n    const m = (l + r) >> 1;\n    if (a[m] === x) return m;\n    a[m] < x ? l = m + 1 : r = m - 1;\n  }\n  return -1;\n}</code></pre>\n    <table><tr><th>Algoritmus</th><th>Složitost</th></tr><tr><td>Bubble sort</td><td>O(n²)</td></tr><tr><td>Quick sort</td><td>O(n log n) průměrně</td></tr><tr><td>Binární vyhledávání</td><td>O(log n)</td></tr></table>\n    <div class=\"quiz\">\n      <div class=\"q\" data-correct=\"1\">\n        <p>Složitost binárního vyhledávání?</p>\n        <button class=\"opt\">O(n)</button>\n        <button class=\"opt\">O(log n)</button>\n        <button class=\"opt\">O(n²)</button>\n      </div>\n    </div>"
    },
    {
      "id": "oop",
      "title": "Objektově orientované programování",
      "sub": "třída, objekt, dědičnost, polymorfismus",
      "level": "střední",
      "body": "<h2>4 pilíře OOP</h2><ul><li><b>Zapouzdření</b> – skrytí vnitřního stavu</li><li><b>Dědičnost</b> – odvození třídy z jiné</li><li><b>Polymorfismus</b> – stejné rozhraní, jiné chování</li><li><b>Abstrakce</b> – práce s podstatným</li></ul>\n    <pre><code>class Zvire {\n  constructor(jmeno) { this.jmeno = jmeno; }\n  zvuk() { return \"...\"; }\n}\nclass Pes extends Zvire {\n  zvuk() { return \"Haf\"; }\n}\nconsole.log(new Pes(\"Rex\").zvuk());</code></pre>"
    },
    {
      "id": "datove-struktury",
      "title": "Datové struktury",
      "sub": "zásobník, fronta, seznam, strom",
      "level": "střední",
      "body": "<h2>Přehled</h2><ul><li><b>Zásobník</b> – LIFO (push, pop)</li><li><b>Fronta</b> – FIFO (enqueue, dequeue)</li><li><b>Spojový seznam</b> – uzly s odkazem na další</li><li><b>Strom</b> – binární vyhledávací strom</li><li><b>Hash tabulka</b> – klíč → hodnota</li></ul>\n    <pre><code>const stack = [];\nstack.push(1); stack.push(2);\nstack.pop(); // 2\n\nconst queue = [];\nqueue.push(1); queue.push(2);\nqueue.shift(); // 1</code></pre>"
    },
    {
      "id": "rekurze",
      "title": "Rekurze",
      "sub": "",
      "level": "střední",
      "body": "<h2>Princip</h2><p>Funkce volá sama sebe. Nutná je <b>ukončovací podmínka</b>, jinak dojde k přetečení zásobníku.</p>\n    <pre><code>function faktorial(n) {\n  if (n <= 1) return 1;\n  return n * faktorial(n - 1);\n}\n\nfunction fib(n) {\n  return n < 2 ? n : fib(n - 1) + fib(n - 2);\n}</code></pre>"
    },
    {
      "id": "vyjimky",
      "title": "Výjimky a práce se soubory",
      "sub": "",
      "level": "střední",
      "body": "<h2>Výjimky</h2><pre><code>try {\n  int x = int.Parse(vstup);\n} catch (FormatException e) {\n  Console.WriteLine(\"Neplatné číslo\");\n} finally {\n  Console.WriteLine(\"Konec\");\n}</code></pre>\n    <h2>Soubory</h2><pre><code>File.WriteAllText(\"a.txt\", \"ahoj\");\nstring s = File.ReadAllText(\"a.txt\");</code></pre>"
    },
    {
      "id": "git",
      "title": "Git a verzování",
      "sub": "commit, branch, merge",
      "level": "praxe",
      "body": "<pre><code>git init\ngit add .\ngit commit -m \"první verze\"\ngit branch feature\ngit checkout feature\ngit merge feature\ngit push origin main</code></pre>"
    },
    {
      "id": "navrhove-vzory",
      "title": "Návrhové vzory",
      "sub": "singleton, factory, observer",
      "level": "pokročilé",
      "body": "<h2>Singleton</h2><pre><code>class Config {\n  static #instance;\n  static get() {\n    return this.#instance ??= new Config();\n  }\n}</code></pre><p>Další: Factory, Observer, MVC.</p>"
    },
    {
      "id": "testovani",
      "title": "Testování software",
      "sub": "unit testy, black/white box",
      "level": "střední",
      "body": "<h2>Druhy testů</h2><ul><li>jednotkové (unit)</li><li>integrační</li><li>systémové, akceptační</li></ul><p>Black box – bez znalosti kódu, white box – se znalostí kódu.</p>"
    }
  ]
};
