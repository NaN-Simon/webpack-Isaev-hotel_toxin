let temp = (data = [], placeholder) => {

  const placeholderText = placeholder ?? 'Выберите колличество гостей';

  const liElements =data.map(item=>{
    return `
      <li class="dropdown__item">
        <div class="dropdown__item-type">${item.value}</div>
        <div class="dropdown__item-counter" data-type="counter">
          <div class="dropdown__item-minus" data-type="minus">-</div>
          <div class="dropdown__item-vault">0</div>
          <div class="dropdown__item-plus" data-type="plus">+</div>
        </div>
      </li>
    `
  })
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
      ${liElements.join('')}
    </div>
  `;
};

class Dropdown {
  constructor(selector, options) {
    this.$dropdown = document.querySelector(selector);
    this.options = options;
    this.#render();
    this.#addData();
    this.#setup();
  }
  
  #render() {
    let { placeholder, data } = this.options;
    placeholder = this.#showPlaceholder()
    this.$dropdown.innerHTML = temp(data, placeholder);
  }
  //меняем placeholder в соотвествии со значениями
  #showPlaceholder(){
    return 'HAHAHA'
  }
  //добавляем атрибуты к каждой li
  #addData(){
    this.$dropdownItem = this.$dropdown.querySelectorAll('.dropdown__item');
    for (let i=0;i<this.$dropdownItem.length;i++) {
      this.$dropdownItem[i].dataset.id = i;
    }
  }
  //добавляем обработчик событий
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

    //обработка клика - смена результата в элементах списка и в data.score
    const { data } = this.options;
    const currentDataAttribute = event.target.getAttribute('data-type')

    if(currentDataAttribute === 'plus' || currentDataAttribute === 'minus' ){

      const current = event.target.closest('.dropdown__item');
      const currentVault = current.querySelector('.dropdown__item-vault');
      const currentDataId = data[current.getAttribute('data-id')];

        if(currentVault.innerHTML >= 0 && type == 'plus') {
          currentVault.innerHTML++
          currentDataId.score++
        }
        if(currentVault.innerHTML > 0 && type == 'minus') {
          currentVault.innerHTML--
          currentDataId.score--
        }

    }
  }
}

const dropdown = new Dropdown('#dropdown', {
  placeholder: 'Сколько гостей',
  data: [
    { id: '0', score: 0, value: 'Спальни' },
    { id: '1', score: 0, value: 'Кровати' },
    { id: '2', score: 0, value: 'Ванные комнаты' },
    { id: '3', score: 0, value: 'TestROOM' },
  ],
});
window.dropdown = dropdown;
