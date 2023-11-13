// import {ProductVariant} from '@shopify/hydrogen/storefront-api-types';
// import {FunctionComponent} from 'react';
// import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

// import {
//   recommendationsStyle,
//   recommendationsSwiperWrapperStyle,
//   recommendationsSwipperStyle,
//   recommendationsTitleStyle,
// } from './Recommendations.css';
import {RecommendationsItem} from './RecommendationsItem';

// interface RecommendationsProps {
//   productVariants: ProductVariant[];
//   title: string;
// }

export const Recommendations = ({productVariants, title}) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <Swiper
          navigation
          //   modules={[Navigation]}
          slidesPerView={'auto'}
          spaceBetween={8}
          centeredSlides={false}
          //   className={recommendationsSwipperStyle}
        >
          {productVariants.map((productVariant) => (
            <SwiperSlide key={productVariant.id}>
              <RecommendationsItem productVariant={productVariant} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
