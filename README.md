# LexUID ⇄ BigInt Converter

A simple web application that converts between LexUID and BigInt formats. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Convert LexUID to BigInt
- Convert BigInt to LexUID
- Clean and modern UI
- Real-time conversion
- Error handling for invalid inputs

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alex1092/lexuid-to-bigint.git
   cd lexuid-to-bigint
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Choose the conversion mode using the toggle button:

   - "LexUID → BigInt": Convert from LexUID format to BigInt
   - "BigInt → LexUID": Convert from BigInt to LexUID format

2. Enter your input:

   - For LexUID format: Enter a string like "1234-56789-ABCD"
   - For BigInt format: Enter a number

3. Click the "Convert" button to see the result

## Examples

### LexUID to BigInt

Input: `1234-56789-ABCD`
Output: `38349849321`

### BigInt to LexUID

Input: `38349849321`
Output: `1234-56789-ABCD`

## License

MIT

## Author

[Alex Little](https://github.com/alex1092)
