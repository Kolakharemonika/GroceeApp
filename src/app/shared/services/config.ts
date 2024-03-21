import { environment } from '../../../environments/environment';


export const CONFIG: any = {
  SERVER_URL: environment.server_url,
  DATE_FORMAT: 'YYYY-MM-DD',
  DATETIME_FORMAT: 'YYYY-MM-DD HH:MM:SS',

  PER_PAGE: 10,
  endpoints: {
    login: '/api/login_check',
    logout: '/api/logout',
    tokenRefresh: '/api/token/refresh',
    onboardCustomer: '/api/onboard-customer',

    getConstants: '/constants',
    addToCategory: '/api/categories',
    getCategory: '/api/categories',

    validateOrderJoinOTP: '/api/validate-order-join-otp',

    getItemsList: '/api/products',
    addToItemsList: '/api/products',

    startJourney: '/Login',
    saveAddress: '/DeliveryAddress',
    getAddress: '/DeliveryAddress',

    getBill: '/api/get-bill',
    getQRCode: '/api/qr-code',

    getReview: '/api/get-review',
    saveReview: '/api/save-review',

    getPromoCoupons: '/api/get-promo-coupons',
    getCoupons: '/api/get-coupons',
    applyCoupon: '/api/apply-coupon',
    applyTip: '/api/apply-tip',

    sendRequest: '/api/send-request',
    askBillCopy: '/api/ask-bill-copy',
    updateBillData: '/api/update-bill-data',

    clearTable: '/api/clear-table',


    getTableStatuses: '/api/get-table-statuses',
    updateOrderItemStatus: '/api/update-orderitem-status',
    cancelOrderItem: '/api/cancel-orderitem',


  },
  messages: {
    http_error: 'Unknown error. Please try again later.',
    error_upload_image_file_size: 'Please select image of size smaller than 2MB.',
    error_upload_image_file_select: 'Please select image/photo.',
    error_upload_image_file_type: 'Please select valid image of type JPG, PNG only.',
    error_unable_to_select: 'Unable to select image/photo.',
  },
};
