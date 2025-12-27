window.onload = () => {
  try {
    if (!window.MDNT) {
      throw new Error('MDNT Global not available')
    }
    const lookup = window.MDNT.lookup('Template')
    function updateLocation() {
      try {
        const bod = lookup('body')
        const to = lookup('title')
        const raw = to?.textContent ?? 'Dear Dad'
        const hasSpace = raw.indexOf(' ') > -1
        const space = raw.lastIndexOf(' ')
        const [
          _greeting = url.searchParams('greeting'),
          _x = url.searchParams.get('to'),
        ] = hasSpace
          ? [
              raw.slice(0, space),
              raw.slice(space + 1),
            ]
          : ['', raw]
        const message = bod?.value ?? url.searchParams.get('message')
        const qs = new URLSearchParams([['message', message], ['greeting', _greeting], ['to', _x]])
        // const updated = url.origin + url.pathname + '?' + qs
        window.location.search = qs
      }
      catch (e) {
        console.warn(e.toString())
      }
    }
    const url = new URL(window.location.toString())
    const params = url.searchParams
    const message = params.get('message') || 'You need therapy'
    const greeting = params.get('greeting') || ''
    const to = params.get('to') || 'Dad'
    const $msg = lookup('body')
    if ($msg) {
      if (message) {
        $msg.value = message
      }
    }
    const $to = lookup('title')
    if ($to && to) {
      $to.textContent = `${greeting ? greeting + ' ' : ''}${to}`
    }
    const $btn = lookup('button', 'save')
    if ($btn) {
      btn.addEventListener(
        'click', (e) => {
          e.preventDefault()
          updateLocation()
        },
      )
    }
  }
  catch (e) {
    console.warn(e.toString())
  }
}
