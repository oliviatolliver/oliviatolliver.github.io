# Olivia Tolliver portfolio

## Folder map
```
index.html            page shell: loads every partial in order
css/style.css         all styling (colors are variables at the top)
js/config.js          site settings: password on/off, password, default theme
  js/main.js            partial loader, markdown reader, animations, contact form
partials/
  nav.html            top-right navigation + scroll progress bar
  hero.html           name, tagline, exploding gear drawing
  about.html          photo frame, bio, stats strip
  projects.html       project cards grid + project page overlay
  skills.html         skill chips
  experience.html     timeline
  contact.html        contact / resume request form box
  footer.html         footer + scroll gear
  gate.html           password page (only shown when the password is on)
projects/
  index.json          list of project file names, in display order
  auger.md ...        one markdown file per project
assets/
  Olivia-Tolliver-Resume.pdf
  photo.jpg           add your portrait here (exact name)
```

## Editing
- **Text in a section:** open that file in `partials/` and edit the HTML.
- **Add a project:** copy any `projects/*.md`, rename it (e.g. `rover.md`), edit it, then add `"rover"` to `projects/index.json`.
- **Project image:** put it in `assets/` and set `image: assets/yourfile.jpg` at the top of the project's .md file. In the body you can also write `![caption](assets/yourfile.jpg)`.
- **Results list in a project:** lines like `- 80% | deeper access`.
- **Resume:** replace `assets/Olivia-Tolliver-Resume.pdf` (keep the name).

## Preview on your computer
The site loads its parts with `fetch`, so opening index.html by double-click will not work. Run this inside the folder and open http://localhost:8000
```
python3 -m http.server 8000
```

## Publish with GitHub Pages
Upload everything (keep the folders) to a public repo, then Settings > Pages > Deploy from a branch > main / root.

## Password page
Settings live in `js/config.js`.
- **Turn it off:** set `passwordProtected: false`. **Turn it on:** set it to `true`. Commit and push.
- Visitors stay unlocked until they close the tab.
- **Honest limit:** this is a front-end gate for casual visitors. The site files are still public on GitHub, and a determined person can bypass it or guess the password offline. For real privacy, use a private host with server-side protection (for example Netlify or Cloudflare Access).

### Changing the password
Open your live site, press F12 (Console), paste this with your new password, press Enter, and copy the long code it prints into `passwordHash` in `js/config.js`:
```
(async()=>{const salt='olivia-portfolio',pw='YOUR NEW PASSWORD';const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(salt+pw));console.log([...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join(''))})()
```
(If you change `passwordSalt`, use the same value in the snippet.)

## Dark / light mode
The moon button in the nav switches themes and remembers the choice. Change the first-visit theme with `defaultTheme` in `js/config.js`. Light-mode colors are at the bottom of `css/style.css`.

## Photos, project images, and 3D models
- **Your portrait:** save it as `assets/photo.jpg` (about 1200 x 1500 px, under 500 KB, lowercase name).
- **Project card and cover image:** add `image: assets/your-cover.jpg` at the top of the project's .md file.
- **Photos inside a project page:** write `![Caption](assets/your-photo.jpg)` anywhere in the body. Keep each under about 400 KB.
- **3D CAD viewer:** export your model, convert it to `.glb`, save it in `assets/models/`, and add `model: assets/models/your-model.glb` to the project's .md file. Visitors can drag to rotate and scroll to zoom. If you also set `image:`, it shows while the model loads. Keep each .glb under about 15 MB.
- **Converting CAD to .glb:** export STEP or STL from SolidWorks or Fusion, open it in Blender (free), and use File > Export > glTF 2.0 (.glb). Reducing polygon count first keeps the file small.
- **New project:** copy `projects/_template.md`, fill it in, and add its name to `projects/index.json`.