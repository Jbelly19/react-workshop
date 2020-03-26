## Lecture 1: Rendering
react-icons/fa kinda cool. Whole font awesome library but only loads what you use

anything imported from app/yesteryear can be reused/looked through. Its a nice built project to look through

snippets: got to setting -> user snippets -> javascript 

## Lecture 2: State

instead of ternary to conditionally render:
```javascript
{error ? <p>{error}</p> : null}
```
could do short circuit:
```javascript
{error && <p>{error}</p>}
```

what is in jsx?:
```javascript
{ ' ' }
```
adds spacing between jsx elements. prettier will do it for us sometimes

## Lecture 3: controlled-vs-uncontrolled
for forms, never program the submit button, always program the onSubmit of the form 

## Lecture 4: effects

pure functions have outputs that depends only on their inputs

put all side effects in useEffects hook

can use js to do 'media-queries' instead of css
```javascript
const media = window.matchMedia('(min-width: 800px)')
const wide = media.matches
```

