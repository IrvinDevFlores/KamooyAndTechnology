
let lengthLimit = $("#question-tabs").length && $("#user-answer-tabs").length;


if (lengthLimit) {
  $("#question-tabs a.nav-link").on("click", function () {
    $("#question-tab-contents .tab-pane").hide();
    $($(this).attr("href")).show();
  });

  $("#user-answer-tabs a.nav-link").on("click", function () {
    $("#user-answer-tab-contents .tab-pane").hide();
    $($(this).attr("href")).show();
  });

} else {
  $("a.nav-link").on("click", function () {
    $(".tab-pane").hide();
    $($(this).attr("href")).show();
  });
}

// side bar events
$(document).ready(function () {
  $("#sidebar").mCustomScrollbar({
    theme: "minimal",
  });

  $("#sidebarCollapse").on("click", function () {
    $("#sidebar, #content").toggleClass("active");
    $(".collapse.in").toggleClass("in");
    $("a[aria-expanded=true]").attr("aria-expanded", "false");
  });
});

class IFormPresenter {
  static Render() {
    if (this === IFormPresenter) {
      throw new TypeError("No puedes llamar el metodo estatico");
    } else if (this.Render === IFormPresenter.Render) {
      throw new TypeError("Por favor implemente el metodo abstracto");
    } else {
      throw new TypeError(
        "No se puede llamar el metodo abstracto desde el hijo"
      );
    }
  }

  constructor() {
    if (this.constructor == IFormPresenter) {
      throw new TypeError(
        "No se puede construir objetos con este constructor abstrcto"
      );
    }

    if (this.Render === IFormPresenter.prototype.Render) {
      throw new TypeError(
        `Porfavor implemente el mtodo abstracto ${this.Render}`
      );
    }
  }
}


let GetFromMap = (mapData, key) => {
  const objInstance = mapData.get(key);

  return objInstance;
};


function Log(title, message){
  let m = `${title} => ${message}`
  console.log(m);
}
