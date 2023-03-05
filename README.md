# M413 - TD1 : Réponses aux Questions

## 6 - Exercice 1

### 6.1 La propriété « document.title »

- Ce sera le chargement de la page
- document.getElementById("title")
- textContent

- document.querySelector("h2")

- var h2Count = document.querySelectorAll("h2").length

- document.querySelectorAll(".firstOrLast")
- J'ai testé grâce à la taille du tableau renvoyé par la méthode ci-dessus

### 6.2 Les propriétés innerHTML, innerText et textContent

Les propriétés innerHTML, innerText et textContent sont toutes des propriétés de l'objet DOM (Document Object Model) et permettent de manipuler le contenu HTML d'un élément. Cependant, elles ont des comportements différents :

- innerHTML : permet de récupérer ou de définir le HTML interne d'un élément sous forme de chaîne de caractères. Les balises HTML sont interprétées.

- innerText : permet de récupérer ou de définir le texte brut interne d'un élément, sans interpréter les balises HTML. Il en résulte que les éléments HTML sont simplement affichés en tant que texte brut.

- textContent : permet de récupérer ou de définir le contenu brut de tous les noeuds textuels enfants d'un élément, sans interpréter les balises HTML. Les noeuds textuels sont simplement concaténés pour former une chaîne de caractères.

### 6.3 La propriété document.lastModified

On prend ce code :
```javascript
var metaTags = document.getElementsByTagName("meta");
	var metaTagsCount = metaTags.length;
	for (var i = 0; i < metaTagsCount; i++) {
		if (metaTags[i].getAttribute("name") == "author") {
			var author = metaTags[i].getAttribute("content");
			break;
		}
	}
```

- Si on veut sélectionner le 1er auteur de la liste, on laisse le break
- Si on veut sélectionner le dernier auteur de la liste, on enlève le break

## 7 - Exercice 2 ##################################################

```javascript
var today = new Date();
var targetDate = new Date(2023, 6, 19);
var timeDiff = targetDate.getTime() - today.getTime();
var nbDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
```

```javascript
if (nbDays == 1) {
		var text = "Il reste 1 jour avant le 19 juillet 2023";
}
else {
	var text = "Il reste " + nbDays + " jours avant le 19 juillet 2023";
}

document.getElementById("daysLeft").innerHTML = text;
```

### 7.1 - setInterval() et setTimeout()

- On va plûtot utiliser la méthode setInterval car la méthode setTimeout est appelée une seule fois alors que nous voulons que l'heure change continuellement

## 8 - Exercice 3

### 8.1 - Champ Texte et Couleur d’arrière-plan

- J'ai utilisé l'evenement "input" afin d'agir quand le champ texte était modifié

- J'ai utilisé les classes fournies, notemment en utilisant "classList.remove" et "classList.add" pour ajouter et retirer des classes à mon input








