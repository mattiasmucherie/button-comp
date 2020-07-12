import React from "react";
import "./App.scss";
import Button from "./component/Button";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(93px, 1fr));
  margin-top: 1rem;
  grid-gap: 1rem;
`;
function App() {
  return (
    <>
      <Container>
        <Button />
        <Button disableShadow />
        <Button variant="outline" />
        <Button variant="text" />
        <Button disabled color="danger" />
        <Button color="danger" />

        <Button size="sm" color="danger" />
        <Button size="lg" />
      </Container>
    </>
  );
}

export default App;
