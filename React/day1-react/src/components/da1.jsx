import React from "react";

const App = () => {
    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>

            {/* 1. Block vs Inline */}
            <h1>Block-level vs Inline Elements</h1>

            <p>
                <b>Block-level</b> → full width, new line (div, p, h1)
            </p>

            <p>
                <b>Inline</b> → same line, only needed space (span, a, img)
            </p>

            <div style={{ background: "#eee", padding: "10px" }}>
                I am a block element (div)
            </div>

            <span style={{ color: "red" }}>Inline text</span>{" "}
            <a href="#">Link</a>

            <hr />

            {/* 2. Common Tags */}
            <h2>Common Tags</h2>
            <p>Paragraph</p>
            <h3>Heading</h3>
            <div>Div container</div>
            <span>Span text</span>

            <hr />

            {/* 3. Semantic Tags */}
            <h2>Semantic Tags</h2>

            <header style={{ background: "#ddd", padding: "10px" }}>
                Header
            </header>

            <nav style={{ background: "#ccc", padding: "10px" }}>
                Navigation
            </nav>

            <main style={{ background: "#eee", padding: "10px" }}>
                <section>
                    <article>Article content</article>
                </section>
                <aside>Sidebar</aside>
            </main>

            <footer style={{ background: "#ddd", padding: "10px" }}>
                Footer
            </footer>

            <hr />

            {/* 4. Formatting Tags */}
            <h2>Formatting Tags</h2>

            <p>
                <b>Bold</b>, <strong>Important</strong>, <i>Italic</i>,{" "}
                <em>Emphasis</em>, <u>Underline</u>, <mark>Highlight</mark>,{" "}
                <small>Small</small>
            </p>

            <hr />

            {/* 5. Interactive Tags */}
            <h2>Interactive Tags</h2>

            <a href="https://www.google.com" target="_blank" rel="noreferrer">
                Go to Google
            </a>

            <br /><br />

            <button>Click Me</button>

            <br /><br />

            <input type="text" placeholder="Enter text" />

            <br /><br />

            <textarea placeholder="Type here"></textarea>

            <hr />

            {/* 6. Forms */}
            <h2>Form Example</h2>

            <form>
                <label>Name:</label><br />
                <input type="text" placeholder="Enter name" required /><br /><br />

                <label>Email:</label><br />
                <input type="email" required /><br /><br />

                <label>Password:</label><br />
                <input type="password" /><br /><br />

                <button type="submit">Submit</button>
            </form>

            <hr />

            {/* 7. Lists */}
            <h2>Lists</h2>

            <ul>
                <li>Apple</li>
                <li>Orange</li>
            </ul>

            <ol>
                <li>Step 1</li>
                <li>Step 2</li>
            </ol>

            <hr />

            {/* 8. Table */}
            <h2>Table</h2>

            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Selin</td>
                        <td>21</td>
                    </tr>
                </tbody>
            </table>

            <hr />

            {/* 9. Iframe (Embed) */}
            <h2>Iframe Example</h2>

            <iframe
                src="https://www.wikipedia.org"
                title="wiki"
                width="300"
                height="200"
            ></iframe>

        </div>
    );
};

export default App;