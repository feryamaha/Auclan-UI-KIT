'use client'

let openFaqId: string | null = null
let subscribers: Function[] = []

export const FaqManager = {
  getOpenId: () => openFaqId,

  setOpenId: (id: string | null) => {
    openFaqId = id
    subscribers.forEach((callback) => callback())
  },

  subscribe: (callback: Function) => {
    subscribers.push(callback)
    return () => {
      subscribers = subscribers.filter((sub) => sub !== callback)
    }
  },

  toggle: (id: string) => {
    if (openFaqId === id) {
      FaqManager.setOpenId(null)
    } else {
      FaqManager.setOpenId(id)
    }
  }
}
