export const nextOptions = String.raw`Would you like to use TypeScript? Yes
Would you like to use ESLint? No
Would you like to use Tailwind CSS? Yes
Would you like your code inside a \`src/\` directory? Yes
Would you like to use App Router? (recommended) Yes
Would you like to use Turbopack for \`next dev\`? Yes
Would you like to customise the import alias? No`;

export const prettierConfig = String.raw`"prettier": {
    "trailingComma": "es5",
    "tabWidth": 4,
    "semi": true,
    "singleQuote": false,
    "plugins": [
        "prettier-plugin-tailwindcss"
    ]
}`;

export const viteConfig = String.raw`import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [tailwindcss()],
});`;

export const htmlExample = String.raw`<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/src/style.css" rel="stylesheet" />
    </head>
    <body>
        <h1 class="text-3xl font-bold underline">Hello world!</h1>
    </body>
</html>`;
