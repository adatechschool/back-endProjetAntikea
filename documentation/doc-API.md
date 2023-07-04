DOCUMENTATION API

Collection Meubles
    récupérer les meubles en vente
    GET http://localhost:3000/meubles

    récupérer une seule annonce de meuble
    GET http://localhost:3000/meubles/:id

    publier une annonce meuble (ne fonctionne pas encore, sauve un objet vide dans la BDD)
    POST http://localhost:3000/meubles

    modifier une annonce de meuble (ne fonctionne pas encore, sauve un objet vide dans la BDD)
    PUT http://localhost:3000/meubles/:id

    supprimer une annonce de meuble
    DELETE http://localhost:3000/meubles/:id

    FILTRES MEUBLES
    recuperer les meubles par matiere
    GET http://localhost:3000/meubles/:matiere

    par couleur
    GET http://localhost:3000/meubles/:couleur

    par prix
    GET http://localhost:3000/meubles/:prix

    par type
    GET http://localhost:3000/meubles/:type



Collection Users
    récupérer tous les utilisateurs du site
    GET http://localhost:3000/login

    créer un utilisateur 
    POST http://localhost:3000/login

Collection Baskets
    récupérer les panier
    GET http://localhost:3000/basket

    récupérer un seul panier
    GET http://localhost:3000/basket/:id

    Enregister un panier 
    POST http://localhost:3000/basket

    modifier un panier 
    PUT http://localhost:3000/basket/:id

    supprimer un panier
    DELETE http://localhost:3000/basket/:id

