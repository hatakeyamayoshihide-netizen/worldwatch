"use client";

import { useEffect, useMemo, useState } from "react";
import { CITIES } from "@/lib/cities";
import { formatDateTime, toDateTimeLocalValue } from "@/lib/formatTime";
import ClockCard from "./ClockCard";
import LocalTimeCard from "./LocalTimeCard";

export default function WorldClock() {
  const [now, setNow] = useState<Date | null>(null);
  const [overrideDate, setOverrideDate] = useState<Date | null>(null);
  const [cityId, setCityId] = useState(CITIES[0].id);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const isManual = overrideDate !== null;
  const effectiveDate = overrideDate ?? now;

  const selectedCity = useMemo(
    () => CITIES.find((city) => city.id === cityId) ?? CITIES[0],
    [cityId]
  );

  const local = effectiveDate ? formatDateTime(effectiveDate, localTimeZone) : null;
  const city = effectiveDate ? formatDateTime(effectiveDate, selectedCity.timeZone) : null;

  const handleLocalInputChange = (value: string) => {
    if (!value) {
      setOverrideDate(null);
      return;
    }
    const parsed = new Date(value);
    if (!Number.isNaN(parsed.getTime())) {
      setOverrideDate(parsed);
    }
  };

  return (
    <div className="grid w-full gap-5 sm:grid-cols-2">
      <LocalTimeCard
        timeZone={localTimeZone}
        dateLabel={local?.dateLabel ?? "―"}
        timeLabel={local?.timeLabel ?? "--:--"}
        inputValue={effectiveDate ? toDateTimeLocalValue(effectiveDate) : ""}
        isManual={isManual}
        offsetLabel={local?.offsetLabel}
        onChange={handleLocalInputChange}
        onReset={() => setOverrideDate(null)}
      />

      <div className="flex flex-col gap-3">
        <label
          htmlFor="city-select"
          className="text-xs font-medium tracking-[0.2em] text-white/50 uppercase"
        >
          都市を選択
        </label>
        <select
          id="city-select"
          value={cityId}
          onChange={(event) => setCityId(event.target.value)}
          className="w-full appearance-none rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3.5 text-base text-white outline-none backdrop-blur-xl transition-colors [color-scheme:dark] hover:border-white/25 focus:border-indigo-300/60"
        >
          {CITIES.map((c) => (
            <option key={c.id} value={c.id} className="bg-slate-900 text-white">
              {c.name}（{c.country}）
            </option>
          ))}
        </select>

        <ClockCard
          label="選択した都市"
          place={selectedCity.name}
          subLabel={selectedCity.country}
          dateLabel={city?.dateLabel ?? "―"}
          timeLabel={city?.timeLabel ?? "--:--"}
          offsetLabel={city?.offsetLabel}
        />
      </div>
    </div>
  );
}
