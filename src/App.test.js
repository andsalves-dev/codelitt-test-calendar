import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import moment from 'moment'
import App from './App'

const today = moment()

describe('App', () => {
  it('renders the calendar with current month name and year heading', () => {
    render(<App />);
    const linkElement = screen.getByText(`${today.format('MMMM YYYY')}`);
    expect(linkElement).toBeInTheDocument();
  });

  describe('Calendar', () => {
    it('renders the add reminder button', () => {
      render(<App />);
      expect(screen.getByText('Add reminder')).toBeInTheDocument()
    });

    it('can add a reminder', () => {
      const { container } = render(<App />);
      userEvent.click(screen.getByText('Add reminder'))
      userEvent.type(container.querySelector('[name="title"]'), 'Test reminder')
      userEvent.click(screen.getByText('Save'))
      expect(screen.getByTestId('reminder')).toHaveTextContent('Test reminder')
    });
  })
})
