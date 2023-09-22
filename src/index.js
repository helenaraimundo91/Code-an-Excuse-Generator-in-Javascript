import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector("#the excuse").innerHTML = generateExcuse;
  })
  
  console.log("Hello Rigo from the console!";
};

let generateExcuse = () => {
  let pronoun = ["A","The"];
  let subject = ["jogger", "raccon", "dog, "driver", "comedian", "pincone"];
  let actions = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  let possetion = ["homework", "toe", "car", "shoe"];
  let where = ["on the street", "in my house", "in my driveaway"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionsIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return pronoun[pronounIndex] + "" + subject[subjectIndex] + "" + action[actionIndex] + "" + possetion[possetionIndex] + "" + where[whereIndex];
}