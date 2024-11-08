import { useFetchProduct } from './hooks/useFetchProduct'

export default function App() {
  const data = useFetchProduct()
  return <div>{JSON.stringify(data)}</div>
}
