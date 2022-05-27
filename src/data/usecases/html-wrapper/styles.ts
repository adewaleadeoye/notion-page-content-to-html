export const STYLE = `\
<style>
img {
  max-width: 100%;
}

ol,
ul {
  margin: 0;
  margin-block-start: 0.6em;
  margin-block-end: 0.6em;
}

li > ol:first-child,
li > ul:first-child {
  margin-block-start: 0.6em;
}

ul > li {
  list-style: disc;
}

ul.to-do-list {
  text-indent: -1.7em;
}

ul.to-do-list > li {
  list-style: none;
}

.to-do-children-checked {
  text-decoration: line-through;
  opacity: 0.375;
}

ul.toggle > li {
  list-style: none;
}

ul {
  padding-inline-start: 1.7em;
}

ul > li {
  padding-left: 0.1em;
}

ol {
  padding-inline-start: 1.6em;
}

ol > li {
  padding-left: 0.2em;
}

.mono ol {
  padding-inline-start: 2em;
}

.mono ol > li {
  text-indent: -0.4em;
}

.toggle {
  padding-inline-start: 0em;
  list-style-type: none;
}

/* Indent toggle children */
.toggle > li > details {
  padding-left: 1.7em;
}

.toggle > li > details > summary {
  margin-left: -1.1em;
}

h1,
h2,
h3,
h4 {
    line-height: 120%;
    font-family: 'Manrope',sans-serif;
    letter-spacing: -0.01562em;
    padding-bottom: 32px;
    color:#1769B5;
    font-weight: 800;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0.75em;
}

.icon {
  display: inline-block;
  max-width: 1.2em;
  max-height: 1.2em;
  text-decoration: none;
  vertical-align: text-bottom;
  margin-right: 0.5em;
}

img.icon {
  border-radius: 3px;
}

.page-cover-image {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 30vh;
}

.page-header-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.page-header-icon-with-cover {
  margin-top: -0.72em;
  margin-left: 0.07em;
}

.page-header-icon img {
  border-radius: 3px;
}

blockquote {
  padding: 4px 0; 
  font-size: 24px; 
  font-weight: 700; 
  font-style: italic; 
  line-height: 150%; 
  margin: 1em 0; 
  padding-left: 32px; 
  border-left: 3px solid rgb(55, 53, 47);
  color: #667785;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  letter-spacing: 0.00938em;
}  

p {
  margin: 0;
    color: #667785;
    font-size: 16px;
    line-height: 24px;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 400;
    letter-spacing: 0.00938em;
    font-size: 18px;
    text-decoration: none;
    margin-bottom: 22px
  }

a {
  margin: 0;
  font-size: 18px;
  font-weight: 800;
  line-height: 120%;
  letter-spacing: -0.02em;
  font-family: 'Roboto',sans-serif;
  text-decoration: none;
  color: #1769B5;
}

h1 {
  margin: 0;
    color: #1769B5;
    font-size: 48px;
}

h2 {
  font-size: 34px;
  padding-top: 32px;
}

h3 {
  font-size: 26px;
  padding-top: 32px;
}

h4 {
    margin: 0;
    color: #101D28;
    font-size: 18px;
    color: #667785;
}

.callout {
  padding: 16px 16px 16px 12px;
  display: flex;
  width: 100%;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  align-items: center;
  justify-content: center;
}

.callout-emoji {
  height: 21.6px;
  width: 21.6px;
  font-size: 21.6px;
  line-height: 1.1;
  margin-left: 0px;
}

.callout p {
  max-width: 100%;
  width: 100%;
  white-space: pre-wrap;
  word-break: break-word;
  margin-left: 10px;
}

.image {
  border: none;
  margin: 1.5em 0;
  padding: 0;
  border-radius: 0;
  text-align: center;
}

figure {
  margin: 1.25em 0;
  page-break-inside: avoid;
}

figcaption {
  opacity: 0.5;
  font-size: 85%;
  margin-top: 0.5em;
}

hr {
  background: transparent;
  display: block;
  width: 100%;
  height: 1px;
  visibility: visible;
  border: none;
  border-bottom: 1px solid rgba(55, 53, 47, 0.09);
}

.checkbox {
  display: inline-flex;
  vertical-align: text-bottom;
  width: 16px;
  height: 16px;
  background-size: 16px;
  margin-left: 2px;
  margin-right: 5px;
}
</style>`;
