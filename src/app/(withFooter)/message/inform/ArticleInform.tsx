import style from './InformClient.module.scss';
import Avatar from 'antd/es/avatar/Avatar';
import { KOLs } from '@/libs/api/kols';
import ButtonOutline from '@/components/ui/button/submit/ButtonOutline';

const ArticleInform = () => {
  const articleMsg = [
    '在這則貼文給我一個表情貼',
    '在這則貼文留言給我',
    '在這則貼文@提及我',
    '在這則貼文領取我的籌碼',
    '發佈一則你可能感興趣的貼文',
  ];
  return (
    <section>
      {KOLs.slice(0, 5).map((user, index) => (
        <div
          key={user.name}
          className="d-flex justify-content-between align-items-center py-5 border-bottom"
        >
          <div className="d-flex  align-items-start">
            <Avatar src={user.image} size={52} />
            <div className="ms-2">
              <div className="d-flex  align-items-center mb-1">
                <span className={style.userName}>{user.name}</span>
                <span className="text-grey-400 fs-xs">．2天前</span>
              </div>
              <p className="fs-sm">{articleMsg[index]}</p>
            </div>
          </div>
          <div>
            <ButtonOutline color="green" size="sm">
              查看
            </ButtonOutline>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ArticleInform;
