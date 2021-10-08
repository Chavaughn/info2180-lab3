var box =
    document.querySelectorAll('div *:not([id]):not([class])');

for (var x = 0; x <= 8; x++) {
    box[x].setAttribute("class", "square");
}