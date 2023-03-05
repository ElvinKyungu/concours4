
// Paiement functionality integration
const form = document.querySelector('.form');
const name = document.getElementById('name');
const number = document.getElementById('number');
const date = document.getElementById('date');
const cvv = document.getElementById('cvv');

const visa = document.querySelector('.card');

/* AFFICHER L'ERREUR */
function showError(element, error) {
    if(error === true) {
        element.style.opacity = '1';
    } else {
        element.style.opacity = '0';
    }
};

/* MODIFIER LE NOM DU FORMAT */
name.addEventListener('input', function() {
    let alert1 = document.getElementById('alert-1');
    let error = this.value === '';
    showError(alert1, error);
    document.getElementById('card-name').textContent = this.value;
});

/* MODIFIER LE FORMAT DU NUMERO DE CARTE*/
number.addEventListener('input', function(e) {
    this.value = numberAutoFormat();

    // affiche l'erreur quand est différent de 16 chiffres et 3 espaces blancs
    let error = this.value.length !== 19;
    let alert2 = document.getElementById('alert-2');
    showError(alert2, error);

    document.querySelector('.card__number').textContent = this.value;
});

function numberAutoFormat() {
    let valueNumber = number.value;
    // si l'espace blanc devient ''. Si n'est pas un nombre compris entre 0 et 9, passez à ''
    let v = valueNumber.replace(/\s+/g, '').replace(/[^0-9]/gi, '');

   // la valeur a un minimum de 4 chiffres et un maximum de 16
    let matches = v.match(/\d{4,16}/g);
    let match = matches && matches[0] || '';
    let parts = [];

    for (i = 0; i < match.length; i += 4) {
        // après 4 chiffres ajouter un nouvel élément au tableau
        // par exemple. "4510023" -> [4510, 023]
        parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
        // ajoute un espace blanc après 4 chiffres
        return parts.join(' ');
    } else {
        return valueNumber;
    }
};

/* MODIFIER LE FORMAT DATE */
date.addEventListener('input', function(e) {
    this.value = dateAutoFormat();
    
   // affiche une erreur si la date n'est pas valide
    let alert3 = document.getElementById('alert-3');
    showError(alert3, isNotDate(this));

    let dateNumber = date.value.match(/\d{2,4}/g);
    document.getElementById('month').textContent = dateNumber[0];
    document.getElementById('year').textContent = dateNumber[1];
});

function isNotDate(element) {
    let actualDate = new Date();
    let month = actualDate.getMonth() + 1; // à partir du 0 janvier, nous devons ajouter + 1
    let year = Number(actualDate.getFullYear().toString().substr(-2)); // 2022 -> 22
    let dateNumber = element.value.match(/\d{2,4}/g);
    let monthNumber = Number(dateNumber[0]);
    let yearNumber = Number(dateNumber[1]);
    
    if(element.value === '' || monthNumber < 1 || monthNumber > 12 || yearNumber < year || (monthNumber <= month && yearNumber === year)) {
        return true;
    } else {
        return false;
    }
}

function dateAutoFormat() {
    let dateValue = date.value;
    // si espace blanc -> changer en ''. Si n'est pas un nombre entre 0-9 -> changer en ''
    let v = dateValue.replace(/\s+/g, '').replace(/[^0-9]/gi, '');

// min de 2 chiffres et max de 4
    let matches = v.match(/\d{2,4}/g);
    let match = matches && matches[0] || '';
    let parts = [];

    for (i = 0; i < match.length; i += 2) {
       // après 4 chiffres ajouter un nouvel élément au tableau
         // par exemple. "4510023" -> [4510, 023]
        parts.push(match.substring(i, i + 2));
    }

    if (parts.length) {
       // ajoute un espace blanc après 4 chiffres
        return parts.join('/');
    } else {
        return dateValue;
    }
};
/* MODIFIER LE FORMAT CVV */
cvv.addEventListener('input', function(e) {
    let alert4 = document.getElementById('alert-4');
    let error = this.value.length < 3;
    showError(alert4, error)
});

/* VÉRIFIER SI LA TOUCHE APPUYÉE EST UN NUMÉRO (saisie du numéro de carte, date et cvv) */
function isNumeric(event) {
    if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode > 31)) {
        return false;
    }
};

/* FORMULAIRE DE VALIDATION QUAND PRESSER LE BOUTON */
form.addEventListener('submit', function (e) {
    // 1. s'il n'y a pas de nom
     // 2. si la longueur de la carte numérotée n'est pas valide (16 chiffres et 3 espaces blancs)
     // 3. si n'est pas une date valide (4 chiffres et "/" ou n'est pas une date valide)
     // 4. si n'est pas un cvv valide

    if(name.value === '' || number.value.length !== 19 || date.value.length !== 5 || isNotDate(date) === true || cvv.value.length < 3) {
        e.preventDefault();
    };

    // 5. si une entrée est vide, affiche l'alerte de cette entrée
    let input = document.querySelectorAll('input');
    for( i = 0; i < input.length; i++) {
        if(input[i].value === '') {
            input[i].nextElementSibling.style.opacity = '1';
        }
    }
});