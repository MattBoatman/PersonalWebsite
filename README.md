# i18Next
[i18Next](https://www.i18next.com/) is a complete solution with plugins for all of the frameworks we currently support. This solution has support for detecting user language, loading translations, caching and more.

## Configuration
[Configuration](https://www.i18next.com/configuration-options.html) for applications would be likely the same across applications. Here is where we define [name spaces](https://www.i18next.com/principles/namespaces.html), [resources](https://www.i18next.com/add-or-load-translations.html), default languages and fall back keys.


```javascript
import i18next from 'i18next';
import en_US from './en_US';
import fr_CA from './fr_CA';
import es_US from './es_US';
import en_CA from './en_CA';

i18next.init({
    resources: {
        en_US: { translations: en_US },
        fr_CA: { translations: fr_CA },
        es_US: { translations: es_US },
        en_CA: { translations: en_CA },
    },
    fallbackLng: 'en_US',
    ns: ['translations'],
    defaultNS: 'translations',
    debug: true,
});

export default i18next;
```

# Translation Functions

## Accessing Keys
[Accessing Keys](https://www.i18next.com/essentials.html) directly is done using the `t` function from `i18n`
Keys:
```json
{
    "key": "value of key",
    "look": {
        "deep": "value of look deep"
    }
}
```
```javascript
i18next.t('key');
// -> "value of key"

i18next.t('look.deep');
// -> "value of look deep"
```

You can also access keys in different namespaces if your project's configuration supports that.
```javascript
i18next.init({
  ns: ['common', 'moduleA'],
  defaultNS: 'moduleA'
});
```
moduleA.json
```json
{
    "name": "Module A"
}
```
common.json
```
{
    "button": {
        "save": "save"
    }
}
```
Usage
```javascript
i18next.t('name');
// -> "Module A"

i18next.t('common:button.save');
// -> "save"
```

Another cool feature is multiple fallback keys. You can call the `t` function with an array of keys and provide dynamic translations. This is useful for errors where you would like to show different warnings based on the status.
Keys
```json
{
  "error": {
    "unspecific": "Something went wrong.",
    "404": "The page was not found."
  }
}
```
```javascript
// const error = '404';
i18next.t([`error.${error}`, 'error.unspecific']); // -> "The page was not found"

// const error = '502';
i18next.t([`error.${error}`, 'error.unspecific']); // -> "Something went wrong"
```

## Interpolation
[Interpolation](https://i18next.gitbook.io/i18next/translation-function/interpolation) allows you to integrate dynamic values into your translations.

```json
{
    "key": "{{what}} is {{how}}"
}
```
```javascript
i18next.t('key', { what: 'i18next', how: 'great' });
// -> "i18next is great"
```
### Interpolation with data models
```json
{
    "key": "i am {{author.name}}"
}
```
```javascript
const author = {
    name: 'Jan',
    github: 'jamuhl'
};
i18next.t('key', { author });
// -> "i am Jan"
```
## Name Spaces
[Name spaces](https://www.i18next.com/principles/namespaces.html) Able to break keys into multiple files. This will give us the option to break translation files into multiple files to reduce load times.

## Language detection
[Language Detection](https://github.com/i18next/i18next-browser-languageDetector) Will integrate with our current cookie system to set a default language for the user. We could also fallback on other options to detect language `['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag']`

## Additional things not worthy to be summarized
Additional things like [formatting](https://i18next.gitbook.io/i18next/translation-function/formatting) and [plurals](https://i18next.gitbook.io/i18next/translation-function/plurals) can be found on the i18next website.


# react-i18next
[react-i18next](https://react.i18next.com/) is an addon for reactjs applications based on `i18next`. This module asserts translations are loaded for your components and content gets rerendered on language changes.

## Initialization
This is done the same way as you would init a `i18next` application but with the addition of `reactI18nextModule`. There are [additional options](https://react.i18next.com/components/i18next-instance) for react available as well.
```javascript
import i18next from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import en_US from './en_US';
import fr_CA from './fr_CA';
import es_US from './es_US';
import en_CA from './en_CA';

i18next.use(reactI18nextModule).init({
    resources: {
        en_US: { translations: en_US },
        fr_CA: { translations: fr_CA },
        es_US: { translations: es_US },
        en_CA: { translations: en_CA },
    },
    fallbackLng: 'en_US',
    ns: ['translations'],
    defaultNS: 'translations',
    debug: true,
    react: {
        wait: true,
        defaultTransParent: 'span',
    },
});

export default i18next;
```

# Usage
## i18n (render prop)
The I18n component passes `t` function to child function and triggers loading the translation files needed. Further, it asserts the component gets rerendered on language change or changes to the translations themselves.
The `t` function has all the available functionality outlined [here](/i18next)
Additional functionality outline [here](https://react.i18next.com/components/i18n-render-prop)
```javascript
import React from 'react';
import { I18n } from 'react-i18next';

const SelectLanguage = (props) => {
    return (
        <I18n ns="translations">
            {
                (t, { i18n }) => (
                    <div>
                        <button onClick={() => i18n.changeLanguage('en_US')}>{t('english')}</button>
                        <button onClick={() => i18n.changeLanguage('fr_CA')}>{t('french')}</button>
                    </div>
                )
            }
        </I18n>
    );
};

export default SelectLanguage;
```

## Translate HOC
Same functionality as above render prop but using a [HOC](https://reactjs.org/docs/higher-order-components.html).
[Additional options for HOC](https://react.i18next.com/components/translate-hoc)
```javascript
import React from 'react';
import { translate } from 'react-i18next';

const TranslatedContent = props => {
    const { t } = props;
    return (
        <div>
            {t('translatedContent')}
        </div>
    );
};

export default translate('translations')(TranslatedContent);
```

## Trans Component
The [Trans Component](https://react.i18next.com/components/trans-component) enables you to nest and react content to be translated as one string. Supports both plural and interpolation.

**Before**:
```javascript
<div>
    Hello <strong title="this is your name">{name}</strong>, you have {count} unread message(s). <Link to="/msgs">Go to messages</Link>.
</div>
```
**After**:
```javascript
<Trans i18nKey="userMessagesUnread" count={count}>
    Hello <strong title={t('nameTitle')}>{{name}}</strong>, you have {{count}} unread message. <Link to="/msgs">Go to messages</Link>.
</Trans>
```
```json
"userMessagesUnread": "Hello <1><0>{{name}}</0></1>, you have <3>{{count}}</3> unread message. <5>Go to message</5>.",
"userMessagesUnread_plural": "Hello <1><0>{{name}}</0></1>, you have <3>{{count}}</3> unread messages.  <5>Go to messages</5>.",
```

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