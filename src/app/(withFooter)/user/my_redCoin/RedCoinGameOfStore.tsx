import Avatar from '@/components/ui/avatar/Avatar';
import ButtonOutline from '@/components/ui/button/submit/ButtonOutline';
import { Stores } from '@/libs/api/stores';

const RedCoinGameOfStore = () => {
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
              <p className="me-1 fs-sm">平日優惠8折</p>
            </div>
          </div>
          <div>
            <ButtonOutline color="red" size="md">
              下架
            </ButtonOutline>
          </div>
        </div>
      ))}
    </section>
  );
};

export default RedCoinGameOfStore;
