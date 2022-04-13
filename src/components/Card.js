import React from 'react';

function Card({ id, name, email }) {
  return (
    <div className='tc bg-light-green dib br3 ma2 grow bw2 shadow-5'>
        <img src={`https://robohash.org/${id}?200x200`} alt='robot'/>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
  )
}

export default Card