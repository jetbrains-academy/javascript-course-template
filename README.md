# JetBrains Academy JavaScript Course Template

[![official project](https://jb.gg/badges/official.svg)](https://confluence.jetbrains.com/display/ALL/JetBrains+on+GitHub)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**JetBrains Academy JavaScript course template** is a repository that provides a
pure template to make it easier to create a new JavaScript/Node.js course with the [JetBrains Academy
plugin](https://plugins.jetbrains.com/plugin/10081-jetbrains-academy) (check out the [Creating a repository from a template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) article).

This template is designed to help educators, both new and experienced, 
quickly start developing courses by providing technical examples.

If you're still not quite sure what this is all about, read our introduction: [What is the JetBrains Academy plugin?](https://plugins.jetbrains.com/plugin/10081-jetbrains-academy/docs/jetbrains-academy-plugin-faq.html#what_is_the_jetbrains_academy_plugin)

> [!NOTE]
> Click the <kbd>Use this template</kbd> button to create your own repository based on this template.


## Docs
Learn more about course creation with the JetBrains Academy plugin in the [Course creator start guide](https://plugins.jetbrains.com/plugin/10081-jetbrains-academy/docs/educator-start-guide.html).

## Files structure

### Course structure
```text
├── course-info.yaml  # Contains the course metadata like title, language, etc.
├── jest.config.js    # Configuration file for the Jest testing framework.
├── jsconfig.json     # Configuration file for JS language features in the IDE.
├── package.json      # Lists project dependencies, scripts, and metadata.
├── NonProgrammingTasks/
│   ├── theory_task/      # Theory task.
│   ├── quiz_task/        # Multiple choice quiz task.
│   └── lesson-info.yaml  # Defines the structure and order of tasks in this lesson. 
├── SimpleJavaScript/
│   ├── edu_task/                 # Task with unittests.
│   ├── stdout_capture_edu_task/  # Task with console.log capture.
│   └── lesson-info.yaml
├── WebDevelopment/
│   ├── backend_testing/  # Node.js backend task with unittests.
│   └── lesson-info.yaml
├── run/
│   └── Template Jest.run.xml  # Configuration file enabling --experimental-vm-modules flag for Jest.
└── utils/
    └── utils.js  # Contains utility functions to simplify writing tests.
```

### Typical task structure
```text
├── task.js         # Task source code file.
├── task.md         # Task description text shown by plugin.
├── task-info.yaml  # Contains task and placeholder metadata.
└── test/
    └── test.js     # Unit tests (if assumed to be required for a current task type).
```

## Examples of tasks
We've selected example tasks that will allow you to create a great online course. Feel free to look inside each task and explore all nested files.

### Theory (NonProgrammingTasks/theory_task/)
Contains a minimal set of files you will encounter in any task:
- Source code file `task.js`, empty for the theory task.
- Text displayed in task description: `task.md`.
- Metadata file for the current task: `task-info.yaml`.

### Multiple choice quiz (NonProgrammingTasks/quiz_task/)
Same as Theory, but `task-info.yaml` contains answer options.

### Task with unittests (SimpleJavaScript/edu_task/)
Includes a test file `test/test.js`, executed when clicking the `Check` button.
File `task-info.yaml` contains placeholders.

### Output testing task (SimpleJavaScript/stdout_capture_edu_task/)
Task demonstrating test usage to capture and check `console.log` output.

### Node.js backend (WebDevelopment/backend_testing/)
Example of testing backend routes in a Node.js application.
