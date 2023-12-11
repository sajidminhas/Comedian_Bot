let jokeIndex = 0;
const jokes = [
  ["If the internet is a boat, where would they park it?", "Google doc."],
  ["What did 0 say to 8?", "Nice belt."],
  ["Want to hear a construction joke?", "Oh never mind, I'm still working on that one."],
  ["I told my wife she was drawing her eyebrows too high.", "She looked at me surprised."]

];
const chatContent = document.querySelector(".chat-content");
const jokeButton = document.getElementById("requestJokeButton");

function scrollToNewElement(element) {
    element.scrollIntoView();
}

function appendUserMessage() {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message user-message";
  chatContent.appendChild(messageDiv);
  const avatar = document.createElement("div");
  avatar.className = "fas fa-smile message-avatar";
  messageDiv.appendChild(avatar);
  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = "Tell me a joke!";
  messageDiv.appendChild(contentDiv);
  chatContent.scrollTop = chatContent.scrollHeight;
  scrollToNewElement(messageDiv);
}

function appendBotMessage(messageText) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message bot-message";
  chatContent.appendChild(messageDiv);
  const avatar = document.createElement("div");
  avatar.className = "fas fa-robot message-avatar";
  messageDiv.appendChild(avatar);
  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = messageText;
  messageDiv.appendChild(contentDiv);
  scrollToNewElement(messageDiv);
}
appendBotMessage(
  "Hello! I am Comedian Bot, here to make you laugh. Let me think of a joke.");

function requestJoke() {
  appendUserMessage();
  if (jokeIndex >= jokes.length) {
    appendBotMessage("Sorry, I'm out of jokes for now!");
    return;
  } else {
    appendBotMessage("Hmm ..");
  }
  jokeButton.style.display = "none";
  setTimeout(function() {
    appendBotMessage("Ok, got one.");
  }, 2000);
  setTimeout(function() {
    appendBotMessage(jokes[jokeIndex][0]);
  }, 2500);
  setTimeout(function() {
    appendBotMessage(jokes[jokeIndex][1]);
    jokeIndex++;
    jokeButton.style.display = "inline-block";
    scrollToNewElement(jokeButton);
  }, 5000);
}