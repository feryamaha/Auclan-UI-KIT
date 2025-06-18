import axios from "axios"

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.dentaluni.com.br",
  headers: {
    "Content-Type": "application/json",
    "client-id": process.env.NEXT_PUBLIC_CLIENT_ID,
    "client-token": process.env.NEXT_PUBLIC_CLIENT_TOKEN,
  },
}) 