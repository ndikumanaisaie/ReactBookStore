export const randomPercentage = () => Math.floor(Math.random() * 101);

const chapters = ['Chapter 1', 'Chapter 4: A Lesson Learned', 'Chapter 0: Introduction', 'Chapter 6', 'Chapter 2'];

export const randomChapter = () => chapters[
  Math.floor(Math.random() * chapters.length)];
