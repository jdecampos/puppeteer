const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

const scriptsDir = path.join(__dirname, 'scripts');

fs.readdir(scriptsDir, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    const scriptPath = path.join(scriptsDir, file);
    const routePath = `/${file}`;

    app.get(routePath, async (req, res) => {
      try {
        const script = require(scriptPath);
        await script.run(req, res);
      } catch (err) {
        console.error(err);
        res.status(500).send('Erreur lors de l\'exécution du script');
      }
    });

    console.log(`Route configurée pour ${routePath}`);
  });
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
