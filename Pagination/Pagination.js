import React from "react";


export default function Pagination({ postPerPage , totalPosts , paginate}){
    const pageNumbers = [];

    for(let i=1 ; i<=Math.ceil(totalPosts/postPerPage) ; i++){
        // console.log("pageNumbers" + pageNumbers +"," + "totalPosts"+totalPosts+","+ "postPerPage"+postPerPage)
        pageNumbers.push(i);
    }
    return(
       <nav>
           <ul className="pagination">
               {pageNumbers.map(number =>(
                   <li key={number} className="page-item">
                        <a href="!#" 
                        className="page-link"
                        onClick={()=> paginate(number)}>
                            {number}</a>
                   </li>
               ))}
           </ul>
       </nav>
    )
}