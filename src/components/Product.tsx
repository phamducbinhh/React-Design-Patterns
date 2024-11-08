export default function Product({ product }: { product?: any | null }) {
  if (!product) {
    return <div>Loading...</div>
  }
  return product.map((item: any) => (
    <div key={item.id}>
      <h1>{item.name}</h1>
      <p>{item.price}</p>
    </div>
  ))
}
