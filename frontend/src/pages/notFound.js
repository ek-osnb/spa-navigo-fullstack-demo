export function NotFound() {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.textContent = "404 - Page not found";
    div.appendChild(h1);
    return div;
}