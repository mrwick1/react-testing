import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { Button, ButtonProps } from "@/components/ui/button";

describe("Button Component", () => {
  const renderComponent = (props: Partial<ButtonProps> = {}) => {
    return render(<Button id="test-button" {...props} />);
  };

  it("should render with default variant and given text", () => {
    renderComponent({ children: "Default" });

    const button = screen.getByTestId("test-button-testid");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Default");
    expect(button).toHaveClass(
      "bg-primary text-primary-foreground hover:bg-primary/90"
    );
  });

  it("should render with destructive variant and given text", () => {
    renderComponent({ variant: "destructive", children: "Destructive" });

    const button = screen.getByTestId("test-button-testid");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Destructive");
    expect(button).toHaveClass(
      "bg-destructive text-destructive-foreground hover:bg-destructive/90"
    );
  });

  it("should render with loading state", () => {
    renderComponent({ loading: true, children: "Loading" });

    const button = screen.getByTestId("test-button-testid");

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-disabled", "true");
    expect(button).toHaveClass(
      "bg-primary text-primary-foreground hover:bg-primary/90"
    );
    expect(screen.getByText("Loading")).toBeInTheDocument();
    expect(button.querySelector(".animate-spin")).toBeInTheDocument();
  });

  it("should render with custom className", () => {
    renderComponent({ className: "custom-class", children: "Custom Class" });

    const button = screen.getByTestId("test-button-testid");

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("custom-class");
  });

  it("should render with outline variant", () => {
    renderComponent({ variant: "outline", children: "Outline" });

    const button = screen.getByTestId("test-button-testid");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Outline");
    expect(button).toHaveClass(
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
    );
  });

  it("should render with different sizes", () => {
    renderComponent({ size: "sm", children: "Small", id: "small-button" });
    let button = screen.getByTestId("small-button-testid");

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("h-9 rounded-md px-3");

    renderComponent({ size: "lg", children: "Large", id: "large-button" });
    button = screen.getByTestId("large-button-testid");

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("h-11 rounded-md px-8");

    renderComponent({ size: "icon", children: "Icon", id: "icon-button" });
    button = screen.getByTestId("icon-button-testid");

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("h-10 w-10 rounded-full");
  });

  it("should render with Slot component if asChild is true", () => {
    renderComponent({ asChild: true, children: <p>Test</p> });
    const button = screen.getByTestId("test-button-testid");

    expect(button).toBeInTheDocument();
    expect(button.tagName).not.toBe("BUTTON");
  });
});
