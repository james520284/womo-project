import style from './InformClient.module.scss';
import Avatar from 'antd/es/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import { KOLs } from '@/libs/api/kols';
import ButtonOutline from '@/components/ui/button/submit/ButtonOutline';
import Button from '@/components/ui/button/submit/Button';

const GameInform = () => {
  const GameMsg = [
    {
      role: '發起者',
      msg: '我發起一個抽獎互動，開獎日為2025/08/31',
    },
    {
      role: '發起者',
      msg: '我發起一個湊咖互動，出團日為2025/09/31',
    },
    {
      role: '發起者',
      msg: '我發起一個集點互動，截止日為2025/10/31',
    },
    {
      role: '對方參與我',
      msg: '對方參與我的抽獎互動，等待開獎',
    },
    {
      role: '對方參與我',
      msg: '對方參與我的湊咖互動，等待出團',
    },
    {
      role: '對方參與我',
      msg: '對方參與我的集點互動，等待換禮',
    },

    {
      role: '我參與對方',
      msg: '我參與對方的湊咖互動，等待出團',
    },
    {
      role: '我參與對方',
      msg: '我參與對方的集點互動，等待換禮',
    },
    {
      role: '我參與對方',
      msg: '我參與對方的抽獎互動，已經開獎',
    },
  ];
  return (
    <section>
      {GameMsg.slice(0, 3).map((item, index) => (
        <div
          key={index}
          className="d-flex justify-content-between align-items-center py-5 border-bottom"
        >
          <div className="d-flex  align-items-start">
            <div>
              <Avatar src={AVATAR_LINK.my} size={52} />
            </div>
            <div className="ms-2">
              <div className="d-flex  align-items-center mb-1">
                <span className={style.userName}>蒼田楓</span>
                <span className="text-grey-400 fs-xs">．2天前</span>
              </div>
              <p className="fs-sm me-2">{GameMsg[index].msg}</p>
            </div>
          </div>
          <div>
            <Button color="red" size="sm">
              管理
            </Button>
          </div>
        </div>
      ))}
      {KOLs.slice(0, 3).map((user, index) => (
        <div
          key={user.name}
          className="d-flex justify-content-between align-items-center py-5 border-bottom"
        >
          <div className="d-flex  align-items-start">
            <div>
              <Avatar src={user.image} size={52} />
            </div>
            <div className="ms-2">
              <div className="d-flex  align-items-center mb-1">
                <span className={style.userName}>{user.name}</span>
                <span className="text-grey-400 fs-xs">．2天前</span>
              </div>
              <p className="fs-sm me-2">{GameMsg[index + 3].msg}</p>
            </div>
          </div>
          <div>
            <ButtonOutline color="red" size="sm">
              查看
            </ButtonOutline>
          </div>
        </div>
      ))}
      {KOLs.slice(3, 6).map((user, index) => (
        <div
          key={user.name}
          className="d-flex justify-content-between align-items-center py-5 border-bottom"
        >
          <div className="d-flex  align-items-start">
            <div>
              <Avatar src={user.image} size={52} />
            </div>
            <div className="ms-2">
              <div className="d-flex  align-items-center mb-1">
                <span className={style.userName}>{user.name}</span>
                <span className="text-grey-400 fs-xs">．2天前</span>
              </div>
              <p className="fs-sm me-2">{GameMsg[index + 6].msg}</p>
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

export default GameInform;
