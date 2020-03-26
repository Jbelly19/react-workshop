import React from 'react'
import ReactDOM from 'react-dom'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import StarRatings from './StarRatings'
import Heading from 'YesterTech/Heading'
import 'YesterTech/styles/global-styles.scss'
import 'YesterTech/StarRatings.scss'
import 'YesterTech/styles/center-lesson.scss'

const products = [
  {
    id: 1,
    name: 'Mario Kart',
    rating: 5,
    brand: 'Nintendo',
    condition: 'new'
  },
  {
    id: 2,
    name: 'Donkey Kong',
    rating: 3.5,
    brand: 'Nintendo',
    condition: 'good'
  },
  {
    id: 3,
    name: 'Nintendo NES',
    rating: 4,
    brand: 'Nintendo',
    condition: 'fair'
  }
]

function BrowseProducts() {
  return (
    <div>
      {products.map((product, index) => {
        return (
          <div key={product.id}>
            <Heading>{product.name}</Heading>
            <StarRatings rating={product.rating} />
            <ul>
              <li>brand: {product.brand}</li>
              <li>condition: {product.condition}</li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}

ReactDOM.render(<BrowseProducts />, document.getElementById('root'))
