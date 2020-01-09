import defaultSettings from '@/settings'

const title = defaultSettings.title || '三味书屋约书云平台'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
