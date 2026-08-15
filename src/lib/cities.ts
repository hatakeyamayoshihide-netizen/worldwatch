export type City = {
  id: string;
  name: string;
  country: string;
  timeZone: string;
};

export const CITIES: City[] = [
  { id: "tokyo", name: "東京", country: "日本", timeZone: "Asia/Tokyo" },
  { id: "seoul", name: "ソウル", country: "韓国", timeZone: "Asia/Seoul" },
  { id: "beijing", name: "北京", country: "中国", timeZone: "Asia/Shanghai" },
  { id: "hongkong", name: "香港", country: "中国", timeZone: "Asia/Hong_Kong" },
  { id: "singapore", name: "シンガポール", country: "シンガポール", timeZone: "Asia/Singapore" },
  { id: "bangkok", name: "バンコク", country: "タイ", timeZone: "Asia/Bangkok" },
  { id: "mumbai", name: "ムンバイ", country: "インド", timeZone: "Asia/Kolkata" },
  { id: "dubai", name: "ドバイ", country: "UAE", timeZone: "Asia/Dubai" },
  { id: "moscow", name: "モスクワ", country: "ロシア", timeZone: "Europe/Moscow" },
  { id: "london", name: "ロンドン", country: "イギリス", timeZone: "Europe/London" },
  { id: "paris", name: "パリ", country: "フランス", timeZone: "Europe/Paris" },
  { id: "berlin", name: "ベルリン", country: "ドイツ", timeZone: "Europe/Berlin" },
  { id: "newyork", name: "ニューヨーク", country: "アメリカ", timeZone: "America/New_York" },
  { id: "chicago", name: "シカゴ", country: "アメリカ", timeZone: "America/Chicago" },
  { id: "losangeles", name: "ロサンゼルス", country: "アメリカ", timeZone: "America/Los_Angeles" },
  { id: "honolulu", name: "ホノルル", country: "アメリカ", timeZone: "Pacific/Honolulu" },
  { id: "toronto", name: "トロント", country: "カナダ", timeZone: "America/Toronto" },
  { id: "saopaulo", name: "サンパウロ", country: "ブラジル", timeZone: "America/Sao_Paulo" },
  { id: "sydney", name: "シドニー", country: "オーストラリア", timeZone: "Australia/Sydney" },
  { id: "auckland", name: "オークランド", country: "ニュージーランド", timeZone: "Pacific/Auckland" },
];
