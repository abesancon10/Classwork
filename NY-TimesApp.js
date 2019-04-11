var queryURL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
  search +
  "&api-key=rRmk7giouYFhEKFMhmXl92NPmwIKRSPC";

$("#search").on("click", function() {
  var search = $("#searchTerm").val();
  console.log(search);

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $("#articles").prepend(response.docs.map(makeHTML));
  });
});
function makeHTML(x) {
  return `
    <div>
      <a href= "${x.web_url}" >Title: ${x.headline.main} </a>
      <h2>${x.byline.original} </h2>
    </div>
    `;
}
