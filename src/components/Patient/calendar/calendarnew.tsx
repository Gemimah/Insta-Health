"use client";

import * as React from "react";
import {
  RiArrowLeftDoubleLine,
  RiArrowLeftSLine,
  RiArrowRightDoubleLine,
  RiArrowRightSLine,
} from "@remixicon/react";
import {
  addYears,
  format,
  isSameMonth,
  getMonth,
  getYear,
  setMonth,
  setYear,
} from "date-fns";
import {
  DayPicker,
  useDayPicker,
  useDayRender,
  useNavigation,
  type DayPickerSingleProps,
  type DayProps,
} from "react-day-picker";

import { cn, focusRing } from "../../../../utils/classUtils";

interface NavigationButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  icon: React.ElementType;
}

const NavigationButton = React.forwardRef<HTMLButtonElement, NavigationButtonProps>(
  ({ onClick, icon, disabled, ...props }, ref) => {
    const Icon = icon;
    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        onClick={onClick}
        className={cn(
          "flex size-8 items-center justify-center rounded border p-1 transition",
          "text-gray-600 hover:text-gray-800 dark:text-gray-400 hover:dark:text-gray-200",
          "border-gray-300 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900",
          "disabled:pointer-events-none disabled:border-gray-200 disabled:dark:border-gray-800",
          "disabled:text-gray-400 disabled:dark:text-gray-600",
          focusRing
        )}
        {...props}
      >
        <Icon className="size-full" />
      </button>
    );
  }
);

NavigationButton.displayName = "NavigationButton";

type CalendarProps = Omit<DayPickerSingleProps, "showWeekNumber" | "captionLayout"> & {
  enableYearNavigation?: boolean;
  captionLayout?: "buttons" | "dropdown-buttons";
};

const Calendar: React.FC<CalendarProps> = ({
  weekStartsOn = 1,
  numberOfMonths = 1,
  enableYearNavigation = false,
  captionLayout = "buttons",
  className,
  classNames,
  locale,
  ...props
}) => {
  return (
    <DayPicker
      weekStartsOn={weekStartsOn}
      numberOfMonths={numberOfMonths}
      locale={locale}
      showOutsideDays={numberOfMonths === 1}
      className={cn(className)}
      classNames={{
        months: "flex space-y-0",
        month: "space-y-4 p-3",
        nav: "gap-1 flex items-center justify-between p-4 rounded-full",
        table: "w-full border-collapse space-y-1",
        head_cell: "w-9 font-medium text-sm text-center text-gray-400 dark:text-gray-600",
        row: "w-full mt-0.5",
        cell: "relative p-0 text-center",
        day: cn(
          "size-9 rounded text-sm text-gray-900 dark:text-gray-50",
          "hover:bg-gray-200 hover:dark:bg-gray-700",
          focusRing
        ),
        day_today: "font-semibold",
        day_selected: cn(
          "rounded bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900"
        ),
        day_disabled: "text-gray-300 dark:text-gray-700 line-through",
        day_outside: "text-gray-400 dark:text-gray-600",
        ...classNames,
      }}
      components={{
        Caption: ({ displayMonth }) => {
          const { goToMonth } = useNavigation();
          const { currentMonth, fromDate, toDate } = useDayPicker();

          const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
            goToMonth(setYear(currentMonth, Number(e.target.value)));
          };

          const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
            goToMonth(setMonth(currentMonth, Number(e.target.value)));
          };

          const monthsList = Array.from({ length: 12 }, (_, i) => ({
            value: i,
            label: format(setMonth(new Date(), i), "MMM"),
          }));

          const yearRange = fromDate && toDate
            ? Array.from(
                { length: getYear(toDate) - getYear(fromDate) + 1 },
                (_, i) => getYear(fromDate) + i
              )
            : [];

          return (
            <div className="flex items-center justify-between">
              <select
                value={getMonth(displayMonth)}
                onChange={handleMonthChange}
                className="border rounded px-2 py-1 text-sm"
              >
                {monthsList.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
              <select
                value={getYear(displayMonth)}
                onChange={handleYearChange}
                className="border rounded px-2 py-1 text-sm"
              >
                {yearRange.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          );
        },
      }}
      {...props}
    />
  );
};

export default Calendar;
