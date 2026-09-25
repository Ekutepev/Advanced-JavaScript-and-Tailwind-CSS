# Advanced JavaScript and Tailwind CSS

A responsive unit-conversion website for the CPRG 306 assignment. The site will let users convert between metric and imperial measurements, with a currency converter as an extra feature developed by our four-person group.

## Converters

The navbar has four tabs. Each tab has a form that converts in both directions:

- **Weight:** kilograms (kg) and pounds (lb)
- **Distance:** kilometres (km) and miles
- **Temperature:** Celsius (°C) and Fahrenheit (°F)
- **Currency (extra tab):** US dollars (USD) and Canadian dollars (CAD)

Every converter accepts either a single value or a list of values. Lists are entered as comma-separated numbers, for example `1, 2.5, 10`.

The JavaScript conversion factory takes a source unit and a target unit and returns an arrow-function converter that handles either input form.

## Conversion Formulas

| Conversion | Formula                  |
| ---------- | ------------------------ |
| kg → lb    | lb = kg × 2.20462        |
| lb → kg    | kg = lb ÷ 2.20462        |
| miles → km | km = miles × 1.60934     |
| km → miles | miles = km ÷ 1.60934     |
| °C → °F    | °F = °C × 9/5 + 32       |
| °F → °C    | °C = (°F − 32) × 5/9     |
| USD → CAD  | CAD = USD × 1.4147       |
| CAD → USD  | USD = CAD ÷ 1.4147       |

The currency rate is fixed at **1 USD = 1.4147 CAD**, the market rate on September 25, 2026, when the app was created. The rate is not updated live, so results will drift from current market rates over time.

## Group Members

| Member            | Area                                           |
| ----------------- | ---------------------------------------------- |
| Evgeny Kutepov    | Distance converter (miles and kilometres)      |
| Isaac Jenkins     | Weight converter (pounds and kilograms)        |
| Harderick Dhillon | Currency converter (USD and CAD, extra tab)    |
| Jedidiah Belayneh | Temperature converter (Celsius and Fahrenheit) |

## Technology

- HTML
- JavaScript and TypeScript
- Tailwind CSS Play CDN, used for all components (navbar, tabs, forms) and for the responsive layout

## Run Locally

1. Install dependencies with `npm install`.
2. After editing `main.ts`, compile it to `main.js` with `npx tsc`.
3. Open the project folder in Visual Studio Code and serve `index.html` with a local web server, such as the Live Server extension. Serving the page is recommended because the JavaScript entry point is an ES module.

## Deployment and Submission

Deploy the static site using GitHub Pages or another static hosting service, then submit both links in Brightspace:

- GitHub repository: _add repository URL_
- Deployed website: _add live website URL_

Only one submission is required for the group.
