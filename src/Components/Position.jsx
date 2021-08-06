import React, { useState } from 'react';


export default function Position() {

  const [riskReward, setRr] = useState(2)
  const [confirmations, setConfirmations] = useState(4)
  const [balance, setBalance] = useState('1000')

  const risk = (100 / (riskReward * confirmations)).toFixed(0)
  const positionSize = (balance / 100 * (riskReward * confirmations)).toFixed(0)

  
  return (

    <div>

      <h1>Position Sizer</h1>

      <div className="sizer-box">

        <div className="box left">

          <span>Account Balance:</span>
          <span>Risk / Reward 1:{riskReward}</span>
          <span>Confirmations: {confirmations}</span>

        </div>

        <div className="box right">

          <input
            className="balance"
            onInput={e => setBalance(e.target.value)}
            placeholder='1000'/>

          <input
            className="slider"
            onInput={e => setRr(e.target.value)}
            defaultValue="2" type="range" min="1" max="10"/>

          <input
            className="slider"
            onInput={e => setConfirmations(e.target.value)}
            defaultValue="2" type="range" min="1" max="10"/>

        </div>

      </div>

      <p>Your Position Size <sub>£{positionSize}</sub>

      <br/>
        Your Risk <sub>%{risk}</sub>
      </p>

    </div>

  )
}
