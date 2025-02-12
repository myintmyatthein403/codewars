Sure, here are two real-world examples of how the `topThreeWords` function can be used:

### Example 1: Analyzing a Blog Post
Suppose you have a blog post and you want to find out the top three most frequently used words to understand the main focus of the article.

```javascript
const blogPost = `
  JavaScript is a versatile programming language. JavaScript can be used for web development, server-side scripting, and even game development. 
  Learning JavaScript opens up many opportunities in the tech industry. JavaScript frameworks like React and Node.js are very popular.
`;

console.log(topThreeWords(blogPost)); 
// Expected output: ['javascript', 'development', 'and']
```

### Example 2: Analyzing Customer Reviews
Imagine you have a collection of customer reviews for a product and you want to identify the most common words used by customers to describe the product.

```javascript
const reviews = `
  This product is amazing! I love the quality and the design. The product arrived on time and was well-packaged. 
  Amazing product, highly recommend! The design is sleek and the quality is top-notch. 
  I am very satisfied with this product. The quality is amazing and the design is beautiful.
`;

console.log(topThreeWords(reviews)); 
// Expected output: ['the', 'product', 'quality']
```

In both examples, the `topThreeWords` function helps to quickly identify the most frequently used words, providing insights into the main themes or sentiments expressed in the text.
