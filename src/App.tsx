import { Fragment } from 'react/jsx-runtime'
import LargeListItems from './components/books/LargeListItems'
import { books } from './data/books'
import Modal from './components/Modal'

export default function App() {
  return (
    <Fragment>
      <Modal>
        <LargeListItems book={books[0]} />
      </Modal>
    </Fragment>
  )
}
