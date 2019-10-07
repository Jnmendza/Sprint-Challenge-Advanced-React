- [ ] Why would you use class component over function components (removing hooks from the question)?

    - You have more control over which part of the life cycle is ran. It is preferred to also keep track of private state.

- [ ] Name three lifecycle methods and their purposes.
    -contructor() - It's purpose is one that serves the component up with the inital state data that it needs to have during the render.

    -render() - It is used to tell react what will be mounted to the screen

    -componentDidMount() - This method is part of the mounting phase. It's called as soon as the render method is called the 1st time. It is where you call setState.

    

- [ ] What is the purpose of a custom hook?

    - It allows you to apply non-visual behavior and stateful logic throughout your components. It also saves you from repeating code.

- [ ] Why is it important to test our apps?

    - It helps you reduce time with debugging and it also gives you an advantage when looking for a job right out of school.