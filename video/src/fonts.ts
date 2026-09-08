import {continueRender, delayRender, staticFile} from 'remotion';

/**
 * The site's own type stack (Inter / Fraunces / JetBrains Mono), served from
 * `public/fonts` so renders never depend on a font CDN. All three files are
 * variable, so one @font-face per family covers every weight we use.
 *
 * Loading happens once per page at module scope and holds the render open
 * until the faces are ready, so no frame ships a fallback face.
 */
const FACES = [
  {family: 'Inter', file: 'Inter.woff2'},
  {family: 'Fraunces', file: 'Fraunces.woff2'},
  {family: 'JetBrains Mono', file: 'JetBrainsMono.woff2'},
];

// A generous timeout: under high render concurrency the font fetches queue
// behind frame encoding and can take well over the 28s default.
const handle = delayRender('Loading Think14 fonts', {
  timeoutInMilliseconds: 120000,
});

Promise.all(
  FACES.map(async ({family, file}) => {
    const face = new FontFace(
      family,
      `url(${staticFile(`fonts/${file}`)}) format('woff2')`,
      {weight: '100 900', display: 'block'},
    );
    await face.load();
    // FontFaceSet.add is not in the DOM lib's type for this target.
    (document.fonts as unknown as {add: (f: FontFace) => void}).add(face);
  }),
).then(
  () => continueRender(handle),
  () => continueRender(handle),
);
