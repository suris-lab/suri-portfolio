import portfolioContent from '@/content/portfolio.json'

export type NavLink = {
  index: string
  label: string
  href: string
}

export type PortfolioContent = typeof portfolioContent

export function getPortfolioContent(): PortfolioContent {
  return portfolioContent
}
