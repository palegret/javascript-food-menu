import { div, addId, text } from '../builders';

export default function app() {
  return addId(div(text('Hello, world!')), 'app-container');
}