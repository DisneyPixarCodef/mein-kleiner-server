const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Die harmlose, schnelle "Bestellung"
app.get('/api/gruss', (req, res) => {
  res.json({ message: 'Hallo! Mir geht es gut, ich habe nichts zu tun.' });
});

// HIER IST DIE MAGIE: DIE LAHMLEGE-"BESTELLUNG"
app.get('/api/absturz', (req, res) => {
  console.log("WARNUNG: Absturz-Anfrage erhalten! Beginne schwere Berechnung...");

  // Dieser Code zwingt den Server, eine sinnlose, aber extrem
  // rechenintensive Aufgabe auszuführen. Er blockiert alles.
  let total = 0;
  for (let i = 0; i < 20_000_000_000; i++) {
    total++;
  }

  // Diese Antwort wird wahrscheinlich nie ankommen, weil der Server vorher überlastet ist.
  res.json({ message: 'Berechnung fertig. Ich habe überlebt.', total: total });
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
