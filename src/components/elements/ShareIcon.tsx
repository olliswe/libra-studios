import React from "react";
import SVGWrapper from "components/elements/SVG";
import styled, { ThemeProps, withTheme } from "styled-components";
import { ITheme } from "helpers/theme";

interface IShareButton {
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

const ShareIcon = ({
  theme,
  width = "1.5rem",
  height = "1.5rem",
  bg = theme.colors.orange,
  viewBox = "0 0 512 512",
  onClick,
}: IShareButton & ThemeProps<ITheme>) => {
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
          d="M384 336a63.78 63.78 0 00-46.12 19.7l-148-83.27a63.85 63.85 0 000-32.86l148-83.27a63.8 63.8 0 10-15.73-27.87l-148 83.27a64 64 0 100 88.6l148 83.27A64 64 0 10384 336z"
        />
      </SVGWrapper>
    </HoverStyles>
  );
};

export default withTheme(ShareIcon);
