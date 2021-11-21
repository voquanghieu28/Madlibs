// GET ALL NAV ITEMS
let navItems = document.getElementsByClassName("nav-link");

// LOOP THROUGH NAV ITEMS AND ADD EVENT LISTENER TO EACH ITEM
for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function () {
    show(i);
  });
}

/**************************************************************************************************************************************************
 * FUNCTION TO DISPLAY THE GAME WITH INPUTS FIELDS
 **************************************************************************************************************************************************/
function show(num) {
  // REMOVE ALL THE ACTIVE CLASS AND ADD THE CURRENT ACTIVE CLAA
  document.getElementsByClassName("active")[0].classList.remove("active");
  document.getElementById("item-" + num).classList.add("active");

  // GET STORY
  let story = stories[num];

  // GET THE HTML CONTENT
  let content = document.getElementById("content");

  // REMOVE ALL CHILD OF CONTENT
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  // INSERT THE HEADER TO THE CONTENT
  content.insertAdjacentHTML(
    "beforeend",
    `<form><h1 style="font-size: 40px; font-weight: 300;">Provide the following words</h1> <br>`
  );
  content.insertAdjacentHTML(
    "beforeend",
    `<input class="input" type="hidden" name="num" value="${num}" required></input> `
  );

  // LOOP EACH WORDS IN A STORY TO RENDER INPUT FIELDS
  story.words.forEach((word) => {
    content.insertAdjacentHTML(
      "beforeend",
      `<div class="input-group mb-3"><input class="form-control input form-control-lg"  type="text" name="${word}" placeholder="${word}"> </div>        `
    );
  });

  // ADD SUBMIT BUTTON
  content.insertAdjacentHTML(
    "beforeend",
    `<button style="width:100%;border-radius: 25px; " onclick="readStory()" class="btn btn-primary form-control-lg">Read story</button></form>`
  );
  return false;
}

/**************************************************************************************************************************************************
 * FUNCTION TO DISPLAY THE GAME RESULT
 **************************************************************************************************************************************************/
function readStory() {
  // GET ALL INPUT ELEMENTS FROM CONTENT
  let inputs = Array.prototype.slice.call(
    document.getElementById("content").getElementsByTagName("input")
  );

  // OBJECT TO HOLD INPUT WORDS
  let words = {};

  // LOOP THROUGH INPUT ELEMENTS ARRAY, THEN ADD EACH ELEMENT TO THE WORDS OBJECT
  inputs.forEach((input) => {
    words[input.name] = input.value;
  });

  // GET THE HTML CONTENT
  let content = document.getElementById("content");

  // REMOVE ALL CHILD OF CONTENT
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  // GET THE STORY NUMBER IN THE HIDDEN INPUT FIELD
  let storyNum = words["num"];

  // DISPLAY TITLE, RESULT AND BUTTON
  content.insertAdjacentHTML(
    "beforeend",
    `<div style="font-size: 40px; font-weight: 300;">` +
      stories[storyNum].title +
      "</div>"
  );
  content.insertAdjacentHTML(
    "beforeend",
    `<div style="font-size: 30px; font-weight: 200;">` +
      stories[storyNum].output(words) +
      "</div>"
  );
  content.insertAdjacentHTML(
    "beforeend",
    `<button style="width:100%;border-radius: 25px;" onclick="storyMenu()" class="btn btn-success  form-control-lg ">Create another story</button>`
  );
}

/**************************************************************************************************************************************************
 * FUNCTION TO DISPLAY STORY MENU
 **************************************************************************************************************************************************/
function storyMenu() {
  // GET THE HTML CONTENT
  let content = document.getElementById("content");

  // REMOVE ALL CHILD OF CONTENT
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  // COLOR CLASS ARRAY
  let colorsClass = ["btn btn-danger", "btn btn-warning", "btn btn-info"];

  // ADDING TITLE
  content.insertAdjacentHTML(
    "beforeend",
    `<div style="font-size: 40px; font-weight: 300;">` +
      "Choose a story" +
      "</div><br>"
  );

  // LOOP THROUGH 3 STORY AND ADD BUTTON TO THE CONTENT
  stories.forEach((story, index) => {
    content.insertAdjacentHTML(
      "beforeend",
      `<button style="width:100%" onclick="show(${index})" class="${colorsClass[index]}  form-control-lg">${story.title}</button><br><br>`
    );
  });
}

/**************************************************************************************************************************************************
 * FUNCTION TO DISPLAY WELCOME CONTENT
 **************************************************************************************************************************************************/
function welcomeContent() {
  // GET THE HTML CONTENT
  let content = document.getElementById("content");

  // REMOVE ALL CHILD OF CONTENT
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  content.insertAdjacentHTML(
    "beforeend",
    `<h1>Welcom to Madlibs</h1>
          <p class="lead">
            This version is developed in 2021. Please click play now or navigate
            through the navbar to play. Enjoy the show!
          </p>
          <p class="lead">
            <a
              href="#"
              class="btn btn-secondary border-white bg-white form-control-lg"
              onclick="storyMenu()"
              >Play now</a
            >
          </p>`
  );
}

/**************************************************************************************************************************************************
 ***********************************************************       END OF FILE     *****************************************************************
 **************************************************************************************************************************************************/
