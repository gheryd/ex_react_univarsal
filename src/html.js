export default (message, content) =>  `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Test</title>
        <link rel="stylesheet" type="text/css" href="app.css" >
    </head>
    <body>
        <script>
            window.__message__ = "${message}";
        </script>
        <div id="react-container">${content}</div>
        <script src="bundle.js"></script>
    </body>
</html>
`;