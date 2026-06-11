// Lessons Database (17 comprehensive HTML lessons grouped in levels)
const HTML_LESSONS = [
    // LEVEL 1: BASICS
    {
        id: "l1_intro",
        level: 1,
        levelName: "Level 1: Basics",
        title: "What is HTML?",
        difficulty: "Beginner",
        desc: "Learn about the backbone of the web with HyperText Markup Language.",
        explanation: `<p><strong>HTML</strong> stands for <strong>H</strong>yper<strong>T</strong>ext <strong>M</strong>arkup <strong>L</strong>anguage. It is the core programming standard used to create and structure pages on the Web.</p>
        <p>Instead of defining the visual design (which CSS handles), HTML defines the <em>semantic meaning</em> and content structure of a page, such as where headings, paragraphs, images, and buttons should go.</p>
        <p>A basic HTML document starts with a <code>&lt;!DOCTYPE html&gt;</code> declaration, followed by the opening <code>&lt;html&gt;</code> tag, <code>&lt;head&gt;</code> (containing metadata), and <code>&lt;body&gt;</code> (containing the visible content).</p>`,
        example: `<!DOCTYPE html>
<html>
<head>
    <title>My First Webpage</title>
</head>
<body>
    Hello World! This is my first webpage content.
</body>
</html>`,
        tryYourself: `<!DOCTYPE html>
<html>
<head>
    <title>My Fresh Page</title>
</head>
<body>
    <h1>Welcome to the Web!</h1>
    <p>Try editing this text and clicking preview to watch it render in real-time!</p>
</body>
</html>`
    },
    {
        id: "l1_tags",
        level: 1,
        levelName: "Level 1: Basics",
        title: "HTML Tags & Elements",
        difficulty: "Beginner",
        desc: "Master the structure of opening, closing, and self-closing tags.",
        explanation: `<p>HTML uses <strong>tags</strong> to tell the browser how to display content. A tag is surrounded by angle brackets: <code>&lt;tagname&gt;</code>.</p>
        <p>Most HTML items consist of an <strong>opening tag</strong>, some **content**, and a **closing tag** with a slash:</p>
        <pre><code>&lt;p&gt;This is a paragraph.&lt;/p&gt;</code></pre>
        <p>However, some utility tags do not have closing tags. These are called <strong>self-closing or empty elements</strong>, such as <code>&lt;br&gt;</code> (line break) and <code>&lt;hr&gt;</code> (horizontal rule).</p>`,
        example: `<p>First Paragraph</p>
<hr>
<p>Second Paragraph after a dividing horizontal line.</p>`,
        tryYourself: `<h2>Interactive Tag Exercise</h2>
<p>HTML is built from nested tags.</p>
<hr>
<p>Can you add another line divider &lt;hr&gt; below this text?</p>`
    },
    {
        id: "l1_attributes",
        level: 1,
        levelName: "Level 1: Basics",
        title: "HTML Attributes",
        difficulty: "Beginner",
        desc: "Learn how attributes configure HTML tags with extra detail and parameters.",
        explanation: `<p><strong>Attributes</strong> provide extra information about an HTML element. They are always specified inside the <strong>opening tag</strong> and usually come in name/value pairs like <code>name="value"</code>.</p>
        <p>For example, the <code>href</code> attribute defines the link destination for an anchor link, while the <code>title</code> attribute adds a tool-tip when hovered.</p>
        <p>Values should always be enclosed in double quotes for standards compliance.</p>`,
        example: `<p title="This is a tooltip value">Hover your mouse over me to read the tooltip attribute!</p>`,
        tryYourself: `<!-- Experiment with local attributes -->
<h1 title="Welcome Hover Message">Hover your cursor on this bold title!</h1>
<p title="Tutorial Page">Notice the tool-tip text pops up dynamically.</p>`
    },
    {
        id: "l1_headings",
        level: 1,
        levelName: "Level 1: Basics",
        title: "HTML Headings",
        difficulty: "Beginner",
        desc: "Understand heading tiers from h1 to h6 and their structure.",
        explanation: `<p>HTML supports six levels of headings, ranging from <code>&lt;h1&gt;</code> down to <code>&lt;h6&gt;</code>.</p>
        <p><code>&lt;h1&gt;</code> defines the most important, largest heading on the page (usually only one per page). <code>&lt;h6&gt;</code> represents the least important and smallest heading.</p>
        <p>Browsers automatically add some white-space space (margin) before and after each heading.</p>`,
        example: `<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
<h5>Heading level 5</h5>
<h6>Heading level 6</h6>`,
        tryYourself: `<h1>Major Title (h1)</h1>
<p>This is some body content.</p>
<h2>Subchapter Section (h2)</h2>
<p>More explanation.</p>
<h3>Nested Details (h3)</h3>`
    },
    {
        id: "l1_paragraphs",
        level: 1,
        levelName: "Level 1: Basics",
        title: "Paragraphs & Line Breaks",
        difficulty: "Beginner",
        desc: "Create logical paragraphs, line breaks, and whitespace guidelines.",
        explanation: `<p>The <code>&lt;p&gt;</code> element defines a **paragraph** of body text.</p>
        <p>Web browsers automatically trim extra spaces and lines from the source code. To force a line break without beginning a new paragraph, use the self-closing <code>&lt;br&gt;</code> tag.</p>
        <p>If you want to preserve exact whitespace formatting (spaces and line breaks), use the <code>&lt;pre&gt;</code> tag.</p>`,
        example: `<p>This is a paragraph.<br>And this is a line break inside the same paragraph.</p>
<pre>
This is
   preformatted
text layout.
</pre>`,
        tryYourself: `<p>Ordinary HTML collapse    multiple   continuous spaces   into a single spacer.</p>

<p>To keep<br>this separate<br>on individual lines, use the line-break tag.</p>`
    },

    // LEVEL 2: FORMATTING
    {
        id: "l2_formatting",
        level: 2,
        levelName: "Level 2: Formatting",
        title: "Bold, Italic & Highlights",
        difficulty: "Intermediate",
        desc: "Use strong, em, mark, and sub/sup tags to style webpage body content.",
        explanation: `<p>HTML contains several functional tags for styling text elements:</p>
        <ul>
            <li><code>&lt;strong&gt;</code>: Displays text in <strong>bold</strong> to indicate high importance.</li>
            <li><code>&lt;em&gt;</code>: Displays text in <em>italics</em> to emphasize pronunciation.</li>
            <li><code>&lt;mark&gt;</code>: Renders a yellow highlighted background.</li>
            <li><code>&lt;sub&gt;</code> and <code>&lt;sup&gt;</code>: Format text as <sub>subscript</sub> or <sup>superscript</sup>.</li>
        </ul>`,
        example: `<p>This is a <strong>very important</strong> announcement!</p>
<p>You must <em>always</em> practice writing clean code.</p>
<p>Let's <mark>highlight</mark> this cell, or show water formula: H<sub>2</sub>O.</p>`,
        tryYourself: `<p>Water formula is written as: H<sub>2</sub>O</p>
<p>Einstein discovery: E = mc<sup>2</sup></p>
<p>Can you make a <strong>strong</strong> phrase and highlight it using <strong>&lt;mark&gt;</strong>?</p>`
    },
    {
        id: "l2_lists",
        level: 2,
        levelName: "Level 2: Formatting",
        title: "Lists (Ordered / Unordered)",
        difficulty: "Intermediate",
        desc: "Build bullet points and numbered hierarchies with lists.",
        explanation: `<p>Lists are essential for organizing items cleanly or making site menus.</p>
        <p>There are two primary types of HTML lists:</p>
        <ol>
            <li><strong>Unordered lists (<code>&lt;ul&gt;</code>)</strong>: Bullet point list style.</li>
            <li><strong>Ordered lists (<code>&lt;ol&gt;</code>)</strong>: Numbered order list style.</li>
        </ol>
        <p>In both list engines, individual items are enclosed inside the <code>&lt;li&gt;</code> (list item) tag.</p>`,
        example: `<h3>Grocery List (Unordered)</h3>
<ul>
    <li>Fresh Oats</li>
    <li>Apples</li>
    <li>Almond Milk</li>
</ul>

<h3>Recipe (Ordered)</h3>
<ol>
    <li>Pour milk into bowl</li>
    <li>Stir slowly</li>
</ol>`,
        tryYourself: `<h3>My Task Backlog</h3>
<ul>
    <li>Revise HTML Lists</li>
    <li>Practice code exercises</li>
</ul>`
    },
    {
        id: "l2_links",
        level: 2,
        levelName: "Level 2: Formatting",
        title: "Links & Anchors",
        difficulty: "Intermediate",
        desc: "Connect pages together using anchor tags and targets.",
        explanation: `<p>Hyperlinks are implemented using the anchor tag <code>&lt;a&gt;</code>.</p>
        <p>The crucial attribute is <code>href</code>, which defines the destination page or external web address.</p>
        <p>By default, links open in the current window. Set <code>target="_blank"</code> to force the browser to open the clicked link in a fresh new tab.</p>`,
        example: `<p>Create a link to <a href="https://example.com" target="_blank">Example Website</a>.</p>`,
        tryYourself: `<p>Let's build a link. Add target="_blank" so the page doesn't exit your current app layout!</p>
<a href="https://www.wikipedia.org" target="_blank">Visit Wikipedia Encyclopedia</a>`
    },
    {
        id: "l2_images",
        level: 2,
        levelName: "Level 2: Formatting",
        title: "Images & Accessibility",
        difficulty: "Intermediate",
        desc: "Embed images into your web layouts and explain alternative text roles.",
        explanation: `<p>The image tag <code>&lt;img&gt;</code> enables embedding picture files on webpages. It is a **self-closing tag** (no closing tag needed).</p>
        <p>Key properties are:</p>
        <ul>
            <li><code>src</code>: The absolute path or URL of the image file.</li>
            <li><code>alt</code>: Alternative text description. This is mandatory for screen accessibility (TalkBack) and displays if the image fails to load.</li>
            <li><code>width</code> and <code>height</code>: Pixels size overrides (e.g. <code>width="200"</code>).</li>
        </ul>`,
        example: `<img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=300" alt="Clean code editor on workspace desk" width="200">`,
        tryYourself: `<!-- Embed placeholder photo with fallback text label-->
<img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400" alt="Cybersecurity lock screen graphics" width="300">`
    },

    // LEVEL 3: TABLES
    {
        id: "l3_tables",
        level: 3,
        levelName: "Level 3: Tables",
        title: "Basic Table Structure",
        difficulty: "Intermediate",
        desc: "Build raw grids using rows, columns, and layout containers.",
        explanation: `<p>HTML structures tabular spreadsheets using grid containers.</p>
        <ul>
            <li><code>&lt;table&gt;</code>: The overall wrapping box.</li>
            <li><code>&lt;tr&gt;</code>: Defines an individual horizontal table row.</li>
            <li><code>&lt;td&gt;</code>: Defines standard cell data container.</li>
        </ul>
        <p>Table borders and cell spacing padding are added using standard styles or CSS, but the raw structure is pure grid HTML.</p>`,
        example: `<table border="1">
    <tr>
        <td>Row 1 Element A</td>
        <td>Row 1 Element B</td>
    </tr>
    <tr>
        <td>Row 2 Element A</td>
        <td>Row 2 Element B</td>
    </tr>
</table>`,
        tryYourself: `<table border="1" style="width: 100%; text-align: left; border-collapse: collapse;">
  <tr>
    <td style="padding: 8px;">Vanilla JS</td>
    <td style="padding: 8px;">Lightweight</td>
  </tr>
  <tr>
    <td style="padding: 8px;">React App Element</td>
    <td style="padding: 8px;">Heavy UI engine</td>
  </tr>
</table>`
    },
    {
        id: "l3_headers",
        level: 3,
        levelName: "Level 3: Tables",
        title: "Table Headings (th)",
        difficulty: "Intermediate",
        desc: "Add headers to mark your column lists or grid descriptors.",
        explanation: `<p>To make tables accessible and look professional, use the table header tag <code>&lt;th&gt;</code> instead of <code>&lt;td&gt;</code> for the main label row.</p>
        <p>The browser automatically centers active <code>&lt;th&gt;</code> elements and formats them in **bold text**.</p>
        <p>A nested <code>&lt;thead&gt;</code> and <code>&lt;tbody&gt;</code> can be used to organize rows of metadata cleanly.</p>`,
        example: `<table border="1" style="border-collapse: collapse; width:100%;">
    <thead>
        <tr>
            <th>Course ID</th>
            <th>Technology Target</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>CSC-11</td>
            <td>Introduction to CSS3 Styling</td>
        </tr>
    </tbody>
</table>`,
        tryYourself: `<table border="2" style="border-collapse: collapse; text-align: center;">
    <tr>
        <th>Username</th>
        <th>Streak Days</th>
    </tr>
    <tr>
        <td>natnael99</td>
        <td>15 Days</td>
    </tr>
</table>`
    },
    {
        id: "l3_merge",
        level: 3,
        levelName: "Level 3: Tables",
        title: "Merged Cells (colspan / rowspan)",
        difficulty: "Hard",
        desc: "Stretch grid cells across multiple rows or columns.",
        explanation: `<p>Sometimes simple grid boxes need to merge or span across multiple columns or lines.</p>
        <p>You can achieve cell merging with grid attributes:</p>
        <ul>
            <li><code>colspan</code>: Stretches a single cell horizontally across multiple columns.</li>
            <li><code>rowspan</code>: Stretches a single cell vertically down across multiple rows.</li>
        </ul>`,
        example: `<table border="1" style="width: 100%;">
    <tr>
        <th colspan="2">Consolidated Title (2 columns wide)</th>
    </tr>
    <tr>
        <td>Column 1 item</td>
        <td>Column 2 item</td>
    </tr>
</table>`,
        tryYourself: `<table border="1" style="width: 100%; border-collapse: collapse;">
  <tr>
    <th colspan="3" style="background:#4F46E5; color:white; padding:8px;">Quarterly Growth Metrics</th>
  </tr>
  <tr>
    <td>Quarter A</td>
    <td>Quarter B</td>
    <td>Quarter C</td>
  </tr>
</table>`
    },

    // LEVEL 4: FORMS
    {
        id: "l4_inputs",
        level: 4,
        levelName: "Level 4: Forms",
        title: "Inputs & Label Links",
        difficulty: "Intermediate",
        desc: "Build forms to collect text parameters, names, and user variables.",
        explanation: `<p>HTML uses <code>&lt;form&gt;</code> structures to collect user input.</p>
        <p>The most adaptable input is the <code>&lt;input&gt;</code> element, whose behavior is driven by the <code>type</code> attribute (e.g. <code>text</code>, <code>password</code>, <code>email</code>, <code>number</code>).</p>
        <p>Always pair inputs with a <code>&lt;label&gt;</code> tag. Match the label's <code>for</code> attribute to the input's <code>id</code> to bind them for accessibility.</p>`,
        example: `<form>
    <label for="username">Username Input:</label><br>
    <input type="text" id="username" name="user" placeholder="Enter username"><br><br>
    
    <label for="pword">Secure Password:</label><br>
    <input type="password" id="pword" name="pass">
</form>`,
        tryYourself: `<form style="font-family: Arial, sans-serif; max-width: 300px;">
  <label for="email_box">Email Address:</label><br>
  <input type="email" id="email_box" placeholder="dev@example.com" style="width: 100%; padding: 8px; margin-top: 4px; margin-bottom: 12px; border-radius: 6px; border: 1px solid #ccc;"><br>
  
  <label for="secret_box">Password:</label><br>
  <input type="password" id="secret_box" style="width: 100%; padding: 8px; margin-top: 4px; border-radius: 6px; border: 1px solid #ccc;">
</form>`
    },
    {
        id: "l4_controls",
        level: 4,
        levelName: "Level 4: Forms",
        title: "Dropdowns & Textareas",
        difficulty: "Intermediate",
        desc: "Incorporate selection menus and long-form feedback text views.",
        explanation: `<p>For larger or multi-line feedback paragraphs, use the <code>&lt;textarea&gt;</code> tag instead of standard text inputs.</p>
        <p>To let users select from a set list of options, use the <code>&lt;select&gt;</code> parent tag combined with active <code>&lt;option&gt;</code> elements nested inside.</p>`,
        example: `<label for="tech_tier">What field do you learn?</label><br>
<select id="tech_tier">
    <option value="html">HTML5 Basics</option>
    <option value="css">CSS3 Design System</option>
    <option value="js">JS Dynamic Code</option>
</select><br><br>

<label for="feedback_note">Describe your goals:</label><br>
<textarea id="feedback_note" rows="3" cols="25" placeholder="Share your long thoughts..."></textarea>`,
        tryYourself: `<label for="country">Country Level:</label><br>
<select id="country" style="padding: 6px; margin-bottom: 12px; border-radius: 5px;">
  <option>United States</option>
  <option>Ethiopia</option>
  <option>United Kingdom</option>
</select>`
    },
    {
        id: "l4_buttons",
        level: 4,
        levelName: "Level 4: Forms",
        title: "Form Methods & Submission",
        difficulty: "Hard",
        desc: "Configure buttons and understand how GET and POST distribute form data.",
        explanation: `<p>To dispatch collected information, define a form <code>action</code> path and configure an active <code>method</code>:</p>
        <ul>
            <li><strong>GET</strong>: appends parameters directly to the address URL (suitable for user searches).</li>
            <li><strong>POST</strong>: encodes variables safely inside the HTTP header (essential for logins and profiles updates).</li>
        </ul>
        <p>Submission is triggered inside forms using <code>&lt;button type="submit"&gt;</code> or <code>&lt;input type="submit"&gt;</code>.</p>`,
        example: `<form method="get" action="/search">
    <p>Search standard tutorials:</p>
    <input type="search" placeholder="Query keyword" name="q">
    <button type="submit">Submit Query</button>
</form>`,
        tryYourself: `<form onsubmit="alert('Form submit intercepted locally!'); return false;">
  <label>Sample input query:</label>
  <input type="text" required placeholder="Type something..." style="padding:6px;">
  <button type="submit" style="background: green; color: white; border: none; padding: 6px 12px; border-radius: 4px;">Submit</button>
</form>`
    },

    // LEVEL 5: ADVANCED
    {
        id: "l5_semantic",
        level: 5,
        levelName: "Level 5: Advanced",
        title: "Semantic HTML Elements",
        difficulty: "Hard",
        desc: "Write semantic outlines using header, nav, main, article, and footer tags.",
        explanation: `<p>A <strong>semantic element</strong> clearly describes its meaning and target role to both the developer and the web browser.</p>
        <p>Using semantic structures instead of relying on generic <code>&lt;div&gt;</code> boxes drastically improves visual SEO ratings and accessibility reading:</p>
        <ul>
            <li><code>&lt;header&gt;</code>: Web banner block containing branding logos.</li>
            <li><code>&lt;nav&gt;</code>: Site index index navigation.</li>
            <li><code>&lt;main&gt;</code>: Exclusive focal core page body.</li>
            <li><code>&lt;article&gt;</code>: Independent, syndicatable content segment (blog article).</li>
            <li><code>&lt;footer&gt;</code>: Bottom copyright and contact metadata links.</li>
        </ul>`,
        example: `<header>
    <h2>Tech blog</h2>
</header>
<nav>
    <a href="#home">Home</a> | <a href="#articles">Feed</a>
</nav>
<main>
    <article>
        <h3>Mastering HTML5 Basics</h3>
        <p>Coding creates structure.</p>
    </article>
</main>
<footer>
    <p>© 2026 Learner Inc.</p>
</footer>`,
        tryYourself: `<header style="background: #e2e8f0; padding:15px; border-radius:5px 5px 0 0;">
  <h3>Space Exploration News</h3>
</header>
<main style="background: #fff; padding:15px;">
  <article>
    <h4>Mars Mission Success!</h4>
    <p>The latest rover touched down on Mars smoothly.</p>
  </article>
</main>
<footer style="background: #334155; color: white; text-align: center; padding: 10px; border-radius: 0 0 5px 5px;">
  <p>Published in 2026</p>
</footer>`
    },
    {
        id: "l5_media",
        level: 5,
        levelName: "Level 5: Advanced",
        title: "Audio, Video & Iframes",
        difficulty: "Hard",
        desc: "Incorporate video widgets, sound elements, and embedded frames.",
        explanation: `<p>HTML supports streaming media content directly inside document bodies without requiring older flash runtimes:</p>
        <ul>
            <li><code>&lt;video&gt;</code>: plays movies and clips. Set the <code>controls</code> attribute to display play, volume, and tracking buttons in the browser.</li>
            <li><code>&lt;audio&gt;</code>: integrates music tracking streams.</li>
            <li><code>&lt;iframe&gt;</code>: nests another standard page inside your active document layout.</li>
        </ul>`,
        example: `<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

<audio controls>
    <source src="song.mp3" type="audio/mpeg">
</audio>`,
        tryYourself: `<!-- Display inline frames embedding maps/pages securely -->
<p>Loading basic map frame embedding simulation:</p>
<iframe src="about:blank" style="width: 100%; height: 150px; border: 1px dashed navy; background: #f0fdf4;" title="Mock Frame Embed"></iframe>`
    }
];
