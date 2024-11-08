type Book = {
  name: string
  price: number
  title: string
  pages: number
}
export default function LargeListItems({ book }: { book: Book }) {
  const { name, price, title, pages } = book
  return (
    <h2>
      Large Components: {name}, Price: {price}, Title: {title}, Pages: {pages}
    </h2>
  )
}
