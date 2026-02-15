import {useEffect,useState} from "react"

function EFFECT()
{
    console.log("Component rendering");

// let [count,setcount] = useState(0);
// let [num,setNum]=useState(0);
// let [n,setn] = useState(0);

// useEffect(()=>{console.log("i run every time");

// },[num,n,count]);

const [count,setcount] = useState(0);
const [name,setName] = useState("sabeer");

useEffect(()=>{console.log(" Side Effect running ");},[count,name]);


// useEffect(()=>
// {},
// [])
// if dependency array not give  then code renders on every aapescts
// if dependency array empty then only once on initial render  sideeffect code runs
// if dependency array with variables give  then side effect code runs on every initial render and every time variable state change occurs

function handleInc()
{
    setNum(prev => prev+1);
}

function handleN()
{
    setn(prev => prev-1);
}
return(
    <div>
        {/* <h1>USE EFFECT</h1> */}
        {/* <h1>Timer</h1> */}
        {/* <h1>Seconds : {count}</h1> */}
        {/* <button onClick={()=>setcount(prev =>prev+1)}>INC count</button> */}
        {/* <button onClick={()=>setcount(prev =>prev+1)}>INC count</button> */}
        {/* <h1>Num : {num}</h1> */}
        {/* <button onClick={handleInc}>INC</button> */}
        {/* <h3>N : {n}</h3> */}
        {/* <button onClick={handleN}>DEC</button> */}
        <button onClick={()=> setcount(count+1)}>count</button>
        <h2>{name}</h2>
        <button onClick={()=> setName(pre => pre === "sabeer" ? "ali": "sabeer")}>Toggle Name</button>
    </div>
)
}
export default EFFECT;

