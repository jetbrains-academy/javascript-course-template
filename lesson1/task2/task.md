Unfortunately, JavaScript's convenient way of printing information (`console.log`) adds some formatting to its output.

```js
console.log(123); //  actually prints [33m123 [39m
```

This numeric output may lead to output of control commands for displaying color output in the terminal.
The actual format may vary depending on the OS, but in any case will be taken into account when checking for equality with the expected output.

Therefore, it is impracticable to use `Output` tasks in a JavaScript course.

### Workaround
Fortunately, this task demonstrates workaround how `console.log()` output 
of user's solution can be caught in the tests and validated.

Look into `test/test.js` for tests implementation.
