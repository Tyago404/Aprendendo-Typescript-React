import { Person } from "../../typescript";
import { useState } from "react";

export function InputName() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");

  function handleCreateName(){
    if(!name)return alert('Type your name')

    const person1 = new Person(name)
    setUserName(person1.name)
  }

  return(
    <>
        <input
        style={{marginBottom: "1rem"}}
        type="text"
        value={name}
        onChange={e=>setName(e.target.value)}
        placeholder="Digite seu nome"
        /><br/>

        <button onClick={handleCreateName}>Print</button>

        {userName &&(
            <div>
                <h1>Hello {userName}!</h1> 
            </div>
        )}
    </>
  )
}
