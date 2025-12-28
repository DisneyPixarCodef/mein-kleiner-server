const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// WICHTIG: Erlaubt deiner GitHub-Seite, mit diesem Server zu sprechen
app.use(cors());

// Das ist die "Bestellung", die der Kellner aufgeben kann
app.get('/api/gruss', (req, res) => {
  res.json({ message: 'Hallo von meinem kleinen, geheimen Server!' });
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
