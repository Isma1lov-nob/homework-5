

import React, { useState } from 'react';



const Auth= () => {

  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');

  function addInput() {

    let newInput= {
        name: inputOne,
        password: inputTwo
    };

    alert(JSON.stringify(newInput))


  }

  return (

    <div>

        <form>

            
            <input 
                type="text" 
                name='input1' 
                value={inputOne} 
                onChange={(event) => setInputOne(event.target.value)}
            />

            <input 
                type="text" 
                name='input2' 
                value={inputTwo} 
                onChange={(event) => setInputTwo(event.target.value)}
            />

            <input type="submit" value="зарегистрироваться" onClick={addInput}/>

        </form>

    </div>
  )

}

export default Auth;
