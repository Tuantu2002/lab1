import data from "../data";


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
                    <h3 class="pl-2 ml-6 font-bold pt-3"><a href = "/tuyendung/${post.id}">${post.title}</a></h3>
                    <p class="pl-2 ml-6 text-xm pt-3 pb-5	">${post.desc}</p>
                  </div>
                    `
                  )
                  .join("")}
           `;
  },
};
export default News;
