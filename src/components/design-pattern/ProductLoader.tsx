import React from 'react'

export default function ProductLoader({ children }: { children: React.ReactNode }) {
  const [product, setProduct] = React.useState<any>(null)

  const fetchProduct = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/products')
      const res = await response.json()
      setProduct(res?.data?.items)
    } catch (error) {
      console.error(error)
    }
  }

  React.useEffect(() => {
    fetchProduct()
  }, [])
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { product })
        }
        return child
      })}
    </>
  )
}
