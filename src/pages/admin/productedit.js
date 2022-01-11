import data from "../../data";

const AdminproductEdit = {
  render(id) {
    const result = data.find((post) => post.id === id);
    return /* html */ `
   
        <form>
        <input type= "Text" cols="40"   rows="10" placeholder="Tiêu đề bài viết" value="${result.title}"" id="post-title" /> </br>
        <img  src="${result.img}" />
        <input type= "Text" placeholder="ảnh"id="post-img" /></br>
        <textarea type= "Text" cols="40" rows="10" value="" id="post-desc" >${result.desc}</textarea></br>
        <button class="btn">Cập nhật</button>
        </form>
    
    `;
  },
};
export default AdminproductEdit;
