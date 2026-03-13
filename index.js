// console.log("trying coding and it stressful");
//  const candidateScore = document.getElementById("score");
//  const trigger = document.getElementById("button");
//  trigger.addEventlistener("click", ()=> {console.log("my button", candidateScore.value)
// console.log("this is score", candidateScore);});
  //  conditional statement









console.log("Interest Rate Calculator");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  const principal = document.getElementById("principal");
  const Interest = document.getElementById("interest");
  const time = document.getElementById("time");

  console.log("principal", principal.value);
  console.log("interest", Interest.value);
  console.log("time", time.value);

  let p = Number(principal.value);
  let t = Number(time.value);
  let r = Number(Interest.value) / 100;

  const new_interest = p * t * r;

  console.log("New Principal amount", p+=new_interest);
});