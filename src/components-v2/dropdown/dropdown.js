let temp = () => {
  return `
  <div class="dropdown__title">
    <div class="tit3">DROPDOWN</div>
    </div>
  <div class="dropdown__title-list active" data-type="input">
    Сколько гостей
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
    <li class="dropdown__item">Два</li>
    <li class="dropdown__item">Три</li>
  </div>
  `;
};

class Dropdown {
  constructor(selector, options) {
    this.$dropdown = document.querySelector(selector);
    this.#render();
    this.#setup();
  }

  #render() {
    this.$dropdown.innerHTML = temp();
  }
  #setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.$dropdown.addEventListener('click', this.clickHandler);
  }

  clickHandler(event) {

     const {type} = event.target.dataset;
     
     if(type == 'input'){
      event.target.closest('.dropdown__title-list').classList.toggle('active')
     }

  }
}

const dropdown = new Dropdown('#dropdown', {});
window.dropdown = dropdown;
