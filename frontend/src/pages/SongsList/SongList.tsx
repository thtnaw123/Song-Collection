import {
  SongListContainer,
  UnitSong,
  SongHeader,
  SongTitle,
  SongBtns,
  SongFooter,
  Button,
} from "./songlistEmotion";

const SongList: React.FC = () => {
  return (
    <>
      <SongListContainer>
        <UnitSong>
          <SongHeader>
            <SongTitle>
              <h1> In my feeling </h1>
            </SongTitle>
            <SongBtns>
              <Button>edit</Button>
              <Button>delete</Button>
            </SongBtns>
          </SongHeader>

          <SongFooter>
            <div className="song-genre">Pop music</div>
            <div className="song-artist">Gosaye Worku</div>
          </SongFooter>
        </UnitSong>

        <UnitSong>
          <SongHeader>
            <SongTitle>
              <h1> In my feeling </h1>
            </SongTitle>
            <SongBtns>
              <Button>edit</Button>
              <Button>delete</Button>
            </SongBtns>
          </SongHeader>

          <SongFooter>
            <div className="song-genre">Pop music</div>
            <div className="song-artist">Gosaye Worku</div>
          </SongFooter>
        </UnitSong>
      </SongListContainer>
    </>
  );
};

export default SongList;
