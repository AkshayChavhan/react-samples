import React, { useContext, useState } from "react";
import { UserContext } from "./Main";


const Child1 = () => {
    const fetchedDatas = useContext(UserContext)
    const [term, setTerm] = useState();

    let renderUsers = fetchedDatas.filter(({title})=>{
        return title.indexOf(term) >= 0;
    }).map((datas) => {
        return (
            <div key={datas.id}>
                <p>{datas.title}</p>
            </div>
        )
    });


    return (
        <div>
            <input value={term} type="text" 
            onChange={(e) => setTerm(e.target.value)}/>
            <div>

                {renderUsers}
            </div>
        </div>
    )
}

export default Child1;