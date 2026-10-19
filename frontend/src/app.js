import { About } from "./pages/about.js";
import { Home } from "./pages/home.js";
import { NotFound } from "./pages/notFound.js";
import { UserDetailsPage } from "./pages/userDetails.js";
import { UsersPage } from "./pages/users.js";

const router = new Navigo('/');

async function render(pageComponent) {
    const app = document.querySelector('#app');
    const el = await pageComponent();

    app.replaceChildren(el);
    router.updatePageLinks(); // Good practice to call this after rendering a new page
}


router
    .on("/", () => render(Home))
    .on("/about", () => render(About))
    .on("/users/:id", (params) => render(() => UserDetailsPage(params)))
    .on("/users", () => render(UsersPage))
    .notFound(() => render(NotFound))
    .resolve(); // Call this after defining all routes
