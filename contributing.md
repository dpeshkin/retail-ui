# Разработка Retail UI

Библиотека компонентов **Retail UI** — это открытый проект и результат совместных усилий [большого количества людей](https://github.com/skbkontur/retail-ui/graphs/contributors). Мы очень ценим вклад каждого и приглашаем всех желающих принять участие в его развитии. Этот гайд призван помочь новым участникам познакомиться с проектом и ответить на основные вопросы касательно его разработки.

## Содержание

- [Общие сведения](#общие-сведения)
- [Краткая инструкция](#краткая-инструкция)
- [Issues](#issues)
- [Начало работы](#начало-работы)
  - [Настройка](#настройка)
  - [Репозиторий](#репозиторий)
    - [Клонирование](#клонирование)
    - [Ветки](#ветки)
    - [Коммиты](#коммиты)
  - [Кодовая база](#кодовая-база)
    - [Структура файлов](#структура-файлов)
    - [Code Style](#code-style)
- [Тесты](#тесты)
  - [Unit-тесты](#unit-тесты)
  - [Скриншотные тесты](#скриншотные-тесты)
  - [Storybook](#storybook)
- [Документация](#документация)
- [Pull Request](#pull-request)
- [Помощь](#помощь)

## Общие сведения

### Полезные ссылки:

- Документация:
  - [Контролы](http://tech.skbkontur.ru/react-ui/)
  - [Валидации](http://tech.skbkontur.ru/react-ui-validations/)
- NPM-пакеты:
  - [retail-ui](https://npmjs.com/package/retail-ui)
  - [@skbkontur/react-ui](https://www.npmjs.com/package/@skbkontur/react-ui)
  - [react-ui-validations](https://www.npmjs.com/package/react-ui-validations)
  - [@skbkontur/react-ui-validations](https://www.npmjs.com/package/@skbkontur/react-ui-validations)
- [Контур.Гайды](https://guides.kontur.ru/)

### Технологии

- JS: React, TypeScript, Flow (только [libdef](https://flow.org/en/docs/libdefs/) и в старых компонентах);
- CSS: LESS и CSS-in-JS;
- Сборка: Babel;
- CI: TeamCity;

### Дизайн

Библиотека во многом опирается на стандарты и принципы дизайна, описанные в [Контур.Гайдах](https://guides.kontur.ru/). Как правило, все изменения, связанные с поведением или внешним видом компонентов, сперва согласуются с гайдами, и только потом реализуются в библиотеке. Контакты для решения подобных вопросов можно найти в разделе [помощь](#помощь).

### Планы

Наши планы по развитию описаны в [Roadmap](packages/retail-ui/ROADMAP.md).

## Краткая инструкция

После [настройки](#настройка) и [клонирования](#клонирование) проекта работа над задачей в общем случае выглядит так:

1. Выбрать/Создать [Issue](#issues)
2. Выполнить задачу в отдельной ветке
3. Добавить [тесты](#тесты) и [документацию](#документация)
4. Прогнать [unit-тесты](#unit-тесты) и [линтеры](#code-style)
5. Оформить [pull request](#pull-request)

Команды, доступные в проектах:

- `yarn workspace retail-ui <command>` - контролы
  - `test` — unit-тесты `Jest` + `Enzyme`
  - `test:ui` — скриншотные тесты `Creevey`
  - `lint` — `tsc --noEmit` + `tslint` + `eslint` + `stylelint` + `flow --check`
  - `build` — сборка библиотеки
  - `storybook` — Storybook
  - `storybook:flat` — Storybook c flat-темой
  - `styleguide` — Styleguidist server
- `yarn workspace react-ui-testing <command>` - интеграционные тесты
  - `start` — старт приложения для интеграционных тестов (используется собранная версия библиотеки)
  - `test` — интеграционные тесты с использованием `SeleniumTesting` (работает только во внутренней сети Контура)
- `yarn workspace react-ui-validations <command>` - валидации
  - `start:docs` — документация
  - `test` — unit-тесты
  - `lint` — линтеры
  - `storybook` — Storybook

## Issues

[GitHub Issues](https://github.com/skbkontur/retail-ui/issues) используются для планирования задач и ведения багов. Они распределяются по [проектам](https://github.com/skbkontur/retail-ui/projects), которые позволяют следить за прогрессом их выполнения. Начав работу над issue, назначьте себя исполнителем и перетащите его в колонку "In progress" проекта. В "Done" они попадают автоматически после закрытия.

Выбирая себе issue для работы, следует обращать внимание на лейблы, которыми они помечены. Новичкам подойдут `good first issue` и `minor`. Как правило, такие задачи не предполагают большого количества работы и лучше подойдут для старта. `wait design` и `help wanted` ожидают какого-то вердикта и пока не готовы к выполнению.

Если вы планируете работу над задачей, у которой пока нет своего issue, то настоятельно рекомендуется его завести. Это очень помогает сохранять историю принятия решений, а также собирать статистику по проекту.

## Начало работы

### Настройка

Для начала необходимо иметь установленными следующие инструменты:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com)
- [Git](https://git-scm.com/)
- [Git LFS](https://git-lfs.github.com)

### Репозиторий

Вся разработка ведется на [GitHub](https://github.com/skbkontur/retail-ui). Монорепозиторий на базе [lerna](https://github.com/lerna/lerna) помимо самой [библиотеки контролов](https://github.com/skbkontur/retail-ui/tree/master/packages/retail-ui) содержит также [библиотеку валидаций](https://github.com/skbkontur/retail-ui/tree/master/packages/react-ui-validations) и инструменты тестирования.

Права на запись в репозиторий имеет ограниченный круг разработчиков. Информацию о том, как стать одним из них, вы найдете разделе [помощь](#помощь). А пока можно сделать [Fork](https://guides.github.com/activities/forking/) и работать через него.

#### Клонирование

Перейдите в выбранную директорию для [клонирования](https://help.github.com/en/articles/cloning-a-repository) и выполните команду:

```
git clone https://github.com/skbkontur/retail-ui.git
```

Или, в случае форка:

```
git clone https://github.com/%YOUR_USER_NAME%/retail-ui.git
```

Работая с форком, полезно добавить upstream в качестве удаленного репозитория:

```
 git remote add upstream https://github.com/skbkontur/retail-ui.git
```

Теперь легко можно [синхронизировать](https://help.github.com/en/articles/syncing-a-fork) свой форк с основным репозиторием:

```
 git fetch upstream
 git checkout master
 git merge upstream/master
```

#### Ветки

Начиная работу над задачей, создайте для нее отдельную ветку от мастера.

#### Коммиты

Особое внимание стоит уделить коммитам. В проекте используется [commitlint](https://github.com/conventional-changelog/commitlint) с конфигурацией [config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional). Это означает, что сообщения ваших коммитов должны соответсвовать следующему формату:

```
тип(scope?): короткое описание
```

Например:

```
feat(ComboBox): new prop 'searchOnFocus'
fix(Button): fix icon padding
chore: update dependencies
```

**тип** должен быть одним из следующих ключевых слов:

- `feat`: новая функциональность
- `fix`: исправление бага
- `test`: добавление и корректировка тестов
- `refactor`: рефакторинг
- `docs`: изменение документации
- `build`: изменения в системе сборки или внешних зависимостях
- `perf`: улучшение производительности кода
- `style`: изменение стиля кода (именование, форматирование и прочее)
- `ci`: изменения конфигурационных файлов и скриптов CI
- `chore`: прочие изменения

**scope** - опциональный параметр, указывающий на область изменений. Это может быть имя компонента или пакета.

**короткое описание** - минимальное сообщение на русском или английском языке, отражающее суть внесенных изменений.

Все три поля в сумме составляют заголовок коммита, который не должен превышать **72 символа**. Более подробное описание можно оставить в теле коммита, отступив одну пустую строку от заголовка. Например:

```
fix(RenderLayer): add touchstart handling

iOS mouse events don't bubble up, use touchstart event instead

Closes #1439
```

В футере, через пустую строку от тела коммита, можно оставить [ссылки](https://help.github.com/articles/closing-issues-via-commit-messages/) на связанные issue.

Также, для составления правильного сообщения коммита можно воспользоваться интерактивной командой `yarn commit`.

**Важно!** Все коммиты типа `feat` и `fix` попадают в [changelog](https://github.com/skbkontur/retail-ui/blob/master/packages/retail-ui/CHANGELOG.md). Поэтому, желательно, чтобы их краткое описание являлось информативным для широкого круга пользователей. По этой же причине, не стоит создавать более одного коммита этих типов на одну решенную задачу, иначе все они попадут в changelog. Для дополнительных коммитов, которые неизбежно возникают в процессе, можно использовать тип `refactor`, `chore` или любой другой из вышеописанных, который подойдет лучше.

### Кодовая база

#### Структура файлов

```
packages/
├── ...
├── react-ui-validations/
└── retail-ui/
    ├── .creevey/
    ├── .storybook/
    ├── .styleguide/
    ├── ...
    └── components/
        ├── ...
        └── Button/
            ├── __stories__/
            ├── __tests__/
            ├── Button.tsx
            ├── Button.less
            ├── Button.styles.ts
            ├── ...
            └── README.md
```

| Директория / Файл                              | Описание                                 |
| ---------------------------------------------- | ---------------------------------------- |
| `react-ui-validations/`                        | Библиотека валидаций                     |
| `retail-ui/`                                   | Библиотека контролов                     |
| `retail-ui/.creevey/`                          | [Скриншотные тесты](#скриншотные-тесты)  |
| `retail-ui/.storybook/`                        | Конфиг Storybook                         |
| `retail-ui/.styleguide/`                       | Конфиг React Styleguidist                |
| `retail-ui/components/`                        | Компоненты контролов                     |
| `retail-ui/components/Button`                  | Компонент кнопки                         |
| `retail-ui/components/Button/__stories__/`     | [Stories](#создание-story) для Storybook |
| `retail-ui/components/Button/__tests__/`       | [Unit-тесты](#unit-тесты)                |
| `retail-ui/components/Button/Button.tsx`       | Код компонента                           |
| `retail-ui/components/Button/Button.less`      | Основные стили                           |
| `retail-ui/components/Button/Button.styles.ts` | Кастомизируемые стили                    |
| `retail-ui/components/Button/README.md`        | [Документация](#документация)            |

#### Code style

Для контроля над стилем и форматированием кода в проекте используются [editorconfig](https://editorconfig.org/), [tslint](https://palantir.github.io/tslint/), [ESLint](https://eslint.org/), [Stylelint](https://stylelint.io/) и [Prettier](https://prettier.io/). По возможности, рекомендуем установить соответсвующие плагины в свою IDE, чтобы получать от нее предупреждения в режиме реального времени. Но запускать линтеры можно и вручную, с помощью команды `yarn workspace retail-ui lint`. Советуем делать это перед каждым коммитом или пользоваться командой `yarn commit`. PR, не прошедший проверку линтеров, не может быть принят.

## Тесты

По возможности, любая новая функциональность или фикс должны сопровождаться тестами.

### Unit-тесты

Для unit-тестирования используются [Jest](https://jestjs.io/) и [Enzyme](https://airbnb.io/enzyme/). Тесты находятся в поддиректориях `__tests__` внутри почти каждого компонента. Для их запуска служит команда `yarn workspace retail-ui test`. Её тоже желательно выполнять перед отправкой своих изменений, чтобы убетится в том, что они не сломали существующие сценарии.

### Скриншотные тесты

Скриншотные тесты пишут для проверки функциональности в различных браузерах (Chrome, Firefox, IE11). Они построены на основе [Creevey](https://github.com/wKich/creevey) и [Storybook](https://storybook.js.org/).

#### Запуск

`yarn workspace retail-ui storybook:test` - запуск storybook со стилями для тестов  
`yarn workspace retail-ui test:ui --ui` - запуск creevey

#### Создание скриншотного теста

1. Создать или выбрать готовую [story](#создание-story)
2. Добавить новый сценарий в `packages/retail-ui/.creevey/tests/[ComponentName].ts`, например (где `Button` и `playground`, это `kind` и `story` в `Storybook` соответственно):

```
describe('Button', function() {
  describe('playground', function() {
    it('idle', async function() {
      const element = await this.browser.findElement(By.css('#test-element'));
      await expect(await element.takeScreenshot()).to.matchImage('idle');
    });
  });
});
```

3. Через [gui](#запуск) запустить добавленный тест
4. Принять новые скриншоты в интерфейсе или с помощью команды `yarn workspace retail-ui test:ui --update`

Существующие тесты обновляются тем же образом (шаги 3 и 4).

### Storybook

[Storybook](https://storybook.js.org/) позволяет описывать и просматривать все имеющиеся компоненты в различных состояниях, а также взаимодействовать с ними. Он используется для ручного и скриншотного тестирования.

Запускается командой `yarn workspace retail-ui storybook` или `yarn workspace retail-ui storybook:flat` в плоском варианте.

#### Создание story

Все story находятся в файлах `__stories__/[ComponentName].stories.tsx`, в директориях своих компонентов. Просто добавьте новое состояние и оно появится в storybook:

```
.add('with width', () => <Button width="300px">Hello</Button>)
```

# Документация

Для документирования компонентов используется [React Styleguidist](https://github.com/styleguidist/react-styleguidist). Он позволяет документировать пропы и методы, а также демонстрировать примеры использования. Более подробную информацию можно найти в [официальной документации](https://react-styleguidist.js.org/docs/documenting.html).

Собранная документация всегда доступна на [витрине](http://tech.skbkontur.ru/react-ui/). А локально она запускается так:

```
yarn workspace retail-ui styleguide
```

Для того, чтобы новый компонент появился в документации, его нужно поместить в отдельную одноименную директорию внутри `packages/retail-ui/components` и сопроводить файлом `README.md`:

```
components/
└── MyComponent/
    ├── MyComponent.tsx
    └── README.md
```

# Pull Request

После отправки изменений на сервер появится возможность [создать](https://help.github.com/en/articles/creating-a-pull-request-from-a-fork) pull request (PR) в [основной репозиторий](). Опишите сделанные вами изменения и укажите [ссылки](https://help.github.com/articles/closing-issues-via-commit-messages/) на связанные issue, чтобы проверяющим было проще в нем ориентироваться. После успешного прохождения тестов и одобрения ревьюерами изменения будут влиты в мастер и попадут в библиотеку с ближайшим релизом.

# Помощь

По любым возникающим вопросам можно обращаться в [telegram-чат](https://t.me/react_ui) поддержки или напрямую пользователям:

- [Владимир Дзех](https://github.com/dzekh) - дизайн, гайды;
- [Дмитрий Лазарев](https://github.com/wKich) - общие вопросы, права, ключи доступа;
- [Егор Погадаев](https://github.com/zhzz) - общие вопросы;
- [Максим Пахомов](https://github.com/lossir) - общие вопросы;
