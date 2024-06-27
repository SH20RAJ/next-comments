# Next Comments

[![npm version](https://img.shields.io/npm/v/next-comments)](https://www.npmjs.com/package/next-comments)
[![GitHub stars](https://img.shields.io/github/stars/SH20RAJ/next-comments)](https://github.com/SH20RAJ/next-comments/stargazers)
[![License](https://img.shields.io/npm/l/next-comments)](https://github.com/SH20RAJ/next-comments/blob/main/LICENSE)

Next Comments is a lightweight, easy-to-use commenting system for Next.js applications, powered by Utterances. It allows you to add a GitHub-powered comments section to your website effortlessly.

## Features

- Seamless integration with Next.js
- Supports App Router
- Utilizes GitHub issues for comments
- Automatic theme switching with `next-themes`
- Customizable and easy to set up

## Installation

Install the package via npm:

```sh
npm install next-comments
```

## Usage

### Step 1: Import and Use the `Comments` Component

Add the `Comments` component to your Next.js pages. Here’s an example:

```tsx
// app/posts/[id]/page.tsx
'use client';

import { Comments } from 'next-comments';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const fetchArticle = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
};

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchArticle(id);
      setArticle(data);
    };
    fetchData();
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <Comments id={article.id.toString()} />
    </div>
  );
};

export default ArticlePage;
```

### Step 2: Setting Up Utterances

1. Go to your GitHub repository.
2. Navigate to the "Settings" tab.
3. Scroll down to the "Features" section and enable the "Issues" feature.
4. Visit [utterances/utterances](https://github.com/utterance/utterances) and follow the instructions to configure Utterances for your repository.

### Step 3: Customize the `Comments` Component

The `Comments` component accepts `id` and `repo` as props. If `repo` is not provided, it defaults to `shade-cool/next-comments-vault`.

```tsx
<Comments id={article.id.toString()} repo="your-github-repo/your-repo-name" />
```

### Step 4: Theme Switching

Next Comments supports automatic theme switching using `next-themes`. Ensure you have `next-themes` configured in your Next.js project.

## Props

- `id`: A unique identifier for the comment thread, typically the article ID.
- `repo` (optional): The GitHub repository for storing comments. Defaults to `shade-cool/next-comments-vault`.

## Example

```tsx
import { Comments } from 'next-comments';

const ExamplePage = () => {
  return (
    <div>
      <h1>Example Article</h1>
      <p>This is an example article.</p>
      <Comments id="example-article-id" />
    </div>
  );
};

export default ExamplePage;
```

## Contributing

Contributions are welcome! Please read the [Contributing Guide](https://github.com/SH20RAJ/next-comments/blob/main/CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/SH20RAJ/next-comments/blob/main/LICENSE) file for details.

## Links

- [npm package](https://www.npmjs.com/package/next-comments)
- [GitHub repository](https://github.com/SH20RAJ/next-comments)

---

Enhance your Next.js application with a robust commenting system powered by GitHub issues. Integrate Next Comments today and foster community engagement on your platform!