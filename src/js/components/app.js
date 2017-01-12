import { addId, div, text } from '../builders';
import navbar from './navbar';
import hero from './hero';
import menu from './menu';

export default function app() {
  const navbarEl = navbar();
  const heroEl = hero();
  const menuEl = menu();
  const appContainerEl = addId(div(navbarEl, heroEl, menuEl), 'app-container');
  return appContainerEl;
}
