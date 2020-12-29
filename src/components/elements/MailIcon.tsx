import React from "react";
import SVGWrapper from "components/elements/SVG";
import styled, { ThemeProps, withTheme } from "styled-components";
import { ITheme } from "helpers/theme";

const EMAIL = "nick@osomusicgroup.com";

interface IMailButton {
  width?: string;
  height?: string;
  bg?: string;
  viewBox?: string;
  onClick?: any;
}

const HoverStyles = styled.a`
  div:first-child {
    :hover {
      opacity: 0.8;
    }
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MailIcon = ({
  theme,
  width = "1.5rem",
  height = "1.5rem",
  bg = theme.colors.orange,
  viewBox = "0 0 100 100",
  onClick,
}: IMailButton & ThemeProps<ITheme>) => {
  return (
    <HoverStyles href={`mailto:${EMAIL}`} target={"_blank"}>
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
          d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM26.8325 32.8325C28.0043 31.6608 29.5929 31.0018 31.25 31H68.75C70.4071 31.0018 71.9957 31.6608 73.1675 32.8325C74.3392 34.0043 74.9982 35.5929 75 37.25V64.0357C74.9982 65.6928 74.3392 67.2815 73.1675 68.4532C71.9957 69.6249 70.4071 70.2839 68.75 70.2857H31.25C29.5929 70.2839 28.0043 69.6249 26.8325 68.4532C25.6608 67.2815 25.0018 65.6928 25 64.0357V37.25C25.0018 35.5929 25.6608 34.0043 26.8325 32.8325ZM51.096 53.8382L67.1674 41.3382C67.5338 41.045 67.77 40.6193 67.825 40.1533C67.88 39.6873 67.7494 39.2184 67.4613 38.8479C67.1733 38.4775 66.751 38.2353 66.2858 38.1737C65.8206 38.1122 65.3499 38.2362 64.9754 38.519L50 50.1663L35.0246 38.519C34.8398 38.3711 34.6275 38.2615 34.4001 38.1964C34.1726 38.1312 33.9344 38.112 33.6994 38.1397C33.4644 38.1675 33.2373 38.2416 33.0312 38.3579C32.8251 38.4742 32.6442 38.6303 32.499 38.8171C32.3538 39.0039 32.2471 39.2177 32.1852 39.446C32.1233 39.6744 32.1074 39.9128 32.1384 40.1474C32.1695 40.382 32.2468 40.608 32.366 40.8125C32.4852 41.0169 32.6438 41.1956 32.8326 41.3382L48.904 53.8382C49.2174 54.0818 49.603 54.2141 50 54.2141C50.397 54.2141 50.7826 54.0818 51.096 53.8382Z"
          fill={bg}
        />
      </SVGWrapper>
    </HoverStyles>
  );
};

export default withTheme(MailIcon);
