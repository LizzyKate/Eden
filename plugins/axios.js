import { throttleAdapterEnhancer } from 'axios-extensions'

export default function ({ $axios }) {
  $axios.setBaseURL('https://www.reddit.com/')
  $axios.adapter = throttleAdapterEnhancer($axios.defaults.adapter, {
    threshold: 2 * 1000,
  })
}
