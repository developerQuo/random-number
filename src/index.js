const form = document.getElementById("random-game-form");
const resultHtml = document.getElementById("result");

const handlePlay = (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const max = Number(formData.get("maxNumber"));
  const userNum = Number(formData.get("userNumber"));

  if (userNum > max) {
    alert("Your number is more than max number!");
    return;
  }

  const randomNum = Math.floor(Math.random() * (max + 1));

  const result = userNum === randomNum ? "won" : "lost";
  resultHtml.innerHTML = `
    <div>You chose: ${userNum}, the machine chose: ${randomNum}.</div>
    <div class="outcome">You ${result}!</div>
  `;
};

form.addEventListener("submit", handlePlay);
