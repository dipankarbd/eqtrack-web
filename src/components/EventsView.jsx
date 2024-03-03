import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import LinearProgress from '@mui/material/LinearProgress';
import { Stack } from '@mui/material';

export const EventsView = ({
  loading,
  events,
  selectedEvent,
  refreshedAt,
  onSelect,
}) => {
  const handleSelection = (event) => {
    onSelect(event);
  };

  const renderRow = (event) => {
    const id = event.id;
    const title = event.properties.title || '??';
    const selected = selectedEvent && selectedEvent.id === id ? true : false;

    return (
      <ListItemButton
        selected={selected}
        key={id}
        onClick={() => handleSelection(event)}>
        <ListItemText primary={title} />
      </ListItemButton>
    );
  };

  return (
    <Card>
      <CardContent>
        <Stack direction="row">
          <Typography sx={{ fontSize: 14, flexGrow: 1 }} color="text.secondary">
            Events
          </Typography>
          <Typography sx={{ fontSize: 12 }} color="text.secondary">
            {refreshedAt && refreshedAt.toLocaleString()}
          </Typography>
        </Stack>

        {loading && <LinearProgress />}

        <List component="nav">{events.map(renderRow)}</List>
      </CardContent>
    </Card>
  );
};
