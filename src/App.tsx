import React from "react"
import Button from "./component/Button"
import styled from "styled-components"

const Container = styled.div`
  margin: 2rem 2rem;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 290px);
  justify-content: center;
  justify-items: start;
  align-items: center;
  column-gap: 0.5rem;
  row-gap: 3rem;
`
const ButtonContainer = styled.div`
  overflow: scroll;
  max-width: 300px;
`
const Code = styled.code`
  font-family: Ubuntu, Menlo, Monaco, Consolas, "Courier New", monospace;
  font-size: 12px;
`
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0;
  text-align: center;
`
const Title = styled.h1``

function App() {
  return (
    <Container>
      <TitleContainer>
        <Title>Button Component</Title>
        <p>
          A reusable Button component. The challenge description can be found{" "}
          <a href={"https://devchallenges.io/challenges/ohgVTyJCbm5OZyTB2gNY"}>here</a>. This is best view on a desktop
          to see the hover effects.
        </p>
      </TitleContainer>
      <Grid>
        <ButtonContainer>
          <pre>
            <Code>{`<Button/>`}</Code>
          </pre>
          <Button />
        </ButtonContainer>
        <ButtonContainer>
          <pre>
            <Code>{`<Button disableShadow />`}</Code>
          </pre>
          <Button text="Default" disableShadow />
        </ButtonContainer>
        <ButtonContainer>
          <pre>
            <Code>{`<Button disabled/>`}</Code>
          </pre>
          <Button disabled />
        </ButtonContainer>
        <ButtonContainer>
          <pre>
            <Code>{`<Button variant="outline" />`}</Code>
          </pre>
          <Button variant="outline" />
        </ButtonContainer>
        <ButtonContainer>
          <pre>
            <Code>{`<Button variant="text" />`}</Code>
          </pre>
          <Button variant="text" />
        </ButtonContainer>
        <ButtonContainer>
          <pre>
            <Code>{`<Button variant="text" color="danger" />`}</Code>
          </pre>
          <Button variant="text" color="danger" />
        </ButtonContainer>
        <ButtonContainer>
          <pre>
            <Code>{`<Button color="danger" />`}</Code>
          </pre>
          <Button color="danger" />
        </ButtonContainer>
        <ButtonContainer>
          <pre>
            <Code>{`<Button color="primary" />`}</Code>
          </pre>
          <Button color="primary" />
        </ButtonContainer>
        <ButtonContainer>
          <pre>
            <Code>{`<Button color="secondary" />`}</Code>
          </pre>
          <Button color="secondary" />
        </ButtonContainer>
        <ButtonContainer>
          <pre>
            <Code>{`<Button size="sm" color="danger" />`}</Code>
          </pre>
          <Button size="sm" color="danger" />
        </ButtonContainer>
        <ButtonContainer>
          <pre>
            <Code>{`<Button size="lg" color="danger" />`}</Code>
          </pre>
          <Button size="lg" color="danger" />
        </ButtonContainer>
        <ButtonContainer>
          <pre>
            <Code>{`<Button startIcon="sports_rugby" />`}</Code>
          </pre>
          <Button startIcon="sports_rugby" />
        </ButtonContainer>
        <ButtonContainer>
          <pre>
            <Code>{`<Button endIcon="sports_rugby" />`}</Code>
          </pre>
          <Button endIcon="sports_rugby" />
        </ButtonContainer>
      </Grid>
    </Container>
  )
}

export default App
