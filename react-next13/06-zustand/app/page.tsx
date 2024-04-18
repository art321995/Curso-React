"use client";

import CountBear from '@/components/bear/count.bear';
import IncreaseBear from '@/components/bear/increase.bear'
import AddProduct from '@/components/product/add.product';
import ListProduct from '@/components/product/list.product';
import TotalProduct from '@/components/product/total.product';
import { useBearsStore } from '@/store/bears.store'
import { useCartStore } from '@/store/cart.store';
import React, { useEffect } from 'react'

const HomePage = () => {

  const bears = useBearsStore((state) => state.bears);

  useEffect(() =>{
    useCartStore.persist.rehydrate();
  },[]);

  return (
    <div>
      <h1>Home Page</h1>
      <p> Bears: {bears}</p>
      <CountBear />
      <IncreaseBear />
      <hr/> <br/>
      <AddProduct />
      <TotalProduct />
      <ListProduct />
          </div>
  )
}

export default HomePage;
