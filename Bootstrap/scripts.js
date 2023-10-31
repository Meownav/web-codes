// $(() => {
//   $("button").on("click", (e) => {
//     id = e.target.id;
//     $(".imgdiv").removeClass(
//       "col-lg-12 col-md-12 col-sm-12 col-lg-6 col-md-6 col-sm-6 col-lg-3 col-md-3 col-sm-3"
//     );
//     if (id === "one") {
//       $(".imgdiv").addClass("col-lg-12 col-md-12 col-sm-12 col-12");
//       console.log("one clicked");
//     } else if (id === "two") {
//       $(".imgdiv").addClass("col-lg-6 col-md-6 col-sm-6 col-6");
//       console.log("two clicked");
//     } else if (id === "three") {
//       $(".imgdiv").addClass("col-lg-3 col-md-3 col-sm-3 col-3");
//       console.log("three clicked");
//     }
//   });
// });
$(() => {
  $("#grid-2").on("click", () => {
    $(".gallery > div").removeClass();
    $(".gallery > div").addClass("col-sm-6");
  });
  $("#grid-4").on("click", () => {
    $(".gallery > div").removeClass();
    $(".gallery > div").addClass("col-md-3");
  });
  $("#reset").on("click", () => {
    $(".gallery > div").removeClass();
    $(".gallery > div").addClass("col-sm-6");
    $(".gallery > div").addClass("col-md-3");
  });
});
