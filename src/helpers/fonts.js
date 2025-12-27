// "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600..700&family=Molengo&family=Questrial&display=swap"

export const _font = (name, wLow = '', wHigh = '') =>
  [[
    'family', name,
  ], wLow && wHigh ? ['wght', `${wLow}..${wHigh}`] : wLow ? ['wght', wLow] : []].filter(z => z.length)

export const FONTS = new URLSearchParams([
  ..._font('Josefin Sans', '600', '700'),
  ..._font('Molengo'),
  ..._font('Questrial'),
  ['display', 'swap'],
])
