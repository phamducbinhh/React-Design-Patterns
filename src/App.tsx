import { useFetchProductId } from './hooks/useFetchProductId'

export default function App() {
  const data = useFetchProductId(1)
  console.log(data)
  return <div></div>
}
