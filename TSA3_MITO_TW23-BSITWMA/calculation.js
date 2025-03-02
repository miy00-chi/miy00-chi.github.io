function toggleSign() {
    let display = document.forms[0].display;
    if (display.value.startsWith('-')) {
        display.value = display.value.substring(1);
    } else {
        display.value = '-' + display.value;
    }
}
