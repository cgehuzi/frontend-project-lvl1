# Brain Games for command line

Создано в рамках учебного проекта [Игры Разума](https://ru.hexlet.io/professions/frontend/projects/44) от [Хекслет](https://ru.hexlet.io/).

### Package status:

[![Maintainability](https://api.codeclimate.com/v1/badges/5784889176721155ef44/maintainability)](https://codeclimate.com/github/cgehuzi/frontend-project-lvl1/maintainability)
[![eslint](https://github.com/cgehuzi/frontend-project-lvl1/actions/workflows/eslint.yml/badge.svg)](https://github.com/cgehuzi/frontend-project-lvl1/actions/workflows/eslint.yml)
[![jest](https://github.com/cgehuzi/frontend-project-lvl1/actions/workflows/jest.yml/badge.svg)](https://github.com/cgehuzi/frontend-project-lvl1/actions/workflows/jest.yml)

## Описание

Набор математических мини-игр, запускаемых из консоли.  
Чтобы победить, игроку необходимо правильно ответить на три вопроса. При неверном ответе игра завершается.

## Установка

Склонируйте репозиторий, запустите терминал в рабочей директории и последовательно введите команды:

```bash
npm ci --production     # установка пакетов из зависимостей
npm link                # установка brain-games
```

## Запуск

```bash
npx brain-games
```

Будет предложен список доступных для выбора игр.

```bash
# You can play one of the games:
# 1 : brain-even
# 2 : brain-calc
# 3 : brain-gcd
# 4 : brain-progression
# 5 : brain-prime
# Which game do you choose?
```

Доступны следующие игры:

1. [brain-even](#чётное-ли-число) – чётное ли число
2. [brain-calc](#калькулятор) – калькулятор
3. [brain-gcd](#наибольший-общий-делитель) – наибольший общий делитель
4. [brain-progression](#арифметическая-прогрессия) – арифметическая прогрессия
5. [brain-prime](#простое-ли-число) – простое ли число

Чтобы начать игру, необходимо ввести её имя либо порядковый номер.

## Запуск отдельных игр

Также каждая из игр имеет отдельную команду для запуска.

### Чётное ли число

```bash
npx brain-even
```

Будет предложено число. Необходимо определить, чётное ли оно.

```bash
# Answer "yes" if the number is even, otherwise answer "no".
# Question: 42
# Your answer: yes
# Correct!
```

### Калькулятор

```bash
npx brain-calc
```

Будет предложено математическое выражение (сложение, вычитание или умножение). Необходимо определить его результат.

```bash
# What is the result of the expression?
# Question: 86 + 22
# Your answer: 108
# Correct!
```

### Наибольший общий делитель

```bash
npx brain-gcd
```

Будет предложено два числа. Необходимо определить их наибольший общий делитель.

```bash
# Find the greatest common divisor of given numbers.
# Question: 25 70
# Your answer: 5
# Correct!
```

### Арифметическая прогрессия

```bash
npx brain-progression
```

Будет предложена арифметическая прогрессия, но один из её членов будет неизвестен. Необходимо определить недостающее число.

```bash
# What number is missing in the progression?
# Question: 6 14 22 30 38 46 54 62 .. 78
# Your answer: 70
# Correct!
```

### Простое ли число

```bash
npx brain-prime
```

Будет предложено число. Необходимо определить, [простое](https://ru.wikipedia.org/wiki/Простое_число) ли оно.

```bash
# Answer "yes" if given number is prime. Otherwise answer "no".
# Question: 83
# Your answer: yes
# Correct!
```
