import Navigo from "navigo";
import Daotao from "./pages/daotao";
import Gocsinhvien from "./pages/gocsinhvien";
import Trangchu from "./pages/trangchu";
import Tuyendung from "./pages/tuyendung";
import Tuyensinh from "./pages/tuyensinh";
import Header from "./components/header";
import Footer from "./components/footer";
import DetailPage from "./pages/detail";
import Adminproducts from "./pages/admin/product";
import AdminproductEdit from "./pages/admin/productedit";
const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
  document.querySelector("#header").innerHTML = Header.render();
  document.querySelector("#app").innerHTML = content;
  document.querySelector("#footer").innerHTML = Footer.render();
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
  "/tuyendung/:id": ({ data }) => {
    const { id } = data;
    print(DetailPage.render(+id));
  },
  "admin/tuyendung": () => {
    print(Adminproducts.render());
  },
  "admin/tuyendung/:id/edit": ({ data }) => {
    const { id } = data;
    print(AdminproductEdit.render(+id));
  },
});

router.resolve();
