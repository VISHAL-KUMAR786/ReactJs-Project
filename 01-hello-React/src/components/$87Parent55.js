import React , {useState} from 'react'
import Child55 from './$87child55'

function Parent55() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('vishal')

    const obj = {
        fname : 'vishal',
        lname : 'kumar',
    }

    const fun1 = ()=>{
        return <h2>pop πΏπ₯€ππΎ</h2>
    }

    console.log('Incorrect memo parent');
  return (
    <div>
        <button onClick={()=> setCount(co => co + 1)}>π {count}</button>
        <button onClick={()=> setName('Papu')}>π {name}</button>
        <Child55 name={name} fun1={fun1} obj={obj} >

        </Child55>
    </div>
  )
}

export default Parent55