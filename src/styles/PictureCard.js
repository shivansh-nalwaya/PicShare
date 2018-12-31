import styled from "styled-components";

export const Picture = styled.div`
  margin: 0.8em 0.8em;
  width: 28em;
  max-width: 28em;
  border: 12px solid white;
`;

export const Caption = styled.div`
  div {
    @import url("https://fonts.googleapis.com/css?family=Indie+Flower");
    font-family: "Indie Flower", cursive;
  }
  background-color: white;
  padding-top: 0.6em;
  font-size: 20px;
  font-family: "Indie Flower", cursive;
  font-weight: bold;
`;

export const Description = styled.div`
  font-weight: normal;
  font-size: 16px;
`;

export const Thumbnail = styled.div`
  background-image: ${props => props.url || ""};
  background-size: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 26.2em;
  height: 27.84em;
`;
