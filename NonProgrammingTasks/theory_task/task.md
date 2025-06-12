
This is a task description file.
Its content will be displayed to learners
in the **Task Description** window.

The file supports both Markdown and HTML.
You can toggle the format by renaming **task.md**
to **task.html**, or vice versa.
The default task description format can be changed
under **Preferences | Tools | Education**,
but this change will not affect any existing task description files.

The following features are specific to the JetBrains Academy plugin and are available in
**task.md** or **task.html**:

- **Hints**: Hints can be added anywhere in the task text.
  To add a hint, type "hint" and press **Tab**.
  Hints should be added to an empty line in the task text.
  In hints, you can use both HTML and Markdown. For example:
<div class="hint">

Text of your hint

</div>

- **In-course links**: You may need to refer learners to a particular lesson,
task, or file. To do so, use in-course links.
Specify the path using the following format: `[link_text](course://lesson1/task1/file1)`.

- **Shortcuts**: You can insert shortcuts into the task description.
With **task.html** or **task.md** open, right-click anywhere
on the **Editor** tab and select **Insert shortcut**
from the context menu.
For example: &shortcut:FileStructurePopup;.

- **Dynamic IDE name insertion**: Use the &percnt;`IDE_NAME`&percnt; macro
to dynamically insert the name of the IDE being used.
For example: **%IDE_NAME%**.

- **PSI elements**: You can insert links to PSI elements using the following format:
`[element_description](psi_element://link.to.element)`.
To get the link, right-click the class or method,
select **Copy Reference**,
and then paste it where needed using &shortcut:EditorPaste;.
For example: a [link to the "contains" method](psi_element://java.lang.String#contains).

- **File links**: You can add links to files using the **full path** in the following format:
  `[file_link](file://lesson1/task1/file.txt)`.
