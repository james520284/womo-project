import { ShareIcon, MoreIcon } from '@/components/icons/AllIcon';

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
