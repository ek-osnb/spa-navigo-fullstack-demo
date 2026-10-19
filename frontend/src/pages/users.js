export async function UsersPage() {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.textContent = "Users page";
    div.appendChild(h1);

    const ul = document.createElement("ul");
    const users = await fetchUsers();


    users.forEach(user => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `/users/${user.id}`;
        a.textContent = user.name;
        a.setAttribute("data-navigo", "");
        li.appendChild(a);
        ul.appendChild(li);
    });


    div.appendChild(ul);
    return div;
}


// const URL = "https://jsonplaceholder.typicode.com/users";
const URL = "api/users";

async function fetchUsers() {
    const resp = await fetch(URL);
    const users = await resp.json();
    return users;
}