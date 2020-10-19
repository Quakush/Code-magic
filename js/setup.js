var WIZARD_NAMES = ['Иван', 'Хуан Себфстьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SIRNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandom = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var wizards = [
  {
    name: getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_SIRNAMES),
    coatColor: getRandom(WIZARD_COAT),
    eyesColor: getRandom(WIZARD_EYES)
  },
  {
    name: getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_SIRNAMES),
    coatColor: getRandom(WIZARD_COAT),
    eyesColor: getRandom(WIZARD_EYES)
  },
  {
    name: getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_SIRNAMES),
    coatColor: getRandom(WIZARD_COAT),
    eyesColor: getRandom(WIZARD_EYES)
  },
  {
    name: getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_SIRNAMES),
    coatColor: getRandom(WIZARD_COAT),
    eyesColor: getRandom(WIZARD_EYES)
  }
];

var setup = document.querySelector('.setup');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardList = document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();

var renderWizard = function(wizad) {
  var wizardElement = wizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizad.name;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  wizardElement.querySelector('.wizard-coat').style.fill = wizad.coatColor;

  return wizardElement;
};

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

wizardList.appendChild(fragment);

setup.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

