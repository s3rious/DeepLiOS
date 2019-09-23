console.log('Injected')

// L'trick
const recalcVh = (ih) => {
  const vh = ih * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

// FUCK THAT
// TODO: fix it, somehow
// recalcVh(window.innerHeight)
// setTimeout(() => {
//   document.querySelector('.lmt__textarea').onfocus = () => { console.log(1) }
//   document.querySelector('.lmt__textarea').onclick = () => {
//     setTimeout(() => {
//       console.log(2)
//       recalcVh(window.innerHeight)
//       window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: 'smooth'
//       });
//     }, 250)
//   }
// }, 100)

// CSS
var css = `
  /* HIDE */
  .dl_header,
  #lmt_quotes_article,
  .dl_footer,
  .lmt__mobile_share_container,
  #lmt__dict,
  .translate_from,
  .translate_to,
  .lmt__clear_text_button,
  .lmt__language_select__opener {
    display: none !important;
  }


  /* Style */

  :root {
    color-scheme: light dark;
    --background-color: #FFFFFF;
    --background-color-opacity: rgba(255, 255, 255, 0.725);
    --text-color: black;
    --link-color: #177DF7;
    --border-color: #E8E8E8;
    --side-padding: 16px;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background-color: black;
      --background-color-opacity: rgba(0, 0, 0, 0.725);
      --text-color: white;
      --link-color: #177DF7;
      --border-color: #151515;
    }
  }

  html,
  body {
    -webkit-tap-highlight-color: transparent !important;
    background-color: var(--background-color);
  }

  .dl_body--redesign {
    background: var(--background-color) !important;
    height: 100vh !important;
    height: calc(var(--vh, 1vh) * 100) !important;
  }

  .lmt--web,
  .dl_body--redesign .lmt--web .lmt__language_select__active,
  .lmt--web .lmt__textarea,
  .lmt--web .lmt__translations_as_text p,
  .lmt--web .lmt__textarea_placeholder_text,
  .lmt__translations_as_text__text_btn,
  .lmt__language_select__menu button {
    font-family: -apple-system !important;
    color: var(--text-color) !important;
  }

  .dl_body--redesign .dl_top_element--wide {
    padding: 0 var(--side-padding) !important;
  }

  .dl_translator_page_container {
    height: 100vh !important;
    height: calc(var(--vh, 1vh) * 100) !important;
  }

  .dl_body--redesign .dl_top_element--wide {
    height: 100vh !important;
    height: calc(var(--vh, 1vh) * 100) !important;
  }

  .lmt--web .lmt__language_container {
    width: 100% !important;
  }

  .dl_body--redesign .lmt__sides_container {
    display: flex !important;
    flex-direction: column-reverse !important;
    height: 100vh !important;
    height: calc(var(--vh, 1vh) * 100) !important;
  }

  .lmt--web .lmt__side_container.lmt__side_container--source,
  .lmt--web .lmt__side_container.lmt__side_container--target {
    height: 50vh !important;
    height: calc(var(--vh, 1vh) * 50) !important;
  }

  .lmt--web .lmt__side_container.lmt__side_container--target {
    display: flex !important;
    flex-direction: column-reverse !important;
  }

  .lmt--web .lmt__side_container.lmt__side_container--source,
  .dl_body--redesign .lmt--web .lmt__side_container.lmt__side_container--source .lmt__textarea_container,
  .lmt__inner_textarea_container {
    display: flex !important;
    flex-direction: column !important;
    flex-grow: 1 !important;
  }

  .lmt--web .lmt__source_textarea {
    flex-grow: 1 !important;
    height: 100% !important;
  }

  .dl_body--redesign .lmt--web .lmt__textarea_container,
  .dl_body--redesign .lmt--web .lmt__textarea_container.lmt__textarea_container--focus,
  .lmt__inner_textarea_container,
  .lmt__textarea {
    border: 0 !important;
    box-shadow: none !important;
    padding: 0 !important;
    background: none;
  }

  .dl_body--redesign .lmt--web .lmt__language_select {
    left: calc(-1 * var(--side-padding)) !important;
    right: calc(-1 * var(--side-padding)) !important;
  }

  .dl_body--redesign .lmt--web .lmt__language_select__active {
    padding: 0 !important;
    text-align: center !important;
  }

  .dl_body--redesign .lmt--web .lmt__language_select--source {
    border-top: 1px solid var(--border-color) !important;
  }

  .lmt__language_select--open .lmt__language_select__menu {
    top: 0 !important;
    left: 0 !important;
    position: fixed !important;
    right: 0 !important;
    height: 100% !important;
    z-index: 1000 !important;
    padding: 0 !important;
    background-color: var(--background-color-opacity) !important;
    -webkit-backdrop-filter: blur(16px) !important;
    display: flex !important;
    flex-direction: column-reverse !important;
    transform: translate3d(0, 25%, 0) !important;
  }

  .lmt__language_select--open_2 .lmt__language_select__menu {
    transform: translate3d(0, 0, 0) !important;
  }
  
  .lmt__language_select__menu button {
    height: 48px !important;
    border-top: 1px solid var(--border-color) !important;
    margin-top: -1px !important;
    padding: 0 var(--side-padding) !important;
  }

  .lmt__language_select__menu button:first-child {
    border-bottom: 0 !important;
    margin-bottom: 0 !important;
  }

  .lmt__language_select__menu button:last-child {
    border-top: 0 !important;
    margin-top: 0 !important;
  }

  .lmt__language_select__menu button:hover,
  .lmt__language_select__menu button:focus,
  .lmt__language_select__menu button:active {
    background-color: transparent !important;
  }

  .lmt--web .lmt__language_select strong {
    text-transform: capitalize !important;
  }

  .lmt--web .lmt__language_select > button strong,
  .lmt--web .lmt__language_select > button:hover strong {
    color: var(--link-color) !important;
  }

  .lmt--web .lmt__textarea_placeholder_text {
    top: 6px !important;
    left: -2px !important;
    right: 0 !important;
    font-size: 24px !important;
    opacity: 0.25;
  }

  .lmt__translations_as_text {
    margin: 0 calc(-1 * var(--side-padding)) !important;
  }

  .lmt__translations_as_text > p.lmt__translations_as_text__main_translation,
  .lmt__translations_as_text__item:not(:first-of-type) {
    margin-top: 0 !important;
    background: none !important;
    padding: 9px var(--side-padding) !important;
    display: flex !important;
  }

  .lmt__translations_as_text__item:not(:first-of-type) {
    border-top: 1px solid var(--border-color) !important;
  }

  .lmt__translations_as_text__text_btn {
    text-align: left !important;
    flex-grow: 1 !important;
  }

  .lmt__translations_as_text__copy_button {
    top: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    opacity: 0 !important;
  }

  .lmt__feedback_message {
    top: auto !important;
    left: var(--side-padding) !important;
    right: var(--side-padding) !important;
    bottom: 12px !important;
    margin: auto !important;
    height: 44px !important;
    line-height: 44px !important;
    padding: 0 !important;
    border-radius: 32px !important;
    text-align: center !important;
    background: rgba(32, 32, 32, 0.78) !important;
    -webkit-backdrop-filter: blur(16px) !important;
    bottom: 0 !important;
    font-size: 14px !important;
    color: white !important;
    opacity: 0 !important;
    transform: translate(0%, 100%) scale(0.5) !important;
  }

  .lmt__feedback_message.lmt__feedback_message--visible {
    transform: translate(0%, 0%) scale(1) !important;
    opacity: 1 !important;
    transition: all 0.125s ease-out !important;
  }
`

const head = document.head || document.getElementsByTagName('head')[0]
const style = document.createElement('style')

head.appendChild(style)
style.type = 'text/css'
style.appendChild(document.createTextNode(css))

const event = new Event('inited')
document.dispatchEvent(event)
