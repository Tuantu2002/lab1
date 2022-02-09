import Banner from "../components/banner";
import Header from "../components/header";


const Gocsinhvien = {
  render() {
    return /* html */ `
        <div class="container mx-auto">
            <div class="banner">
                ${Banner.render()}
            </div>
            <div class="news">
                ${Header.render()}
            </div>
         
        </div>
        `;
  },
};

export default Gocsinhvien;
