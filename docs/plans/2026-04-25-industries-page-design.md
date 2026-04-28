# Design Document : Page Portail Industries

## 1. Vision et Objectifs
Créer une page portail (`/industries`) qui sert de hub central pour toutes les activités d'Anago Group. La page doit refléter la puissance et la diversification du groupe tout en offrant un accès rapide et visuel à chaque secteur spécifique.

## 2. Architecture Visuelle "Pro Max"

### 2.1 Hero Section (Hub Stratégique)
- **Style** : Centré, plein écran (min-h-[80vh]).
- **Background** : Image composite ou panoramique représentant la synergie industrielle.
- **Contenu** : 
    - Badge : "Notre Portefeuille Stratégique"
    - Titre : "Bâtir l'Avenir à travers des Industries Clés"
    - Description : Un résumé de la mission multisectorielle du groupe.

### 2.2 Corps de Page : Layout Éditorial par Alternance
Chaque secteur (Mines, Industrie, Immobilier, Agriculture, Équipement) sera présenté dans un bloc horizontal :
- **Ratio** : 7/5 ou 5/7 (Texte/Image).
- **Alternance** : 
    - Secteur Pair : Image à Gauche, Texte à Droite.
    - Secteur Impair : Texte à Gauche, Image à Droite.
- **Composants par bloc** :
    - Titre du secteur (ex: "Mines & Métaux")
    - Description courte (2-3 phrases)
    - Liste de 3 expertises clés avec icônes subtiles.
    - Bouton CTA : "Explorer le Secteur" (Link vers la page dédiée).
- **Arrondis** : `rounded-4xl` pour toutes les images.

### 2.3 Section de Synthèse (Stats Globales)
- Un bandeau sombre avec les chiffres clés du groupe (Nombre de pays, nombre de secteurs, projets réalisés).

## 3. Détails Techniques
- **Fichier** : `components/pages/IndustriesPage.tsx`
- **Route** : `/industries` (à configurer dans `app/industries/page.tsx`).
- **Animations** : `RevealSection` pour chaque bloc sectoriel.
- **Thème** : Support complet Light/Dark avec overlays adaptatifs.

## 4. Assets Nécessaires (Images)
- `industries/hero-hub.png`
- `industries/mining-preview.png`
- `industries/industrial-preview.png`
- `industries/realestate-preview.png`
- `industries/agriculture-preview.png`
- `industries/equipment-preview.png`
