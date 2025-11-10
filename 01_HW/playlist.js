const styles = ["SKINS/basic.css", "SKINS/dark.css", "SKINS/modern.css"];
let current = 0;

function switchCSS() {
    current = (current + 1) % styles.length;
    document.getElementById("themeStylesheet").setAttribute("href", styles[current]);
}