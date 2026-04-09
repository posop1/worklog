# Turborepo + Nuxt 3 Monorepo

Готовый к работе монорепозиторий с Turborepo и Nuxt 3.

## 📁 Структура

```
monorepo/
├── apps/
│   ├── web/              # Основное приложение (Nuxt 3)
│   │   ├── pages/
│   │   ├── app.vue
│   │   └── nuxt.config.ts
│   └── docs/             # Документация (Nuxt 3)
│       ├── pages/
│       ├── app.vue
│       └── nuxt.config.ts
├── packages/
│   ├── ui/               # Vue 3 компоненты
│   │   └── src/
│   │       ├── Button.vue
│   │       ├── Card.vue
│   │       ├── Input.vue
│   │       └── index.ts
│   └── shared-config/    # Общие конфигурации
│       ├── index.js
│       └── utils.js
├── package.json
└── turbo.json
```

## 🚀 Быстрый старт

```bash
# Установка зависимостей
npm install

# Запуск всех приложений в dev режиме
npm run dev

# Сборка всех приложений
npm run build
```

## 📦 Приложения

- **web** - http://localhost:3000 - Основное веб-приложение
- **docs** - http://localhost:3001 - Документация компонентов

## 🎨 Пакеты

### @repo/ui
Библиотека переиспользуемых Vue 3 компонентов:
- `Button` - Кнопка с вариантами primary/secondary
- `Card` - Карточка с заголовком и футером
- `Input` - Поле ввода с лейблом и валидацией

### @repo/shared-config
Общие конфигурации и утилиты:
- `apiUrl` - URL API
- `appName` - Название приложения
- `utils` - Вспомогательные функции (formatDate, truncate, sleep)

## 🛠 Команды

```bash
npm run dev      # Запустить все приложения
npm run build    # Собрать все приложения
npm run lint     # Проверить код
npm run clean    # Очистить build артефакты
```

## ⚡️ Особенности

- **Turborepo** - Умное кеширование и параллельная сборка
- **Nuxt 3** - SSR, автоимпорты, file-based routing
- **Vue 3** - Composition API, TypeScript
- **Workspaces** - Единое управление зависимостями
- **TypeScript** - Полная типизация

## 📝 Использование компонентов

```vue
<template>
  <Card title="Пример" :footer="true">
    <Input v-model="name" label="Имя" />
    <template #footer>
      <Button @click="submit">Отправить</Button>
    </template>
  </Card>
</template>

<script setup>
import { Button, Card, Input } from '@repo/ui'
const name = ref('')
</script>
```

## 🔧 Добавление нового приложения

1. Создайте папку в `apps/`
2. Добавьте `package.json` с именем `@repo/your-app`
3. Настройте `nuxt.config.ts`
4. Приложение автоматически подключится к Turborepo

## 📚 Добавление нового пакета

1. Создайте папку в `packages/`
2. Добавьте `package.json` с именем `@repo/your-package`
3. Экспортируйте функционал через `index.ts`
4. Используйте в приложениях через `@repo/your-package`
