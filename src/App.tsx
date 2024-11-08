import { Fragment } from 'react/jsx-runtime'
import Product from './components/Product'
import ProductLoader from './components/ProductLoader'

export default function App() {
  return (
    <Fragment>
      <ProductLoader>
        <Product />
      </ProductLoader>
    </Fragment>
  )
}
