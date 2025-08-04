import ShareIcon from '@/components/icons/Share';
import MoreIcon from '@/components/icons/More';

const ArticleHeaderBtn = () => {
  return (
    <div className="d-flex align-items-center">
      <button>
        <ShareIcon width={20} />
      </button>
      <button className="ms-5">
        <MoreIcon width={24} />
      </button>
    </div>
  );
};

export default ArticleHeaderBtn;
