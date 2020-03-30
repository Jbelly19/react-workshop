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

In js you can just pass a function to a `.then()` and it will call the function with the params 
```javascript
getCategories().then(setCategories)
```
but then we cant use the check for isCurrent

## Lecture 5: Routing

`useParams` is custom hook to get parameters from path
`useMatch` gets you the match 

use `<Link to='' />` instead of `<a />`

to learn more go to reacttraining.com and go to 'on-demand' and there is a react router class ($45)

can conditionally render routes in a switch and then put a <Redirect to="" /> at the bottom 

probably should go learn more about this, maybe read reacttraining/blog since they are the creators 

## Lecture 6: reducers

if you have a side effect that happens on an event, you can choose to put it in a handler instead of a use effect 
the argument to keeping it in use effect:
  if you keep it in useEffect you get the clean up still. so you could have the handler change a 'login' variable and then you can have your effect depend on the login variable changing to the value you need. this protects you if you need to cancel.


instead of a bunch of action types to change fields on state, can use a 'CHANGE_FIELD' action type that takes the field name and the value then changes it on state

`[<variable_name>]: <value>` lets you dynamically set a field on an object

can make a helper function 