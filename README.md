# Étape 1 : Préparation de l'Environnement
1. Créez un nouvel utilisateur pour exécuter les scripts sans privilèges root. Remplacez monutilisateur par le nom d'utilisateur que vous souhaitez.
```
adduser monutilisateur
```

2. Donnez à votre nouvel utilisateur l'accès sudo (facultatif, si nécessaire) :
```
usermod -aG sudo monutilisateur
```

4. Changez d'utilisateur pour continuer avec l'utilisateur nouvellement créé :
```
su - monutilisateur
```
