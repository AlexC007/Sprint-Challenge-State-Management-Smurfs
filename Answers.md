1. What problem does the context API help solve? 
Context API allows you to avoid passing data through components using props, which can become tedious.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions - implicate the type of action attributed to a function and the data that action will use
Reducer - is used to as state management, and will implicate how you want the state to be manipulated given the initial state along with the implied action

Store - is storage for this state for the application or specified folders

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state calls for localized manipulation of the state that forces you to use props if you want to call the manipulated state to another component. Application state will instead allow your state to become global able to be manipulated without props through components. When consistently using functions that hold the same state variables throughout your application you may considered using App state to avoid the redundency of props.


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk is middleware that allows you to call you action-creators functions instead of only objects


1. What is your favorite state management system you've learned and this sprint? Please explain why!

I think I appreciate the reducer  becuase it is more so concise and encompassing. For me, it helps me understand the actions necessary and how to make since of the given state.