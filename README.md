# ReFood – Service Web Anti-Gaspillage Alimentaire

## Choix du sujet

Le gaspillage alimentaire est un enjeu majeur en France. Chaque année, 10 millions de tonnes de nourriture sont jetées, dont 4 millions encore consommables, tandis que 16 millions de personnes vivent avec moins de 3,5 € par jour (source : https://agriculture.gouv.fr/infographie-le-gaspillage-alimentaire). 

En tant qu'étudiants boursiers, ce sujet nous touche particulièrement. C'est pourquoi nous avons choisi de répondre à ces problématiques à travers le projet **ReFood**.

**ReFood** consiste en un service web permettant de mettre en relation locaux donneurs et receveurs d’aliments. Ce choix s’inscrit parfaitement dans les préoccupations écologiques et sociales, tout en favorisant la solidarité de quartier et la consommation responsable.

---

## Utilité sociale

**ReFood** présente une utilité sociale très claire :  

- **Enjeu écologique** : réduction du gaspillage alimentaire, limitation de la surconsommation d’eau, d’énergie, de terres agricoles, et des émissions de CO₂ liées à la production et au transport de nourriture.  

- **Enjeu social** : accès facilité à la nourriture à faible coût ou gratuite, renforcement des liens sociaux locaux.  

Chaque citoyen peut donner ou recevoir des aliments selon ses besoins. Le service favorise le don gratuit et prévoit la possibilité de points de collecte pour limiter les déplacements et optimiser la redistribution.

---

## Effets de la numérisation

La numérisation du partage alimentaire via **ReFood** représente un remplacement des circuits traditionnels comme les associations caritatives physiques, les affichages papier ou encore le bouche-à-oreille. Cette digitalisation apporte plusieurs bénéfices environnementaux et sociaux :

- Géolocalisation en temps réel des dons et demandes.  

- Optimisation des échanges pour réduire le gaspillage et les trajets.  

- Mise en relation instantanée entre donneurs et receveurs, pour accélérer la redistribution avant la date de péremption.  

En revanche, des effets rebonds sont possibles : la surconsommation ou les dérives commerciales. Ces risques sont limités par un encadrement strict du prix, la priorité reste au don gratuit, et des recommandations pour une utilisation responsable.

---

# Scénarios d'utilisation – ReFood

## Scénario 1 : Consulter des items à la une

1. L'utilisateur se rend sur le site depuis ses favoris.  
2. Il consulte un item parmi ceux proposés à la une.  
3. Il revient aux items à la une pour voir les autres propositions.  
4. Il choisit un autre item et le consulte.

## Scénario 2 : Recherche d'items géolocalisés

1. L'utilisateur se rend sur le site depuis ses favoris.  
2. Il effectue une recherche d'items situés à moins de 10 km.  
3. Il clique sur un item trouvé pour consulter ses détails.

---
# Impact de l'exécution des scénarios auprès de différents services concurrents

Nous avons choisi de comparer l’impact des scénarios sur plusieurs services web de don et partage d’aliments : Geev, Donnons.org, ToutDonner.com et JeDonne.fr. Les résultats EcoIndex ont été obtenus via EcoIndexApp, afin d’évaluer l’impact environnemental des pages web les plus consultées et de parcours types.

Service           | Score (sur 100) | Classe    | Détail des mesures
-----------------|----------------|-----------|-------------------
Geev              | 59             | C 🟦      | [..](file:///C:/Users/ahama/OneDrive/Bureau/ISI3/GL03/ScoreEco_Geev/Geev/statements/ecoindex-environmental-statement.html) 
JeDonne.fr        | 33             | E 🟥      | [..](file:///C:/Users/ahama/OneDrive/Bureau/ISI3/GL03/ScoreEco_Geev/2025-10-06T13-29-20.934Z/statements/ecoindex-environmental-statement.html) 
Donnons.org       | 14             | F 🟪      | [..](file:///C:/Users/ahama/OneDrive/Bureau/ISI3/GL03/ScoreEco_Geev/2025-10-06T13-16-38.003Z_donnons/statements/ecoindex-environmental-statement.html) 
ToutDonner.com    | 71             | B 🟩      | [..](file:///C:/Users/ahama/OneDrive/Bureau/ISI3/GL03/ScoreEco_Geev/2025-09-29T14-47-24.057Z_toutdonner/statements/ecoindex-environmental-statement.html) 

*Tab.1 : Mesure de l'EcoIndex moyen des services web étudiés.*

## Analyse
Les mesures de l'impact moyen de ces services (cf. Tab.1) révèlent des **classes EcoIndex très contrastées**.  
- Les pages les plus mal classées (**JeDonne.fr et Donnons.org**) présentent souvent :  
  - un grand nombre de requêtes et scripts tiers,  
  - des pages très volumineuses avec médias non optimisés,  
  - des éléments dynamiques ou publicitaires intensifs.  
- À l'inverse, le bon classement (**ToutDonner.com**) montre qu'il existe une marge de progression significative à condition d'adopter des pratiques d’éco-conception : optimisation des images et vidéos, réduction du nombre de requêtes et d’éléments tiers, et parcours utilisateur simplifiés.  

**Geev**, quant à lui, obtient un score intermédiaire (C 🟦), avec certaines pages optimisées et d'autres encore perfectibles.  

Cette analyse illustre que **ReFood** peut tirer parti de ces bonnes pratiques pour limiter l’impact environnemental de son service web, tout en offrant une expérience utilisateur fluide et efficace.
