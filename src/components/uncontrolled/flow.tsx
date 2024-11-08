import React, { useState } from 'react'

export const UncontrolledFlow = ({ children, onDone }: { children: React.ReactNode; onDone: (data: any) => void }) => {
  // Khởi tạo state `data` để lưu trữ dữ liệu từ từng bước
  const [data, setData] = useState({})
  // Khởi tạo state `currentStepIndex` để theo dõi bước hiện tại
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  // Chuyển đổi tất cả `children` thành một mảng và lấy child ở bước hiện tại
  const currentChild = React.Children.toArray(children)[currentStepIndex]

  // Hàm `next` để chuyển sang bước tiếp theo
  const next = (dataFromStep: any) => {
    // Tính toán chỉ số bước tiếp theo
    const nextIndex = currentStepIndex + 1
    // Cập nhật `data` với dữ liệu từ bước hiện tại
    const updatedData = { ...data, ...dataFromStep }

    // In ra dữ liệu cập nhật (debugging)
    console.log(updatedData)

    // Nếu còn bước tiếp theo, cập nhật chỉ số bước hiện tại
    if (nextIndex < React.Children.count(children)) {
      setCurrentStepIndex(nextIndex)
    } else {
      // Nếu đã hoàn thành tất cả các bước, gọi hàm `onDone` với `updatedData`
      onDone(updatedData)
    }

    // Lưu dữ liệu cập nhật vào state `data`
    setData(updatedData)
  }

  // Nếu `currentChild` là một React element hợp lệ, thêm prop `next` vào nó
  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { next })
  }

  // Nếu không, render trực tiếp `currentChild`
  return currentChild
}
