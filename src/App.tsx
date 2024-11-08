import { Fragment } from 'react/jsx-runtime'
import Product from './components/Product'
import DataSourceWithRender from './components/DataSourceWithRender'

export default function App() {
  return (
    <Fragment>

      <DataSourceWithRender
        getData={() => fetch('http://localhost:4000/api/v1/products')}
        render={(product) => <Product product={product} />}
      />
    </Fragment>
  )
}
