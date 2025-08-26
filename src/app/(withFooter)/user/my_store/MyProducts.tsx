import SectionUI from '@/components/ui/section/SectionUI';
import Coin from '@/components/ui/coin/Coin';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Button from '@/components/ui/button/submit/Button';
import { GIFT } from '@/libs/api/gift';
import Image from 'next/image';
import { IconMore, IconAdd } from '@/components/icons';

const MyProducts = () => {
  return (
    <>
      {/* 功能區 */}
      <button type="button" className="w-100 text-end">
        <IconAdd />
      </button>

      {/* 列表區 */}
      {GIFT.map((gift) => (
        <SectionUI key={gift.productName}>
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
                  src={gift.product}
                  alt={gift.productName}
                  fill
                  style={{ objectFit: 'cover', borderRadius: '8px' }}
                />
              </div>

              <div className="d-flex align-items-center ms-4">
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
            <div className="d-flex flex-column align-items-end justify-content-start mb-5">
              <button type="button" className="mb-3 line-height-none text-grey-600">
                <IconMore width={20} rotate={90} />
              </button>
              <Button color="red" size="sm">
                兌換
              </Button>
            </div>
          </div>
          <div className="mt-3 text-muted fs-sm p-2 bg-grey-50 rounded d-flex align-items-center">
            <p className="ms-1">禮物：{gift.productName}</p>
          </div>
        </SectionUI>
      ))}
    </>
  );
};

export default MyProducts;
