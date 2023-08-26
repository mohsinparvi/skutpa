import ProductCard from '@/components/productcard/productcard'
import React from 'react'
import { productData } from './product-data'

export default function MaleProducts() {
  return (
    <div className="grid lg:grid-cols-4 gap-x-4 gap-y-8 my-14 mb-10 md:grid-col-3 sm:grid-cols-2 xs:grid-cols-1">
    {productData.map((item, index) => (
      <div key={item.productId}>
        <ProductCard
          image={item.image}
          title={item.title}
          type={item.type}
          price={item.price}
        />
      </div>
    ))}
  </div>
  )
}
