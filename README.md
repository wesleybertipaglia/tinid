# TinID

TinID is a tiny ID generator for TypeScript — simple, fast, and customizable.

## Features

* Unique ID generation with configurable length
* Custom character set
* Zero dependencies
* Lightweight and fast
* Fully typed (TypeScript)
* CommonJS and ESM support

## Installation

```bash
npm install tinid
```

## Usage

```ts
import { tinid } from 'tinid';

// Default usage
const id = tinid(); // e.g., 'a8B3kLx9'

// Custom length and charset
const customId = tinid(12, 'ABC123');
```

## API

### `tinid(length?: number, charset?: string): string`

* `length` – Length of the ID (default: `8`)
* `charset` – Characters to use (default: alphanumeric)

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
