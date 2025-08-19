import style from './InformClient.module.scss';
import Avatar from 'antd/es/avatar/Avatar';
import ButtonOutline from '@/components/ui/button/submit/ButtonOutline';

const OfficialInform = () => {
  const articleMsg = [
    '您的這張禮物券即將到期',
    '您已成功訂閱NT$99無限方案',
    '恭喜您已通過紅勾勾認證',
  ];
  return (
    <section>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="d-flex justify-content-between align-items-center py-5 border-bottom"
        >
          <div className="d-flex  align-items-start">
            <Avatar
              src="https://womophoto.s3.ap-northeast-1.amazonaws.com/public/assets/images/app_logo.png"
              size={52}
            />
            <div className="ms-2">
              <div className="d-flex  align-items-center mb-1">
                <span className={style.userName}>WOMO</span>
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

export default OfficialInform;
