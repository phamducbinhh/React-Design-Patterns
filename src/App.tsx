import { useFetchResource } from './hooks/useFetchResource'

export default function App() {
  const data = useFetchResource('http://localhost:4000/api/v1/products')
  return <div>{JSON.stringify(data)}</div>
}
