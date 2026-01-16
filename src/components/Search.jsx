import React, { useEffect, useState } from 'react'
import useDebouncing from '../hooks/useDebouncing'
import useFetchData from '../hooks/useFetchData'
import '../styles/Search.css'

export default function Search() {
    const [search, setSearch] = useState("")
    const debounceInput = useDebouncing(search, 600)
    const {queryData: fetchedData, loading} = useFetchData(debounceInput)

   useEffect(() => {
    console.log(`Delayed input API Call: ${debounceInput}`);
   }, [debounceInput])
   
  return (
    <div className="search-page">
      <div className="search-header">
        <h1>Product Search</h1>
        <p className='search-subtitle'>Discover millions of products with intelligent search</p>
      </div>
      
      <div className="search-container">
        <div className="search-input-wrapper">
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <input 
            type="text"
            className="search-input"
            value={search} 
            onChange={(e) => {setSearch(e.target.value)}} 
            placeholder='Search products, brands, categories...' />
          {search && (
            <button className="clear-btn" onClick={() => setSearch('')}>
              ✕
            </button>
          )}
        </div>
      </div>

      {loading && (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Searching for products...</p>
        </div>
      )}
      
      {!loading && (!fetchedData?.products || fetchedData.products.length === 0) ? (
        <div className="empty-state">
          <div className="empty-state-icon">📦</div>
          <h3>{search ? 'No products found' : 'Start typing to search products'}</h3>
          <p>{search ? `We couldn't find any products matching "${search}"` : 'Try searching for your favorite products'}</p>
        </div>
      ) : (
        <div className="results-section">
          <p className="results-count">Found {fetchedData?.products?.length || 0} products</p>
          <ul className="products-list">
            {fetchedData.products.map(product => {
              return <li key={product.id} className="product-item">
                <div className="product-image-wrapper">
                  <img src={product.thumbnail} alt={product.title} className="product-image" />
                  <div className="product-overlay">
                    <button className="view-btn">View Details</button>
                  </div>
                </div>
                <div className="product-content">
                  <h4 className="product-title">{product.title}</h4>
                  <p className="product-desc">{product.description?.substring(0, 40)}...</p>
                  <div className="product-footer">
                    <span className="price-badge">${product.price}</span>
                    <span className="rating-badge">★ {(Math.random() * 2 + 3).toFixed(1)}</span>
                  </div>
                </div>
              </li>
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
