import React from 'react'

export default function DataSource({
  children,
  getData = () => {},
  resourceName
}: {
  children: React.ReactNode
  getData: () => any
  resourceName: string
}) {
  const [resource, setResource] = React.useState<any>(null)

  const fetchResource = async () => {
    try {
      const response = await getData()
      const res = await response.json()
      setResource(res?.data?.items)
    } catch (error) {
      console.error(error)
    }
  }

  React.useEffect(() => {
    fetchResource()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getData])
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
