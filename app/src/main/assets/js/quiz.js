// Quiz Questions Database (Exactly 30 rich multiple choice questions covering levels 1 to 5)
const QUIZ_QUESTIONS = [
    // LEVEL 1: BASICS (Questions 1-6)
    {
        id: "q1",
        level: 1,
        question: "What does HTML stand for?",
        options: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "Hyperlink and Text Management Language",
            "Home Tool Markup Language"
        ],
        answer: 0,
        explanation: "HTML stands for HyperText Markup Language. It is the gold standard language used to organize structures for web content."
    },
    {
        id: "q2",
        level: 1,
        question: "Which tag is used to define the main visible content of an HTML page?",
        options: [
            "&lt;html&gt;",
            "&lt;head&gt;",
            "&lt;main-content&gt;",
            "&lt;body&gt;"
        ],
        answer: 3,
        explanation: "All visible resources such as lists, headings, pictures, and buttons reside inside the &lt;body&gt; tag of an HTML file."
    },
    {
        id: "q3",
        level: 1,
        question: "Which of the following describes a self-closing (empty) HTML tag?",
        options: [
            "&lt;p&gt;",
            "&lt;br&gt;",
            "&lt;h1&gt;",
            "&lt;div&gt;"
        ],
        answer: 1,
        explanation: "The line-break tag &lt;br&gt; is self-closing, meaning it does not enclose child text and does not require a ending &lt;/br&gt; tag."
    },
    {
        id: "q4",
        level: 1,
        question: "Which heading level denotes the most important header on a webpage?",
        options: [
            "&lt;h6&gt;",
            "&lt;h1&gt;",
            "&lt;head&gt;",
            "&lt;header&gt;"
        ],
        answer: 1,
        explanation: "&lt;h1&gt; denotes top level importance and is displayed as the largest heading block in typical browsers."
    },
    {
        id: "q5",
        level: 1,
        question: "Where should attributes always be placed inside an HTML element?",
        options: [
            "Inside the opening tag",
            "Inside the closing tag",
            "Anywhere between the opening and closing tags",
            "Within a separate &lt;style&gt; block only"
        ],
        answer: 0,
        explanation: "Attributes (like href or title) must always be declared right inside the opening tag, separated by spacing."
    },
    {
        id: "q6",
        level: 1,
        question: "Which tag is used to display text exactly as written, preserving spaces and line breaks?",
        options: [
            "&lt;code&gt;",
            "&lt;pre&gt;",
            "&lt;p&gt;",
            "&lt;span&gt;"
        ],
        answer: 1,
        explanation: "The &lt;pre&gt; tag indicates preformatted text, telling the web browser to retain spacing layouts in a monospace style."
    },

    // LEVEL 2: FORMATTING (Questions 7-12)
    {
        id: "q7",
        level: 2,
        question: "Which element is used to highlight text with a highlighted yellow background?",
        options: [
            "&lt;highlight&gt;",
            "&lt;em&gt;",
            "&lt;mark&gt;",
            "&lt;strong&gt;"
        ],
        answer: 2,
        explanation: "HTML5 &lt;mark&gt; emphasizes segments by rendering a neon yellow highlight block over the targeted letters."
    },
    {
        id: "q8",
        level: 2,
        question: "What tag pair produces a standard bulleted (unordered) list?",
        options: [
            "&lt;ol&gt; and &lt;li&gt;",
            "&lt;ul&gt; and &lt;li&gt;",
            "&lt;list&gt; and &lt;item&gt;",
            "&lt;dl&gt; and &lt;dd&gt;"
        ],
        answer: 1,
        explanation: "An unordered list is specified with &lt;ul&gt;, where each point or option is wrapped inside an &lt;li&gt; (list item) tag."
    },
    {
        id: "q9",
        level: 2,
        question: "To make a hyperlink open in a brand new browser tab, what attribute is required?",
        options: [
            "target='_blank'",
            "rel='new-tab'",
            "href='blank'",
            "target='_new'"
        ],
        answer: 0,
        explanation: "Adding target='_blank' tells the browser to launch the target web reference page in a separate browser window or tab."
    },
    {
        id: "q10",
        level: 2,
        question: "What is the purpose of the 'alt' attribute inside an image &lt;img&gt; tag?",
        options: [
            "It configures alternative dimensions for retina screen sizes",
            "It provides text description for accessibility and search crawlers",
            "It acts as a fallback connection when the link URL breaks",
            "It outlines the hover tooltip bubble"
        ],
        answer: 1,
        explanation: "The alt attribute is mandatory because it supplies a text alternative read aloud by screen assistants when loading images."
    },
    {
        id: "q11",
        level: 2,
        question: "Which tag encodes subscript text, placing characters slightly lower?",
        options: [
            "&lt;sup&gt;",
            "&lt;sub&gt;",
            "&lt;lower&gt;",
            "&lt;under&gt;"
        ],
        answer: 1,
        explanation: "The &lt;sub&gt; tag arranges text as subscript, which is perfect for scientific formulas like H&lt;sub&gt;2&lt;/sub&gt;O."
    },
    {
        id: "q12",
        level: 2,
        question: "Is the &lt;img&gt; element a self-closing tag?",
        options: [
            "No, it must end with &lt;/img&gt;",
            "Yes, it is self-closing and has no closing tag",
            "Yes, but only if its dimensions are explicitly defined",
            "No, it must utilize &lt;image&gt;&lt;/image&gt;"
        ],
        answer: 1,
        explanation: "The &lt;img&gt; element is indeed self-closing because it doesn't wrap outer text, holding details purely inside attributes."
    },

    // LEVEL 3: TABLES (Questions 13-18)
    {
        id: "q13",
        level: 3,
        question: "Which HTML tag starts a single vertical data container inside a row?",
        options: [
            "&lt;tr&gt;",
            "&lt;table&gt;",
            "&lt;td&gt;",
            "&lt;th&gt;"
        ],
        answer: 2,
        explanation: "&lt;td&gt; (table data) holds standard cell items, nested inside horizontal rows (&lt;tr&gt;)."
    },
    {
        id: "q14",
        level: 3,
        question: "What is the difference between the &lt;td&gt; and &lt;th&gt; tags?",
        options: [
            "&lt;th&gt; elements render bold and centered, acting as headers",
            "&lt;td&gt; can only display numerical figures while &lt;th&gt; displays formulas",
            "&lt;th&gt; splits columns into multiple sections",
            "There is no difference"
        ],
        answer: 0,
        explanation: "&lt;th&gt; defines a table heading, formatted defaults as centered and bold, highlighting structure."
    },
    {
        id: "q15",
        level: 3,
        question: "To span a cell horizontally across multiple adjacent columns, which attribute should you add?",
        options: [
            "rowspan",
            "colspan",
            "width",
            "merge"
        ],
        answer: 1,
        explanation: "The 'colspan' attribute (column-span) specifies how many layout columns a single cells element spans across."
    },
    {
        id: "q16",
        level: 3,
        question: "To merge a cell vertically across multiple rows down, which attribute do you use?",
        options: [
            "colspan",
            "grid-row",
            "rowspan",
            "height-span"
        ],
        answer: 2,
        explanation: "The 'rowspan' attribute allows standard cells to grow downward across several spreadsheet lines."
    },
    {
        id: "q17",
        level: 3,
        question: "Which semantic subdivisions compile a complete table structured outline?",
        options: [
            "&lt;header&gt;, &lt;body&gt;, &lt;footer&gt;",
            "&lt;tr&gt;, &lt;td&gt;, &lt;th&gt;",
            "&lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt;",
            "&lt;table&gt;, &lt;row&gt;, &lt;column&gt;"
        ],
        answer: 2,
        explanation: "&lt;thead&gt;, &lt;tbody&gt;, and &lt;tfoot&gt; cluster sections for headers, core metrics, and bottom totals."
    },
    {
        id: "q18",
        level: 3,
        question: "What does the 'border' attribute inside a &lt;table border='1'&gt; do?",
        options: [
            "It creates a shadow glow around the cell card",
            "It renders visible borders around cell containers and rows",
            "It configures a rounded layout curvature",
            "It forces CSS imports automatically"
        ],
        answer: 1,
        explanation: "The 'border' attribute is an HTML attribute that outlines local borders on tables without using external CSS grids."
    },

    // LEVEL 4: FORMS (Questions 19-24)
    {
        id: "q19",
        level: 4,
        question: "Which 'type' attribute value changes a standard text input into a hidden, secure characters box?",
        options: [
            "type='hidden'",
            "type='username'",
            "type='password'",
            "type='private'"
        ],
        answer: 2,
        explanation: "Setting type='password' instructs web engines to mask user typings with solid dots to protect private data."
    },
    {
        id: "q20",
        level: 4,
        question: "How do you link a label with an input box to maximize hit targets and accessibility?",
        options: [
            "Place them both on the same text paragraph",
            "Set the label's 'for' attribute to match the input's 'id'",
            "Give them identical name tags in a block layout",
            "Use CSS styling to link active borders"
        ],
        answer: 1,
        explanation: "Matching the label's 'for' variable with the input's 'id' connects them. This allows clicking the text label to focus the input."
    },
    {
        id: "q21",
        level: 4,
        question: "Which form element supports longer, multi-line inputs such as user remarks?",
        options: [
            "&lt;input type='text'&gt;",
            "&lt;textarea&gt;",
            "&lt;select&gt;",
            "&lt;input type='paragraph'&gt;"
        ],
        answer: 1,
        explanation: "The &lt;textarea&gt; tag provides an empty multi-line input field that users can resize at runtime as needed."
    },
    {
        id: "q22",
        level: 4,
        question: "What element houses selectable choices nested inside a &lt;select&gt; tag dropdown?",
        options: [
            "&lt;choice&gt;",
            "&lt;item&gt;",
            "&lt;option&gt;",
            "&lt;select-item&gt;"
        ],
        answer: 2,
        explanation: "Each list selection options of a dropdown menu is constructed inside the &lt;option&gt; tags."
    },
    {
        id: "q23",
        level: 4,
        question: "What is the primary difference between GET and POST form submit methods?",
        options: [
            "GET parameters reside in the URL; POST packages them securely inside the request body",
            "GET works only for forms without text fields",
            "POST can only be triggered on mobile WebViews",
            "GET is much slower than POST"
        ],
        answer: 0,
        explanation: "GET exposes active parameter queries inside URL links, while POST sends them securely inside the request body (perfect for forms)."
    },
    {
        id: "q24",
        level: 4,
        question: "Which button attribute targets form action submit triggers?",
        options: [
            "type='submit'",
            "type='action'",
            "type='dispatch'",
            "type='post'"
        ],
        answer: 0,
        explanation: "Buttons marked as type='submit' initiate the wrapping form's actions when clicked."
    },

    // LEVEL 5: ADVANCED & SEMANTIC (Questions 25-30)
    {
        id: "q25",
        level: 5,
        question: "Which tag represents a self-contained, independent article piece on a webpage?",
        options: [
            "&lt;section&gt;",
            "&lt;div&gt;",
            "&lt;article&gt;",
            "&lt;aside&gt;"
        ],
        answer: 2,
        explanation: "The &lt;article&gt; tag represents semantic content that is self-contained and could be syndicated independently (such as a forum post)."
    },
    {
        id: "q26",
        level: 5,
        question: "What element is used to overlay a completely secondary webpage, widget, or document inside your current HTML page?",
        options: [
            "&lt;iframe&gt;",
            "&lt;frame-container&gt;",
            "&lt;embed-file&gt;",
            "&lt;window&gt;"
        ],
        answer: 0,
        explanation: "An &lt;iframe&gt; (inline frame) enables you to frame external sites or HTML files seamlessly within your active page structure."
    },
    {
        id: "q27",
        level: 5,
        question: "What is the role of the 'controls' attribute in &lt;video&gt; and &lt;audio&gt; tags?",
        options: [
            "It styles the layout to comply with CSS properties",
            "It renders visible controls like play, pause, seek, and volume sliders",
            "It prevents files from starting automatically",
            "It configures a looping stream"
        ],
        answer: 1,
        explanation: "The 'controls' attribute tells the browser to display play, pause, volume, and tracking buttons, making media files interactive."
    },
    {
        id: "q28",
        level: 5,
        question: "Which tag defines navigation links block containers, signaling search engines how pages are indexed?",
        options: [
            "&lt;header&gt;",
            "&lt;links&gt;",
            "&lt;nav&gt;",
            "&lt;aside&gt;"
        ],
        answer: 2,
        explanation: "The semantic tag &lt;nav&gt; is designed to wrap menus, sidebar indexes, or lists of hyperlink references."
    },
    {
        id: "q29",
        level: 5,
        question: "Where are meta tags (like charset, description, and viewport config) defined in HTML documents?",
        options: [
            "Inside the &lt;head&gt; block",
            "Directly inside the &lt;body&gt; section",
            "Inside the &lt;footer&gt; section",
            "Within the final &lt;/html&gt; element"
        ],
        answer: 0,
        explanation: "Meta configurations, page title strings, and icon assets links are placed inside the non-visible &lt;head&gt; section."
    },
    {
        id: "q30",
        level: 5,
        question: "Which option represents a valid, accessible structure for embedding a responsive sound sample?",
        options: [
            "&lt;audio src='music.mp3' controls&gt;&lt;/audio&gt;",
            "&lt;music source='music.mp3'&gt;",
            "&lt;sound play='music.mp3'&gt;",
            "&lt;audio source='music.mp3'&gt;"
        ],
        answer: 0,
        explanation: "The tag &lt;audio src='music.mp3' controls&gt;&lt;/audio&gt; provides a valid player with audio controls to the user."
    }
];
