/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'

export default function IncludeProduct(Components: any, productId: number) {
  return (props: any) => {
    const [product, setProduct] = React.useState<any>(null)

    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/v1/products/${productId}`)
        const res = await response.json()
        setProduct(res?.data)
      } catch (error) {
        console.error(error)
      }
    }

    React.useEffect(() => {
      fetchProduct()
    }, [])

    return <Components {...props} product={product} />
  }
}
