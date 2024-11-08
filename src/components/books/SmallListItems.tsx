type Book = {
  name: string
  price: number
}
export default function SmallListItems({ book }: { book: Book }) {
  const { name, price } = book
  return (
    <h2>
      Small Components: {name}, Price: {price}
    </h2>
  )
}
