// <section class="sidebar">
//   <aside></aside>
// </section>
// <section class="main_info">
//   <header>
//     <nav class="navbar">
//       <img src="./assets/menu.svg" alt="" />
//       <span class="navbar_toggle"></span>
//       <div class="navbar_input_container">
//         <input type="text" class="navbar_input" placeholder="جستجو کنید"/>
//         <img src="./assets/search.svg" class="navbar_input_search" />
//       </div>
//       <img
//         src="https://simple-js-dashboard.vercel.app/Src/profile.jpg"
//         class="navbar_image"
//         alt=""
//       />
//     </nav>
//   </header>
//   <main></main>
// </section>

// .side_collapsed {
//   width: 50px;
// }

// .main_spread {
//   width: calc(100% - 50px);
// }

document.querySelector(".navbar_toggle").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("side_collapsed");
  document.querySelector(".main_info").classList.toggle("main_spread");
});

window.addEventListener(
  "resize",
  () => {
    if (window.innerWidth < 1000) {
      document.querySelector(".sidebar").classList.add("side_collapsed");
      document.querySelector(".main_info").classList.add("main_spread");
    } else {
      document.querySelector(".sidebar").classList.remove("side_collapsed");
      document.querySelector(".main_info").classList.remove("main_spread");
    }
  },
  true
);

window.addEventListener(
  "load",
  () => {
    if (window.innerWidth < 1000) {
      document.querySelector(".sidebar").classList.add("side_collapsed");
      document.querySelector(".main_info").classList.add("main_spread");
    } else {
      document.querySelector(".sidebar").classList.remove("side_collapsed");
      document.querySelector(".main_info").classList.remove("main_spread");
    }
  },
  true
);

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "1500",
      "1600",
      "1700",
      "1750",
      "1800",
      "1850",
      "1900",
      "1900",
      "1950",
      "1999",
      "2050",
    ],
    datasets: [
      {
        data: [
          1286, 3114, 4106, 1206, 4107, 5111, 3133, 4189, 4896, 2894, 1695, 659,
        ],
        label: "قلی زاده",
        borderColor: "#3e95cd",
        backgroundColor: "#7bb6dd",
        fill: false,
      },
      {
        data: [
          3386, 5234, 1234, 6000, 4532, 1322, 2456, 3522, 543, 123, 654, 200,
        ],
        label: "علی پور ",
        borderColor: "#3cba9f",
        backgroundColor: "#71d1bd",
        fill: false,
      },
      {
        data: [
          2386, 4234, 5234, 1000, 2532, 4322, 3456, 1522, 5453, 123, 654, 1200,
        ],
        label: "سجادی",
        borderColor: "#ffa500",
        backgroundColor: "#ffc04d",
        fill: false,
      },
      {
        data: [
          386, 1234, 1634, 1560, 3532, 4322, 5456, 6022, 354, 4123, 654, 1600,
        ],
        label: "بابایی",
        borderColor: "#c45850",
        backgroundColor: "#d78f89",
        fill: false,
      },
    ],
  },
});
