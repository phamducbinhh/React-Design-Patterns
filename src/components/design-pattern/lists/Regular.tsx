export const RegularList = ({
  items,
  sourceName,
  ItemComponent
}: {
  items: any[]
  sourceName: string
  ItemComponent: any
}) => {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [sourceName]: item }} />
      ))}
    </>
  )
}
