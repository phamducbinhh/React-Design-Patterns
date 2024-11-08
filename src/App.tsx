import React from 'react'
import { Fragment } from 'react/jsx-runtime'
import ControlledModal from './components/controlled/modal'

export default function App() {
  const [show, setShow] = React.useState(false)
  return (
    <Fragment>
      <ControlledModal show={show} close={() => setShow(false)}>
        <h1>Modal</h1>
      </ControlledModal>
      <button onClick={() => setShow(!show)}>{show ? 'Hide Modal' : 'Show Modal'}</button>
    </Fragment>
  )
}
