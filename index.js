//makes a POST request to users with a name and email
function submitData(name, email) {
  return (
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, email }),
    })
      //handles the POST request response, retrieves the new id value and appends it to the DOM
      .then((response) => response.json())
      .then(function (data) {
        return (document.body.innerHTML = data["id"]);
      })
  );
}
