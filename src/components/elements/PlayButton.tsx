import React from "react";
import SVGWrapper from "components/elements/SVG";
import styled, { ThemeProps, withTheme } from "styled-components";
import { ITheme } from "helpers/theme";

interface IPlayButton {
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

const PlayButton = ({
  theme,
  width = "6rem",
  height = "6rem",
  bg = theme.colors.orange,
  viewBox = "0 0 512 512",
  onClick,
}: IPlayButton & ThemeProps<ITheme>) => {
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
          d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm74.77 217.3l-114.45 69.14a10.78 10.78 0 01-16.32-9.31V186.87a10.78 10.78 0 0116.32-9.31l114.45 69.14a10.89 10.89 0 010 18.6z"
        />
      </SVGWrapper>
    </HoverStyles>
  );
};

export default withTheme(PlayButton);
