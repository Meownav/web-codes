$(() => {
  const div = $(".text-container");
  $("button").on("click", (e) => {
    p = e.target.id.charAt(e.target.id.length - 1);
    if (p == 1) {
      $(div).attr("style", "color:red");
    }
  });
});
