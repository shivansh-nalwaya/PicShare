import styled from "styled-components";

export const Picture = styled.div`
  width: 30em;
  display: inline-block;
  padding: 1em;
`;

export const Thumbnail = styled.div`
  background-image: ${props => props.url || ""};
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  border-bottom: 1px solid #eeeeee;
  width: 27.84em;
  height: 18em;
`;
