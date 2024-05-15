import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { BadgeProps, Badge } from "../components/ui/badge";

describe("Badge Component", () => {
  const renderComponent = (props: Partial<BadgeProps> = {}) => {
    return render(<Badge {...props} />);
  };

  it("should render with default variant and given text", () => {
    renderComponent({ children: "Default" });

    const badge = screen.getByText("Default");

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass(
      "border-transparent bg-primary text-primary-foreground hover:bg-[primary]/80"
    );
  });

  it("should render with green variant and given text", () => {
    renderComponent({ variant: "green", children: "Green" });

    const badge = screen.getByText("Green");

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass(
      "border-transparent bg-[#009545] text-[#ffffff] hover:[#009545]/80"
    );
  });

  it("should render with blue variant and given text", () => {
    renderComponent({ variant: "blue", children: "Blue" });

    const badge = screen.getByText("Blue");

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass(
      "border-transparent bg-[#017DD6] text-[#ffffff] hover:bg-[#017DD6]/80"
    );
  });

  it("should render with gray variant and given text", () => {
    renderComponent({ variant: "gray", children: "Gray" });

    const badge = screen.getByText("Gray");

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass(
      "border-transparent bg-[#BABABA] text-[ #BABABA]-foreground hover:bg-[ #BABABA]/80"
    );
  });

  it("should render with orange variant and given text", () => {
    renderComponent({ variant: "orange", children: "Orange" });

    const badge = screen.getByText("Orange");

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass(
      "border-transparent bg-[#FF964A] text-[ #FF964A]-foreground hover:bg-[ #FF964A]/80"
    );
  });

  it("should render with outline variant and given text", () => {
    renderComponent({ variant: "outline", children: "Outline" });

    const badge = screen.getByText("Outline");

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("text-foreground");
  });

  it("should accept and apply custom className", () => {
    renderComponent({ children: "Custom Class", className: "custom-class" });

    const badge = screen.getByText("Custom Class");

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("custom-class");
  });
});
