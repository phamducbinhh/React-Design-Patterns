import Product from './components/design-pattern/container/Product'
import CheckProps from './components/hight-order-component/CheckProps'

const ProductWrapper = CheckProps(Product)
export default function App() {
  return (
    <>
      <ProductWrapper test='test' login='login' />
    </>
  )
}
