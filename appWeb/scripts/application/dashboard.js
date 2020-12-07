// this hack will make sure Bootstrap tabs work when using Handlebars

let model = [
  { week: "2020-11-2", value: 200 },
  { week: "2020-11-3", value: 320 },
  { week: "2020-11-4", value: 50 },
  { week: "2020-11-5", value: 998 },
  { week: "2020-11-6", value: 1520 },
  { week: "2020-11-7", value: 1600 },
  { week: "2020-11-8", value: 1000 },
  { week: "2020-11-9", value: 1400 },
  { week: "2020-11-10", value: 1890 },
  { week: "2020-11-11", value: 1420 },
  { week: "2020-11-12", value: 800 },

  { week: "2020-11-13", value: 100 },
  { week: "2020-11-14", value: 400 },
  { week: "2020-11-15", value: 594 },

  { week: "2020-11-16", value: 678 },
  { week: "2020-11-17", value: 342 },
  { week: "2020-11-18", value: 50 },

  { week: "2020-11-19", value: 234 },
  { week: "2020-11-20", value: 123 },
  { week: "2020-11-21", value: 543 },

  { week: "2020-11-22", value: 1600 },
  { week: "2020-11-23", value: 1567 },
  { week: "2020-11-24", value: 169 },

  { week: "2020-11-25", value: 234 },
  { week: "2020-11-26", value: 678 },
  { week: "2020-11-27", value: 800 },

  { week: "2020-11-28", value: 876 },
  { week: "2020-11-29", value: 789 },
  { week: "2020-11-30", value: 345 },
];

let graphicLine = CreateComponent("div", "graficoDiario");

let donutGraphic = CreateComponent("div", "productosGrafico");

let graficoDeBarra = CreateComponent("div", "graficoDeBarra");

const container = document.querySelector("#Graphics");

container.appendChild(graphicLine);
container.appendChild(donutGraphic);
container.appendChild(graficoDeBarra);

function CreateComponent(component, id) {
  let graficoDeBarra = document.createElement(component);

  graficoDeBarra.id = id;

  return graficoDeBarra;
}

let counter = 0;
function MakeData() {
  clearInterval();
  let line = null;

  let Graphics = document.querySelector("#graficoDiario");
  Graphics.innerHTML = "";

  let lineModel = {
    // ID of the element in which to draw the chart.
    element: "graficoDiario",
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
      { week: "2020-4-2", value: randomNumber(1, 2000) },
      { week: "2020-4-3", value: randomNumber(1, 2000) },
      { week: "2020-4-4", value: randomNumber(1, 2000) },
      { week: "2020-4-5", value: randomNumber(1, 2000) },
      { week: "2020-4-6", value: randomNumber(1, 2000) },
    ],
    // The name of the data record attribute that contains x-values.
    xkey: "week",
    // A list of names of data record attributes that contain y-values.
    ykeys: ["value"],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ["Value"],
  };

  line = new Morris.Line(lineModel);

}

window.setInterval(function () {
  MakeData();
}, 1000);

let donutModel = {
  element: "donut-example",
  data: [
    { label: "Download Sales", value: 12 },
    { label: "In-Store Sales", value: 30 },
    { label: "Mail-Order Sales", value: 20 },
  ],
};

const donut = new Morris.Donut(donutModel);

let barModel = {
  element: "bar-example",
  data: [
    { y: "2006", a: 100, b: 90 },
    { y: "2007", a: 75, b: 65 },
    { y: "2008", a: 50, b: 40 },
    { y: "2009", a: 75, b: 65 },
    { y: "2010", a: 50, b: 40 },
    { y: "2011", a: 75, b: 65 },
    { y: "2012", a: 100, b: 90 },
  ],
  xkey: "y",
  ykeys: ["a", "b"],
  labels: ["Series A", "Series B"],
};

const bar = new Morris.Bar(barModel);

// render math equations
let elMath = document.getElementsByClassName("mathquill");
for (let i = 0, len = elMath.length; i < len; i += 1) {
  const el = elMath[i];

  katex.render(el.textContent, el, {
    throwOnError: false,
  });
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

let button = "#OcultarButton";
function HideElement() {
  $(document).ready(() => {
    $(button).click(() => {
      $("input").hide();
    });
  });
}

function ChangeColor() {
  $(document).ready(() => {
    $(button).click(() => {
      $(this).css("background-color", "black");
    });
  });
}
