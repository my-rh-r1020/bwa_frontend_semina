import * as React from "react";
import { DateRange } from "react-date-range";

export default function IndexDate({ date, onChangeDate, setIsShowed }) {
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const refDate = React.useRef(null),
    handleClickOutside = (event) => {
      if (refDate && !refDate.current.contains(event.target)) setIsShowed(false);
    };

  const check = (focus) => {
    focus.indexOf(1) < 0 && setIsShowed(false);
  };

  return (
    <div className="position-absolute" style={{ zIndex: "1" }} ref={refDate}>
      <DateRange editableDateInputs={true} onChange={onChangeDate} moveRangeOnFirstSelection={false} onRangeFocusChange={check} ranges={[date]} maxDate={new Date()} />
    </div>
  );
}
