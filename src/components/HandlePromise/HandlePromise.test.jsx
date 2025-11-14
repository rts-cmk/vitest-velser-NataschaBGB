// Opgave 3
// - Skriv tests for en funktion, der returnerer en Promise.
// Test både succes og fejltilfælde.

import { render, screen, waitFor } from "@testing-library/react";
import HandlePromise from "./HandlePromise";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("HandlePromise Component", () => {
   
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("fetches and displays the user data", async () => {
    global.fetch.mockResolvedValueOnce({
      json: async () => ({ id: 4, name: "John", email: "john@gmail.com" }),
    });
    render(<HandlePromise userId={4} />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByRole("heading", {name: /john/i})).toBeInTheDocument();
      expect(screen.getByText(/john@gmail.com/i)).toBeInTheDocument();
    });

  });

  it("handles fetch error", async () => {
    global.fetch.mockRejectedValueOnce(new Error("Failed to fetch"));
    render(<HandlePromise userId={4} />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
      expect(screen.getByText(/failed to fetch user/i)).toBeInTheDocument();
    });
  });

})
