let url =
  "https://docs.google.com/spreadsheets/d/1UUtUMHgcWyVz91n1LW8yT8ZlY648CoSXcM0qs-LhrAY/edit#gid=0";
let id = "1UUtUMHgcWyVz91n1LW8yT8ZlY648CoSXcM0qs-LhrAY";

let source = `https://spreadsheets.google.com/feeds/list/1UUtUMHgcWyVz91n1LW8yT8ZlY648CoSXcM0qs-LhrAY/od6/public/values?alt=json`;

fetch(source)
  .then(response => response.json())
  .then(data => {
    console.log("data", data);

    let projects = data.feed.entry.map(project => {
      return {
        title: project.gsx$title.$t,
        image: project.gsx$image.$t,
        description: project.gsx$description.$t,
        url: project.gsx$url.$t
      };
    });
    app(projects);
  })
  .catch(err => console.log("err", err));

function app(projects) {
  console.log("app - projects", projects);
  for (let i = 0; i < projects.length; i++) {
    let $card = `<div class="card">
                  <a href="${projects[i].url}" target="_blank"><img class="pImg" src="${projects[i].image}"></img></a>
                <div class="cardOverlay">
                    <h4 class="project-title">${projects[i].title}</h4>
                    <p class="desc-p">${projects[i].description}</p>
                  
                </div>
            </div>`;
    $("#projects").append($card);
  }
}
