import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Ecommerce_Property1Heart } from '../Ecommerce_Property1Heart/Ecommerce_Property1Heart.js';
import { EcommerceShoppingCart } from '../EcommerceShoppingCart/EcommerceShoppingCart.js';
import { Input } from '../Input/Input.js';
import { BadgeIcon } from './BadgeIcon.js';
import { EcommerceIcon } from './EcommerceIcon.js';
import classes from './Product.module.css';

interface Props {
  className?: string;
  classes?: {
    image?: string;
  };
  hide?: {
    iconText?: boolean;
  };
}
/* @figmaId 1:429 */
export const Product: FC<Props> = memo(function Product(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={`${props.classes?.image || ''} ${classes.image}`}>
        <div className={classes.favorite}>
          <Ecommerce_Property1Heart
            swap={{
              icon: <EcommerceIcon className={classes.icon} />,
            }}
          />
        </div>
        <div className={classes.off}>
          <div className={classes._50}>50%</div>
        </div>
      </div>
      <div className={classes.bosch300SeriesSHEM63W55N}>Bosch 300 Series SHEM63W55N</div>
      <div className={classes.row}>
        <div className={classes.price}>
          <div className={classes._998}>998$</div>
          <div className={classes._1200}>1200$</div>
        </div>
        <Input
          className={classes.input}
          swap={{
            badge2: (
              <EcommerceShoppingCart
                className={classes.badge}
                swap={{
                  icon: <BadgeIcon className={classes.icon2} />,
                }}
              />
            ),
          }}
          hide={{
            iconText: true,
          }}
        />
      </div>
    </div>
  );
});
