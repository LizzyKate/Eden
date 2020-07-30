import { throttleAdapterEnhancer } from 'axios-extensions'

export default function ({ $axios }) {
  $axios.setBaseURL('https://www.reddit.com/.json')
  $axios.adapter = throttleAdapterEnhancer($axios.defaults.adapter, {
    threshold: 2 * 1000,
  })
}
