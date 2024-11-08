import { Fragment } from 'react/jsx-runtime'
import DataSourceWithRender from './components/design-pattern/DataSourceWithRender'
import Product from './components/design-pattern/Product'

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
