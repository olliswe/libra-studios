import Slider from "@material-ui/core/Slider";
import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import useActiveStore from "hooks/useActiveStore";

const Styles = styled.div`
  display: inline-flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  margin-right: 1rem;
  .MuiSlider-root {
    width: 100px;
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const TimeWrapper = styled.div`
  display: inline-flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  min-width: 70px;
`;

export const Time = styled.span`
  font-family: ${({ theme }) => theme.fonts.ProximaRegular};
  color: ${({ theme }) => theme.colors.orange};
  text-transform: uppercase;
  font-size: 14px;
`;

function fmtMSS(s: number) {
  return (s - (s %= 60)) / 60 + (10 < s ? ":" : ":0") + Math.floor(s);
}

const MusicSlider = ({ playerRef }: { playerRef: any }) => {
  const songProgress = useActiveStore((state) => state.songProgress);

  useEffect(() => {
    console.log(playerRef);
  }, [playerRef]);

  const handleChange = useCallback(
    (event, value) => {
      if (!playerRef) {
        return;
      }
      playerRef.seekTo(value / 100);
    },
    [playerRef]
  );

  return (
    <>
      <Styles>
        <Slider value={songProgress * 100} onChange={handleChange} />
      </Styles>
      <TimeWrapper>
        <Time>{playerRef ? fmtMSS(playerRef.getCurrentTime()) : "0:00"}</Time>
        &nbsp;<Time>/</Time>&nbsp;
        <Time>{playerRef ? fmtMSS(playerRef.getDuration()) : "0:00"}</Time>
      </TimeWrapper>
    </>
  );
};

export default MusicSlider;
