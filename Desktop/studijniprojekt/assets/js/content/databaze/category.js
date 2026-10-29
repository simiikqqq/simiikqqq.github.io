/* Databáze study content. */
export default {
  "id": "databaze",
  "group": "Profilová část",
  "title": "Databáze",
  "icon": "🗄️",
  "color": "#7ee081",
  "desc": "Relační model, ER diagramy, normalizace, SQL.",
  "chapters": [
    {
      "id": "zaklady",
      "title": "Základní pojmy",
      "sub": "DBMS, tabulka, klíče",
      "level": "základ",
      "body": "<h2>Pojmy</h2><ul><li><b>Databáze</b> – organizovaná množina dat</li><li><b>DBMS</b> – systém pro správu (MySQL, PostgreSQL)</li><li><b>Primární klíč</b> – jednoznačný identifikátor řádku</li><li><b>Cizí klíč</b> – odkaz na primární klíč jiné tabulky</li></ul>\n    <h2>Kardinalita vztahů</h2><p>1:1, 1:N, M:N (řeší se vazební tabulkou).</p>"
    },
    {
      "id": "er",
      "title": "ER diagramy",
      "sub": "entita, atribut, vztah",
      "level": "základ",
      "body": "<h2>Prvky ER diagramu</h2><ul><li><b>Entita</b> – obdélník (Žák, Třída)</li><li><b>Atribut</b> – vlastnost (jméno)</li><li><b>Vztah</b> – kosočtverec / čára s kardinalitou</li></ul>\n    <p>Notace: Chen, Crow’s foot (vraní noha).</p>"
    },
    {
      "id": "normalizace",
      "title": "Normalizace",
      "sub": "1NF, 2NF, 3NF",
      "level": "střední",
      "body": "<h2>Normální formy</h2><ol><li><b>1NF</b> – atomické hodnoty, žádné opakující se skupiny</li><li><b>2NF</b> – 1NF + neklíčové atributy závisí na celém klíči</li><li><b>3NF</b> – 2NF + žádné tranzitivní závislosti</li></ol>"
    },
    {
      "id": "sql-ddl",
      "title": "SQL – DDL",
      "sub": "CREATE, ALTER, DROP",
      "level": "základ",
      "body": "<pre><code>CREATE TABLE zak (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  jmeno VARCHAR(50) NOT NULL,\n  trida_id INT,\n  FOREIGN KEY (trida_id) REFERENCES trida(id)\n);</code></pre>"
    },
    {
      "id": "sql-dml",
      "title": "SQL – DML a dotazy",
      "sub": "SELECT, JOIN, GROUP BY",
      "level": "střední",
      "body": "<pre><code>SELECT t.nazev, COUNT(z.id) AS pocet\nFROM trida t\nLEFT JOIN zak z ON z.trida_id = t.id\nGROUP BY t.nazev\nHAVING pocet > 20\nORDER BY pocet DESC;</code></pre>\n    <table><tr><th>JOIN</th><th>Vrací</th></tr><tr><td>INNER</td><td>jen shody</td></tr><tr><td>LEFT</td><td>vše z levé + shody</td></tr><tr><td>RIGHT</td><td>vše z pravé + shody</td></tr></table>\n    <div class=\"quiz\">\n      <div class=\"q\" data-correct=\"1\">\n        <p>Kterou klauzulí filtrujeme agregované výsledky?</p>\n        <button class=\"opt\">WHERE</button>\n        <button class=\"opt\">HAVING</button>\n        <button class=\"opt\">ORDER BY</button>\n      </div>\n    </div>"
    },
    {
      "id": "transakce",
      "title": "Transakce a ACID",
      "sub": "",
      "level": "pokročilé",
      "body": "<h2>ACID</h2><ul><li><b>Atomicity</b> – vše nebo nic</li><li><b>Consistency</b> – konzistentní stav</li><li><b>Isolation</b> – transakce se neovlivňují</li><li><b>Durability</b> – trvalost</li></ul>\n    <pre><code>START TRANSACTION;\nUPDATE ucet SET zustatek = zustatek - 100 WHERE id = 1;\nUPDATE ucet SET zustatek = zustatek + 100 WHERE id = 2;\nCOMMIT;</code></pre>"
    },
    {
      "id": "nosql",
      "title": "NoSQL databáze",
      "sub": "dokumentové, klíč–hodnota",
      "level": "teorie",
      "body": "<p>MongoDB (dokumenty JSON), Redis (klíč–hodnota), Neo4j (grafová). Výhoda: škálovatelnost, flexibilní schéma.</p>"
    },
    {
      "id": "indexy",
      "title": "Indexy, pohledy a procedury",
      "sub": "INDEX, VIEW, PROCEDURE",
      "level": "pokročilé",
      "body": "<pre><code>CREATE INDEX idx_jmeno ON zak(jmeno);\nCREATE VIEW v_zaci AS SELECT jmeno FROM zak;</code></pre>"
    }
  ]
};
