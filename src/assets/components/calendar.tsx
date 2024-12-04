// Calendar.tsx
import React, { useState } from 'react';
import './calendar.css';

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getMonthName = (date: Date) => {
    return date.toLocaleString('default', { month: 'long' });
  };

  const getYear = (date: Date) => {
    return date.getFullYear();
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const startDayOfWeek = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const renderDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const startDay = startDayOfWeek(currentDate);

    const today = new Date();
    const isToday = (day: number) =>
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();

    const days: JSX.Element[] = [];

    // Add blank spaces for days of the week before the 1st day
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="empty-day" />);
    }

    // Add actual days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div
          key={day}
          className={`day ${isToday(day) ? 'today' : ''}`}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={previousMonth} className="nav-button">&#9664;</button>
        <div className="month-year">
          <span>{getMonthName(currentDate)}</span>
          <span>{getYear(currentDate)}</span>
        </div>
        <button onClick={nextMonth} className="nav-button">&#9654;</button>
      </div>
      <div className="days-of-week">
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thur</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
      </div>
      <div className="days">{renderDays()}</div>
    </div>
  );
};

export default Calendar;
