import styled from 'styled-components'

export interface SplitScreenProps {
  children: [React.ReactNode, React.ReactNode]
  leftWidth?: number
  rightWidth?: number
}

const Container = styled.div`
  display: flex;
`
const Panel = styled.div<{ flex: number }>`
  flex: ${({ flex }) => flex};
`

export default function SplitScreen({ children, leftWidth = 1, rightWidth = 1 }: SplitScreenProps) {
  const [Left, Right] = children
  return (
    <Container>
      <Panel flex={leftWidth}>{Left}</Panel>
      <Panel flex={rightWidth}>{Right}</Panel>
    </Container>
  )
}
