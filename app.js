let form = document.getElementById("userForm");
let outputDiv = document.ElementByIf("jsonOutput");

form.addEventListener("submit");

function displayInfo(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  let hobby = document.getElementById("hobbies").value;
  let birthday = document.getElementById("birthday").value;

  const user = {
    name: name,
    age: age,
    email: email,
    hobby: hobby,
    birthday: birthday,
  };

  const myJSON = JSON.stringify(user);
  console.log(user);
  console.log(myJSON);
  document.getElementById("jsonOutput").innerHTML = myJSON;

  let jsonOutput = `<pre>${JSON.stringify(jsonOutput, null, 2)}</pre>`;
  outputDiv.innerHTML = jsonOutput;
}
