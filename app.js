fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let placeholder = document.querySelector("#row");
    let out = "";

    for (let datas of data) {
      out += `
        <div class="col-md-3">
          <div class="card">
            <div class="card-body" id="card-body">
                <img src='${datas.img}' class='img-fluid'>
            </div>
          </div>
        </div>
        `;
    }

    placeholder.innerHTML = out;
  });
