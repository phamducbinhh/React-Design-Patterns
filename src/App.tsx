import { Fragment } from 'react/jsx-runtime'
import Product from './components/Product'
import ResourceLoader from './components/ResourceLoader'

export default function App() {
  return (
    <Fragment>
      <ResourceLoader resourceUrl='http://localhost:4000/api/v1/products' resourceName='product'>
        <Product />
      </ResourceLoader>
    </Fragment>
  )
}
