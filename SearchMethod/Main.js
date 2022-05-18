import React, { useEffect, useState ,createContext} from "react";
import Child1 from "./Child1";
export const UserContext = createContext({});

const Main = () => {
    const [fetchedData, setFetchedData] = useState([]);
    


    useEffect(() => {
        const fetching = async () => {
            const fetchs = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await fetchs.json();
            setFetchedData(data);
        }

        console.log(fetchedData);
        fetching();
    }, [])


    return (
        <UserContext.Provider value={fetchedData}>
            <Child1 />
        </UserContext.Provider>
    )

}

// export { UserContext};
export default Main;