
var container=$('.image-grid'),
item_title,
item_store,
item_price,
display;

  etsyList.results.forEach( function (object) {

  item_title = "<h3>" + object.title + "</h3>";

  item_store = "<p>" + object.Shop.shop_name; + "</p>";

  item_price = "<span>" + object.price + " " + object.currency_code + "<span>";

  object.Images.forEach (function (y) {
  item_image = "<img src='" + y.url_170x135 + "' />";
});

  display = "<li>" + item_image + item_title + item_store + item_price + "</li>";
  container.append(display);
});
