import styled from 'styled-components'

export interface SplitScreenProps {
  Left: React.ComponentType
  Right: React.ComponentType
}

const Container = styled.div`
  display: flex;
`
const Panel = styled.div`
  flex: 1;
`

export default function SplitScreen({ Left, Right }: SplitScreenProps) {
  return (
    <Container>
      <Panel>
        <Left />
      </Panel>
      <Panel>
        <Right />
      </Panel>
    </Container>
  )
}
