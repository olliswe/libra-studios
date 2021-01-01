import styled from "styled-components";
import H1 from "components/elements/H1";

export const CurrentSong = styled.span<{ isActive: boolean }>`
  font-family: ${({ theme }) => theme.fonts.ProximaRegular};
  color: ${({ theme }) => theme.colors.orange};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  text-transform: uppercase;
  margin-left: 1rem;
  cursor: pointer;
`;

export const StyledH1 = styled(H1)`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 18px;
`;
