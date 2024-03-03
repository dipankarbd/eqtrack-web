import { render, screen, fireEvent } from '@testing-library/react';
import { EventsView } from './EventsView';

describe('EventsView', () => {
  const events = [
    {
      properties: {
        title: 'M 0.8 - 6 km SSE of Houston, Alaska',
      },
      geometry: {
        coordinates: [-149.7776, 61.573, 35],
      },
      id: 'ak024401sffh',
    },
  ];

  const refresedAt = new Date();

  it('renders title', () => {
    render(
      <EventsView
        loading={false}
        events={events}
        selectedEvent={events[0]}
        onSelect={jest.fn()}
        refreshedAt={refresedAt}
      />
    );

    expect(screen.getByText(events[0].properties.title)).toBeInTheDocument();
  });

  it('calls to onSelect when clicked', () => {
    const onSelectFn = jest.fn();
    render(
      <EventsView
        loading={false}
        events={events}
        selectedEvent={events[0]}
        onSelect={onSelectFn}
        refreshedAt={refresedAt}
      />
    );

    fireEvent.click(screen.getByText(events[0].properties.title));
    expect(onSelectFn).toHaveBeenCalledTimes(1);
  });
});
