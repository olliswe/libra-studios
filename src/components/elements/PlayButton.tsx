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
  viewBox = "0 0 100 100",
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM42.5 62.9904L65 50L42.5 37.0096V62.9904Z"
          fill={bg}
        />
      </SVGWrapper>
    </HoverStyles>
  );
};

export default withTheme(PlayButton);
