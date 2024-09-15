import React from 'react';
import './Transaction.css';

export default function Transaction() {
  return (
    <div className='transactionDiv'>
        <h2>Recent Transactions</h2>
        <div className='transactionList'></div>
    </div>
  )
}
