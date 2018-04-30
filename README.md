# Redux
If a project is already using Redux and is looking to optimize on package size, a home rolled solution can be implemented instead of additional 3rd party libraries. This delegates all locale related needs to a locale reducer. Then anywhere text is needed, you would use the `LocalizedText` component. This will then monitor the redux store for locale changes and rerender text as needed.

## Interpolation
Simple interpolation is implemented in this solution but would need to be enhanced for more complex scenarios (dates, complex objects, plurals)