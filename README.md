# Playwright Automation Framework

[![Playwright CI](https://github.com/28tejashree/playwright-b2b-saas-quality-framework/actions/workflows/playwright.yml/badge.svg)](https://github.com/28tejashree/playwright-b2b-saas-quality-framework/actions/workflows/playwright.yml)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue)
![Playwright](https://img.shields.io/badge/Playwright-Automation-green)
![API%20%2B%20UI](https://img.shields.io/badge/API%20%2B%20UI-Testing-orange)

A Playwright-based automation framework covering UI and API testing, built with a focus on stability, maintainability, and CI-friendly execution.

This repository contains an automation setup that supports UI test automation, API test automation, API-driven authentication for UI tests, selective test execution using tags, and CI execution with retries and failure artifacts. The structure and patterns follow practical automation practices used in product engineering teams.

## Technology Stack
Playwright (TypeScript), Playwright API testing using request context, GitHub Actions for continuous integration, cross-browser execution.

## Project Structure
src/core – base test setup and shared fixtures  
src/api – API clients and helpers  
src/modules – UI modules and page-level logic  
src/utils – environment and utility helpers  
tests/api – API test specifications  
tests/modules – UI and API-integrated UI tests  
.github/workflows – CI pipeline configuration  

## Authentication Strategy
UI tests do not depend on UI-based login flows. Authentication is performed via API and the authenticated state is injected into the browser context before page load to reduce execution time and improve test stability.

## Test Strategy
UI tests cover authenticated flows, smoke validations, and API-assisted UI scenarios. API tests validate backend behavior independently and provide data for UI tests.

## Test Tagging
Tests are tagged using @smoke, @regression, @api, and @ui to allow selective execution using Playwright grep functionality.

## Stability Handling
Retries are enabled only in CI. Traces are collected on first retry. Screenshots and videos are captured on failure. Known unstable tests are isolated without blocking pipelines.

## Environment Configuration
Environment-based execution is supported using centralized configuration for cleaner test code.

## Continuous Integration
Tests run on every push using GitHub Actions. The pipeline installs dependencies, executes Playwright tests, and uploads reports for debugging when needed.

## Local Execution
npm install  
npx playwright install  
npx playwright test  

## Author
Tejashree Kamble
