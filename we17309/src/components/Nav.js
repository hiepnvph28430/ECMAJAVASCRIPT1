
import { menus } from "../data";
const Nav = () => {
    return `
        <nav class="tw-flex tw-sm:justify-center tw-space-x-4 tw-text-[28px] ">
           ${menus.map(menu => `<a href="${menu.link}" class="tw-text-emerald-900 text-decoration:none">${menu.name}</a>`).join('')}
        </nav>
    `;
};
export default Nav;

