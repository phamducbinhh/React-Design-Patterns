import IncludeProduct from './components/hight-order-component/IncludeProduct'
import ProductById from './components/hight-order-component/ProductId'

const ProductInfoWithLoader = IncludeProduct(ProductById, 1)
export default function App() {
  return (
    <>
      <ProductInfoWithLoader />
    </>
  )
}
