import React,{useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

function AddTransaction() {
  const [text,setText]=useState('')
  const [amount,setAmount]=useState('')
  const {addTransaction}=useContext(GlobalContext)

  const onSubmit = () =>{
    //e.preventdefault()

    const newTransaction={
      id:Math.floor(Math.random()*10000000),
      text,
      amount:+amount
    }
      addTransaction(newTransaction)
      setText('')
      setAmount('')

  }


  return (
    <>
    
      <h3>Add new transaction</h3>
        
          <div className="form-control">
            <label htmlFor="text">Text</label>
              <input type="text" placeholder="Enter text..." value={text} onChange={(e)=>setText(e.target.value)} />
          </div>
    <div className="form-control">
      <label htmlFor="amount">Amount <br />
        (negative - expense, positive - income)</label>
          <input type="number"  placeholder="Enter amount..." value={amount} onChange={(e)=>setAmount(e.target.value)} />
    </div>
      <button onClick={onSubmit} className="btn">Add transaction</button>
        
    
    </>
  )
}

export default AddTransaction
