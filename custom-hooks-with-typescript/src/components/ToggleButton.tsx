import { memo } from "react";

interface ToggleButtonProps {
  toggleIsActive: () => void;
}

export function ToggleButtonComponent({ toggleIsActive }: ToggleButtonProps) {
  function handleToggleIsActive() {
    toggleIsActive();
  }

  return (
    <>
      <div>
        <button type="button" onClick={handleToggleIsActive}>
          Toggle
        </button>
      </div>
    </>
  );
}

export const ToggleButton = memo(ToggleButtonComponent, (prevProps, nextProps) => {
  return prevProps.toggleIsActive === nextProps.toggleIsActive
});
