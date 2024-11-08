import { Fragment } from 'react/jsx-runtime'
import DataSource from './components/DataSource'
import Product from './components/Product'

export default function App() {
  return (
    <Fragment>
      <DataSource getData={() => fetch('http://localhost:4000/api/v1/products')} resourceName='product'>
        <Product />
      </DataSource>
    </Fragment>
  )
}
