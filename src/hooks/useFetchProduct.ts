import React from 'react'

export const useFetchProduct = () => {
  const [product, setProduct] = React.useState<any>(null)

  const fetchProduct = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/v1/products`)
      const res = await response.json()
      setProduct(res?.data?.items)
    } catch (error) {
      console.error(error)
    }
  }

  React.useEffect(() => {
    fetchProduct()
  }, [])

  return product
}
