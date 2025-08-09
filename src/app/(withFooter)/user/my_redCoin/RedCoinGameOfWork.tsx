import Avatar from '@/components/ui/avatar/Avatar';
import ButtonOutline from '@/components/ui/button/submit/ButtonOutline';
import { Stores } from '@/libs/api/stores';

const RedCoinGameOfWork = () => {
  return (
    <section>
      {Stores.slice(0, 3).map((store) => (
        <div
          key={store.name}
          className="d-flex justify-content-between align-items-center py-3 border-bottom"
        >
          <div className="d-flex  align-items-center">
            <Avatar src={store.image} size={52} />
            <div className="ms-2">
              <span className="fw-bold mb-1">{store.name}</span>
              <p className="me-1 fs-sm">案件：找網紅到店玩AR</p>
            </div>
          </div>
          <div>
            <ButtonOutline color="red" size="md">
              接案
            </ButtonOutline>
          </div>
        </div>
      ))}
    </section>
  );
};

export default RedCoinGameOfWork;
