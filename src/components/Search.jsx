import React, { useEffect, useState } from 'react'
import useDebouncing from '../hooks/useDebouncing'
import useFetchData from '../hooks/useFetchData'
import '../styles/Search.css'

export default function Search() {
    const [search, setSearch] = useState("")
    const debounceInput = useDebouncing(search, 600)
    const {queryData: fetchedData} = useFetchData(debounceInput)

   useEffect(() => {
    console.log(`Delayed input API Call: ${debounceInput}`);
   }, [debounceInput])
   
  return (
    <div className="search-container">
      <h2>Simple Product filter </h2>
      <p className='desc'>With custom hook - Debounced search and Fetch data</p>
      <input 
      type="text"
      className="search-input"
      value={search} 
      onChange={(e) => {setSearch(e.target.value)}} 
      placeholder='🔍 Search for products...' />
      
      {!fetchedData?.products || fetchedData.products.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">📦</div>
          <p>{search ? 'No products found' : 'Start typing to search products'}</p>
        </div>
      ) : (
        <ul className="products-list">
          {fetchedData.products.map(product => {
            return <li key={product.id} className="product-item">
              <img src={product.thumbnail} alt={product.title} className="product-image" />
              <h4 className="product-title">{product.title}</h4>
              <span className="price-badge">${product.price}</span>
            </li>
          })}
        </ul>
      )}
    </div>
  )
}
