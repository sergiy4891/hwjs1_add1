'use strict';

const sharm = 15;
const hurgada = 25;
const taba = 6;

const groupQuantity = prompt('Введите число необходимых мест в группе');
if (groupQuantity === null) {
    alert ('Нам очень жаль, приходите еще!');
} else if (!Number.isInteger (+groupQuantity)) {
    alert ('Ошибка ввода');
} else if (groupQuantity > sharm && groupQuantity > hurgada && groupQuantity > taba) {
    alert ('Извините, столько мест нет ни в одной группе!');
} else if (groupQuantity <= sharm && groupQuantity < hurgada && groupQuantity > taba) {
    const sharmApprove = confirm('Eсть место в группе Шарм-еш-Шейх, согласен ли пользоваетель быть в этой группе?');
    if (sharmApprove === true) {
        alert ('Приятного путешествия в группе Шарм-эш-Шейх');
    } else { alert ('Нам очень жаль, приходите еще!');}
} else if (groupQuantity > sharm && groupQuantity <= hurgada && groupQuantity > taba) {
    const hurgadaApprove = confirm('Eсть место в группе Хургада, согласен ли пользоваетель быть в этой группе?');
    if (hurgadaApprove === true) {
        alert ('Приятного путешествия в группе Хургада');
    } else { alert ('Нам очень жаль, приходите еще!');}
} else if (groupQuantity < sharm && groupQuantity < hurgada && groupQuantity <= taba) {
    const tabaApprove = confirm('Eсть место в группе Таба, согласен ли пользоваетель быть в этой группе?');
    if (tabaApprove === true) {
        alert ('Приятного путешествия в группе Таба');
    } else { alert ('Нам очень жаль, приходите еще!');}
}
