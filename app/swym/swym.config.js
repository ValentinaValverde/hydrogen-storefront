/*
  @author: swym
  @notice: Important config for swym workflow.
  @dev:    tokens to be added for target store
  @return:  REST_API_KEY - key from swym ( get it from swym-admin )
  @return:  ENDPOINT - swym base URL
  @return:  PID - swym pid for your store
  @return:  defaultWishlistName - default list name ( useful for single list )
  @return:  swymSharedURL - this 'swym' can be updated to any folder name for custom implementation
  @return:  alertTimeOut - alert popup timout in ms 
*/
// HELP !!!

const SWYM_CONFIG = {
  REST_API_KEY:
    'ygi2khVmTFGMt6r1WK9aZ-66Ux25QF0lJph7Z17unrBWuyvfkXdWRnQ_vplm9AzrEh3a5iH_vHlDp8SknQIL6Q',
  ENDPOINT: '',
  PID: '5TBY8G6bwjsqtK93FZ+Ibgllexk7SyUv+CEpkm3yjN8=',
  defaultWishlistName: 'My Wishlist',
  alertTimeOut: 5000,
  swymSharedURL: 'swym/shared-wishlist',
  swymSharedMediumCopyLink: 'copylink',
};

export default SWYM_CONFIG;
