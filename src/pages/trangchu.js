import Banner from "../components/banner";
import News from "../components/news";
import Header from "../components/header";
import Footer from "../components/footer";


const Trangchu = {
 async render() {
    return /* html */ `
        <div class="container mx-auto">     
           
            
            <div class="header">
            ${Header.render()}
        </div>
        <div class="banner">
        ${Banner.render()}
    </div>
        <div class="news">
                ${ await News.render()}
            </div>
        <div class="footer">
        ${Footer.render()}
    </div>
         
        </div>
        `;
  },
};

export default Trangchu;
