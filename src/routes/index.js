import {Home, Character} from "../pages"
import {Header} from "../templates";

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
}

const router = async () => {
    const header = null || document.getElementById('header');

    header.innerHTML = await Header();
}

export default router;