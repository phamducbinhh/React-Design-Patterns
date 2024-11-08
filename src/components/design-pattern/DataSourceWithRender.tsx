import React from 'react'

export default function DataSourceWithRender({
  getData = () => {},
  render
}: {
  getData: () => any
  render: (resource: any) => React.ReactNode
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
  return render(resource)
}
