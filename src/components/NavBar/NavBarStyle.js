import styled from "styled-components";

export const NavBarWrapper = styled.nav`
  ul {
    display: flex;
    gap: 0.7em;

    a {
      text-decoration: none;

      &:hover {
        color: red;
      }
    }
  }
`;
