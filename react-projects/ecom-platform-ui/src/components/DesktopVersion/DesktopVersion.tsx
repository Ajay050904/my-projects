import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Arrows_Property1ChevronPropert } from './Arrows_Property1ChevronPropert/Arrows_Property1ChevronPropert.js';
import { ArrowsChevronRight } from './ArrowsChevronRight/ArrowsChevronRight.js';
import { ArrowsIcon } from './ArrowsIcon.js';
import { BadgeIcon2 } from './BadgeIcon2.js';
import { BadgeIcon3 } from './BadgeIcon3.js';
import { BadgeIcon4 } from './BadgeIcon4.js';
import { BadgeIcon5 } from './BadgeIcon5.js';
import { BadgeIcon } from './BadgeIcon.js';
import { Button2 } from './Button2/Button2.js';
import { Button } from './Button/Button.js';
import classes from './DesktopVersion.module.css';
import { EcommerceFreeShippingReturns } from './EcommerceFreeShippingReturns/EcommerceFreeShippingReturns.js';
import { EcommerceMessage } from './EcommerceMessage/EcommerceMessage.js';
import { EcommerceMyOrders } from './EcommerceMyOrders/EcommerceMyOrders.js';
import { EcommerceMyOrdersIcon } from './EcommerceMyOrdersIcon.js';
import { EcommerceSearch } from './EcommerceSearch/EcommerceSearch.js';
import { EcommerceShoppingCart } from './EcommerceShoppingCart/EcommerceShoppingCart.js';
import { EcommerceTelephone } from './EcommerceTelephone/EcommerceTelephone.js';
import { EcommerceTruck } from './EcommerceTruck/EcommerceTruck.js';
import { EcommerceUser } from './EcommerceUser/EcommerceUser.js';
import { EcommerceUserIcon } from './EcommerceUserIcon.js';
import { FreeShippingReturnsIcon } from './FreeShippingReturnsIcon.js';
import { Heading_Property1Heading1 } from './Heading_Property1Heading1/Heading_Property1Heading1.js';
import { Heading_Property1Heading2 } from './Heading_Property1Heading2/Heading_Property1Heading2.js';
import { IconLabel } from './IconLabel/IconLabel.js';
import { Input } from './Input/Input.js';
import { Product } from './Product/Product.js';
import { SocialMediaFacebook } from './SocialMediaFacebook/SocialMediaFacebook.js';
import { SocialMediaInstagarm } from './SocialMediaInstagarm/SocialMediaInstagarm.js';
import { SocialMediaLinkdin } from './SocialMediaLinkdin/SocialMediaLinkdin.js';
import { SocialMediaTwitter } from './SocialMediaTwitter/SocialMediaTwitter.js';
import { TruckIcon } from './TruckIcon.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon5 } from './VectorIcon5.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  hide?: {
    badge?: boolean;
    iconText?: boolean;
    iconText2?: boolean;
    badge2?: boolean;
    iconText3?: boolean;
    iconText4?: boolean;
    iconText5?: boolean;
    iconText6?: boolean;
    iconText7?: boolean;
    iconText8?: boolean;
    iconText9?: boolean;
    iconText10?: boolean;
    iconText11?: boolean;
    iconText12?: boolean;
    iconText13?: boolean;
    iconText14?: boolean;
    iconText15?: boolean;
    iconText16?: boolean;
    badge3?: boolean;
  };
}
/* @figmaId 1:1411 */
export const DesktopVersion: FC<Props> = memo(function DesktopVersion(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.header}>
        <div className={classes.topbar}>
          <div className={classes.container}>
            <div className={classes.socialMedia}>
              <div className={classes.followUs}>Follow us: </div>
              <SocialMediaFacebook
                className={classes.socialMediaFacebook}
                swap={{
                  vector: <VectorIcon className={classes.icon} />,
                }}
              />
              <SocialMediaInstagarm
                className={classes.socialMediaInstagarm}
                swap={{
                  vector: <VectorIcon2 className={classes.icon2} />,
                }}
              />
              <SocialMediaTwitter
                className={classes.socialMediaTwitter}
                swap={{
                  vector: <VectorIcon3 className={classes.icon3} />,
                }}
              />
            </div>
            <div className={classes.winterIsComing50OffForNewYear}>Winter is coming! 50% off for new year</div>
            <div className={classes.contactUs}>
              <IconLabel
                swap={{
                  badge: (
                    <EcommerceTelephone
                      className={classes.badge}
                      swap={{
                        vector: <VectorIcon4 className={classes.icon4} />,
                      }}
                    />
                  ),
                }}
                text={{
                  inputText: <div className={classes.inputText}>(+98) 253-1189</div>,
                }}
              />
              <IconLabel
                swap={{
                  badge: (
                    <EcommerceMessage
                      className={classes.badge2}
                      swap={{
                        vector: <VectorIcon5 className={classes.icon5} />,
                      }}
                    />
                  ),
                }}
                text={{
                  inputText: <div className={classes.inputText2}>pigmentagency@gmail.com</div>,
                }}
              />
            </div>
          </div>
        </div>
        <div className={classes.container2}>
          <div className={classes.mansoury}>Mansoury.</div>
          <div className={classes.navbar}>
            <div className={classes.li}>
              <div className={classes.home}>Home </div>
            </div>
            <div className={classes.li2}>
              <div className={classes.products}>Products</div>
            </div>
            <div className={classes.li3}>
              <div className={classes.pages}>Pages</div>
            </div>
            <div className={classes.li4}>
              <div className={classes.aboutUs}>About us</div>
            </div>
            <div className={classes.li5}>
              <div className={classes.contactUs2}>Contact us</div>
            </div>
          </div>
          <div className={classes.btns}>
            <Input
              className={classes.input}
              swap={{
                badge: (
                  <EcommerceUser
                    className={classes.badge3}
                    swap={{
                      icon: <BadgeIcon className={classes.icon6} />,
                    }}
                  />
                ),
              }}
              hide={{
                badge: true,
              }}
              text={{
                inputText: <div className={classes.inputText3}>Register / Login</div>,
              }}
            />
            <Input
              className={classes.input2}
              swap={{
                badge2: (
                  <EcommerceShoppingCart
                    className={classes.badge4}
                    swap={{
                      icon: <BadgeIcon2 className={classes.icon7} />,
                    }}
                  />
                ),
              }}
              hide={{
                iconText: true,
              }}
            />
            <Input
              className={classes.input3}
              swap={{
                badge2: (
                  <EcommerceSearch
                    className={classes.badge5}
                    classes={{ icon: classes.icon8 }}
                    swap={{
                      icon: (
                        <div className={classes.icon8}>
                          <BadgeIcon3 className={classes.icon9} />
                        </div>
                      ),
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
      </div>
      <div className={classes.slider}>
        <div className={classes.enhanceYourHomeWithConvenience}>Enhance Your Home with convenience and Style</div>
        <div className={classes.bullets}>
          <div className={classes.rectangle745}></div>
          <div className={classes.rectangle746}></div>
          <div className={classes.rectangle747}></div>
        </div>
      </div>
      <div className={classes.hotOffers}>
        <div className={classes.texts}>
          <Heading_Property1Heading2
            className={classes.heading}
            text={{
              writeTitleHere: <div className={classes.writeTitleHere}>Discover Hot Deals for Your Home!</div>,
            }}
          />
          <div className={classes.inMansouryDailyYouCanFindTheHi}>
            In Mansoury, daily you can find the highest discounts across all categories and products available on the
            website.
          </div>
          <Button
            swap={{
              badge: (
                <ArrowsChevronRight
                  className={classes.badge6}
                  swap={{
                    icon: <BadgeIcon4 className={classes.icon10} />,
                  }}
                />
              ),
            }}
            hide={{
              badge: true,
            }}
            text={{
              inputText: <div className={classes.inputText4}>Show All Products</div>,
            }}
          />
        </div>
        <Arrows_Property1ChevronPropert
          className={classes.arrows}
          swap={{
            icon: <ArrowsIcon className={classes.icon11} />,
          }}
        />
        <div className={classes.carousel}>
          <Product classes={{ image: classes.image }} />
          <Product classes={{ image: classes.image2 }} />
          <Product classes={{ image: classes.image3 }} />
          <Product classes={{ image: classes.image4 }} />
        </div>
      </div>
      <div className={classes.banners}>
        <div className={classes.frame4}>
          <div className={classes.frame11}>
            <div className={classes.quickAndHot}>Quick and Hot</div>
            <div className={classes._30OFF}>30% OFF</div>
          </div>
        </div>
        <div className={classes.frame2}>
          <div className={classes.frame10}>
            <div className={classes.kitchenwareFromTopBrands}>
              <div className={classes.textBlock}>Kitchenware from </div>
              <div className={classes.textBlock2}>Top Brands</div>
            </div>
            <div className={classes._30OFF2}>30% OFF</div>
          </div>
        </div>
        <div className={classes.frame3}>
          <div className={classes.frame9}>
            <div className={classes.travelWithQuality}>Travel with Quality</div>
            <div className={classes._25OFF}>25% OFF</div>
          </div>
        </div>
        <div className={classes.frame5}>
          <div className={classes.frame8}>
            <div className={classes.coolAndHighQualityRefrigerator}>
              <div className={classes.textBlock3}>Cool and High-Quality </div>
              <div className={classes.textBlock4}>Refrigerators and Freezers</div>
            </div>
            <div className={classes._30OFF3}>30% OFF</div>
          </div>
        </div>
        <div className={classes.frame6}>
          <div className={classes.frame7}>
            <div className={classes.cleanAndGleamingClothes}>
              <div className={classes.textBlock5}>Clean and Gleaming</div>
              <div className={classes.textBlock6}> Clothes</div>
            </div>
            <div className={classes._30OFF4}>30% OFF</div>
          </div>
        </div>
      </div>
      <div className={classes.products2}>
        <Heading_Property1Heading1
          text={{
            writeTitleHere: <div className={classes.writeTitleHere2}>Products You May Like</div>,
          }}
        />
        <div className={classes.container3}>
          <Product classes={{ image: classes.image5 }} />
          <Product classes={{ image: classes.image6 }} />
          <Product classes={{ image: classes.image7 }} />
          <Product classes={{ image: classes.image8 }} />
          <Product classes={{ image: classes.image9 }} />
          <Product classes={{ image: classes.image10 }} />
          <Product classes={{ image: classes.image11 }} />
          <Product classes={{ image: classes.image12 }} />
          <Product classes={{ image: classes.image13 }} />
          <Product classes={{ image: classes.image14 }} />
        </div>
      </div>
      <div className={classes.products3}>
        <div className={classes.frame12}>
          <div className={classes.mansourySteel10PieceCookwareSe}>
            <div className={classes.textBlock7}>Mansoury. </div>
            <div className={classes.textBlock8}>
              <p className={classes.labelWrapper}>
                <span className={classes.label}>Steel 10-Piece Cookware Set</span>
              </p>
            </div>
          </div>
          <Button2
            swap={{
              badge: (
                <ArrowsChevronRight
                  className={classes.badge7}
                  swap={{
                    icon: <BadgeIcon5 className={classes.icon12} />,
                  }}
                />
              ),
            }}
            hide={{
              badge: true,
            }}
            text={{
              inputText: <div className={classes.inputText5}>Show Products</div>,
            }}
          />
        </div>
      </div>
      <div className={classes.features}>
        <div className={classes.item}>
          <EcommerceUser
            className={classes.ecommerceUser}
            swap={{
              icon: <EcommerceUserIcon className={classes.icon13} />,
            }}
          />
          <div className={classes.texts2}>
            <div className={classes.onlineSupport}>Online Support</div>
            <div className={classes.dedicatedSupportTeam}>Dedicated Support Team</div>
          </div>
        </div>
        <div className={classes.item2}>
          <EcommerceTruck
            className={classes.ecommerceTruck}
            swap={{
              truck: <TruckIcon className={classes.icon14} />,
            }}
          />
          <div className={classes.texts3}>
            <div className={classes.freeShipping}>Free Shipping</div>
            <div className={classes.purchasesOver100}>Purchases Over $100</div>
          </div>
        </div>
        <div className={classes.item3}>
          <EcommerceMyOrders
            className={classes.ecommerceMyOrders}
            swap={{
              icon: <EcommerceMyOrdersIcon className={classes.icon15} />,
            }}
          />
          <div className={classes.texts4}>
            <div className={classes.timelessShopping}>Timeless Shopping</div>
            <div className={classes._247Purchasing}>24/7 Purchasing</div>
          </div>
        </div>
        <div className={classes.item4}>
          <EcommerceFreeShippingReturns
            className={classes.ecommerceFreeShippingReturns}
            swap={{
              freeShippingReturns: <FreeShippingReturnsIcon className={classes.icon16} />,
            }}
          />
          <div className={classes.texts5}>
            <div className={classes.productReturns}>Product Returns</div>
            <div className={classes.noQuestionsAskedReturns}>No-Questions-Asked Returns</div>
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <div className={classes.column}>
          <div className={classes.stayConnected}>Stay Connected</div>
          <div className={classes.addressIstanbulTurkey}>Address: Istanbul, Turkey</div>
          <div className={classes.phone909859875}>Phone: (+90) 985 98 75</div>
          <div className={classes.followUs2}>
            <div className={classes.followUsOnSocialMedia}>Follow us on social media</div>
            <div className={classes.holder}>
              <SocialMediaTwitter />
              <SocialMediaFacebook />
              <SocialMediaLinkdin />
              <SocialMediaInstagarm />
            </div>
          </div>
        </div>
        <div className={classes.column2}>
          <div className={classes.mansoury2}>Mansoury.</div>
          <div className={classes.aboutUs2}>About Us</div>
          <div className={classes.careers}>Careers</div>
          <div className={classes.collaboration}>Collaboration</div>
          <div className={classes.dashboard}>Dashboard</div>
          <div className={classes.policies}>policies</div>
        </div>
        <div className={classes.column3}>
          <div className={classes.customerServices}>Customer Services</div>
          <div className={classes.rulesAndRegulations}>Rules and Regulations</div>
          <div className={classes.termsOfUse}>Terms of Use</div>
          <div className={classes.returnProcedures}>Return Procedures</div>
          <div className={classes.privacyPolicy}>Privacy Policy</div>
          <div className={classes.forums}>Forums</div>
        </div>
        <div className={classes.column4}>
          <div className={classes.quickAccess}>Quick Access</div>
          <div className={classes.contactUs3}>Contact Us</div>
          <div className={classes.blog}>Blog</div>
          <div className={classes.returnsAndRefunds}>Returns and refunds</div>
          <div className={classes.trackOrder}>Track order</div>
          <div className={classes.fAQ}>FAQ</div>
        </div>
      </div>
      <div className={classes.frame13}>
        <div className={classes.AllRightsReservedForMansoury20}>© All Rights Reserved for Mansoury - 2023</div>
      </div>
    </div>
  );
});
