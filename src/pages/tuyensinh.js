import Banner from "../components/banner";
import News from "../components/news";
import Header from "../components/header";
import Footer from "../components/footer";

const Tuyensinh = {
  render() {
    return /* html */ `
        <div class="container mx-auto">
            <div class="banner">
                ${Banner.render()}
            </div>
            <div class="news">
                ${News.render()}
            </div>
         
        </div>
        `;
  },
};

export default Tuyensinh;
