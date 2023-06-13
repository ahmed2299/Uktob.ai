import './App.css';
import { useState } from "react";

function App() {

  const [inputString, setInputString] = useState('')
  const [items, setItems] = useState([])
  const addItem=()=>{
    if(inputString.trim()!==''){
      setItems([...items,inputString])
      setInputString('')
    }
  }
  const deleteItem=(index)=>{
    const newItems=[...items]
    newItems.splice(index,1)
    setItems(newItems)
  }
  return (
    <div className="container my-5 py-5">
      <div className="mb-3">
        <input type="text" id="inputString" className="form-control" placeholder='Enter Item' onChange={((e)=>setInputString(e.target.value))}/>
      </div>
      <button className="btn btn-primary" onClick={()=>addItem()}>Add</button>
      {
        items.map((item, index) => {
          return(
          <ul>
            <li>
              {item}
              <button className="btn btn-primary mx-3" key={index} onClick={()=>deleteItem(index)}>Delete</button>
            </li>
          </ul>
          )
        })
      }
    </div>
  );
}

export default App;
