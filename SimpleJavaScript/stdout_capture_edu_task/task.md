Unfortunately, JavaScript's convenient way of printing information (`console.log`) adds some formatting to its output.

For example:
```js
console.log(123); //  actually prints [33m123 [39m
```

This numeric output may include control commands for displaying color output in the terminal.
The actual format may vary depending on the OS but will always be considered when checking for equality to the expected output.

As a result, it is impractical to use `Output` tasks in a JavaScript course.

### Workaround
Fortunately, this task demonstrates a workaround to capture the `console.log()` output 
from a user's solution in the tests and validate it.

Refer to `test/test.js` for the test implementation.
