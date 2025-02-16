function getElementWidth(content, padding, border){
return  (padding+border)*2 + content;
}
console.log(getElementWidth("50px", "8px", "4px"))