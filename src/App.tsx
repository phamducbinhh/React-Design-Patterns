import { UncontrolledFlow } from './components/uncontrolled/flow'

// Định nghĩa từng bước của quy trình, mỗi bước nhận `next` để chuyển tiếp
const StepOne = ({ next }: { next?: any }) => {
  return (
    <>
      <h1>Step #1: Enter your name</h1>
      <button onClick={() => next({ name: 'TestName' })}>Next</button>
    </>
  )
}
const StepTwo = ({ next }: { next?: any }) => {
  return (
    <>
      <h1>Step #2: Enter your age</h1>
      <button onClick={() => next({ age: 23 })}>Next</button>
    </>
  )
}
const StepThree = ({ next }: { next?: any }) => {
  return (
    <>
      <h1>Step #3: Enter your country</h1>
      <button onClick={() => next({ country: 'Poland' })}>Next</button>
    </>
  )
}

// Component chính, sử dụng `UncontrolledFlow` để quản lý các bước
function App() {
  return (
    <>
      <UncontrolledFlow
        onDone={(data) => {
          console.log(data)
          alert('Onboarding Flow Done!')
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow>
    </>
  )
}

export default App
