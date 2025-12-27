if (typeof window !== 'undefined' && !window.MDNT) {
  const blemlookup = bbb => (eee = '', mmm = []) => {
    const xm = (Array.isArray(mmm) && mmm[0] ? '--' + mmm[0] : !Array.isArray(mmm) && mmm ? '--' + mmm : '')
    return document.querySelector(`.${bbb}__${eee}${xm}`)
  }
  const ext = window.MDNT || {}
  window.MDNT = { ...ext, lookup: blemlookup }
}
