import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

export const FilterView = ({ setFeed, setRefreshTime, feed, refreshTime }) => {
  return (
    <Card>
      <CardContent>
        <FeedView setFeed={setFeed} feed={feed} />
        <RefreshIntervalView
          setRefreshTime={setRefreshTime}
          refreshTime={refreshTime}
        />
      </CardContent>
    </Card>
  );
};

const FeedView = ({ setFeed, feed }) => {
  const handleFeedChange = (_, newFeed) => {
    if (newFeed !== null) {
      setFeed(newFeed);
    }
  };

  return (
    <>
      <Typography sx={{ fontSize: 14 }} color="text.secondary">
        Feed
      </Typography>
      <ToggleButtonGroup
        color="primary"
        value={feed}
        onChange={handleFeedChange}
        exclusive
        aria-label="feed">
        <ToggleButton value="hour">Past Hour</ToggleButton>
        <ToggleButton value="day">Past Day</ToggleButton>
        <ToggleButton value="week">Past 7 Days</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

const RefreshIntervalView = ({ setRefreshTime, refreshTime }) => {
  const handleTimeChange = (_, newTime) => {
    if (newTime !== null) {
      setRefreshTime(newTime);
    }
  };

  return (
    <>
      <Typography sx={{ fontSize: 14, marginTop: 2 }} color="text.secondary">
        Refresh Interval
      </Typography>
      <ToggleButtonGroup
        color="primary"
        value={refreshTime}
        onChange={handleTimeChange}
        exclusive
        aria-label="feed">
        <ToggleButton value="60">1 Minute</ToggleButton>
        <ToggleButton value="180">3 Minutes</ToggleButton>
        <ToggleButton value="300">5 Minutes</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};
