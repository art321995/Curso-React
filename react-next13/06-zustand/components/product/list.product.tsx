import { useCartStore } from '@/store/cart.store';
import React from 'react'

const ListProduct = () => {

    const items = useCartStore((state) => state.items)
  return (
    <div>
      <pre>
        {JSON.stringify(items, null, 2)}
      </pre>
    </div>
  )
}

export default ListProduct;
