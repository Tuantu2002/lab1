const Header = {
  render() {
    return /* html */ ` 
    <div class="bg-violet-800 float-right  font-medium">
    <a href="/dangnhap" class="text-white">Sign in/</a>
    <a href="/dangky" class= "text-white">Sign up</a>
    
    </div>
    <div class="bg-violet-800 py-4">
        <a href="#">
          <img src="./images/LOGO-PTCĐ-White-Transparency.png" width="18%" alt="" class="mx-auto " />
        </a>
      </div>
      <nav class="bg-orange-600 px-3 flex ">
        <ul class="flex" id="menu">
          <li>
            <a href="/"
              class=" text-white transition duration-200 ease-in-out block p-3 hover:bg-orange-500 hover:text-orange">trang
              chủ</a>
          </li>
          <li>
            <a href="/tuyensinh"
              class="text-white transition duration-200 ease-in-out block p-3 hover:bg-orange-500 hover:text-orange">Tuyển
              sinh</a>
          </li>
          <li>
            <a href="/daotao"
              class="text-white transition duration-200 ease-in-out block p-3 hover:bg-orange-500 hover:text-orange">đào
              tạo</a>
          </li>
          <li>
            <a href="/gocsinhvien"
              class="text-white transition duration-300 ease-in-out block p-3 hover:bg-orange-500 hover:text-orange">
              Góc
              sinh viên</a>
          </li>
          <li>
            <a href="/tuyendung"
              class="text-white transition duration-300 ease-in-out block p-3 hover:bg-orange-500 hover:text-orange">
              Tuyển
              dụng
            </a>
          </li>
        </ul>
        <div class="px-6 pt-3 ml-48">
          <input type="search" value="Tìm kiếm " name="" id="">
          <button
            class="text-white hover:bg-orange-400 active:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300">Tìm
            Kiếm</button>
        </div>
      </nav>`;
  },
};
export default Header;
