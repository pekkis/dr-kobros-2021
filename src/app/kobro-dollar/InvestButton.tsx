"use client";

import Button from "@/components/Button";

const InvestButton = () => {
  return (
    <Button
      onClick={() => {
        alert(
          "An error occurred in the server due to high demand. Please try again later."
        );
      }}
    >
      Invest in Kobro$
    </Button>
  );
};

export default InvestButton;
