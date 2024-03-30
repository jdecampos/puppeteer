# Étape 1 : Préparation de l'Environnement
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

# Étape 2 : Installation de Node.js et npm
1. Télécharger le dépôt en replaçant "18" par la version de nodejs que vous souhaitez. Les versions se trouve [ici](https://github.com/nodesource/distributions/blob/master/README.md)
```
cd ~
curl -sL https://deb.nodesource.com/setup_18.x -o nodesource_setup.sh
```

