import { render, screen, fireEvent } from '@testing-library/react';
import { FilterView } from './FilterView';

describe('FilterView', () => {
  it('renders feed and refresh interval', () => {
    render(
      <FilterView
        setFeed={jest.fn()}
        setRefreshTime={jest.fn()}
        feed={'day'}
        refreshTime={'60'}
      />
    );

    expect(screen.getByText('Past Day')).toBeInTheDocument();
    expect(screen.getByText('1 Minute')).toBeInTheDocument();
  });

  it('calls to setFeed and setRefreshTime when clicked', () => {
    const setFeedFn = jest.fn();
    const setRefreshTimeFn = jest.fn();
    render(
      <FilterView
        setFeed={setFeedFn}
        setRefreshTime={setRefreshTimeFn}
        feed={'day'}
        refreshTime={'60'}
      />
    );

    fireEvent.click(screen.getByText(/Past 7 Days/i));
    expect(setFeedFn).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText(/3 Minutes/i));
    expect(setRefreshTimeFn).toHaveBeenCalledTimes(1);
  });
});
