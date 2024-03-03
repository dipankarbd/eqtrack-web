import {
  APIProvider,
  InfoWindow,
  Map,
  Marker,
} from '@vis.gl/react-google-maps';

export const MapView = ({ events, selectedEvent }) => {
  const position = { lat: 23.7880639, lng: 90.458071 };
  let title = 'Loading...';
  if (selectedEvent) {
    const coordinates = selectedEvent.geometry.coordinates;
    position.lat = coordinates[1];
    position.lng = coordinates[0];
    title = selectedEvent.properties.title;
  }

  const renderEvents = () => {
    return events.map((event) => {
      const title = event.properties.title;
      const coordinates = event.geometry.coordinates;
      const position = { lat: coordinates[1], lng: coordinates[0] };
      return (
        <Marker
          key={event.id}
          position={position}
          clickable={true}
          onClick={() => alert(title)}
          title={title}
        />
      );
    });
  };

  return (
    <APIProvider
      apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
      libraries={['marker']}>
      <Map
        mapId="3837751429"
        defaultZoom={10}
        defaultCenter={position}
        gestureHandling={'greedy'}
        disableDefaultUI
        style={{ height: 732 }}>
        <InfoWindow position={position} maxWidth={200}>
          <p>{title}</p>
        </InfoWindow>
        {renderEvents()}
      </Map>
    </APIProvider>
  );
};
