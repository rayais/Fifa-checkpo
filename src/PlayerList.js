import React from 'react'
import { players } from './Players'
import Player from './Player'


function PlayerList() {
    console.log(players)
  return (
    <>
        <h1 style={{textAlign:'center',marginBottom:'50px'}}>TOP TUNISIAN PLAYER IN EUROPE</h1>
    <div style={{display:"flex",justifyContent:'center',alignItems:'center',gap:'10px'}}>
        {
            players.map((el)=>
                (<Player props={el}/>)
            )
        }
    </div>
    </>
  )
}

export default PlayerList