import Navigo from "navigo";
import Daotao from "./pages/daotao";
import Gocsinhvien from "./pages/gocsinhvien";
import Trangchu from "./pages/trangchu";
import Tuyendung from "./pages/tuyendung";
import Tuyensinh from "./pages/tuyensinh";
import Header from "./components/header";
import Footer from "./components/footer";
const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
  document.querySelector("#header").innerHTML = Header.render();
  document.querySelector("#app").innerHTML = content;
  // document.querySelector("#footer").innerHTML = Footer.render();
};

router.on({
  "/": () => {
    print(Trangchu.render());
  },
  "/tuyensinh": () => {
    print(Tuyensinh.render());
  },
  "/daotao": () => {
    print(Daotao.render());
  },
  "/gocsinhvien": () => {
    print(Gocsinhvien.render());
  },
  "/tuyendung": () => {
    print(Tuyendung.render());
  },
});

router.resolve();
