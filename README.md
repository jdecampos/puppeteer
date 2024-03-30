# Installation de Pupperteer
## Étape 1 : Préparation de l'Environnement
1. Créez un nouvel utilisateur pour exécuter les scripts sans privilèges root. Remplacez monutilisateur par le nom d'utilisateur que vous souhaitez.
```
adduser monutilisateur
```

2. Donnez à votre nouvel utilisateur l'accès sudo (facultatif, si nécessaire) :
```
usermod -aG sudo monutilisateur
```

43. Changez d'utilisateur pour continuer avec l'utilisateur nouvellement créé :
```
su - monutilisateur
```

## Étape 2 : Installation de Node.js et npm
1. Télécharger le dépôt en replaçant "18" par la version de nodejs que vous souhaitez. Les versions se trouve [ici](https://github.com/nodesource/distributions/blob/master/README.md)
```
cd ~
curl -sL https://deb.nodesource.com/setup_18.x -o nodesource_setup.sh
```
2. Installer le dépôt
```
sudo bash nodesource_setup.sh
```
3. installer nodejs
```
sudo apt install nodejs
```
4. Vérifier la version
```
node -v
```
## Étape 3 : Installation des Dépendances de Puppeteer
1. Installez les dépendances nécessaires pour Puppeteer sur Ubuntu :
```
sudo apt-get update
sudo apt-get install -y wget gnupg ca-certificates procps libxshmfence1 libnss3 libnspr4 libatk1.0-0 libatk-bridge2.0-0 libcups2 libdbus-1-3 libxkbcommon0 libxdamage1 libxrandr2 libgbm1 libpango-1.0-0 libcairo2 libasound2 libxcomposite1 libxcursor1 libxi6 libxtst6 libxss1 libxrandr2 libgtk-3-0
```
## Étape 4 : Configuration de Votre Projet
1. Créez votre dossier de projet et naviguez dedans :
```
mkdir puppeteer && cd puppeteer
```
2. Initialisez un nouveau projet Node.js :

```
npm init -y
```
3. Installez Express et Puppeteer :
```
npm install express puppeteer
```

## Étape 5 : Création du fichier server.js et des Scripts
1. Créez le fichier `server.js`` avec le code pour lancer le serveur Express et pour router les requêtes vers les scripts Puppeteer. (à télécharger à la racine et penser à bien changer le token)
```
nano server.js
```
2. Créer un dossier scripts
```
mkdir script
```

## Étape 6 : Exécution de votre Server.js
1. Lancez votre serveur Node.js avec :
```
cd ~
node server.js
```

## Étape 7 : Exécution de votre script (sans token)
Pour exécuter le script Puppeteer, vous devez taper ceci dans votre navigateur (remplacer mon-ip par votre adresse ip serveur) ou même depuis n8n. Vous n'avez pas besoin de token. C'est un moyen de tester vos scripts rapidement :
```
http://mon-ip:3000/script1.js
````
# Scraper depuis n8n avec token
Depuis n8n, vous pouvez lancer votre script avec token ou sans token. Vous avez juste à utiliser le node HTTP Request et d'ajouter un header d'authentification

![image de n8n](https://nocodeskills.fr/wp-content/uploads/2024/03/n8n.png)

# Création des scripts Pupperteer
Pour ajouter des nouveaux script de scraping, il faut insérer dans le dossier `scripts` un nouveau fichier (ex : NouveauScript.js)

