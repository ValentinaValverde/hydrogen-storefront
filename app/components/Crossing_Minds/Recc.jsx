// import type {ProductVariant} from '@shopify/hydrogen/storefront-api-types';
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
  console.log('PRODUCT VARIANTS: ', productVariants);
  console.log('TITLE: ', title);

  return (
    <div>
      <h2>{title}</h2>
      <p>something here</p>
      <div>
        <Swiper
          navigation
          //   modules={[Navigation]}
          slidesPerView={'auto'}
          spaceBetween={8}
          centeredSlides={false}
          //   className={recommendationsSwipperStyle}
        >
          <RecommendationsItem productVariant={productVariants} />

          {/* example: */}
          {/* {products.nodes.map((product) => ( */}
          {/* 
          <SwiperSlide key={productVariants.id}>
            <RecommendationsItem productVariant={productVariants} />
          </SwiperSlide> */}
          {/* ))} */}
        </Swiper>
      </div>
    </div>
  );
};
