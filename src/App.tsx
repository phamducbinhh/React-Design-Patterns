import SplitScreen from './components/SplitScreen'

const LeftSideComponent = ({ title }: { title: string }) => {
  return (
    <div style={{ backgroundColor: 'red' }}>
      <h1>{title}</h1>
      <p>Left content</p>
    </div>
  )
}

const RightSideComponent = ({ title }: { title: string }) => {
  return (
    <div style={{ backgroundColor: 'blue' }}>
      <h1>{title}</h1>
      <p>Right content</p>
    </div>
  )
}

export default function App() {
  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSideComponent title='Left Side' />
      <RightSideComponent title='Right Side' />
    </SplitScreen>
  )
}
