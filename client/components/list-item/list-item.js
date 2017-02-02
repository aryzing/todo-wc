import { getState } from '../../configureStore.js'

export default class ListItem extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({mode: 'open'});
  }

  render() {
    const props = this['data-props']
    const shadowRoot = this.shadowRoot
    shadowRoot.innerHTML = `<div>${props.text}</div>`

    // get contents from props
    // create necessary items
    // attach them to shadow root
  }

  connectedCallback() {
    this.render()
  }
}
