# Site — évolution v2 : titre engageant, hero photo, page « projet en détail », couleurs

> À appliquer au site existant. Garder le bilingue FR/UK et le formulaire intacts.
> Source de vérité du contenu de base : `docs/specs-site.md`. Ce fichier ne fait qu'ajouter/remplacer ce qui suit.

---

## 1. Nouveau hero (titre engageant + CTA)

**FR**
- Titre (H1) : **Participez à l'émergence d'un lieu franco-ukrainien à Nancy**
- Sous-titre : *Un café-pâtisserie qui rassemble — et qui donne du travail. À construire ensemble.*
- Boutons : `Je participe` (principal) · `Le projet en détail` (secondaire, vers la page détail)

**UK**
- Titre (H1) : **Долучіться до створення франко-українського місця в Нансі**
- Sous-titre : *Кафе-кондитерська, що об'єднує — і дає роботу. Створюємо разом.*
- Boutons : `Долучитися` (principal) · `Проєкт детально` (secondaire)

Le `[NOM]` peut rester en petit dans le header (logo) ; le H1 du hero devient cette phrase d'accroche.

---

## 2. Photo du hero

**Direction artistique** : chaleureux, humain, appétissant. Bonnes pistes :
- des mains qui pétrissent / façonnent une pâte ;
- une table de pâtisseries (medovik, syrnyky, pampouchky…) ;
- des gens qui partagent un repas / un café ;
- un comptoir de café convivial.

**Sources libres et fiables** (usage commercial autorisé — vérifier la licence de chaque image, et privilégier celles sans personne identifiable ou clairement libres de droits) :
- Pexels — https://www.pexels.com
- Unsplash — https://unsplash.com

**Mots-clés de recherche** : `ukrainian bakery`, `kneading dough hands`, `pastry counter cafe`, `sharing meal table`, `varenyky`, `medovik cake`.

**À terme** : remplacer par une **vraie photo d'un moment de la communauté** — plus authentique et plus mobilisatrice qu'une banque d'images.

**Intégration technique** :
- Image en fond plein-largeur du hero, placée dans `assets/img/hero.jpg`.
- Poser un **voile (overlay) bleu nuit à ~50 %** par-dessus (dégradé `--blue-dark` → transparent) pour garder le texte lisible **en blanc**.
- `background-size: cover; background-position: center;` et hauteur ~70–80vh sur desktop, plus courte sur mobile.
- **Repli sans image** : si `hero.jpg` absent, fond en dégradé `--blue` → `--blue-dark`.

---

## 3. Bloc « Le projet, en quelques mots » (+ bouton vers le détail)

Remplacer l'actuelle section « Le projet » par une version courte (teaser), suivie d'un bouton vers la page détail.

**FR**
> **Le projet, en quelques mots**
> Un café-pâtisserie ukrainien à Nancy : on y mange, on s'y retrouve, on fête, on apprend le français et l'ukrainien. Mais c'est surtout un lieu qui **emploie et forme** des personnes de la communauté pour les aider à retrouver un travail. La cuisine fait vivre le lieu ; donner du travail en est le cœur.
>
> `[ Le projet en détail → ]`

**UK**
> **Проєкт, коротко**
> Українське кафе-кондитерська в Нансі: тут їдять, зустрічаються, святкують, вчать французьку та українську. Але передусім це місце, яке **наймає й навчає** людей з громади, щоб допомогти їм знайти роботу. Кухня дає життя місцю; дати роботу — його серце.
>
> `[ Проєкт детально → ]`

Le bouton mène à une nouvelle page : **`/projet`** (FR) et **`/uk/proekt`** (UK).

---

## 4. Nouvelle page « Le projet en détail » (avec les chiffres)

### FR — `/projet`

> # Le projet en détail
>
> ## Comment ça tient (le modèle)
> Ce lieu fonctionne comme une entreprise sociale : le but n'est pas d'enrichir un propriétaire, mais de faire vivre les gens. Il s'appuie sur **trois sources** :
> - **ce qu'on vend** — cafés, pâtisseries, traiteur ;
> - **l'aide de l'État** — pour l'emploi et la formation des personnes éloignées de l'emploi ;
> - **le soutien** — collectivités, fondations, dons.
>
> Aucune de ces sources ne suffit seule. Ensemble, elles rendent le projet possible.
>
> ## Trois repères
> - un café ≈ **2 €**, une pâtisserie ≈ **4 €** ;
> - une personne y est payée au moins au SMIC, ≈ **1 400 € net/mois** ;
> - pour chaque personne en formation-emploi, l'État verse ≈ **13 300 €/an** au lieu.
>
> ## Un exemple chiffré
> Imaginons un petit café-pâtisserie qui fait travailler **3 personnes** (dont 2 en formation-emploi). Chiffres arrondis, pour donner une idée.
>
> **L'argent qui rentre chaque année**
>
> | | |
> |---|---:|
> | Cafés, pâtisseries et boissons vendus | 75 000 € |
> | Aide de l'État (2 personnes en formation-emploi) | 27 000 € |
> | Aides de la ville, de la région, de fondations | 14 000 € |
> | Dons, adhésions, fêtes | 4 000 € |
> | **Total** | **≈ 120 000 €** |
>
> **L'argent qui sort chaque année**
>
> | | |
> |---|---:|
> | Salaires (3 personnes) | 80 000 € |
> | Ingrédients (farine, beurre, café…) | 22 000 € |
> | Loyer et énergie | 12 000 € |
> | Matériel, assurances, publicité, divers | 6 000 € |
> | **Total** | **≈ 120 000 €** |
>
> ## Pour démarrer (une seule fois)
> Aménager le local et acheter le four, la vitrine et le matériel coûte autour de **50 000 €**. On peut le financer avec un prêt sans intérêt, un prêt de banque garanti, des aides à l'achat de matériel et une collecte auprès de la communauté.
>
> *Ces chiffres sont un exemple indicatif : le budget réel dépendra de la taille du lieu.*
>
> `[ Je participe → ]` (renvoie vers le formulaire)

### UK — `/uk/proekt`

> # Проєкт детально
>
> ## Як це працює (модель)
> Це місце працює як соціальне підприємство: мета — не збагатити власника, а щоб люди жили краще. Воно спирається на **три джерела**:
> - **те, що продаємо** — кава, тістечка, кейтеринг;
> - **допомога держави** — для працевлаштування й навчання людей, яким важко знайти роботу;
> - **підтримка** — місто, фонди, пожертви.
>
> Жодне з джерел не достатнє саме по собі. Разом вони роблять проєкт можливим.
>
> ## Три орієнтири
> - кава ≈ **2 €**, тістечко ≈ **4 €**;
> - людина отримує щонайменше мінімальну зарплату, ≈ **1 400 € «на руки»/місяць**;
> - за кожну особу на навчанні-роботі держава виплачує закладу ≈ **13 300 €/рік**.
>
> ## Приклад у цифрах
> Уявімо невелике кафе-кондитерську, яке дає роботу **3 особам** (з них 2 — на навчанні-роботі). Цифри округлені, щоб дати уявлення.
>
> **Гроші, що надходять щороку**
>
> | | |
> |---|---:|
> | Продаж кави, тістечок і напоїв | 75 000 € |
> | Допомога держави (2 особи на навчанні-роботі) | 27 000 € |
> | Підтримка міста, регіону, фондів | 14 000 € |
> | Пожертви, внески, свята | 4 000 € |
> | **Разом** | **≈ 120 000 €** |
>
> **Гроші, що витрачаються щороку**
>
> | | |
> |---|---:|
> | Зарплати (3 особи) | 80 000 € |
> | Продукти (борошно, масло, кава…) | 22 000 € |
> | Оренда та комунальні | 12 000 € |
> | Обладнання, страхування, реклама, інше | 6 000 € |
> | **Разом** | **≈ 120 000 €** |
>
> ## Щоб розпочати (один раз)
> Облаштувати приміщення й купити піч, вітрину та обладнання коштує близько **50 000 €**. Це можна профінансувати безвідсотковим кредитом, гарантованим банківським кредитом, субсидіями на обладнання та збором коштів серед громади.
>
> *Це орієнтовний приклад: реальний бюджет залежатиме від розміру закладу.*
>
> `[ Долучитися → ]`

---

## 5. Palette de couleurs

Identité franco-ukrainienne **chaleureuse**, sans tomber dans le drapeau littéral : un bleu profond comme couleur structurante, un or/blé appétissant en accent, une touche terracotta pour les boutons d'action, sur fond crème.

Définir en variables CSS :

```css
:root {
  --blue:        #0B4F9E;  /* couleur principale : titres, header, liens */
  --blue-dark:   #082F63;  /* footer, overlay du hero */
  --gold:        #F4B63E;  /* accent blé/or : filets, soulignés, petites touches */
  --gold-soft:   #FBE7B8;  /* fond de section clair (alterné) */
  --terracotta:  #C75D3A;  /* boutons d'action (CTA) + hover */
  --cream:       #FFF8EE;  /* fond principal */
  --ink:         #1F2430;  /* texte */
  --line:        #E7DCC8;  /* bordures douces */
}
```

**Application :**
- **Hero** : photo + overlay `--blue-dark` ~50 %, texte blanc, bouton principal en `--terracotta` (hover plus foncé), bouton secondaire en contour blanc.
- **Boutons principaux** (Je participe / Envoyer) : fond `--terracotta`, texte blanc. **Secondaires** : contour `--blue`, texte `--blue`.
- **Titres de section** : `--blue` ; petit filet `--gold` (2–3 px) sous les titres pour la chaleur.
- **Alternance des sections** : `--cream` → `--gold-soft` → `--cream` → léger voile bleu (#EAF1FA) — éviter le gris actuel.
- **Cartes « exemples »** : fond blanc, bordure `--line`, accent `--gold` à gauche.
- **Liens** : `--blue`, souligné `--gold` au survol.
- **Footer** : fond `--blue-dark`, texte crème, liens `--gold`.
- Vérifier le **contraste** (texte sur boutons et sur overlay) pour rester lisible et accessible.

---

## 6. Prompt à donner à Claude Code

> Lis `docs/specs-site-v2.md` et applique-le au site existant. 1) Remplace le titre du hero par la phrase engageante, ajoute une image de fond `assets/img/hero.jpg` avec un overlay bleu nuit (repli en dégradé si l'image manque), et les deux boutons. 2) Condense la section « Le projet » en un teaser « en quelques mots » avec un bouton vers une nouvelle page détail `/projet` (FR) et `/uk/proekt` (UK), reprenant les éléments chiffrés du fichier. 3) Mets en place la palette de couleurs en variables CSS et applique-la partout (hero, boutons, titres, sections alternées, cartes, footer). Garde le bilingue FR/UK et le formulaire intacts, et ne modifie rien hors de ce dossier.
