import React from 'react'

export const useFetchResource = (resourceUrl: string) => {
  const [resource, setResource] = React.useState<any>(null)

  const fetchProduct = async () => {
    try {
      const response = await fetch(resourceUrl)
      const res = await response.json()
      setResource(res?.data)
    } catch (error) {
      console.error(error)
    }
  }

  React.useEffect(() => {
    fetchProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resourceUrl])

  return resource
}
