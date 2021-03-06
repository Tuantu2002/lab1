import toastr from "toastr";
import { signin } from "../api/user";
import "toastr/build/toastr.min.css";

const Signin = {
    render() {
        return `
            <form id="formSignin">
            <div class="flex items-center min-h-screen bg-gray-50">
            <div class="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
              <div class="flex flex-col md:flex-row">
                <div class="h-32 md:h-auto md:w-1/2">
                  <img class="object-cover w-full h-full" src="https://source.unsplash.com/user/erondu/1600x900"
                    alt="img" />
                </div>
                <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                  <div class="w-full">
                    <div class="flex justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-blue-600" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                    <h1 class="mb-4 text-2xl font-bold text-center text-gray-700">
                      Sign up
                    </h1> 
                    <div class="mt-4">
                      <label class="block text-sm">
                        Email
                      </label>
                      <input type="email" id="email"
                        class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                        placeholder="Email Address" />
                    </div>
                    <div>
                      <label class="block mt-4 text-sm">
                        Password
                      </label>
                      <input id ="password"
                        class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                        placeholder="Password" type="password" />
                    </div>
                    <button
                      class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                      href="#">
                      SIGNIN
                    </button>
      
                    <div class="mt-4 text-center">
                      <p class="text-sm">Don't have an account yet? <a href="#"
                          class="text-blue-600 hover:underline"> Sign up.</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </form>
        `;
    },
    afterRender() {
        const formSignin = document.querySelector("#formSignin");
        formSignin.addEventListener("submit", async (e) => {
            e.preventDefault();
            const { data } = await signin({
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            });
            // l??u d??? li???u v??o localStorage
            localStorage.setItem("user", JSON.stringify(data.user));
            toastr.success("b???n ???? ????ng nh???p th??nh c??ng");
            setTimeout(() => {
            // ki???m tra quy???n d???a tr??n ID
                if (data.user.id === 1) {
                    document.location.href = "/#/admin/dashboard";
                } else {
                    document.location.href = "/#/";
                }
            }, 2000);
        });
    },
};
export default Signin;