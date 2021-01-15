var text = "hier is niet zoveel geks aan de hand";
console.log(text.slice(6, 12));
console.log(text.substr(6, 8));
console.log(text.substring(6, 8));
console.log(text.toUpperCase());

var text2 = "hier nog een tekst";

// PHP: string interpolation

// reguliere expressies

var postcode = "1838aQ";
var regex = /^[0-9]{4} ?[a-zA-Z]{2}$/;

if (regex.test(postcode)) {
  console.log("Postcode klopt!", postcode);
} else {
  console.error("Postcode NO WAY!", postcode);
}
