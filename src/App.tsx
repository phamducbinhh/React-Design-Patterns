import { Fragment } from 'react/jsx-runtime'
import { LargeAuthorListItem } from './components/authors/LargeListItems'
import { SmallAuthorListItem } from './components/authors/SmallListItems'
import { RegularList } from './components/lists/Regular'
import { authors } from './data/authors'

export default function App() {
  return (
    <Fragment>
      <RegularList items={authors} sourceName={'author'} ItemComponent={SmallAuthorListItem} />
      <RegularList items={authors} sourceName={'author'} ItemComponent={LargeAuthorListItem} />
    </Fragment>
  )
}
