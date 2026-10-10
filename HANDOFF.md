# RegisterCTA: how to add it to the main project

This is page 8, the "Ready to build something unforgettable?" section.
It is one self-contained folder. It does not change any global styles.

## 1. Copy the folder
Copy the whole `RegisterCTA/` folder into the team project, for example:

    src/components/RegisterCTA/
      RegisterCTA.jsx
      RegisterCTA.css
      index.js
      assets/cta-art.webp
      assets/qr.png

## 2. Import it where the pages are assembled
    import RegisterCTA from "./components/RegisterCTA";

    // at the bottom, after the previous sections:
    <RegisterCTA />

## 3. Things to know
- All CSS classes start with `register-cta`, so they will not clash with other sections.
- The colors are CSS variables at the top of `RegisterCTA.css` (`--rc-bg`, `--rc-green`, `--rc-ink`, `--rc-scan`).
- Fonts: Barlow Condensed and Inter. The first line of the CSS loads them. Delete that line if the project already loads them.
- Anchor link: the section has `id="register"`, so a navbar link to `#register` scrolls to it.
- Images are imported with the bundler (works in Vite and Create React App). For Next.js, see below.
- To swap images: `<RegisterCTA qrSrc={myQr} artSrc={myArt} />`.

## 4. Known to-dos
- Replace `assets/qr.png` with the original QR export from Figma (the current one was cropped from a screenshot). Scan it with a phone before launch.
- Confirm the heading says "Ready" (the design screenshot looked like "Read").

## If the team uses Next.js
Static image imports return an object. Change the two `<img src=...>` lines to use `.src`, e.g. `src={qrSrc.src ?? qrSrc}`,
or put the images in `/public` and pass string paths via the `qrSrc` and `artSrc` props.
