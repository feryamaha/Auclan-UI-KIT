import { api } from '../config/axios'
import { MenuResponse } from '../types/menu'

export const menuService = {
  getBanners: async (): Promise<MenuResponse> => {
    const response = await api.get('/menu-banners')
    return response.data
  }
} 