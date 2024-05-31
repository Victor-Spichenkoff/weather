export const wather_api_key = "c043db88f0df4dbb94f224112242405"

export const isProd = process.env.NODE_ENV == 'production'
export const publicStart = isProd ? '/weather' : ''