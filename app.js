let url =
  "https://docs.google.com/spreadsheets/d/1YSX_Mj8bTg1iA_tNOSbUdZWtS9-QmFpENJHveIyUYLE/edit#gid=0";
let id = "1YSX_Mj8bTg1iA_tNOSbUdZWtS9-QmFpENJHveIyUYLE";

let source = `https://spreadsheets.google.com/feeds/cells/1YSX_Mj8bTg1iA_tNOSbUdZWtS9-QmFpENJHveIyUYLE/1/public/full?alt=json`;

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
