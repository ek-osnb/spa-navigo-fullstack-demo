export function UserDetailsPage(params) {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.textContent = `User: ${params.data.id}`;
    div.appendChild(h1);
    return div;
}