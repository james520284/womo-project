import SectionUI from '@/components/ui/section/SectionUI';
import Coin from '@/components/ui/coin/Coin';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Button from '@/components/ui/button/submit/Button';
import { Stores } from '@/libs/api/stores';
import Image from 'next/image';

const SponsorProducts = () => {
  return (
    <>
      {Stores.map((brand) => (
        <SectionUI key={brand.name}>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-start">
              <div
                className="flex-shrink-0"
                style={{
                  position: 'relative',
                  width: '100px',
                  height: '75px',
                  borderRadius: '8px',
                }}
              >
                <Image
                  src={brand.product}
                  alt={brand.productName}
                  fill
                  style={{ objectFit: 'cover', borderRadius: '8px' }}
                />
              </div>
              <div className="ms-4">
                <h3 className="fw-bold fs-6 mb-1">{brand.name}</h3>

                <div className="d-flex align-items-center">
                  <Coin color="red" scale={0.4}>
                    <Avatar src={AVATAR_LINK.my} />
                  </Coin>

                  <span
                    className="fs-5 fw-bold fs-sm text-coinRed ms-2 d-inline-block text-center"
                    style={{ width: '24px' }}
                  >
                    10
                  </span>
                </div>
              </div>
            </div>
            <div className="text-start ms-5">
              <Button color="red" size="sm">
                兌換
              </Button>
            </div>
          </div>
          <div className="mt-3 text-muted fs-sm p-2 bg-grey-50 rounded d-flex align-items-center">
            <div
              className="flex-shrink-0"
              style={{
                position: 'relative',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
              }}
            >
              <Image
                src={brand.image}
                alt={brand.name}
                fill
                style={{ objectFit: 'cover', borderRadius: '50%' }}
              />
            </div>
            <p className="ms-1">禮物：{brand.productName}</p>
          </div>
        </SectionUI>
      ))}
    </>
  );
};

export default SponsorProducts;
