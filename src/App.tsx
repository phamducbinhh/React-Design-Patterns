import SplitScreen from './components/SplitScreen'

const LeftSideComponent = () => {
  return (
    <div>
      <h1>Left</h1>
      <p>Left content</p>
    </div>
  )
}

const RightSideComponent = () => {
  return (
    <div>
      <h1>Right</h1>
      <p>Right content</p>
    </div>
  )
}

export default function App() {
  return <SplitScreen Left={LeftSideComponent} Right={RightSideComponent} />
}
