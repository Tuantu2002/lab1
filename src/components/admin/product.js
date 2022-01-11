import data from "../../data";

const AdminproductsList = {
  render() {
    return /*html*/ `
    
     ${data
       .map(
         (post) => /* html */ `   <div class="flex flex-col">
     <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
       <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
         <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
           <table class="min-w-full divide-y divide-gray-200">
             <thead class="bg-gray-50">
               <tr>
                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                   STT
                 </th>
                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                   Tittle
                 </th>
                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                   Mô tả
                 </th>
                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                   
                 </th>
                 <th scope="col" class="relative px-6 py-3">
                   <span class="sr-only">Edit</span>
                 </th>
               </tr>
             </thead>
             <tbody class="bg-white divide-y divide-gray-200">
               <tr>
                 <td class="px-6 py-4 whitespace-nowrap">
                 <div class="text-sm text-gray-900">${post.id}</div>
                  
                 </td>
                 <td class="px-6 py-4 whitespace-nowrap">
                   <div class="text-sm text-gray-900">${post.title}</div>

                 </td>
                 <td class="px-6 py-4 whitespace-nowrap  ">
                 <div class="text-sm text-gray-900"><p>${post.desc}</p></div>
                 </td>
                 <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                   <a href="" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                 </td>
                 <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                 <a href="" class="text-indigo-600 hover:text-indigo-900">Delete</a>
               </td>
               </tr>

             </tbody>
           </table>
         </div>
       </div>
     </div>
     </div>
     
`
       )
       .join()}
    
    `;
  },
};
export default AdminproductsList;
