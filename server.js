const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

const AUTH_TOKEN = 'votre_token_secret_ici'; // Remplacez par votre token secret

// Middleware pour vérifier le token d'authentification
function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Extrait le token du format "Bearer <Token>"

    if (token == null) {
        return res.status(403).send("Un token est requis pour l'authentification");
    }

    if (token !== AUTH_TOKEN) {
        return res.status(401).send("Token d'authentification invalide");
    }

    next();
}

const scriptsDir = path.join(__dirname, 'scripts');

fs.readdir(scriptsDir, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    const scriptPath = path.join(scriptsDir, file);
    const routePath = `/${file}`;

    // Appliquer le middleware d'authentification à chaque route dynamique
    app.get(routePath, verifyToken, async (req, res) => {
      try {
        const script = require(scriptPath);
        await script.run(req, res); // Exécute la fonction run() exportée par le script
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
