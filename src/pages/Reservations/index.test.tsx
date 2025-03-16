/// <reference types="@testing-library/jest-dom" />

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fetchAPI, submitAPI } from "@/api/api";
import ReservationsPage from ".";

jest.mock("@/api/api", () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
  seededRandom: jest.fn(),
}));

jest.mock("date-fns", () => ({
  format: jest.fn().mockImplementation(() => "March 20, 2025"),
}));

describe("ReservationsPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (fetchAPI as jest.Mock).mockReturnValue(["17:00", "17:30", "18:00"]);

    (submitAPI as jest.Mock).mockResolvedValue(true);
  });

  test("renders all form fields", () => {
    render(<ReservationsPage />);

    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time slot/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /confirm reservation/i })
    ).toBeInTheDocument();
  });

  test("validates form fields", async () => {
    const user = userEvent.setup();
    render(<ReservationsPage />);

    await user.click(
      screen.getByRole("button", { name: /confirm reservation/i })
    );

    await waitFor(() => {
      expect(
        screen.getByText(/name must be at least 2 characters/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/please enter a valid email address/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/reservation date is required/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/please select an available time slot/i)
      ).toBeInTheDocument();
    });
  });

  test("submits form successfully with valid data", async () => {
    const user = userEvent.setup();
    render(<ReservationsPage />);

    await user.type(screen.getByLabelText(/your name/i), "John Doe");
    await user.type(
      screen.getByLabelText(/email address/i),
      "john@example.com"
    );
    await user.type(screen.getByLabelText(/number of guests/i), "{backspace}4");

    await user.click(screen.getByRole("button", { name: /pick a date/i }));
    const dateButton = screen.getByRole("button", { name: /20/i });
    await user.click(dateButton);

    await waitFor(() => {
      expect(fetchAPI).toHaveBeenCalled();
    });

    await user.click(screen.getByRole("button", { name: /select a time/i }));
    await user.click(screen.getByRole("option", { name: "18:00" }));

    await user.click(
      screen.getByRole("button", { name: /confirm reservation/i })
    );

    await waitFor(() => {
      expect(submitAPI).toHaveBeenCalledWith(
        expect.objectContaining({
          name: "John Doe",
          email: "john@example.com",
          guests: 4,
          timeSlot: "18:00",
        })
      );
    });

    await waitFor(() => {
      expect(screen.getByText(/reservation confirmed/i)).toBeInTheDocument();
      expect(screen.getByText(/john doe/i)).toBeInTheDocument();
      expect(screen.getByText(/john@example.com/i)).toBeInTheDocument();
      expect(screen.getByText(/4 people/i)).toBeInTheDocument();
    });
  });

  test("fetches available time slots when date is selected", async () => {
    const user = userEvent.setup();
    render(<ReservationsPage />);

    await user.click(screen.getByRole("button", { name: /pick a date/i }));
    const dateButton = screen.getByRole("button", { name: /20/i });
    await user.click(dateButton);

    await waitFor(() => {
      expect(fetchAPI).toHaveBeenCalled();
    });

    await user.click(screen.getByRole("button", { name: /select a time/i }));
    expect(screen.getByRole("option", { name: "17:00" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "17:30" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "18:00" })).toBeInTheDocument();
  });

  test("handles API error gracefully", async () => {
    const user = userEvent.setup();

    (fetchAPI as jest.Mock).mockImplementation(() => {
      throw new Error("API Error");
    });

    render(<ReservationsPage />);

    await user.click(screen.getByRole("button", { name: /pick a date/i }));
    const dateButton = screen.getByRole("button", { name: /20/i });
    await user.click(dateButton);

    await waitFor(() => {
      expect(fetchAPI).toHaveBeenCalled();
      const selectButton = screen.getByRole("button", {
        name: /no available times/i,
      });
      expect(selectButton).toBeInTheDocument();
      expect(selectButton).toBeDisabled();
    });
  });

  test("displays singular form for one guest", async () => {
    const user = userEvent.setup();

    (submitAPI as jest.Mock).mockResolvedValue(true);

    render(<ReservationsPage />);

    await user.type(screen.getByLabelText(/your name/i), "John Doe");
    await user.type(
      screen.getByLabelText(/email address/i),
      "john@example.com"
    );
    await user.clear(screen.getByLabelText(/number of guests/i));
    await user.type(screen.getByLabelText(/number of guests/i), "1");

    await user.click(screen.getByRole("button", { name: /pick a date/i }));
    const dateButton = screen.getByRole("button", { name: /20/i });
    await user.click(dateButton);

    await waitFor(() => {
      expect(fetchAPI).toHaveBeenCalled();
    });
    await user.click(screen.getByRole("button", { name: /select a time/i }));
    await user.click(screen.getByRole("option", { name: "17:00" }));

    await user.click(
      screen.getByRole("button", { name: /confirm reservation/i })
    );

    await waitFor(() => {
      expect(screen.getByText(/1 person/i)).toBeInTheDocument();
    });
  });
});
