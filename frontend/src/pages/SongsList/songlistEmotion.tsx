import styled from "@emotion/styled";

const ctabuttonColor = "#5A6ED8";
const textColor = "#fff";

export const SongListContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UnitSong = styled.div`
  border: 1px solid ${ctabuttonColor};
  min-width: 50dvw;

  margin: 30px 0;
  border-radius: 20px;
  @media (max-width: 750px) {
    min-width: 70dvw;
  }
`;

export const SongHeader = styled.div`
  min-height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const SongTitle = styled.div`
  font-size: 4vmin;
  line-height: 1.2;
`;

export const SongBtns = styled.div``;

export const SongFooter = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  margin: 0 5px;
  padding: 8px;
  background: none;
  font-size: 2vmin;
  border-radius: 4px;
  color: ${textColor};
  font-weight: bold;
  cursor: pointer;
  border: 2px solid ${ctabuttonColor};
  &:hover {
    color: ${ctabuttonColor};
  }
`;
