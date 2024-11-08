export default function ProductById({ product }: { product?: any | null }) {
  if (!product) {
    return <div>No product</div>
  }
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
    </div>
  )
}
