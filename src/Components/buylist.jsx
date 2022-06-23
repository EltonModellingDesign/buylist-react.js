import React from 'react';
import {useState} from 'react';
import './buylist.css';
import Logo from "./BuyList Logo.svg";
import Enter from "./Enter.svg";

function buylist() {
  let lista = document.getElementById('lista')
  let Item = document.getElementById('Item')
  let ButtonEnter = document.getElementById('ButtonEnter')

  let [input, setInput] = useState()
  let [changeInput, setChange] = useState('peixe')

  let [inputNumber, setNumber] = useState()
  let [changeInputNumber, setPrice] = useState('10')

  let totalPrice = 0

  function createItem(){
    changeInput = input
    setChange(input)
    console.log(changeInput)
    setInput("")

    /*Item.childNodes[4].style.display="flex"
    Item.childNodes[3].style.pointerEvents='all'
    Item.childNodes[3].value=""*/

    /*const newItem = Item.cloneNode(true)*/
    const newItem = document.createElement('span')
    newItem.classList.add('compra')
    newItem.style.margin="10px"
    newItem.textContent=changeInput


    lista.appendChild(newItem)
    console.log(newItem)
  }
/*
  function tookPrice(event) {
    changeInputNumber = inputNumber


    setNumber(`R$ ${changeInputNumber}`)

    Item.childNodes[4].style.display="none"
    Item.childNodes[3].style.pointerEvents='none'
    let priceCamp = Item.childNodes[3].value

    console.log("funfou")
    
    
    

    totalPrice += priceCamp

    setPrice(totalPrice)

    console.log("hello")
  }
*/


  function Refresh () {
    window.location.reload(true)
}

  return (
    <section>
      <div className='Logo'>
        <img src={Logo} alt='Logo' height='100px' />
      </div>
      <div className='search'>
        <input type='text' placeholder='escreva aqui' 
        value={input || ""} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={createItem}>Criar Item</button>
      </div>
      <div className='Lista' id="lista">
        <div className='Items'>Items no Carrinho</div>
        <span className='hr'></span>
{/*
        <div className='Item' id='Item'>
          <input type='checkbox' className='checkbox' id="checkbox"/>
          <label htmlFor='checkbox' className='caixa'></label>
          <span className='compra'>{changeInput}</span>
          <input type='text' placeholder='Preço' className='price'
          value={inputNumber || ""} onChange={(e) => setNumber(e.target.value)}/>
          <button className='enter' onClick={tookPrice} id='ButtonEnter'>
            <img src={Enter} alt='Logo' height='100px' />
          </button>
          <button className='x'></button>          
        </div>
  */}
      </div>
      {/*
      <div className='Total'>
          <span>TOTAL</span>
          <span>{`R$ ${changeInputNumber}`}</span>
      </div>
        */}
      <div className='Reiniciar' onClick={Refresh}>Reiniciar lista</div>
    </section>    
  );
}

export default buylist;