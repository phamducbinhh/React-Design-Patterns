import React from 'react'

export const useFetchProductId = (productId: number) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return product
}
