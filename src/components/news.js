import data from "../data";
import data1 from "../data1";

const News = {
  render() {
    return /* html */ `
            <h2 class="uppercase font-bold text-xl my-5 text-blue-800">Tin Tức Học Tập</h2>
            <div class="grid grid-cols-3 gap-8">
                ${data
                  .map(
                    (post) => /*html */ `
  
                    <div class="border border-orange-600	">
                    <img src="${post.img}" width="80%" class="pl-2 ml-6 pt-4">
                    <h3 class="pl-2 ml-6 font-bold pt-3">${post.title}</h3>
                    <p class="pl-2 ml-6 text-xm pt-3 pb-5	">${post.desc}</p>
                  </div>
                    `
                  )
                  .join("")}
            </div>
            <h2 class="uppercase font-bold text-xl my-5 text-blue-800">Hoạt động sinh viên</h2>
            <div class="grid grid-cols-3 gap-8">
            ${data1
              .map(
                (post) => /*html */ `

                <div class="border border-orange-600	">
                <img src="${post.img1}" width="80%" class="pl-2 ml-6 pt-4">
                <h3 class="pl-2 ml-6 font-bold pt-3">${post.title1}</h3>
                <p class="pl-2 ml-6 text-xm pt-3 pb-5	">${post.desc1}</p>
              </div>
                `
              )
              .join("")}
        </div>
        `;
  },
};
export default News;
