import markdownStyles from '../markdown-styles.module.css';

export default function PrintMarkdownHTML({ content }) {
  return (
    <div
      className={markdownStyles.markdown}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
