function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
    return parent.appendChild(el);
  }
  
  const ul = document.getElementById("profesionales");
  const url = "https://randomuser.me/api/?seed=foobar&results=10";
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let profesionales = data.results;
      return profesionales.map(function (profesional) {
        let li = createNode("li"),
          img = createNode("img"),
          span = createNode("span");
        img.src = profesional.picture.medium;
        span.innerHTML = `${profesional.name.first} ${profesional.name.last}`;
        append(li, img);
        append(li, span);
        append(ul, li);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  