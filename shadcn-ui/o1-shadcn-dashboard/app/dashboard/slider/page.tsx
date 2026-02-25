"use client";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState } from 'react';

const SliderPage = () => {
  const [value, setValue] = useState([0.3, 0.7]);

  return (
    <section className="flex flex-col gap-4">
      <Slider
        defaultValue={[75]}
        max={100}
        step={1}
        className="mx-auto w-full max-w-xs"
      />
      <div className="mx-auto grid w-full max-w-xs gap-3">
        <div className="flex items-center justify-between gap-2">
          <Label htmlFor="slider-demo-temperature">Temperature</Label>
          <span className="text-muted-foreground text-sm">
            {value.join(", ")}
          </span>
        </div>
        <Slider
          id="slider-demo-temperature"
          value={value}
          onValueChange={setValue}
          min={0}
          max={1}
          step={0.1}
        />
      </div>
    </section>
  );
};

export default SliderPage;
