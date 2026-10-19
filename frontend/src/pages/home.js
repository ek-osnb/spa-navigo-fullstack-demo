export function Home() {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.textContent = "Home page";
    div.appendChild(h1);
    return div;
}