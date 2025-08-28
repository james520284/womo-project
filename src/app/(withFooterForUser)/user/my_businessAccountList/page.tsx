import PagesHeader from '@/components/header/PagesHeader';
import { Stores } from '@/libs/api/stores';
import Avatar from '@/components/ui/avatar/Avatar';
import Button from '@/components/ui/button/submit/Button';
import ButtonOutline from '@/components/ui/button/submit/ButtonOutline';
import { IconCheckBadge } from '@/components/icons';
import Description from './Description';

const BusinessAccount = () => {
  return (
    <>
      {/* Header區 */}
      <PagesHeader titleType="txt" titleTxt="商業帳號" addBtn={true} />

      <section className="container-fluid mt-5 pb-20" style={{ maxWidth: '700px' }}>
        {/* 說明區 */}
        <Description />

        {/* 列表區 */}
        <h2 className="fs-5 fw-bold mt-10 mb-3">我的商業帳號列表</h2>
        {Stores.map((store) => (
          <div
            key={store.name}
            className="d-flex justify-content-between align-items-center py-5 border-bottom"
          >
            <div className="d-flex align-items-center">
              <Avatar src={store.image} size={60} />
              <div className="ms-2">
                <div className="d-flex align-items-center mb-1">
                  <h2 className="fw-bold fs-6 me-1">{store.name}</h2>
                  <span
                    className={`${store.level === 'advance' ? 'text-secondary' : 'text-grey-200'}`}
                  >
                    <IconCheckBadge width={16} />
                  </span>
                </div>

                <span className="bg-grey-100 rounded p-1 fs-xs">權限：{store.auth}</span>
              </div>
            </div>
            <div>
              <ButtonOutline color="green" size="sm">
                前台
              </ButtonOutline>
              &nbsp;
              <Button color="green" size="sm">
                後台
              </Button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default BusinessAccount;
