const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
  if (str.length === 0) return [];

function searchFruits(str, fruit) {
  const userSearch = str.trim().toLowerCase();
  
  if (userSearch === '') {
    return [];
  }

  if (/^\s+$/.test(userSearch)) {
    return [];
  }

  return fruit.reduce((results, fruit) => {
    const fruitName = fruit.toLowerCase();
    const index = fruitName.indexOf(userSearch);
    if (index > -1) {
      results.push([fruit, index]);
    }
    return results;
  }, []);
}


  return fruit.reduce((results, fruit) => {
    const fruitName = fruit.toLowerCase();
    const index = fruitName.indexOf(userSearch);
    if (index > -1) {
      results.push([fruit, index]);
    }
    return results;
  }, []);
}


function searchHandler(e) {
  const inputVal = input.value.trim();
  const results = inputVal === '' ? [] : search(inputVal);
  showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
  if (results.length === 0) {
    suggestions.parentElement.classList.add("invisible");
  } else {
    suggestions.parentElement.classList.remove("invisible");
  }

  suggestions.innerHTML = "";

  results.forEach((fruit) => {
    const fruitName = fruit[0].toLowerCase();
    const index = fruitName.indexOf(inputVal.toLowerCase());
    if (index !== -1) {
      const li = document.createElement("li");
      const boldPart =
        "<strong>" + fruitName.slice(index, index + inputVal.length) + "</strong>";
      li.innerHTML =
        fruitName.slice(0, index) + boldPart + fruitName.slice(index + inputVal.length);
      suggestions.append(li);
    }
  });
}


function useSuggestion(e) {
  if (e.target.tagName === "HTML" || e.target.tagName === "BODY") {
    suggestions.parentElement.classList.add("invisible");
  } else if (e.target.parentElement.parentElement.className === "suggestions") {
    input.value = e.target.innerText;
    suggestions.parentElement.classList.add("invisible");
  }
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
