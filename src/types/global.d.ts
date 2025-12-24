// Global type declarations for browser APIs

interface Window {
  gtag?: (
    command: 'config' | 'set' | 'event' | 'js' | 'consent',
    targetId: string | Date,
    config?: {
      [key: string]: any
      event_category?: string
      event_label?: string
      keyword?: string
      page_type?: string
      [key: string]: any
    }
  ) => void
}

