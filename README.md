[![official project](https://jb.gg/badges/official.svg)](https://confluence.jetbrains.com/display/ALL/JetBrains+on+GitHub)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# JetBrains Academy JavaScript Course Template

**JetBrains Academy JavaScript course template** is a repository that provides a
pure template for creating new JavaScript/Node.js courses using the [JetBrains Academy
plugin](https://plugins.jetbrains.com/plugin/10081-jetbrains-academy). For more details on creating a repository from a template, see this article: [Creating a repository from a template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

This template is designed to help educators, both new and experienced, 
quickly start developing courses by providing technical examples.

If you're unfamiliar with the plugin, read our introduction: [What is the JetBrains Academy plugin?](https://plugins.jetbrains.com/plugin/10081-jetbrains-academy/docs/jetbrains-academy-plugin-faq.html#what_is_the_jetbrains_academy_plugin)

> [!NOTE]
> Click the <kbd>Use this template</kbd> button to create your own repository based on this template.


## Docs
Learn more about course creation with the JetBrains Academy plugin in the [Course creator start guide](https://plugins.jetbrains.com/plugin/10081-jetbrains-academy/docs/educator-start-guide.html).

## Files structure

### Course structure
```text
├── course-info.yaml  # Contains metadata like the course title, language, etc.
├── jest.config.js    # Configuration file for the Jest testing framework.
├── jsconfig.json     # Configuration file for JS language features in the IDE.
├── package.json      # Lists project dependencies, scripts, and metadata.
├── babel.config.cjs  # Configuration file for Babel, needed for the React projects
├── NonProgrammingTasks/
│   ├── theory_task/      # A theory-based task.
│   ├── quiz_task/        # A multiple-choice quiz task.
│   └── lesson-info.yaml  # Defines the structure and order of tasks in this lesson. 
├── SimpleJavaScript/
│   ├── edu_task/                 # A task that includes unit tests.
│   ├── stdout_capture_edu_task/  # A task with console.log capture.
│   └── lesson-info.yaml
├── WebDevelopment/
│   ├── backend_testing/  # A Node.js backend task with unit tests.
│   └── lesson-info.yaml
├── run/
│   └── Template Jest.run.xml  # Configuration file enabling the --experimental-vm-modules flag for Jest.
└── utils/
    └── utils.js  # Contains utility functions for simplifying test writing.
```

### Typical task structure
```text
├── task.js         # Task source code file.
├── task.md         # Task description text displayed by the plugin.
├── task-info.yaml  # Contains task and placeholder metadata.
└── test/
    └── test.js     # Unit tests (if applicable for the task type).
```

## Examples of tasks
We've included example tasks that demonstrate how to create engaging online course content. Feel free to explore each task and its associated files.

### 🔳 Theory task (NonProgrammingTasks/theory_task/)
Contains a minimal set of the files typically used in a task:
- Source code file `task.js` (empty for theory tasks).
- Text displayed in task description: `task.md`.
- Metadata file for the current task: `task-info.yaml`.

### 🔳 Multiple-choice quiz (NonProgrammingTasks/quiz_task/)
Similar to the theory task, but the `task-info.yaml` file contains answer options.

### 🔳 Task with unit tests (SimpleJavaScript/edu_task/)
Includes a test file (`test/test.js`), which is executed when the `Check` button is clicked.
The `task-info.yaml` file contains placeholders.

### 🔳 Output testing task (SimpleJavaScript/stdout_capture_edu_task/)
Demonstrates a task where the `console.log` output from a user’s solution is captured and validated using tests..

### 🔳 Node.js backend task (WebDevelopment/backend_testing/)
An example of testing backend routes in a Node.js application.

### 🔳 React frontend task (WebDevelopment/frontend_testing/)
An example of testing frontend components in a React application.
