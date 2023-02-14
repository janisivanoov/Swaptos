# Design System

All the design has been generated with [tailwindcss](https://tailwindcss.com/).
Find all the theme related configuration inside tailwind.config.js

# Design System

All the designs have been generated with [Tailwind CSS](https://tailwindcss.com/).
Find all the theme related configurations inside tailwind.config.js

## Install and Initializes

     npx storybook init

## Run the Storybook

      npm run storybook

## Table of Contents

- [System Requirements](#system-requirements)
- [Setup Feedback](#setup)
- [Install Dependencies](#install-dependencies)
- [.env file](#env-file)
- [Running the App](#running-the-app)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
- [Changing the Page `<title>`](#changing-the-page-title)
- [Installing a Dependency](#installing-a-dependency)
- [CRA User Guide](#cra-user-guide)
- [How to Update to New Versions?](#how-to-update-to-new-versions)
- [What’s Included?](#whats-included)

## System Requirement

- [git](https://git-scm.com/) - v2.13 or greater
- [NodeJS](https://nodejs.org/en/) - `12 || 14 `
- [npm](https://www.npmjs.com/) - v6 or greater

## Setup

Setup your project by running the following commands:

## Install Dependencies

    npm install

## .env file

This file contains various environment variables that you can configure.

**PORT** - Port to run your frontend on \
**REACT_APP_GOOGLE_CLIENT_ID** - (Optional) Your Google Client ID

## Running the App

    npm start

## Folder Structure

After creation, your project should look like this:

```
.
├── package.json
├── package-lock.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── App.js
│   ├── assets
│   │   ├── fonts ---------- Project fonts
│   │   └── images --------- All Project Images
│   ├── components --------- UI and Detected Common Components
│   ├── constants ---------- Project constants, eg: string consts
│   ├── hooks -------------- Helpful Hooks
│   ├── index.js
│   ├── pages -------------- All route pages
│   ├── Routes.js ---------- Routing
│   ├── styles
│   │   ├── index.css ------ Other Global Styles
│   │   └── tailwind.css --- Default Tailwind modules
│   └── util
│       └── index.js ------- Helpful utils
└── tailwind.config.js ----- Entire theme config, colors, fonts etc.
```

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.

You may create subdirectories inside src. For faster rebuilds, only files inside src are processed by Webpack.
You need to put any JS and CSS files inside src, otherwise Webpack won’t see them.

Only files inside public can be used from public/index.html.
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that DhiWise wouldn’t be useful if you can’t customize it when you are ready for it.

## Syntax Highlighting in the Editor

To configure the syntax highlighting in your favorite text editor, head to the [relevant Babel documentation page](https://babeljs.io/docs/editors) and follow the instructions. Some of the most popular editors are covered.

## Displaying Lint Output in the Editor

> Note: This feature is available with `react-scripts@0.2.0` and higher.<br>
> It only works with npm 3 or higher.
> Some editors, including Sublime Text, Atom, and Visual Studio Code, provide plugins for ESLint.

They are not required for linting. You should see the linter output right in your terminal as well as the browser console. However, if you prefer the lint results to appear right in your editor, there are some extra steps you can take.

You would need to install an ESLint plugin for your editor first. Then, add a file called `.eslintrc` to the project root:

```js
{
  "extends": "react-app"
}
```

Now your editor should report the linting warnings.

Note that even if you edit your `.eslintrc` file further, these changes will **only affect the editor integration**. They won’t affect the terminal and in-browser lint output. This is because Create React App intentionally provides a minimal set of rules that find common mistakes.

If you want to enforce a coding style for your project, consider using [Prettier](https://github.com/jlongster/prettier) instead of ESLint style rules.

## Changing the Page `<title>`

You can find the source HTML file in the `public` folder of the generated project. You may edit the `<title>` tag in it to change the title from “React App” to anything else.

Note, that normally you wouldn’t edit files in the `public` folder very often. For example, adding a stylesheet is done without touching the HTML.

If you need to dynamically update the page title based on the content, you can use the browser [`document.title`](https://developer.mozilla.org/en-US/docs/Web/API/Document/title) API. For more complex scenarios when you want to change the title from React components, you can use [React Helmet](https://github.com/nfl/react-helmet), a third party library.

## Installing a Dependency

The generated project includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency. You may install other dependencies (for example, React Router) with `npm`:

```sh
npm install --save react-router
```

Alternatively you may use `yarn`:

```sh
yarn add react-router
```

This works for any library, not just `react-router`.










# Система дизайна

Весь дизайн был создан с помощью [tailwindcss](https://tailwindcss.com/).
Найдите все конфигурации, связанные с темой, в файле tailwind.config.js

# Система дизайна

Все дизайны были созданы с помощью [Tailwind CSS](https://tailwindcss.com/).
Найдите все конфигурации, связанные с темой, в файле tailwind.config.js

## Установка и инициализация

     npx storybook init

## Запуск Storybook

      npm run storybook

## Оглавление

- [Системные требования](#system-requirements)
- [Рекомендации по установке](#setup)
- [Установить зависимости](#install-dependencies)
- [.env-файл](#env-file)
- [Запуск приложения](#running-the-app)
- [Структура папок](#folder-structure)
- [Доступные скрипты](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
- [Изменение заголовка страницы `<title>`](#changing-the-page-title)
- [Установка зависимости](#installing-a-dependency)
- [Руководство пользователя CRA](#cra-user-guide)
- [Как обновить до новых версий?](#how-to-update-to-new-versions)
- [Что включено?](#whats-included)

## Системные требования

- [git](https://git-scm.com/) - v2.13 или выше
- [NodeJS](https://nodejs.org/en/) - `12 || 14 `
- [npm](https://www.npmjs.com/) - v6 или выше

## Установка

Установите ваш проект, выполнив следующие команды:

## Установите зависимости

    npm install

## Файл .env

Этот файл содержит различные переменные окружения, которые вы можете настроить.

**PORT** - Порт, на котором будет работать ваш фронтенд.\
**REACT_APP_GOOGLE_CLIENT_ID** - (Необязательно) ID вашего клиента Google.

## Запуск приложения

    npm start

## Структура папок

После создания ваш проект должен выглядеть следующим образом:

```
.
├── package.json
├── package-lock.json
├──── postcss.config.js
├──── public
│ ├──── favicon.ico
│ ├──── index.html
│ ├──── logo192.png
│ ├──── logo512.png
│ ├──── manifest.json
│ └──── robots.txt
├──── README.md
├──── src
│ ├──── App.js
│ ├──── assets
│ │ ├──── шрифты ---------- Шрифты проекта
│ │ └──── изображения --------- Все изображения проекта
│ ├──── компоненты --------- пользовательский интерфейс и обнаруженные общие компоненты
│ ├──── константы ---------- Константы проекта, например: строковые константы
│ ├──── крючки -------------- Полезные крючки
│ ├──── index.js
│ ├──── страницы -------------- Все страницы маршрутов
│ ├──── Routes.js ---------- Маршрутизация
│ ├──── стили
│ │ ├──── index.css ------ Другие глобальные стили
│ │ └──── tailwind.css --- Модули Tailwind по умолчанию
│ └──── util
│ └──── index.js ------- Полезные утилиты
└── tailwind.config.js ----- Вся конфигурация темы, цвета, шрифты и т.д.
```

Чтобы проект собрался, **эти файлы должны существовать с точными именами**:

- `public/index.html` - шаблон страницы;
- `src/index.js` - точка входа JavaScript.

Вы можете создавать подкаталоги внутри src. For faster rebuilds, only files inside src are processed by Webpack.
You need to put any JS and CSS files inside src, otherwise Webpack won’t see them.

Only files inside public can be used from public/index.html.
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Ваше приложение готово к развертыванию!

### `npm run eject`

**Примечание: это односторонняя операция. Как только вы `eject`, вы не сможете вернуться назад!**.

Если вы не удовлетворены выбором инструмента сборки и конфигурации, вы можете `eject` в любое время. Эта команда удалит единственную зависимость сборки из вашего проекта.

Вместо этого она скопирует все конфигурационные файлы и переходные зависимости (Webpack, Babel, ESLint и т.д.) прямо в ваш проект, чтобы вы имели полный контроль над ними. Все команды, кроме `eject`, по-прежнему будут работать, но они будут указывать на скопированные скрипты, чтобы вы могли их подправить. На этом этапе вы предоставлены сами себе.

Вам никогда не придется использовать `eject`. Набор курируемых функций подходит для малых и средних развертываний, и вы не должны чувствовать себя обязанными использовать эту функцию. Однако мы понимаем, что DhiWise не будет полезен, если вы не сможете настроить его, когда будете к этому готовы.

## Подсветка синтаксиса в редакторе

Чтобы настроить подсветку синтаксиса в вашем любимом текстовом редакторе, перейдите на [соответствующую страницу документации Babel](https://babeljs.io/docs/editors) и следуйте инструкциям. Здесь описаны некоторые из наиболее популярных редакторов.

## Отображение вывода Lint в редакторе

Переведено с помощью www.DeepL.com/Translator (бесплатная версия)