"use client";

import { useEffect, useMemo, useState } from "react";
import { CITIES } from "@/lib/cities";
import { formatDateTime } from "@/lib/formatTime";
import ClockCard from "./ClockCard";

export default function WorldClock() {
  const [now, setNow] = useState<Date | null>(null);
  const [cityId, setCityId] = useState(CITIES[0].id);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const selectedCity = useMemo(
    () => CITIES.find((city) => city.id === cityId) ?? CITIES[0],
    [cityId]
  );

  const local = now ? formatDateTime(now, localTimeZone) : null;
  const city = now ? formatDateTime(now, selectedCity.timeZone) : null;

  return (
    <div className="grid w-full gap-5 sm:grid-cols-2">
      <ClockCard
        label="現在地"
        place="ローカルタイム"
        subLabel={local ? localTimeZone : "取得中…"}
        dateLabel={local?.dateLabel ?? "―"}
        timeLabel={local?.timeLabel ?? "--:--:--"}
        offsetLabel={local?.offsetLabel}
        accent
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
          timeLabel={city?.timeLabel ?? "--:--:--"}
          offsetLabel={city?.offsetLabel}
        />
      </div>
    </div>
  );
}
