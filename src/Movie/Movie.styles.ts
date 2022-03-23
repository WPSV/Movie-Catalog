import styled from "styled-components";

export const Img = styled.img`
  display: block;
  width: calc((960px /3) - 10px);

  @media (max-width: 1080px) {
    width: calc((960px /3) - 9px);
  }

  @media (max-width: 720px) {
    width: 230px;
  }
`;

export const MovieYear = styled.p`
  font-weight: bold;
  padding: 0 15px;
  font-size: 14px;
`;

export const Director = styled.p`
  font-weight: bold;
  padding: 0 15px;
  font-size: 14px;
`;

export const Description = styled.p`
  padding: 0 15px;
  font-size: 14px;
`;