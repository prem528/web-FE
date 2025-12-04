import HtmlContent from "./HtmlContent";

const ArticleContent = ({ blog }: { blog: string }) => {
 
  return (
    <article className="bg- rounded-lg shadow-card lg:p-6 mb-6">
      <HtmlContent html={blog} />
    </article>
  );
};

export default ArticleContent;
