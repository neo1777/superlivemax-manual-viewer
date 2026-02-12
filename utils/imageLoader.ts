// This utility resolves image paths.
// Images are served from the public/images directory.

export const getImageUrl = (filename: string): string => {
  // Use absolute path referencing the public directory served by Vite
  return `/public/images/${filename}`;
};