import React , { useEffect , useState } from "react";


export default function Fetching(){

    const [ fetchedData , setFetchedData ] = useState([]);

    const url = 'https://jsonplaceholder.typicode.com/todos' ;

    const fetcher = async () =>{
        const rawData = await fetch(url);
        const convertData = await rawData.json();
        return convertData ;
    }

    useEffect(()=>{
        fetcher().then(mydata =>{
            console.log(mydata);
            setFetchedData(mydata);
        })
    } , [])

    return (
        <>
            <h3>Fetching Data from Link:- 'https://jsonplaceholder.typicode.com/todos'</h3>
            <ol>
            {
                fetchedData.map((finishedData) => <>
                            <li key={finishedData.id}> {finishedData.title}</li>         
                </>)
            }
            </ol>
        </>
    )
}