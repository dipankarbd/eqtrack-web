import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import { useActions } from '../hooks/useActions';
import { FilterView } from '../components/FilterView';
import { EventsView } from '../components/EventsView';
import { MapView } from '../components/MapView';

const HomePage = () => {
  const filter = useSelector((state) => state.filter);
  const loading = useSelector((state) => state.loading);
  const events = useSelector((state) => state.events);
  const selectedEvent = useSelector((state) => state.selectedEvent);
  const refreshedAt = useSelector((state) => state.refreshedAt);

  const {
    setFeed,
    setRefreshInterval,
    startRefresh,
    stopRefresh,
    selectEvent,
  } = useActions();

  useEffect(() => {
    startRefresh();

    return () => {
      stopRefresh();
    };
  }, []);

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: '#222' }}>
        <Toolbar variant="dense">
          <Typography variant="h6" component="div">
            EQTrack
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginY: 8 }} maxWidth="xl">
        <Stack direction="row" spacing={2} sx={{ padding: 1 }}>
          <Stack spacing={2}>
            <FilterView
              setFeed={setFeed}
              setRefreshTime={setRefreshInterval}
              feed={filter.feed}
              refreshTime={filter.refreshInterval}
            />
            <EventsView
              loading={loading}
              events={events}
              selectedEvent={selectedEvent}
              onSelect={selectEvent}
              refreshedAt={refreshedAt}
            />
          </Stack>
          <Box
            sx={{
              flexGrow: '1',
            }}>
            <MapView events={events} selectedEvent={selectedEvent} />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default HomePage;
