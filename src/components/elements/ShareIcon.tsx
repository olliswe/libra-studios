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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShareIcon = ({
  theme,
  width = "1.5rem",
  height = "1.5rem",
  bg = theme.colors.orange,
  viewBox = "0 0 100 100",
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM60.7216 60.5088C61.5473 60.1561 62.4358 59.9745 63.3336 59.9748C64.7258 59.9747 66.0831 60.4105 67.215 61.221C68.3469 62.0315 69.1966 63.1761 69.645 64.4942C70.0933 65.8122 70.1176 67.2376 69.7146 68.5702C69.3117 69.9028 68.5016 71.0757 67.398 71.9245C66.2945 72.7733 64.9529 73.2552 63.5615 73.3027C62.1701 73.3502 60.7987 72.9608 59.6399 72.1893C58.4811 71.4177 57.5929 70.3027 57.1 69.0007C56.6071 67.6986 56.5342 66.275 56.8916 64.9294L41.4768 56.2565C40.556 57.2165 39.369 57.8791 38.0686 58.1591C36.7681 58.439 35.4136 58.3234 34.1794 57.8272C32.9452 57.331 31.8876 56.4769 31.1428 55.3747C30.398 54.2725 30 52.9727 30 51.6424C30 50.3122 30.398 49.0124 31.1428 47.9102C31.8876 46.808 32.9452 45.9539 34.1794 45.4577C35.4136 44.9615 36.7681 44.8459 38.0686 45.1258C39.369 45.4057 40.556 46.0683 41.4768 47.0284L56.8916 38.3555C56.4755 36.793 56.6432 35.1325 57.3635 33.6849C58.0837 32.2373 59.3071 31.102 60.8044 30.4916C62.3016 29.8813 63.9701 29.8378 65.4971 30.3693C67.0241 30.9008 68.305 31.9708 69.0997 33.3789C69.8945 34.787 70.1485 36.4365 69.8144 38.0185C69.4802 39.6004 68.5807 41.0063 67.2843 41.9727C65.988 42.939 64.3838 43.3996 62.7723 43.2681C61.1608 43.1366 59.6525 42.422 58.53 41.2582L43.1151 49.9312C43.4137 51.0525 43.4137 52.2324 43.1151 53.3537L58.53 62.0266C59.1505 61.3778 59.896 60.8614 60.7216 60.5088Z"
          fill={bg}
        />
      </SVGWrapper>
    </HoverStyles>
  );
};

export default withTheme(ShareIcon);
