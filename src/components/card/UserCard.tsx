import React from 'react'
import "./usercard.scss"

function UserCard(props: { icon: string | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; amount: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) {
  return (
    <div className='cardmain'>
        <img src={props.icon} alt='icon' />
        <h4>{props.title} </h4>
        <span>{props.amount} </span>

    </div>
  )
}

export default UserCard