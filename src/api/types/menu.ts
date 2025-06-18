export interface MenuResponse {
  status: string
  data: {
    menu: {
      'Nossos Planos': {
        banners: Array<{
          id: number
          name: string
          title: string
          text: string
          image: string
        }>
      }
      'Dental Uni': {
        banners: Array<{
          id: number
          name: string
          image: string
        }>
      }
      'Banner Hero': {
        banners: Array<{
          title: {
            h1: string
            paragraphs: string[]
            callToAction: {
              text: string
              link: string
            }
          }
          banners: {
            desktop: {
              '1920px': {
                url: string
                alt: string
              }
              '1440px': {
                url: string
                alt: string
              }
            }
            mobile: {
              url: string
              alt: string
            }
          }
        }>
      }
    }
  }
} 