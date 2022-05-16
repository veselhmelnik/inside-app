export const ROUTES = {
  PROJECTS: { label: 'Projects', link: '/' },
  OPERATORS: { label: 'Operators', link: '/operators' },
  DELIVERY: { label: 'Delivery', link: '/delivery' },
  COORDINATOR: { label: 'Coordinator', link: '/coordinator' },
}

// Array used by navigation
export const NAV_BUTTONS = Object.entries(ROUTES).map(([key, value]) => ({
  ...value,
  key,
}))
