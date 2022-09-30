import React from 'react'
import { NavLink } from 'react-router-dom'
export default function DetailCard(props) {
  return (
    <div className='product-card'>
        <div className="card-body">
            <img src={props.image} alt={props.name} />
            <div className="titles">
              <h3 className="product-title">{props.name}</h3>
              <p className="product-description">{props.shortDescription}</p>
            </div>
          </div>
          <div className="card-actions">
            <NavLink
              className="btn-buy"
              to={`/detail/${props.id}`}
            >
              Buy Now
            </NavLink>
            <p className="price-text">{props.price} $</p>
          </div>
    </div>
  )
}
