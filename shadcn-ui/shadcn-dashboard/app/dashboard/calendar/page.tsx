"use client"
import { Calendar } from "@/components/ui/calendar";
import { useState } from 'react';

const CalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDate] = useState<Date[] | undefined>([]);

  const smallDate = date?.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <section className="flex flex-wrap gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow-sm"
        captionLayout="dropdown"
        disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        disabled={(date) => date > new Date()}
      />
      <Calendar
        mode="multiple"
        selected={multipleDates}
        onSelect={setMultipleDate}
        className="rounded-md border shadow"
      />

      <div>
        <h1 className="text-3xl">Información</h1>
        <div className="border-b"></div>
        <p>{smallDate}</p>
        <p>
          {multipleDates?.map((date) => date.toLocaleDateString()).join(", ")}
        </p>
      </div>

    </section>
  );
};

export default CalendarPage;
