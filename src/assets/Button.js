import React from 'react'
import './button.css'

 export default function SellButton(props) {
    return(
      <button>
  <span class="button_top"> {props.children}
  </span>
</button>)
}