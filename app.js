fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let placeholder = document.querySelector("#row");
    let out = "";

    for (let datas of data) {
      out += `
        <div class="col-md-3 photos">
          <div class="card">
            <div class="card-body" id="card-body">
                <img src='${datas.img}' class='img-fluid'>
                <div class='btn-control'>
                  <a href='${datas.img}' target='_blank' class='preview'>Preview</a>
                  <a href='${datas.img}' target='_blank' download><i class="fas fa-download"></i></a>
                </div>
            </div>
          </div>
        </div>
        `;
    }

    placeholder.innerHTML = out;
  });

fetch("dataa.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (dataa) {
    let placeholder = document.querySelector("#video-container");
    let outs = "";

    for (let datas of dataa) {
      outs += `
        <div class="col-md-3 videos">
            <div class="card">
            <div class="card-body" id="card-body">
                <video width="320" controls>
                <source src="${datas.vid}" type="video/mp4"></source>
                </video>
            </div>
            </div>
        </div>
        `;
    }

    placeholder.innerHTML = outs;
  });

$(document).ready(function () {
  $(".btn-all").click(function () {
    const value = $(this).attr("data-filter");
    if (value === "photos") {
      $(".photos").show("1000");
    } else {
      $(".photos")
        .not("." + value)
        .hide("1000");
      $(".photos")
        .filter("." + value)
        .show("1000");
    }
  });

  $(".btn-all").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});

$(document).ready(function () {
  $(".btn-vid").click(function () {
    Swal.fire({
      title: "",
      text: "Sorry, the videos are not currently accessible since the file size is too large to upload to a free hosting service.",
      icon: "warning",
      confirmButtonColor: "orange",
      footer: "-Systematic",
    });
  });
});
