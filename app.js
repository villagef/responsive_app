////////////////navbar//////////////////////////////
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

const changeToOpen = burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
const changeToClose = navLinks.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

const htmlBar = document.querySelector(".bar-html");
const cssBar = document.querySelector(".bar-css");
const javascriptBar = document.querySelector(".bar-javaScript");
const reactBar = document.querySelector(".bar-react");

var tl = new TimelineLite();

tl.fromTo(
  htmlBar,
  0.75,
  { width: `calc(0% - 6px)` },
  { width: `calc(90% - 6px)`, easy: Power4.easyOut }
)
  .fromTo(
    cssBar,
    0.75,
    { width: `calc(0% - 6px)` },
    { width: `calc(70% - 6px)`, easy: Power4.easyOut }
  )
  .fromTo(
    javascriptBar,
    0.75,
    { width: `calc(0% - 6px)` },
    { width: `calc(80% - 6px)`, easy: Power4.easyOut }
  )
  .fromTo(
    reactBar,
    0.75,
    { width: `calc(0% - 6px)` },
    { width: `calc(60% - 6px)`, easy: Power4.easyOut }
  );

function validation() {
  const name = document.querySelector("#name").value;
  const surname = document.querySelector("#surname").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;
  const error = document.querySelector("#error");
  let text = "";

  error.style.display = "block";

  if (name.length < 3) {
    text = "Please enter your name";
    error.innerHTML = text;

    return false;
  }
  if (surname.length < 3) {
    text = "Please enter your surname";
    error.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please enter your email";
    error.innerHTML = text;
    return false;
  }
  if (message.length < 10) {
    text = "Write something more";
    error.innerHTML = text;
    return false;
  }
  error.style.display = "none";
  alert("Form submitted");
  return false;
}

///////////// googlemap//////////////////////////

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.674, lng: -73.945 },
    zoom: 12,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],
  });
}
//////////////profile picture/////////////////////

const pray = document.querySelector(".pray");
const inner = document.querySelector("#inner");

const onMouseEnterHandler = function (event) {
  update(event);
};
const onMouseLeaveHandler = function () {
  inner.style = "";
};
const onMouseMoveHandler = function (event) {
  if (isTimeToUpdate()) {
    update(event);
  }
};

pray.onmouseenter = onMouseEnterHandler;
pray.onmouseleave = onMouseLeaveHandler;
pray.onmousemove = onMouseMoveHandler;

let counter = 0;
let updateRate = 10;
const isTimeToUpdate = function () {
  return counter++ % updateRate === 0;
};

let mouse = {
  _x: 0,
  _y: 0,
  x: 0,
  y: 0,
  updatePosition: function (event) {
    let e = event || window.event;
    this.x = e.clientX - this._x;
    this.y = (e.clientY - this._y) * -1;
  },
  setOrigin: function (e) {
    this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
    this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
  },
  show: function () {
    return "(" + this.x + ", " + this.y + ")";
  },
};
mouse.setOrigin(pray);

const update = function (event) {
  mouse.updatePosition(event);
  updateTransformStyle(
    (mouse.y / inner.offsetHeight / 2).toFixed(2),
    (mouse.x / inner.offsetWidth / 2).toFixed(2)
  );
};

const updateTransformStyle = function (x, y) {
  let style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
  inner.style.transform = style;
  inner.style.webkitTransform = style;
  inner.style.mozTransform = style;
  inner.style.msTransform = style;
  inner.style.oTransform = style;
};
