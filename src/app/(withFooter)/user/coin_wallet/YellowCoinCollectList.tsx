import style from './CoinWalletClient.module.scss';
import SectionUI from '@/components/ui/section/SectionUI';
import ModalYellowCoinPayDetail from './(Modal)/ModalYellowCoinPayDetail';
import { IconSticky, IconAiFace, IconCloak } from '@/components/icons';

type Props = {
  isOpenPayDetail: boolean;
  setIsOpenPayDetail: React.Dispatch<React.SetStateAction<boolean>>;
};

const YellowCoinCollectList = ({ isOpenPayDetail, setIsOpenPayDetail }: Props) => {
  return (
    <>
      <SectionUI>
        <div className="row gy-10">
          <div className="col-4 col-lg-3 d-flex flex-column align-items-center justify-content-start">
            <button type="button">
              <IconAiFace width={52} color="#e3bc41" />
            </button>
            <div className="text-center">
              <span className={style.numTagGold} style={{ color: '#e3bc41' }}>
                25
              </span>
            </div>
            <span className="pt-2 pb-1 text-truncate w-100 text-center fs-sm">AI換臉</span>
          </div>
          <div className="col-4 col-lg-3 d-flex flex-column align-items-center justify-content-start">
            <button type="button">
              <IconCloak width={52} color="#e3bc41" />
            </button>
            <div className="text-center">
              <span className={style.numTagGold} style={{ color: '#e3bc41' }}>
                60
              </span>
            </div>
            <span className="pt-2 pb-1 text-truncate w-100 text-center fs-sm">隱形斗篷</span>
          </div>
          <div className="col-4 col-lg-3 d-flex flex-column align-items-center justify-content-start">
            <button type="button">
              <IconSticky width={52} color="#e3bc41" />
            </button>
            <div className="text-center">
              <span className={style.numTagGold} style={{ color: '#e3bc41' }}>
                100
              </span>
            </div>
            <span className="pt-2 pb-1 text-truncate w-100 text-center fs-sm">螃蟹哥貼圖</span>
          </div>
          <div className="col-4 col-lg-3 d-flex flex-column align-items-center justify-content-start">
            <button type="button">
              <IconAiFace width={52} color="#e3bc41" />
            </button>
            <div className="text-center">
              <span className={style.numTagGold} style={{ color: '#e3bc41' }}>
                150
              </span>
            </div>
            <span className="pt-2 pb-1 text-truncate w-100 text-center fs-sm">虛寶X</span>
          </div>
          <div className="col-4 col-lg-3 d-flex flex-column align-items-center justify-content-start">
            <button type="button">
              <IconCloak width={52} color="#e3bc41" />
            </button>
            <div className="text-center">
              <span className={style.numTagGold} style={{ color: '#e3bc41' }}>
                200
              </span>
            </div>
            <span className="pt-2 pb-1 text-truncate w-100 text-center fs-sm">虛寶Y</span>
          </div>
        </div>
      </SectionUI>
      {/* 彈跳視窗區 */}
      {/* 儲值明細 */}
      <ModalYellowCoinPayDetail open={isOpenPayDetail} onOpenChange={setIsOpenPayDetail} />
    </>
  );
};

export default YellowCoinCollectList;
