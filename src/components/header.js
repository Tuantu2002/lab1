import toastr from "toastr";
import { reRender } from "../utils";
import "toastr/build/toastr.min.css";

const Header = {
    render() {
        return `
        <div class="bg-orange-500 flex justify-between items-center pr-4">
            <ul class="flex">
              <li><a href="#" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Home Page</a></li>
              <li><a href="/#/about" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">About Page</a></li>
              <li><a href="/#/product" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Product Page</a></li>
            </ul>
            <ul class="flex">
            ${localStorage.getItem("user") ? `
            <li><a id="accountInfo" href="#" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Home Page</a></li>
            <li><a id="logout" href="#" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Logout</a></li>
            ` : ""};
          
            
          </ul>
        </div>
        `;
    },
    afterRender() {
    // lấy thông tin username từ localStorage và hiển thị ra ngài
        const { username } = JSON.parse(localStorage.getItem("user"));
        const logout = document.querySelector("#logout");
        document.querySelector("#accountInfo").innerHTML = username;
        // ddanwg xuat
        logout.addEventListener("click", () => {
            toastr.success("dang xuat thanh cong");
            localStorage.removeItem("user");
            reRender(Header, "#header");
        });
    },
};
export default Header;