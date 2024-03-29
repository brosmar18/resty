import { render, screen } from "@testing-library/react";
import Results from "./index";

describe("Results Component", () => {
  it("renders loading state", () => {
    render(<Results isLoading={true} />);
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("renders results text", () => {
    const requestParams = { method: "GET", url: "https://test.com" };
    render(<Results requestParams={requestParams} isLoading={false} />);
    expect(screen.getByTestId("results-text")).toBeInTheDocument();
    expect(screen.getByTestId("method")).toHaveTextContent("Method: GET");
    expect(screen.getByTestId("url")).toHaveTextContent("URL: https://test.com");
  });

  it('displays some data', () => {
    const data = { message: 'Success' };
    render(<Results data={data} requestParams={{}} isLoading={false} />);
    
    const noDataMessage = screen.queryByTestId('no-data');
    expect(noDataMessage).not.toBeInTheDocument();
  });

  it("displays no data message when data is null", () => {
    render(<Results data={null} requestParams={{}} isLoading={false} />);
    expect(screen.getByTestId("no-data")).toHaveTextContent("No Data");
  });
});
