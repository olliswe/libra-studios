import React from "react";
import SVGWrapper from "components/elements/SVG";
import styled, { ThemeProps, withTheme } from "styled-components";
import { ITheme } from "helpers/theme";

interface IPauseButton {
  width?: string;
  height?: string;
  bg?: string;
  viewBox?: string;
  onClick?: any;
}

const HoverStyles = styled.div`
  div:first-child {
    :hover {
      opacity: 0.8;
    }
  }
`;

const PauseButton = ({
  theme,
  width = "6rem",
  height = "6rem",
  bg = theme.colors.orange,
  viewBox = "0 0 512 512",
  onClick,
}: IPauseButton & ThemeProps<ITheme>) => {
  return (
    <HoverStyles>
      <SVGWrapper
        width={width}
        height={height}
        viewBox={viewBox}
        cursor={"pointer"}
        onClick={onClick}
      >
        <path
          fill={bg}
          d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-32 272a16 16 0 01-32 0V192a16 16 0 0132 0zm96 0a16 16 0 01-32 0V192a16 16 0 0132 0z"
        />
      </SVGWrapper>
    </HoverStyles>
  );
};

export default withTheme(PauseButton);
