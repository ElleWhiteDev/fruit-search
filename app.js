function search(str) {
  let results = [];

  for (let f of fruit) {
    if (f.toLowerCase().includes(str.toLowerCase())) {
      results.push(f);
    }
  }
  return results;
}

function searchHandler(e) {
  let inputVal = e.target.value;
  let results = search(inputVal);
  showSuggestions(results, inputVal);
  suggestions.style.display = "block";
}

function showSuggestions(results, inputVal) {
  suggestions.innerHTML = "";

  if (results.length > 0) {
    suggestions.classList.add("has-suggestions");
    for (let i = 0; i < results.length; i++) {
      let li = document.createElement("li");
      li.textContent = results[i];
      suggestions.appendChild(li);
    }
  } else {
    suggestions.classList.remove("has-suggestions");
  }
}

function useSuggestion(e) {
  if (e.target.tagName === "LI") {
    input.value = e.target.textContent;
    suggestions.classList.remove("has-suggestions");
  }
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
