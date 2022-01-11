import AdminproductLists from "../../components/admin/product";

const Adminproducts = {
  render() {
    return /*html*/ `
    <h1>Quản LÝ product</h1>
    ${AdminproductLists.render()}
    `;
  },
};
export default Adminproducts;
