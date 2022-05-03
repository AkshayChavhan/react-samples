import React from "react";


export default function Post({ posts , loading }){
    if(loading){
        return <h2>Loading</h2>
    }

    return(
        <>
            <ul className="list-group mb-4">
            {
                posts.map(data =>{
                    return (
                    <li key={data.id} className="list-group-item">
                        {data.title}
                    </li>
                )})
            }
            </ul>
        </>
    )
}