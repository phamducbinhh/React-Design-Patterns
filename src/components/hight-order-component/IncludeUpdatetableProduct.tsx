/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react'

export default function IncludeUpdatetableProduct(Components: any, productId: number) {
  return (props: any) => {
    const [product, setproduct] = useState<any>(null)
    const [updatableproduct, setUpdatableproduct] = useState<any>(null)

    useEffect(() => {
      ;(async () => {
        const response = await fetch(`http://localhost:4000/api/v1/products/${productId}`)
        const data = await response.json()
        setproduct(data)
        setUpdatableproduct(data)
      })()
    }, [])

    const productChangeHandler = (updates: any) => {
      setUpdatableproduct({ ...updatableproduct, ...updates })
    }

    const productPostHandler = async () => {
      const response = await fetch(`http://localhost:4000/api/v1/products/${productId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ product: updatableproduct })
      })
      const data = await response.json()
      setproduct(data)
      setUpdatableproduct(data)
    }

    const resetproductHandler = () => {
      setUpdatableproduct(product)
    }

    return (
      <Components
        {...props}
        updatableproduct={updatableproduct}
        changeHandler={productChangeHandler}
        productPostHandler={productPostHandler}
        resetproductHandler={resetproductHandler}
      />
    )
  }
}
