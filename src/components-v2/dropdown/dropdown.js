let temp = (data = [], placeholder) => {
  const placeholderText = placeholder ?? 'Выберите колличество гостей';
  // console.log(data)
  return `
  <div class="dropdown__title">
    <div class="tit3">DROPDOWN</div>
    </div>
  <div class="dropdown__title-list active" data-type="input">
    ${placeholderText}
    <div class="material-icons">
      <span class="dropdown__btn" data-type="input">expand_more</span>
    </div>
  </div>
  <div class="dropdown__items">
  <li class="dropdown__item">
  <div class="dropdown__item-type">Спальни</div>
  <div class="dropdown__item-counter">
    <div class="dropdown__item-minus">-</div>
    <div class="dropdown__item-vault">0</div>
    <div class="dropdown__item-plus">+</div>
  </div>
  </li>
  <li class="dropdown__item">
  <div class="dropdown__item-type">Кровати</div>
  <div class="dropdown__item-counter">
    <div class="dropdown__item-minus">-</div>
    <div class="dropdown__item-vault">0</div>
    <div class="dropdown__item-plus">+</div>
  </div>
  </li>
  <li class="dropdown__item">
  <div class="dropdown__item-type">Ванные комнаты</div>
  <div class="dropdown__item-counter">
    <div class="dropdown__item-minus">-</div>
    <div class="dropdown__item-vault">0</div>
    <div class="dropdown__item-plus">+</div>
  </div>
  </li>
  </div>
  `;
};

class Dropdown {
  constructor(selector, options) {
    this.$dropdown = document.querySelector(selector);
    this.options = options;
    this.#render();
    this.#setup();
  }

  #render() {
    const { placeholder, data } = this.options;
    this.$dropdown.innerHTML = temp(data, placeholder);
  }
  #setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.$dropdown.addEventListener('click', this.clickHandler);
    this.$arrow = this.$dropdown.querySelector('.dropdown__btn');
  }
  clickHandler(event, options) {
    //обработка клика - выдвижение списка элментов, смена кнопки
    const { type } = event.target.dataset;
    if (type == 'input') {
      event.target.closest('.dropdown__title-list').classList.toggle('active');
      this.$arrow.innerHTML == 'expand_more'
        ? (this.$arrow.innerHTML = 'expand_less')
        : (this.$arrow.innerHTML = 'expand_more');
    }

    //обработка клика - смена результата в элементах списка
    const { data } = this.options;
    this.$dropdownItem = this.$dropdown.querySelectorAll('.dropdown__item');
    const current = event.target.closest('.dropdown__item');
    const minus = current.querySelector('.dropdown__item-minus');
    const vault = current.querySelector('.dropdown__item-vault');
    const plus = current.querySelector('.dropdown__item-plus');

    console.log(data)
    if (vault.innerHTML >= 0) {
      event.target === plus ? vault.innerHTML++ : false;
    }
    if (vault.innerHTML > 0) {
      event.target === minus ? vault.innerHTML-- : false;
    }

    //TODO при нажатии менять data score
  }
}

const dropdown = new Dropdown('#dropdown', {
  placeholder: 'Сколько гостей',
  data: [
    { id: '0', score: 0, value: 'Спальни' },
    { id: '1', score: 0, value: 'Кровати' },
    { id: '2', score: 0, value: 'Ванные комнаты' },
  ],
});
window.dropdown = dropdown;
