# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.2.5](https://github.com/skbkontur/retail-ui/compare/react-ui-testing@2.2.4...react-ui-testing@2.2.5) (2019-10-30)

**Note:** Version bump only for package react-ui-testing





## [2.2.4](https://github.com/skbkontur/retail-ui/compare/react-ui-testing@2.2.3...react-ui-testing@2.2.4) (2019-09-03)

**Note:** Version bump only for package react-ui-testing





## [2.2.3](https://github.com/skbkontur/retail-ui/compare/react-ui-testing@2.2.2...react-ui-testing@2.2.3) (2019-07-23)

**Note:** Version bump only for package react-ui-testing





## [2.2.2](https://github.com/skbkontur/retail-ui/compare/react-ui-testing@2.2.1...react-ui-testing@2.2.2) (2019-07-02)


### Features

* Customization ([#1333](https://github.com/skbkontur/retail-ui/issues/1333)) ([15e9e8f](https://github.com/skbkontur/retail-ui/commit/15e9e8f))


### BREAKING CHANGES

* Upgrades.enableSizeMedium16px is no longer working: redefine fontSizeMedium
variable via ThemeProvider or by calling ThemeFactory.overrideDefaultTheme()

* refactor(ColorObject): remove require call

* style(Upgrades): fix lint error

* chore(storybook): use ThemeProvider instead of overrideDefaultTheme

* refactor(ThemeFactory): remove ThemesCache

* refactor(ThemeEditor): clear timeout on unmount

* refactor(variables.less): prepare for Date* controls convertion

* feat(DateSelect): customize with css-in-js

* refactor(DatePickerOld): rename less file to prevent confusion

* feat(DatePicker): customize with css-in-js

* refactor(DateInput): properly separate styles between components

* feat(DateInput): customize with css-in-js

* feat(Calendar): customize with css-in-js

* refactor(TokenInput): add -webkit-text-fill-color

* refactor(styles): remove rt-ie8, rt-ie9

* refactor(Calendar): rename classnames to cx

* refactor(variables.less): move mixins into separate file

* style(CustomComboBox): specify px for padding-bottom

* style(SidePage): fix variable typo

* refactor(styles): remove unnecessary imports

* refactor(FormatSourceCode): rewrite code in more readable way

* test(ComboBoxView): approve screens with new spinner gray color

* fix(Button): fix sizeMedium baseline regress

* test(Button): approve screenshots with 14px medium font-size

* test(ComboBox): approve darker spinner color while loading items

* refactor(TokenInput): simplify styles

* refactor(TokenInput): fix firefox placeholder opacity

* refactor(DateSelect): make active prevail over selected

* refactor(DatePicker): fix red color bug

* refactor(DatePicker): make weekend prevail over today

* refactor(DateFragmentsView): fix .delimiter.filled combination style

* style(AnotherInputsPlayground): remove underscores from private methods

* test(AnotherInputsPlayground): stable date for screenshots

* test(Customization): approve actual screenshots

* refactor(customization): separate ThemeProviderPlayground component

* docs(ThemeProviderPlayground ): add README

* docs(customization): add core README

# copied from PR

* build(styleguide): add customization section to config

* chore(ThemeProviderPlayground): fix import

* test(Button): approve 14px font-size for medium size in flat theme

* refactor(customization): introduce derived font sizes for button/input

* refactor(Button): use fontSize=16px for size=medium in flat theme

* test(Button): approve 16px font-size for medium size in flat theme

* test(Customization): approve 16px font-size in flat theme

* refactor(DateInput): remove isSizeMedium16pxEnabled() in favor of theme

* refactor(Upgrades): cleanup deprecated methods

* docs(customization): fix styleguide's components and sections

* docs(customization): hack-fix ordered lists

* docs(customization): remove broken links

* docs(customization): fix less formatting

* docs(customization): add some line-breaks

* docs(customization): emphasize inline <code> the way it's done at github

* docs(customization): switch 'jsx static' to 'typescript' for some blocks

* docs(customization): use monospace font for inline <code>

* chore(Button): fix baseline of flat medium Button

* docs(customization): fix typo

* style: format with prettier

* style: make stylelint ignore *.ts





## [2.2.1](https://github.com/skbkontur/retail-ui/compare/react-ui-testing@2.2.0...react-ui-testing@2.2.1) (2019-06-13)

**Note:** Version bump only for package react-ui-testing





# [2.2.0](https://github.com/skbkontur/retail-ui/compare/react-ui-testing@2.1.0...react-ui-testing@2.2.0) (2019-05-22)


### Features

* **Toast:** toast is testable ([#1403](https://github.com/skbkontur/retail-ui/issues/1403)) ([5dcdf32](https://github.com/skbkontur/retail-ui/commit/5dcdf32))
* **Toggle:** toggle is testable ([#1398](https://github.com/skbkontur/retail-ui/issues/1398)) ([dd84805](https://github.com/skbkontur/retail-ui/commit/dd84805))





# [2.1.0](https://github.com/skbkontur/retail-ui/compare/react-ui-testing@2.0.11...react-ui-testing@2.1.0) (2019-05-14)


### Features

* **react-ui-testing:** prop key renders to html attribute ([017614d](https://github.com/skbkontur/retail-ui/commit/017614d))





## [2.0.11](https://github.com/skbkontur/retail-ui/compare/react-ui-testing@2.0.10...react-ui-testing@2.0.11) (2019-03-19)

**Note:** Version bump only for package react-ui-testing





## [2.0.10](https://github.com/skbkontur/retail-ui/compare/react-ui-testing@2.0.9...react-ui-testing@2.0.10) (2019-03-12)

**Note:** Version bump only for package react-ui-testing





## [2.0.9](https://github.com/skbkontur/retail-ui/compare/react-ui-testing@2.0.8...react-ui-testing@2.0.9) (2019-02-26)

**Note:** Version bump only for package react-ui-testing

## [2.0.8](https://github.com/skbkontur/retail-ui/compare/react-ui-testing@2.0.7...react-ui-testing@2.0.8) (2019-02-19)

**Note:** Version bump only for package react-ui-testing
