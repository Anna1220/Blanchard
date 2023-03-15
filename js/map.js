ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.758468, 37.601088],
    zoom: 16
  });
  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/Subtract.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-20, -20]
  });
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
}

//отключаем зум колёсиком мышки
ymap.behaviors.disable('scrollZoom');

//на мобильных устройствах... (проверяем по userAgent браузера)
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  //... отключаем перетаскивание карты
  ymap.behaviors.disable('drag');
}
