/* этот скрипт использует такие имена классов:
✦ like-icon — для svg-иконки анимированного сердца
✦ card__like-button — для кнопки Like рядом с иконкой
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ is-liked — для обозначения состояния лайкнутой иконки в виде сердца
✦ button__text — для обозначения текстового элемента внутри кнопки
Если эти классы поменять в HTML, скрипт перестанет работать. Будьте аккуратны.
*/

const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');

iconButtonArray.forEach((iconButton, index) => {
  iconButton.onclick = () =>
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
});

likeButtonArray.forEach((button, index) => {
  button.onclick = () => toggleIsLiked(likeHeartArray[index], button);
});

function toggleIsLiked(heart, button) {
  heart.classList.toggle('is-liked');
  setButtonText(heart, button);
}

function setButtonText(heart, button) {
  if ([...heart.classList].includes('is-liked')) {
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Unlike'),
      500
    );
  } else {
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Like'),
      500
    );
  }
}

// Исправление перезагрузки для модального окна
document.addEventListener('DOMContentLoaded', function() {
    // Находим кнопку сохранения
    const saveButton = document.querySelector('.button__save');
    const modal = document.getElementById('save__modal');
    
    // Находим кнопку OK внутри модального окна
    const okButton = modal ? modal.querySelector('.button__OK') : null;
    
    // Удаляем старые onclick атрибуты
    if (saveButton) {
        saveButton.removeAttribute('onclick');
        saveButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (modal) {
                modal.showModal();
            }
            return false;
        });
    }
    
    if (okButton) {
        okButton.removeAttribute('onclick');
        // Меняем type с submit на button
        okButton.setAttribute('type', 'button');
        okButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (modal) {
                modal.close();
            }
            return false;
        });
    }
});
