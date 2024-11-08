import { Fragment } from 'react/jsx-runtime'
import { LargeAuthorListItem } from './components/authors/LargeListItems'
import { SmallAuthorListItem } from './components/authors/SmallListItems'
import LargeListItems from './components/books/LargeListItems'
import SmallListItems from './components/books/SmallListItems'
import { RegularList } from './components/lists/Regular'
import { authors } from './data/authors'
import { books } from './data/books'

export default function App() {
  return (
    <Fragment>
      <RegularList items={authors} sourceName={'author'} ItemComponent={SmallAuthorListItem} />
      <RegularList items={authors} sourceName={'author'} ItemComponent={LargeAuthorListItem} />
      {''}
      <RegularList items={books} sourceName={'book'} ItemComponent={SmallListItems} />
      <RegularList items={books} sourceName={'book'} ItemComponent={LargeListItems} />
    </Fragment>
  )
}
