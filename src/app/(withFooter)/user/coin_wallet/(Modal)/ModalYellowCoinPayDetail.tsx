'use client';

import * as Dialog from '@radix-ui/react-dialog';
import style from './ModalYellowCoinPayDetail.module.scss';
import Link from 'next/link';

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const ModalYellowCoinPayDetail = ({ open, onOpenChange }: Props) => {
  const dataArr = 1;
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <div className={style.overlay} />
        <Dialog.Content className={style.modal}>
          <Dialog.Close asChild>
            <button className={style.closeButton} aria-label="關閉">
              ✕
            </button>
          </Dialog.Close>
          <Dialog.Title className="text-dark mb-2">
            <span className="fs-5 fw-bold">儲值紀錄</span>
          </Dialog.Title>
          {dataArr > 0 ? (
            <table className="table table-striped fs-xs no-caret">
              <thead>
                <tr>
                  <th scope="col">單號</th>
                  <th scope="col">顆數</th>
                  <th scope="col">支付(NT$)</th>
                  <th scope="col">時間</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">WM0001</th>
                  <td>3000</td>
                  <td>300</td>
                  <td>2025-10-07</td>
                  <td>
                    <Link href="#" className="text-decoration-underline">
                      查看
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-primary">
                    NG0001
                  </th>
                  <td className="text-primary">10000</td>
                  <td className="text-primary">-1000</td>
                  <td className="text-primary">2025-10-12</td>
                  <td className="text-primary">
                    <Link href="#" className="text-decoration-underline">
                      查看
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row">WM0002</th>
                  <td>5000</td>
                  <td>500</td>
                  <td>2025-11-15</td>
                  <td>
                    <Link href="#" className="text-decoration-underline">
                      查看
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row">WM0003</th>
                  <td>600</td>
                  <td>60</td>
                  <td>2025-12-01</td>
                  <td>
                    <Link href="#" className="text-decoration-underline">
                      查看
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <p className="my-5">您目前尚未有任何儲值紀錄。</p>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ModalYellowCoinPayDetail;
