type condition_text =
  | "Ensolarado"
  | "Parcialmente nublado"
  | "Nublado"
  | "Chuva"
  | "Chuva leve"
  | "Chuva moderada"
  | "Chuva forte"
  | "Chuva torrencial"
  | "Tempestade"
  | "Tempestade elétrica"
  | "Neve"
  | "Neblina"
  | "Névoa"
  | "Garoa"
  | "Granizo"
  | "Céu limpo"
  | "Fumacento"
  | "Vento"
  | "Encoberto"
  | "Aguaceiros fracos"

export type WeatherInfos = {
    location: {
        name: string;
        region: string;
        country: string;
        lat: number;
        lon: number;
        tz_id: string;
        localtime_epoch: number;
        localtime: string;
    }
    current: {
        last_updated_epoch: number;
        last_updated: string;
        temp_c: number;
        temp_f: number;
        is_day: number;
        condition: {
            text: condition_text;
            icon: string;
            code: number;
        };
        wind_mph: number;
        wind_kph: number;
        wind_degree: number;
        wind_dir: string;
        pressure_mb: number;
        pressure_in: number;
        precip_mm: number;
        precip_in: number;
        humidity: number;
        cloud: number;
        feelslike_c: number;
        feelslike_f: number;
        windchill_c: number;
        windchill_f: number;
        heatindex_c: number;
        heatindex_f: number;
        dewpoint_c: number;
        dewpoint_f: number;
        vis_km: number;
        vis_miles: number;
        uv: number;
        gust_mph: number;
        gust_kph: number;
    }
} | 'error' | null
