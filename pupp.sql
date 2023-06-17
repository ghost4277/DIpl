-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 17 2023 г., 09:13
-- Версия сервера: 8.0.30
-- Версия PHP: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `pup`
--

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

CREATE TABLE `categories` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Завтрак', NULL, NULL),
(2, '2-ой завтрак', NULL, NULL),
(3, 'Обед', NULL, NULL),
(4, 'Полдник', NULL, NULL),
(5, 'Ужин', NULL, NULL),
(6, 'Вода', NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2023_05_26_185137_create_users_table', 1),
(2, '2023_05_26_192148_create_categories_table', 1),
(3, '2023_05_26_193129_create_products_table', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` bigint UNSIGNED NOT NULL,
  `price` double(8,2) NOT NULL,
  `calories` int NOT NULL,
  `proteins` int NOT NULL,
  `carbohdrate` int NOT NULL,
  `fats` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `name`, `img`, `category_id`, `price`, `calories`, `proteins`, `carbohdrate`, `fats`, `created_at`, `updated_at`) VALUES
(5, 'Йогуртовый мусс с гранолой и яблочно-черничным конфитюром', 'image(6).jpg', 2, 235.00, 221, 18, 12, 21.00, NULL, NULL),
(6, 'Сэндвич с ростбифом', 'image(7).jpg', 2, 263.00, 221, 5, 22, 10.00, NULL, NULL),
(7, 'Сэндвич с лососем и сыром', 'image(8).jpg', 2, 241.00, 225, 12, 23, 22.00, NULL, NULL),
(8, 'Венская вафля с шоколадом и ягодным соусом', 'image(9).jpg', 2, 264.00, 231, 4, 31, 14.00, NULL, NULL),
(9, 'Суп-пюре из свеклы с говядиной и сливочным соусом', 'image(10).jpg', 3, 321.00, 324, 34, 41, 32.00, NULL, NULL),
(10, 'Рубленое мясо в сливочном песто и томатные спагетти', 'image(11).jpg', 3, 341.00, 290, 22, 31, 22.00, NULL, NULL),
(11, 'Овощная котлета с курицей в сливочном соусе и рис  ', 'image(12).jpg', 3, 312.00, 356, 12, 45, 22.00, NULL, NULL),
(12, 'Ролл по-мексикански с говядиной', 'image(13).jpg', 3, 323.00, 412, 12, 45, 12.00, NULL, NULL),
(13, 'Салат с моцареллой и соусом гуакамоле', 'image(14).jpg', 4, 221.00, 193, 7, 12, 2.00, NULL, NULL),
(15, 'Боул с курицей, говядиной, стручковой фасолью и соусом терияки', 'image(16).jpg', 4, 215.00, 224, 15, 32, 16.00, NULL, NULL),
(16, 'Салат с куриной грудкой, кукурузой, грецким орехом и йогуртовым соусом', 'image(17).jpg', 4, 312.00, 295, 14, 15, 12.00, NULL, NULL),
(17, 'Куриные оладьи с морковью, черри и соусом лобио', 'image(18).jpg', 5, 290.00, 296, 14, 42, 14.00, NULL, NULL),
(18, 'Куриное филе в кляре из брокколи и рагу по-сицилийски', 'image(19).jpg', 5, 300.00, 340, 15, 41, 14.00, NULL, NULL),
(19, 'Говядина в японском соусе и кабачки на гриле', 'image(20).jpg', 5, 312.00, 290, 12, 35, 12.00, NULL, NULL),
(20, 'Фрикадельки из курицы в сливочном соусе и запеченный картофель', 'image(21).jpg', 5, 300.00, 412, 23, 50, 17.00, NULL, NULL),
(21, 'Чай черный малина-гранат', 'image(22).jpg', 6, 134.00, 74, 1, 23, 1.00, NULL, NULL),
(22, 'Смузи киви-ананас', 'image(23).jpg', 6, 200.00, 76, 1, 31, 1.00, NULL, NULL),
(23, 'Смузи манго-морковь', 'image(24).jpg', 6, 200.00, 82, 2, 36, 1.00, NULL, NULL),
(24, 'Чай зеленый лайм-ромашка', 'image(25).jpg', 6, 200.00, 65, 2, 23, 3.00, NULL, NULL),
(29, 'привет', 'image(3).jpg', 1, 312.00, 312, 31, 3, 2.00, NULL, '2023-06-13 15:30:30'),
(33, 'выф', 'image(6).jpg', 1, 321.00, 312, 4, 6, 6.00, '2023-06-13 15:31:05', '2023-06-13 15:31:05');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `login` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `addres` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` enum('user','admin') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `email`, `password`, `addres`, `phone`, `role`, `created_at`, `updated_at`) VALUES
(1, 'user', 'user@mail.com', 'user', 'dsa', '12124', 'user', NULL, NULL),
(2, 'admin', 'admin@mail.com', 'admin', 'dsad', '312421', 'admin', NULL, NULL),
(3, 'dsa', 'dava@mail.com', '123', NULL, NULL, 'user', '2023-06-02 19:12:18', '2023-06-02 19:12:18'),
(4, 'a', 'userr@mail.com', 'ada', NULL, NULL, 'user', '2023-06-12 14:37:53', '2023-06-12 14:37:53'),
(5, 'ds', 'as@mail.com', 'as', NULL, NULL, 'user', '2023-06-12 15:20:43', '2023-06-12 15:20:43'),
(6, 'dsa', 'sad@mail.com', 'asd', NULL, NULL, 'user', '2023-06-12 15:27:07', '2023-06-12 15:27:07'),
(7, 'da', 'dsa', 'dsa', NULL, NULL, 'user', '2023-06-13 04:59:29', '2023-06-13 04:59:29'),
(8, 'dsa', 'adminnnn@mail.com', 'dsa', NULL, NULL, 'user', '2023-06-13 15:34:47', '2023-06-13 15:34:47');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_category_id_foreign` (`category_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
