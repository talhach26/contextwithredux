import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import Transaction from './Transaction'

function TransactionList() {
  const {transaction}=useContext(GlobalContext)
  console.log(transaction)
  return (
    <div className='list-height'>
    <h3>History</h3>
      <ul  className="list">
      {transaction.map(transaction=>(<Transaction key={transaction.id} transaction={transaction} /> ))}
      </ul>
      
    </div>
  )
}

export default TransactionList
