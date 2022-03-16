Interview Scheduler
=========

Interview Scheduler is a simple web application that allows users to schedule interviews during the week.\
Built with Node, React, and Postgres, and developed with Cypress and Jest testing frameworks.

* Users are able to:
  * schedule an interview in an open slot
  * make edits to existing interview
  * delete an existing interview.

* The appointment component will conditionally render based on the state:
  * SHOW - display scheduled existing interview
  * EMPTY - display empty slot with an add icon
  * CONFIRM - display confirmation window prior to deletion
  * STATUS - display loading icon when saving or deleting
  * ERROR - display error when there is an issue

* The sidebar components will conditionally render based on the state:
  * Spots remaining will update concurrently with scheduling changes
  * The day of week will be highlighted when selected
  * Days with no available slots are greyed out

https://ct-scheduler-lhl.netlify.app/

[![Netlify Status](https://api.netlify.com/api/v1/badges/fcb7b8d4-56f7-412c-a3fc-355064f3e331/deploy-status)](https://app.netlify.com/sites/ct-scheduler-lhl/deploys)

## Final Product
!["Preview"](./public/screenshots/demo-small.gif)

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Dependencies

- Node 12.x or above
- NPM 5.x or above
- PG 6.x