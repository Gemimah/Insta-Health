import React, { useState } from "react";

interface Event {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  description: string;
}

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<"year" | "month" | "week" | "day">("week");
  const [searchQuery, setSearchQuery] = useState("");
  const events: Event[] = [
    { title: "Meeting Doctor Drew", date: "2024-11-21", startTime: "09:00", endTime: "11:00", description: "Heart check-up" },
    { title: "Brain Daily Checkup", date: "2024-05-22", startTime: "13:00", endTime: "15:00", description: "Brain health" },
    { title: "The Daily Heart Checkup", date: "2024-05-24", startTime: "15:00", endTime: "16:00", description: "Heart monitoring" },
    { title: "Heart Surgery", date: "2024-11-25", startTime: "13:00", endTime: "18:36", description: "Heart monitoring" }
  ];

  const calculateInterval = () => {
    const start = new Date(currentDate);
    const end = new Date(currentDate);

    switch (viewMode) {
      case "year":
        start.setMonth(0, 1);
        end.setMonth(11, 31);
        break;
      case "month":
        start.setDate(1);
        end.setMonth(start.getMonth() + 1, 0);
        break;
      case "week":
        start.setDate(currentDate.getDate() - currentDate.getDay());
        end.setDate(start.getDate() + 6);
        break;
      case "day":
        end.setDate(start.getDate());
        break;
    }

    return { start, end };
  };

  const { start, end } = calculateInterval();

  const formatInterval = () => {
    const options: Intl.DateTimeFormatOptions = { month: "long", day: "numeric" };
    return `${start.toLocaleDateString(undefined, options)} - ${end.toLocaleDateString(undefined, options)}`;
  };

  const handleSearch = () => {
    const event = events.find((e) => e.title.toLowerCase().includes(searchQuery.toLowerCase()));
    if (event) setCurrentDate(new Date(event.date));
  };

  const navigate = (direction: "prev" | "next") => {
    const offset = viewMode === "year" ? 1 : viewMode === "month" ? 1 : 7;
    const newDate = new Date(currentDate);

    if (viewMode === "year") {
      newDate.setFullYear(currentDate.getFullYear() + (direction === "next" ? 1 : -1));
    } else if (viewMode === "month") {
      newDate.setMonth(currentDate.getMonth() + (direction === "next" ? 1 : -1));
    } else {
      newDate.setDate(currentDate.getDate() + (direction === "next" ? offset : -offset));
    }

    setCurrentDate(newDate);
  };

  const changeViewMode = (mode: "year" | "month" | "week" | "day") => setViewMode(mode);

  const renderTimeSlots = () => {
    return Array.from({ length: 24 }).map((_, i) => (
      <div key={i} className="border-b border-l-none text-sm text-[#808080] py-1 pl-2">
        {`${String(i).padStart(2, "0")}:00`}
      </div>
    ));
  };

  const renderDates = () => {
    const dates = [];
    const intervalStart = new Date(start);
    const intervalEnd = new Date(end);

    while (intervalStart <= intervalEnd) {
      const day = intervalStart.getDate();
      const weekday = intervalStart.toLocaleDateString(undefined, { weekday: "short" });

      dates.push(
        <div key={day} className="text-center text-[#808080] py-2 border-b">
          {`${weekday} ${day}`}
        </div>
      );

      intervalStart.setDate(intervalStart.getDate() + 1);
    }

    return dates;
  };

  const renderEvents = () => {
    return events
      .filter(
        (event) =>
          new Date(event.date) >= start &&
          new Date(event.date) <= end
      )
      .map((event, index) => {
        const eventDate = new Date(event.date);
        const colIndex = Math.floor((eventDate.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
        const topOffset = (parseInt(event.startTime.split(":")[0]) * 60 + parseInt(event.startTime.split(":")[1])) / 60;

        return (
          <div
            key={index}
            className="absolute bg-blue-500 text-white text-xs p-1 rounded shadow-md"
            style={{
              gridColumn: colIndex + 2,
              top: `${topOffset * 4}px`,
              height: "50px",
            }}
          >
            {event.title}
          </div>
        );
      });
  };

  return (
    <div className="w-full h-full p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setCurrentDate(new Date())}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Today
          </button>
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-3 py-2 border rounded bg-white text-gray-600 rounded "
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Search
          </button>
        </div>

        {/* Middle Section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate("prev")}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            &lt;
          </button>
          <div className="font-bold text-lg text-[#808080]">{formatInterval()}</div>
          <button
            onClick={() => navigate("next")}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            &gt;
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-0 border-2 p-0 rounded-2xl border-gray-400">
          {["year", "month", "week", "day"].map((mode) => (
            <button
              key={mode}
              onClick={() => changeViewMode(mode as "year" | "month" | "week" | "day")}
              className={`px-4 py-2 rounded-none 
    ${mode === "year" ? "rounded-l-2xl border-r-gray-100 " : "border-r-gray-100"} 
    ${mode === "day" ? "rounded-r-2xl " : "border-r-gray-100"} 
    ${viewMode === mode ? "bg-blue-500 text-white" : "bg-gray-300 hover:bg-gray-400"}`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-8 border border-gray-200 relative">
        {/* Time Slots */}
        <div className="col-span-1 border-r border-l-0 ">
          {renderTimeSlots()}
        </div>

        {/* Dates */}
        <div className="col-span-7 grid grid-cols-7">
          {renderDates()}
        </div>

        {/* Events */}
        {renderEvents()}
      </div>
    </div>
  );
};

export default Calendar;
