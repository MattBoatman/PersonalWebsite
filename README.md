# Redux
If a project is already using Redux and is looking to optimize on package size, a home rolled solution can be implemented instead of additional 3rd party libraries. This delegates all locale related needs to a locale reducer. Then anywhere text is needed, you would use the `LocalizedText` component. This will then monitor the redux store for locale changes and rerender text as needed.

## Interpolation
Simple interpolation is implemented in this solution but would need to be enhanced for more complex scenarios (dates, complex objects, plurals)

# Best Practices

## Date and Time
Don't hardcode date formats.

## Units
Different locales will have spaces between number and the symbol identifier, don't hardcode this either.

## Splitting
Splitting sentences into multiple keys assumes grammar for a certain language. DON'T do this. This is a common problem interpolation will fix.

## Context
It's often unwise to reuse strings in different contexts. In different languages context means different nouns and verbs might be used in different ways. For example, `bookmark` both a noun and verb in english.

## CSS
`text-transform` won't work as expected for some languages.

## Design for +50%
English is much shorter than most languages

`Save document?` in English becomes `A bheil thu airson an sgrìobhainn a shàbhaladh` in Gaelic.

More information found on [W3C](https://www.w3.org/International/articles/article-text-size)