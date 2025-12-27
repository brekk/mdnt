window.onload = () => {
  try {
    if (!window.MDNT) {
      throw new Error("MDNT Global not available")
    }
    const lookup = window.MDNT.lookup('Template')
    function updateLocation() {
      try {
      const bod = lookup('body')
      const to = lookup('title')
        console.log('bod', bod, 'to', to)
      const raw = to?.textContent ?? "Dear Dad"
      const hasSpace = raw.indexOf(' ') > -1
        console.log("RAW", raw, "HAS", hasSpace)
      const [
        _greeting = url.searchParams('greeting'),
        _x  = url.searchParams.get('to')
      ] = hasSpace ? [
            raw.slice(0, raw.lastIndexOf(' ')),
            raw.slice(raw.lastIndexOf(' ') + 1)
          ]: ['', raw]
        console.log("<><>", _greeting, "<!<!<!", _x)
      const msg = bod?.value ?? url.searchParams.get('msg')
      const qs = new URLSearchParams([['msg', msg], ['greeting', _greeting], ['to', _x]])
      const updated = url.origin + url.pathname + '?' + qs
        console.log("UPDATED!", updated)
      window.location.search = qs
      } catch (e) {
        console.warn(e.toString())
      }
    }
    const url = new URL(window.location.toString())
    const params = url.searchParams
    const message = params.get('msg') || "You need therapy"
    const greeting = params.get('greeting') || ""
    const to = params.get('to') || "Dad"
    const $msg = lookup('body')
    if ($msg) {
      if (message) {
        $msg.value = message
      }
    }
    const $to = lookup('title')
    if ($to && to) {
      $to.textContent = `${greeting?greeting + ' ' : ''}${to}` 
    }
    const btn = lookup('button', 'save')
    if (btn) {
      btn.addEventListener(
        'click', (e) => {
          e.preventDefault() 
          updateLocation()
        }
      )
    }
  } catch (e) {
    console.warn(e.toString())
  }
}
