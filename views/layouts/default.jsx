const React = require("react")

function Default(html) {
    return (
        <html>
            <head>
                <title>default</title>
            </head>
            <body>
                <h1>html rendered!</h1>
                <div className="container">
                    {html.children}
                </div>
            </body>
        </html>
    )
}

module.exports = Default