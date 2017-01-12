export function formatPrice(price) {
  return parseFloat(price).toFixed(2);
}

export function filterByType(map, type) {
  return Object.keys(map)
    .filter(key => map[key].type === type)
    .map(key => map[key]);
}

export function $(query) {
  const elements = Array.prototype.slice.call(document.querySelectorAll(query));

  function on(event, cb) {
    elements.forEach(ele => ele.addEventListener(event, cb));
  }

  function children(toAdd) {
    elements.forEach(ele => {
      while (ele.firstChild)
        ele.removeChild(ele.firstChild);

      ele.appendChild(toAdd);
    });
  }

  function addClass(newClass) {
    elements.forEach(ele => ele.classList.add(newClass));
  }

  function removeClass(classToRemove) {
    elements.forEach(ele => ele.classList.remove(classToRemove));
  }

  function attr(attribute, value) {
    elements.forEach(ele => {
      if (value === false)
        ele.removeAttribute(attribute);
      else
        ele.setAttribute(attribute, value);
    });
  }

  function map(callback) {
    return elements.map(callback);
  }

  return {
    on,
    children,
    addClass,
    removeClass,
    attr,
    map,
  };
}
