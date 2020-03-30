import React, { useState, useEffect } from 'react'
import ProductFilterList from 'YesterTech/ProductFilterList'
import { getCategories } from './utils'

function useCategories() {
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    let current = true
    getCategories().then(categories => {
      if (current) {
        setCategories(categories)
      }
    })

    return () => {
      current = false
    }
  }, [])

  return categories
}

function ProductFilters() {
  // const categories = null
  // const [categories, setCategories] = useState(null)

  // useEffect(() => {
  //   let current = true
  //   getCategories().then(categories => {
  //     if (current) {
  //       setCategories(categories)
  //     }
  //   })

  //   return () => {
  //     current = false
  //   }
  // }, [])

  let categories = useCategories()

  if (!categories) return <div>Loading Filters...</div>

  return (
    <div className="spacing">
      <ProductFilterList
        list={categories}
        urlKey="categories"
        label="Categories"
      />
    </div>
  )
}

export default ProductFilters
