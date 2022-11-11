# PDF REST API

Generate a PDF via REST API.

Using this server, form parameters that are sent via URL encoding are printed to
a PDF. The PDF is sent back as the response.

## Installation

Clone this repository

```bash
git clone https://github.com/travishorn/pdf-rest-api
```

Change into the directory

```bash
cd pdf-rest-api
```

Install dependencies

```bash
npm install
```

## Usage

Start the server

```bash
npm run dev
```

Use any HTTP client (such as cURL or Insomnia) to make a request with URL
encoded form parameters.

```bash
curl --request POST \
  --url http://127.0.0.1:3000/ \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data firstName=Travis \
  --data lastName=Horn
```

A PDF will be returned containing the request body.

## Development

Modify `index.js` to specify exacly how you'd like the PDF to be generated. See
the [PDFKit](http://pdfkit.org/) docs for more information. Access the request
variables with `request.body`.

## License

The MIT License

Copyright 2022 Travis Horn

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
