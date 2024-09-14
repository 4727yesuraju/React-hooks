import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [data,setData] = useState([]);

    useEffect(()=>{
        const fetchData = async (url)=>{
           try {
              const res = await fetch(url);
              const data = await res.json();
              setData(data);
           } catch (error) {
              console.log("while fetching data : ",error.message)
           }
        }
        fetchData("https://jsonplaceholder.typicode.com/todos");
    },[])

  return (
    <div className="h-screen">
        <ol>
            {
                data.map((item,idx)=>(
                    <li key={item.id} className="mb-10">
                        <pre>
                            {JSON.stringify(item,null,2)}
                        </pre>
                    </li>
                ))
            }
        </ol>
    </div>
  )
}

export default UseEffect
