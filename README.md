**redux-thunk-demo**

*This application contain code samples pertaining to performing asynchronous tasks with `redux-thunk` accompanied by unit-test samples.*

***Context***

Redux was built to strictly fit in the paradigm of functional programming and reducers being one of its main concepts was derived from the very foundation of the functional paradigm called pure functions – functions that are deterministic, do not mutate the state or cause side effects. So for this reason, execution of any side effects such as network requests have no place in the Redux flow. *You might ask – can we simply have the logic to perform side effects inside the UI components?* This is possible, however if the same service is being used in different components, the application will find itself repeating the same logic over and over again so it is advisable to extract and centralize this logic in a common place for better maintainability. 

Since Redux does not support side effects in its flow, third-party vendors had developed their own solutions to circumvent this via **middlewares**. One of the most commonly middlewares is known as **redux-thunk**
 
 Refer to **redux-thunk** docs for more information: https://github.com/reduxjs/redux-thunk
