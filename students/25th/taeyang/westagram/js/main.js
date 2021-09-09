const input = document.getElementsByClassName("comment-text")[0];
const inputTwo = document.getElementsByClassName("comment-text")[1];
const btn = document.getElementsByClassName("btn")[0];
const btnTwo = document.getElementsByClassName("btn")[1];
const comment = document.getElementsByClassName("comment-second")[0]
const commentTwo = document.getElementsByClassName("comment-second")[1]
const emptyComment = document.getElementsByClassName("empty-comment")[0] 
const emptyCommentTwo = document.getElementsByClassName("empty-comment")[1] 

const onAdd = () => {
  const text = input.value;
    if (input.value ==="") {
      input.focus();
      return
    }
  
  const commentSecond = document.createElement("div");
  commentSecond.setAttribute("class", "comment-second");
  
  const yous = document.createElement("div");
  yous.setAttribute("class", "yous");
  
  const youName = document.createElement("a");
  youName.setAttribute("class", "you-name");
  youName.setAttribute("href", "#");
  youName.innerHTML = "ty_050";
  
  const commentWrit = document.createElement("span");
  commentWrit.setAttribute("class", "comment-writ");
  commentWrit.innerHTML =" " + text;

  const heartLike = document.createElement("img")
  heartLike.setAttribute("class", "heart-like");
  heartLike.setAttribute("alt", "heart-like");
  heartLike.setAttribute("src", "imgs/heart.png");
  
  yous.appendChild(youName);
  yous.appendChild(commentWrit);
  commentSecond.appendChild(yous);
  commentSecond.appendChild(heartLike);
  emptyComment.appendChild(commentSecond)
  input.value ="";
  input.focus();
};

btn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
  return;
})

const onAddTwo = () => {
  const text = inputTwo.value;
    if (inputTwo.value ==="") {
      inputTwo.focus();
      return
    }
  
  const commentSecond = document.createElement("div");
  commentSecond.setAttribute("class", "comment-second");
  
  const yous = document.createElement("div");
  yous.setAttribute("class", "yous");
  
  const youName = document.createElement("a");
  youName.setAttribute("class", "you-name");
  youName.setAttribute("href", "#");
  youName.innerHTML = "ty_050";
  
  const commentWrit = document.createElement("span");
  commentWrit.setAttribute("class", "comment-writ");
  commentWrit.innerHTML =" " + text;

  const heartLike = document.createElement("img")
  heartLike.setAttribute("class", "heart-like");
  heartLike.setAttribute("alt", "heart-like");
  heartLike.setAttribute("src", "imgs/heart.png");
  
  yous.appendChild(youName);
  yous.appendChild(commentWrit);
  commentSecond.appendChild(yous);
  commentSecond.appendChild(heartLike);
  emptyCommentTwo.appendChild(commentSecond)
  inputTwo.value ="";
  inputTwo.focus();
};

btnTwo.addEventListener('click', () => {
  onAddTwo();
});

inputTwo.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAddTwo();
  }
  return;
})
