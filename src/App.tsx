import { Fragment } from 'react/jsx-runtime'
import Uncontrolled from './components/uncontrolled/uncontrolled'
import Controlled from './components/controlled/controlled'

export default function App() {
  return (
    <Fragment>
      <Uncontrolled />
      <Controlled />
    </Fragment>
  )
}
