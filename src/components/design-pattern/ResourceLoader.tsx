import React from 'react'

export default function ResourceLoader({
  children,
  resourceUrl,
  resourceName
}: {
  children: React.ReactNode
  resourceUrl: string
  resourceName: string
}) {
  const [resource, setResource] = React.useState<any>(null)

  const fetchResource = async () => {
    try {
      const response = await fetch(resourceUrl)
      const res = await response.json()
      setResource(res?.data?.items)
    } catch (error) {
      console.error(error)
    }
  }

  React.useEffect(() => {
    fetchResource()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resourceUrl])
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { [resourceName]: resource })
        }
        return child
      })}
    </>
  )
}
