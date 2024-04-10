# Installation de Puppeteer
## Étape 1 : Préparation de l'Environnement
1. Créez un nouvel utilisateur pour exécuter les scripts sans privilèges root. Remplacez monutilisateur par le nom d'utilisateur que vous souhaitez.
```
adduser monutilisateur
```

2. Donnez à votre nouvel utilisateur l'accès sudo (facultatif, si nécessaire) :
```
usermod -aG sudo monutilisateur
```

3. Changez d'utilisateur pour continuer avec l'utilisateur nouvellement créé :
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
mkdir scripts
```

## Étape 6 : Exécution de votre Server.js
1. Lancez votre serveur Node.js avec :
```
cd ~
cd puppeteer
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

# Avoir du persistant sur server.js
Une fois que vous avez fini de créer et tester vos scripts, il faudra faire en sorte qu'à la fermeture du terminal, le node server.js soit toujours actif. Voici comment rendre le script persistant même après redémarrage du serveur

## Installation de PM2 
Si PM2 n'est pas déjà installé sur votre système, vous pouvez l'installer globalement via npm :
```
sudo npm install pm2 -g

```

## Démarrage de votre application avec PM2
Naviguez dans le répertoire de votre projet et utilisez la commande suivante pour démarrer votre script avec PM2 :
```
cd puppeteer
pm2 start server.js --name "nomDeVotreApplication"
```
Remplacez "nomDeVotreApplication" par le nom que vous souhaitez donner à votre processus. Cela peut être utile pour identifier le processus plus tard avec d'autres commandes PM2.

## Démarrage automatique au redémarrage du système
PM2 peut configurer votre application pour qu'elle redémarre automatiquement si votre serveur redémarre. Utilisez la commande suivante pour configurer cela :
```
pm2 startup
```
Et voilà, vous pouvez fermer votre terminal et même redémarrer votre serveur, le script sera toujours actif :)

## Gestion de l'application pm2
Voici quelques commandes PM2 courantes pour gérer votre application :
* Lister toutes les applications : `pm2 list` 
* Arrêter une application : `pm2 stop nomDeVotreApplication` 
* Redémarrer une application : `pm2 restart nomDeVotreApplication` 
* Voir les logs : `pm2 logs nomDeVotreApplication` 
