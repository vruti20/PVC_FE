// action - account reducer
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const MENU_OPEN = '@customization/MENU_OPEN';
export const MENU_CLOSE = '@customization/MENU_CLOSE';
export const MENU_TYPE = '@customization/MENU_TYPE';

// ######################################## LOGIN #########################################################################
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

// ######################################## PRO FORMA INVOICE #####################################################################
export const FETCH_PRO_FORMA_INVOICE_REQUEST = 'FETCH_PRO_FORMA_INVOICE_REQUEST';
export const FETCH_PRO_FORMA_INVOICE_SUCCESS = 'FETCH_PRO_FORMA_INVOICE_SUCCESS';
export const FETCH_PRO_FORMA_INVOICE_FAILURE = 'FETCH_PRO_FORMA_INVOICE_FAILURE';
export const CREATE_PRO_FORMA_INVOICE_REQUEST = 'CREATE_PRO_FORMA_INVOICE_REQUEST';
export const CREATE_PRO_FORMA_INVOICE_SUCCESS = 'CREATE_PRO_FORMA_INVOICE_SUCCESS';
export const CREATE_PRO_FORMA_INVOICE_FAILURE = 'CREATE_PRO_FORMA_INVOICE_FAILURE';
export const DELETE_PRO_FORMA_INVOICE_ITEM_REQUEST = 'DELETE_PRO_FORMA_INVOICE_ITEM_REQUEST';
export const DELETE_PRO_FORMA_INVOICE_ITEM_SUCCESS = 'DELETE_PRO_FORMA_INVOICE_ITEM_SUCCESS';
export const DELETE_PRO_FORMA_INVOICE_ITEM_FAILURE = 'DELETE_PRO_FORMA_INVOICE_ITEM_FAILURE';
export const DELETE_PRO_FORMA_INVOICE_REQUEST = 'DELETE_PRO_FORMA_INVOICE_REQUEST';
export const DELETE_PRO_FORMA_INVOICE_SUCCESS = 'DELETE_PRO_FORMA_INVOICE_SUCCESS';
export const DELETE_PRO_FORMA_INVOICE_FAILURE = 'DELETE_PRO_FORMA_INVOICE_FAILURE';
export const UPDATE_PRO_FORMA_INVOICE_REQUEST = 'UPDATE_PRO_FORMA_INVOICE_REQUEST';
export const UPDATE_PRO_FORMA_INVOICE_SUCCESS = 'UPDATE_PRO_FORMA_INVOICE_SUCCESS';
export const UPDATE_PRO_FORMA_INVOICE_FAILURE = 'UPDATE_PRO_FORMA_INVOICE_FAILURE';
export const VIEW_PRO_FORMA_INVOICE_REQUEST = 'VIEW_PRO_FORMA_INVOICE_REQUEST';
export const VIEW_PRO_FORMA_INVOICE_SUCCESS = 'VIEW_PRO_FORMA_INVOICE_SUCCESS';
export const VIEW_PRO_FORMA_INVOICE_FAILURE = 'VIEW_PRO_FORMA_INVOICE_FAILURE';

// ########################################## PRODUCT ###############################################################################################
export const FETCH_ALL_PRODUCTS_CASH_REQUEST = 'FETCH_ALL_PRODUCTS_CASH_REQUEST';
export const FETCH_ALL_PRODUCTS_CASH_SUCCESS = 'FETCH_ALL_PRODUCTS_CASH_SUCCESS';
export const FETCH_ALL_PRODUCTS_CASH_FAILURE = 'FETCH_ALL_PRODUCTS_CASH_FAILURE';
export const FETCH_ALL_PRODUCTS_REQUEST = 'FETCH_ALL_PRODUCTS_REQUEST';
export const FETCH_ALL_PRODUCTS_SUCCESS = 'FETCH_ALL_PRODUCTS_SUCCESS';
export const FETCH_ALL_PRODUCTS_FAILURE = 'FETCH_ALL_PRODUCTS_FAILURE';
export const CREATE_PRODUCT_REQUEST = 'CREATE_PRODUCT_REQUEST';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const CREATE_PRODUCT_FAILURE = 'CREATE_PRODUCT_FAILURE';

// ########################################## CUSTOMER ###############################################################################################
export const FETCH_ALL_CUSTOMERS_CASH_REQUEST = 'FETCH_ALL_CUSTOMERS_CASH_REQUEST';
export const FETCH_ALL_CUSTOMERS_CASH_SUCCESS = 'FETCH_ALL_CUSTOMERS_CASH_SUCCESS';
export const FETCH_ALL_CUSTOMERS_CASH_FAILURE = 'FETCH_ALL_CUSTOMERS_CASH_FAILURE';
export const FETCH_ALL_CUSTOMERS_REQUEST = 'FETCH_ALL_CUSTOMERS_REQUEST';
export const FETCH_ALL_CUSTOMERS_SUCCESS = 'FETCH_ALL_CUSTOMERS_SUCCESS';
export const FETCH_ALL_CUSTOMERS_FAILURE = 'FETCH_ALL_CUSTOMERS_FAILURE';
export const CREATE_CUSTOMER_REQUEST = 'CREATE_CUSTOMER_REQUEST';
export const CREATE_CUSTOMER_SUCCESS = 'CREATE_CUSTOMER_SUCCESS';
export const CREATE_CUSTOMER_FAILURE = 'CREATE_CUSTOMER_FAILURE';

// ########################################## DELIVERY CHALLAN ###############################################################################################
export const CREATE_DELIVERY_CHALLAN_REQUEST = 'CREATE_DELIVERY_CHALLAN_REQUEST';
export const CREATE_DELIVERY_CHALLAN_SUCCESS = 'CREATE_DELIVERY_CHALLAN_SUCCESS';
export const CREATE_DELIVERY_CHALLAN_FAILURE = 'CREATE_DELIVERY_CHALLAN_FAILURE';
export const FETCH_ALL_DELIVERYCHALLAN_REQUEST = 'FETCH_ALL_DELIVERYCHALLAN_REQUEST';
export const FETCH_ALL_DELIVERYCHALLAN_SUCCESS = 'FETCH_ALL_DELIVERYCHALLAN_SUCCESS';
export const FETCH_ALL_DELIVERYCHALLAN_FAILURE = 'FETCH_ALL_DELIVERYCHALLAN_FAILURE';
export const VIEW_DELIVERYCHALLAN_REQUEST = 'VIEW_DELIVERYCHALLAN_REQUEST';
export const VIEW_DELIVERYCHALLAN_SUCCESS = 'VIEW_DELIVERYCHALLAN_SUCCESS';
export const VIEW_DELIVERYCHALLAN_FAILURE = 'VIEW_DELIVERYCHALLAN_FAILURE';
export const UPDATE_DILEVERYCHALLAN_REQUEST = 'UPDATE_DILEVERYCHALLAN_REQUEST';
export const UPDATE_DILEVERYCHALLAN_SUCCESS = 'UPDATE_DILEVERYCHALLAN_SUCCESS';
export const UPDATE_DILEVERYCHALLAN_FAILURE = 'UPDATE_DILEVERYCHALLAN_FAILURE';
export const DELETE_DILEVERYCHALLAN_ITEM_REQUEST = 'DELETE_DILEVERYCHALLAN_ITEM_REQUEST';
export const DELETE_DILEVERYCHALLAN_ITEM_SUCCESS = 'DELETE_DILEVERYCHALLAN_ITEM_SUCCESS';
export const DELETE_DILEVERYCHALLAN_ITEM_FAILURE = 'DELETE_DILEVERYCHALLAN_ITEM_FAILURE';

// ########################################## PAYMENT ###############################################################################################
export const CREATE_PAYMENT_CASH_REQUEST = 'CREATE_PAYMENT_CASH_REQUEST';
export const CREATE_PAYMENT_CASH_SUCCESS = 'CREATE_PAYMENT_CASH_SUCCESS';
export const CREATE_PAYMENT_CASH_FAILURE = 'CREATE_PAYMENT_CASH_FAILURE';
export const GET_ALL_PAYMENT_CASH_REQUEST = 'GET_ALL_PAYMENT_CASH_REQUEST';
export const GET_ALL_PAYMENT_CASH_SUCCESS = 'GET_ALL_PAYMENT_CASH_SUCCESS';
export const GET_ALL_PAYMENT_CASH_FAILURE = 'GET_ALL_PAYMENT_CASH_FAILURE';
export const VIEW_PAYMENT_CASH_REQUEST = 'VIEW_PAYMENT_CASH_REQUEST';
export const VIEW_PAYMENT_CASH_SUCCESS = 'VIEW_PAYMENT_CASH_SUCCESS';
export const VIEW_PAYMENT_CASH_FAILURE = 'VIEW_PAYMENT_CASH_FAILURE';
export const UPDATE_PAYMENT_CASH_REQUEST = 'UPDATE_PAYMENT_CASH_REQUEST';
export const UPDATE_PAYMENT_CASH_SUCCESS = 'UPDATE_PAYMENT_CASH_SUCCESS';
export const UPDATE_PAYMENT_CASH_FAILURE = 'UPDATE_PAYMENT_CASH_FAILURE';
export const DELETE_PAYMENT_CASH_REQUEST = 'DELETE_PAYMENT_CASH_REQUEST';
export const DELETE_PAYMENT_CASH_SUCCESS = 'DELETE_PAYMENT_CASH_SUCCESS';
export const DELETE_PAYMENT_CASH_FAILURE = 'DELETE_PAYMENT_CASH_FAILURE';

// ########################################## PAYMENT RECIEVE CASH ###############################################################################################
export const CREATE_RECIEVE_CASH_REQUEST = 'CREATE_RECIEVE_CASH_REQUEST';
export const CREATE_RECIEVE_CASH_SUCCESS = 'CREATE_RECIEVE_CASH_SUCCESS';
export const CREATE_RECIEVE_CASH_FAILURE = 'CREATE_RECIEVE_CASH_FAILURE';
export const GET_ALL_RECIEVE_CASH_REQUEST = 'GET_ALL_RECIEVE_CASH_REQUEST';
export const GET_ALL_RECIEVE_CASH_SUCCESS = 'GET_ALL_RECIEVE_CASH_SUCCESS';
export const GET_ALL_RECIEVE_CASH_FAILURE = 'GET_ALL_RECIEVE_CASH_FAILURE';
export const VIEW_RECIEVE_CASH_REQUEST = 'VIEW_RECIEVE_CASH_REQUEST';
export const VIEW_RECIEVE_CASH_SUCCESS = 'VIEW_RECIEVE_CASH_SUCCESS';
export const VIEW_RECIEVE_CASH_FAILURE = 'VIEW_RECIEVE_CASH_FAILURE';
export const UPDATE_RECIEVE_CASH_REQUEST = 'UPDATE_RECIEVE_CASH_REQUEST';
export const UPDATE_RECIEVE_CASH_SUCCESS = 'UPDATE_RECIEVE_CASH_SUCCESS';
export const UPDATE_RECIEVE_CASH_FAILURE = 'UPDATE_RECIEVE_CASH_FAILURE';
export const DELETE_RECIEVE_CASH_REQUEST = 'DELETE_RECIEVE_CASH_REQUEST';
export const DELETE_RECIEVE_CASH_SUCCESS = 'DELETE_RECIEVE_CASH_SUCCESS';
export const DELETE_RECIEVE_CASH_FAILURE = 'DELETE_RECIEVE_CASH_FAILURE';

// ########################################## SALES INVOICE ###############################################################################################
export const CREATE_SALES_INVOICE_REQUEST = 'CREATE_SALES_INVOICE_REQUEST';
export const CREATE_SALES_INVOICE_SUCCESS = 'CREATE_SALES_INVOICE_SUCCESS';
export const CREATE_SALES_INVOICE_FAILURE = 'CREATE_SALES_INVOICE_FAILURE';
export const DELETE_SALES_INVOICE_REQUEST = 'DELETE_SALES_INVOICE_REQUEST';
export const DELETE_SALES_INVOICE_SUCCESS = 'DELETE_SALES_INVOICE_SUCCESS';
export const DELETE_SALES_INVOICE_FAILURE = 'DELETE_SALES_INVOICE_FAILURE';
export const UPDATE_SALESINVOICE_REQUEST = 'UPDATE_SALESINVOICE_REQUEST';
export const UPDATE_SALESINVOICE_SUCCESS = 'UPDATE_SALESINVOICE_SUCCESS';
export const UPDATE_SALESINVOICE_FAILURE = 'UPDATE_SALESINVOICE_FAILURE';
export const FETCH_ALL_SALESINVOICE_REQUEST = 'FETCH_ALL_SALESINVOICE_REQUEST';
export const FETCH_ALL_SALESINVOICE_SUCCESS = 'FETCH_ALL_SALESINVOICE_SUCCESS';
export const FETCH_ALL_SALESINVOICE_FAILURE = 'FETCH_ALL_SALESINVOICE_FAILURE';
export const VIEW_SALESINVOICE_REQUEST = 'VIEW_SALESINVOICE_REQUEST';
export const VIEW_SALESINVOICE_SUCCESS = 'VIEW_SALESINVOICE_SUCCESS';
export const VIEW_SALESINVOICE_FAILURE = 'VIEW_SALESINVOICE_FAILURE';

// ########################################## SALES INVOICE CASH ###############################################################################################
export const CREATE_SALES_INVOICE_CASH_REQUEST = 'CREATE_SALES_INVOICE_CASH_REQUEST';
export const CREATE_SALES_INVOICE_CASH_SUCCESS = 'CREATE_SALES_INVOICE_CASH_SUCCESS';
export const CREATE_SALES_INVOICE_CASH_FAILURE = 'CREATE_SALES_INVOICE_FAILURE';
export const DELETE_SALES_INVOICE_CASH_REQUEST = 'DELETE_SALES_INVOICE_CASH_REQUEST';
export const DELETE_SALES_INVOICE_CASH_SUCCESS = 'DELETE_SALES_INVOICE_CASH_SUCCESS';
export const DELETE_SALES_INVOICE_CASH_FAILURE = 'DELETE_SALES_INVOICE_CASH_FAILURE';
export const UPDATE_SALES_INVOICE_CASH_REQUEST = 'UPDATE_SALES_INVOICE_CASH_REQUEST';
export const UPDATE_SALES_INVOICE_CASH_SUCCESS = 'UPDATE_SALES_INVOICE_CASH_SUCCESS';
export const UPDATE_SALES_INVOICE_CASH_FAILURE = 'UPDATE_SALES_INVOICE_CASH_FAILURE';
export const FETCH_ALL_SALES_INVOICE_CASH_REQUEST = 'FETCH_ALL_SALES_INVOICE_CASH_REQUEST';
export const FETCH_ALL_SALES_INVOICE_CASH_SUCCESS = 'FETCH_ALL_SALES_INVOICE_CASH_SUCCESS';
export const FETCH_ALL_SALES_INVOICE_CASH_FAILURE = 'FETCH_ALL_SALES_INVOICE_CASH_FAILURE';
export const VIEW_SALES_INVOICE_CASH_REQUEST = 'VIEW_SALES_INVOICE_CASH_REQUEST';
export const VIEW_SALES_INVOICE_CASH_SUCCESS = 'VIEW_SALES_INVOICE_CASH_SUCCESS';
export const VIEW_SALES_INVOICE_CASH_FAILURE = 'VIEW_SALES_INVOICE_CASH_FAILURE';

// ########################################## SALES INVOICE ###############################################################################################
export const CREATE_DEBIT_NOTE_REQUEST = 'CREATE_DEBIT_NOTE_REQUEST';
export const CREATE_DEBIT_NOTE_SUCCESS = 'CREATE_DEBIT_NOTE_SUCCESS';
export const CREATE_DEBIT_NOTE_FAILURE = 'CREATE_DEBIT_NOTE_FAILURE';
export const DELETE_DEBIT_NOTE_REQUEST = 'DELETE_DEBIT_NOTE_REQUEST';
export const DELETE_DEBIT_NOTE_SUCCESS = 'DELETE_DEBIT_NOTE_SUCCESS';
export const DELETE_DEBIT_NOTE_FAILURE = 'DELETE_DEBIT_NOTE_FAILURE';
export const UPDATE_DEBIT_NOTE_REQUEST = 'UPDATE_DEBIT_NOTE_REQUEST';
export const UPDATE_DEBIT_NOTE_SUCCESS = 'UPDATE_DEBIT_NOTE_SUCCESS';
export const UPDATE_DEBIT_NOTE_FAILURE = 'UPDATE_DEBIT_NOTE_FAILURE';
export const FETCH_ALL_DEBITNOTE_REQUEST = 'FETCH_ALL_DEBITNOTE_REQUEST';
export const FETCH_ALL_DEBITNOTE_SUCCESS = 'FETCH_ALL_DEBITNOTE_SUCCESS';
export const FETCH_ALL_DEBITNOTE_FAILURE = 'FETCH_ALL_DEBITNOTE_FAILURE';
export const VIEW_DEBIT_NOTE_REQUEST = 'VIEW_DEBIT_NOTE_REQUEST';
export const VIEW_DEBIT_NOTE_SUCCESS = 'VIEW_DEBIT_NOTE_SUCCESS';
export const VIEW_DEBIT_NOTE_FAILURE = 'VIEW_DEBIT_NOTE_FAILURE';

// ########################################## CREDIT NOTE ###############################################################################################
export const CREATE_CREDIT_NOTE_REQUEST = 'CREATE_CREDIT_NOTE_REQUEST';
export const CREATE_CREDIT_NOTE_SUCCESS = 'CREATE_CREDIT_NOTE_SUCCESS';
export const CREATE_CREDIT_NOTE_FAILURE = 'CREATE_CREDIT_NOTE_FAILURE';
export const DELETE_CREDIT_NOTE_REQUEST = 'DELETE_CREDIT_NOTE_REQUEST';
export const DELETE_CREDIT_NOTE_SUCCESS = 'DELETE_CREDIT_NOTE_SUCCESS';
export const DELETE_CREDIT_NOTE_FAILURE = 'DELETE_CREDIT_NOTE_FAILURE';
export const UPDATE_CREDIT_NOTE_REQUEST = 'UPDATE_CREDIT_NOTE_REQUEST';
export const UPDATE_CREDIT_NOTE_SUCCESS = 'UPDATE_CREDIT_NOTE_SUCCESS';
export const UPDATE_CREDIT_NOTE_FAILURE = 'UPDATE_CREDIT_NOTE_FAILURE';
export const FETCH_ALL_CREDITNOTE_REQUEST = 'FETCH_ALL_CREDITNOTE_REQUEST';
export const FETCH_ALL_CREDITNOTE_SUCCESS = 'FETCH_ALL_CREDITNOTE_SUCCESS';
export const FETCH_ALL_CREDITNOTE_FAILURE = 'FETCH_ALL_CREDITNOTE_FAILURE';
export const VIEW_CREDIT_NOTE_REQUEST = 'VIEW_CREDIT_NOTE_REQUEST';
export const VIEW_CREDIT_NOTE_SUCCESS = 'VIEW_CREDIT_NOTE_SUCCESS';
export const VIEW_CREDIT_NOTE_FAILURE = 'VIEW_CREDIT_NOTE_FAILURE';

// ########################################## PURCHASE ###############################################################################################
export const VIEW_PURCHASE_REQUEST = 'VIEW_PURCHASE_REQUEST';
export const VIEW_PURCHASE_SUCCESS = 'VIEW_PURCHASE_SUCCESS';
export const VIEW_PURCHASE_FAILURE = 'VIEW_PURCHASE_FAILURE';
export const CREATE_PURCHASE_REQUEST = 'CREATE_PURCHASE_REQUEST';
export const CREATE_PURCHASE_SUCCESS = 'CREATE_PURCHASE_SUCCESS';
export const CREATE_PURCHASE_FAILURE = 'CREATE_PURCHASE_FAILURE';
export const CREATE_PURCHASE_ITEM_REQUEST = 'CREATE_PURCHASE_ITEM_REQUEST';
export const CREATE_PURCHASE_ITEM_SUCCESS = 'CREATE_PURCHASE_ITEM_SUCCESS';
export const CREATE_PURCHASE_ITEM_FAILURE = 'CREATE_PURCHASE_ITEM_FAILURE';
export const UPDATE_PURCHASE_REQUEST = 'UPDATE_PURCHASE_REQUEST';
export const UPDATE_PURCHASE_SUCCESS = 'UPDATE_PURCHASE_SUCCESS';
export const UPDATE_PURCHASE_FAILURE = 'UPDATE_PURCHASE_FAILURE';
export const UPDATE_PURCHASE_ITEM_REQUEST = 'UPDATE_PURCHASE_ITEM_REQUEST';
export const UPDATE_PURCHASE_ITEM_SUCCESS = 'UPDATE_PURCHASE_ITEM_SUCCESS';
export const UPDATE_PURCHASE_ITEM_FAILURE = 'UPDATE_PURCHASE_ITEM_FAILURE';
export const DELETE_PURCHASE_ITEM_REQUEST = 'DELETE_PURCHASE_ITEM_REQUEST';
export const DELETE_PURCHASE_ITEM_SUCCESS = 'DELETE_PURCHASE_ITEM_SUCCESS';
export const DELETE_PURCHASE_ITEM_FAILURE = 'DELETE_PURCHASE_ITEM_FAILURE';
export const FETCH_ALL_PURCHASE_REQUEST = 'FETCH_ALL_PURCHASE_REQUEST';
export const FETCH_ALL_PURCHASE_SUCCESS = 'FETCH_ALL_PURCHASE_SUCCESS';
export const FETCH_ALL_PURCHASE_FAILURE = 'FETCH_ALL_PURCHASE_FAILURE';

// ########################################## EXPENSE ###############################################################################################
export const CREATE_EXPENCE_REQUEST = 'CREATE_EXPENCE_REQUEST';
export const CREATE_EXPENSE_SUCCESS = 'CREATE_EXPENSE_SUCCESS';
export const CREATE_EXPENCE_FAILURE = 'CREATE_EXPENSE_FAILURE';
export const CREATE_EXPENSE_ITEM_REQUEST = 'CREATE_EXPENSE_ITEM_REQUEST';
export const CREATE_EXPENSE_ITEM_SUCCESS = 'CREATE_EXPENSE_ITEM_SUCCESS';
export const CREATE_EXPENSE_ITEM_FAILURE = 'CREATE_EXPENSE_ITEM_FAILURE';
export const UPDATE_EXPENCE_REQUEST = 'UPDATE_EXPENCE_REQUEST';
export const UPDATE_EXPENSE_SUCCESS = 'UPDATE_EXPENSE_SUCCESS';
export const UPDATE_EXPENCE_FAILURE = 'UPDATE_EXPENSE_FAILURE';
export const UPDATE_EXPENSE_ITEM_REQUEST = 'UPDATE_EXPENSE_ITEM_REQUEST';
export const UPDATE_EXPENSE_ITEM_SUCCESS = 'UPDATE_EXPENSE_ITEM_SUCCESS';
export const UPDATE_EXPENSE_ITEM_FAILURE = 'UPDATE_EXPENSE_ITEM_FAILURE';
export const FETCH_ALL_EXPENSE_REQUEST = 'FETCH_ALL_EXPENSE_REQUEST';
export const FETCH_ALL_EXPENSE_SUCCESS = 'FETCH_ALL_EXPENSE_SUCCESS';
export const FETCH_ALL_EXPENSE_FAILURE = 'FETCH_ALL_EXPENSE_FAILURE';
export const VIEW_EXPENSE_REQUEST = 'VIEW_EXPENSE_REQUEST';
export const VIEW_EXPENSE_SUCCESS = 'VIEW_EXPENSE_SUCCESS';
export const VIEW_EXPENSE_FAILURE = 'VIEW_EXPENSE_FAILURE';
export const DELETE_EXPENSE_ITEM_REQUEST = 'DELETE_EXPENSE_ITEM_REQUEST';
export const DELETE_EXPENSE_ITEM_SUCCESS = 'DELETE_EXPENSE_ITEM_SUCCESS';
export const DELETE_EXPENSE_ITEM_FAILURE = 'DELETE_EXPENSE_ITEM_FAILURE';

// ########################################## PURCHASE INVOICE ###############################################################################################
export const FETCH_ALL_PURCHASE_INVOICE_REQUEST = 'FETCH_ALL_PURCHASE_INVOICE_REQUEST';
export const FETCH_ALL_PURCHASE_INVOICE_SUCCESS = 'FETCH_ALL_PURCHASE_INVOICE_SUCCESS';
export const FETCH_ALL_PURCHASE_INVOICE_FAILURE = 'FETCH_ALL_PURCHASE_INVOICE_FAILURE';
export const VIEW_PURCHASE_INVOICE_REQUEST = 'VIEW_PURCHASE_INVOICE_REQUEST';
export const VIEW_PURCHASE_INVOICE_SUCCESS = 'VIEW_PURCHASE_INVOICE_SUCCESS';
export const VIEW_PURCHASE_INVOICE_FAILURE = 'VIEW_PURCHASE_INVOICE_FAILURE';
export const CREATE_PURCHASE_INVOICE_REQUEST = 'CREATE_PURCHASE_INVOICE_REQUEST';
export const CREATE_PURCHASE_INVOICE_SUCCESS = 'CREATE_PURCHASE_INVOICE_SUCCESS';
export const CREATE_PURCHASE_INVOICE_FAILURE = 'CREATE_PURCHASE_INVOICE_FAILURE';
export const UPDATE_PURCHASE_INVOICE_REQUEST = 'UPDATE_PURCHASE_INVOICE_REQUEST';
export const UPDATE_PURCHASE_INVOICE_SUCCESS = 'UPDATE_PURCHASE_INVOICE_SUCCESS';
export const UPDATE_PURCHASE_INVOICE_FAILURE = 'UPDATE_PURCHASE_INVOICE_FAILURE';
export const DELETE_PURCHASE_INVOICE_REQUEST = 'DELETE_PURCHASE_INVOICE_REQUEST';
export const DELETE_PURCHASE_INVOICE_SUCCESS = 'DELETE_PURCHASE_INVOICE_SUCCESS';
export const DELETE_PURCHASE_INVOICE_FAILURE = 'DELETE_PURCHASE_INVOICE_FAILURE';

// ########################################## PURCHASE INVOICE CASH ###############################################################################################
export const FETCH_ALL_PURCHASE_INVOICE_CASH_REQUEST = 'FETCH_ALL_PURCHASE_INVOICE_CASH_REQUEST';
export const FETCH_ALL_PURCHASE_INVOICE_CASH_SUCCESS = 'FETCH_ALL_PURCHASE_INVOICE_CASH_SUCCESS';
export const FETCH_ALL_PURCHASE_INVOICE_CASH_FAILURE = 'FETCH_ALL_PURCHASE_INVOICE_FAILURE';
export const VIEW_PURCHASE_INVOICE_CASH_REQUEST = 'VIEW_PURCHASE_INVOICE_CASH_REQUEST';
export const VIEW_PURCHASE_INVOICE_CASH_SUCCESS = 'VIEW_PURCHASE_INVOICE_CASH_SUCCESS';
export const VIEW_PURCHASE_INVOICE_CASH_FAILURE = 'VIEW_PURCHASE_INVOICE_CASH_FAILURE';
export const CREATE_PURCHASE_INVOICE_CASH_REQUEST = 'CREATE_PURCHASE_INVOICE_CASH_REQUEST';
export const CREATE_PURCHASE_INVOICE_CASH_SUCCESS = 'CREATE_PURCHASE_INVOICE_CASH_SUCCESS';
export const CREATE_PURCHASE_INVOICE_CASH_FAILURE = 'CREATE_PURCHASE_INVOICE_CASH_FAILURE';
export const UPDATE_PURCHASE_INVOICE_CASH_REQUEST = 'UPDATE_PURCHASE_INVOICE_CASH_REQUEST';
export const UPDATE_PURCHASE_INVOICE_CASH_SUCCESS = 'UPDATE_PURCHASE_INVOICE_CASH_SUCCESS';
export const UPDATE_PURCHASE_INVOICE_CASH_FAILURE = 'UPDATE_PURCHASE_INVOICE_CASH_FAILURE';
export const DELETE_PURCHASE_INVOICE_CASH_REQUEST = 'DELETE_PURCHASE_INVOICE_CASH_REQUEST';
export const DELETE_PURCHASE_INVOICE_CASH_SUCCESS = 'DELETE_PURCHASE_INVOICE_CASH_SUCCESS';
export const DELETE_PURCHASE_INVOICE_CASH_FAILURE = 'DELETE_PURCHASE_INVOICE_CASH_FAILURE';

// ########################################## PURCHASE RETURN ###############################################################################################
export const FETCH_ALL_PURCHASERETURN_REQUEST = 'FETCH_ALL_PURCHASERETURN_REQUEST';
export const FETCH_ALL_PURCHASERETURN_SUCCESS = 'FETCH_ALL_PURCHASERETURN_SUCCESS';
export const FETCH_ALL_PURCHASERETURN_FAILURE = 'FETCH_ALL_PURCHASERETURN_FAILURE';
export const VIEW_PURCHASERETURN_REQUEST = 'VIEW_PURCHASERETURN_REQUEST';
export const VIEW_PURCHASERETURN_SUCCESS = 'VIEW_PURCHASERETURN_SUCCESS';
export const VIEW_PURCHASERETURN_FAILURE = 'VIEW_PURCHASEBILL_FAILURE';

// #################################################################### PERMISSIONS ###################################################################
export const FETCH_ALL_PERMISSIONS_REQUEST = 'FETCH_ALL_PERMISSIONS_REQUEST';
export const FETCH_ALL_PERMISSIONS_SUCCESS = 'FETCH_ALL_PERMISSIONS_SUCCESS';
export const FETCH_ALL_PERMISSIONS_FAILURE = 'FETCH_ALL_PERMISSIONS_FAILURE';

export const UPDATE_PERMISSIONS_REQUEST = 'UPDATE_PERMISSIONS_REQUEST';
export const UPDATE_PERMISSIONS_SUCCESS = 'UPDATE_PERMISSIONS_SUCCESS';
export const UPDATE_PERMISSIONS_FAILURE = 'UPDATE_PERMISSIONS_FAILURE';

// ############################################################### USER #######################################################################

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';
export const GET_ALL_USER_REQUEST = 'GET_ALL_USER_REQUEST';
export const GET_ALL_USER_SUCCESS = 'GET_ALL_USER_SUCCESS';
export const GET_ALL_USER_FAILURE = 'GET_ALL_USER_FAILURE';
export const VIEW_USER_REQUEST = 'VIEW_USER_REQUEST';
export const VIEW_USER_SUCCESS = 'VIEW_USER_SUCCESS';
export const VIEW_USER_FAILURE = 'VIEW_USER_FAILURE';
export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';
export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';

// ########################################################################### VENDOR ###############################################################

export const CREATE_VENDOR_REQUEST = 'CREATE_VENDOR_REQUEST';
export const CREATE_VENDOR_SUCCESS = 'CREATE_VENDOR_SUCCESS';
export const CREATE_VENDOR_FAILURE = 'CREATE_VENDOR_FAILURE';
export const FETCH_ALL_VENDORS_REQUEST = 'FETCH_ALL_VENDORS_REQUEST';
export const FETCH_ALL_VENDORS_SUCCESS = 'FETCH_ALL_VENDORS_SUCCESS';
export const FETCH_ALL_VENDORS_FAILURE = 'FETCH_ALL_VENDORS_FAILURE';
export const FETCH_ALL_VENDORS_CASH_REQUEST = 'FETCH_ALL_VENDORS_CASH_REQUEST';
export const FETCH_ALL_VENDORS_CASH_SUCCESS = 'FETCH_ALL_VENDORS_CASH_SUCCESS';
export const FETCH_ALL_VENDORS_CASH_FAILURE = 'FETCH_ALL_VENDORS_CASH_FAILURE';

// #################################################################### VENDOR LEDGER ###################################################################
export const FETCH_ALL_VENDOR_LEDGER_REQUEST = 'FETCH_ALL_VENDOR_LEDGER_REQUEST';
export const FETCH_ALL_VENDOR_LEDGER_SUCCESS = 'FETCH_ALL_VENDOR_LEDGER_SUCCESS';
export const FETCH_ALL_VENDOR_LEDGER_FAILURE = 'FETCH_ALL_VENDOR_FAILURE';

// #################################################################### VENDOR LEDGER ###################################################################
export const FETCH_ALL_CUSTOMER_LEDGER_REQUEST = 'FETCH_ALL_CUSTOMER_LEDGER_REQUEST';
export const FETCH_ALL_CUSTOMER_LEDGER_SUCCESS = 'FETCH_ALL_CUSTOMER_LEDGER_SUCCESS';
export const FETCH_ALL_CUSTOMER_LEDGER_FAILURE = 'FETCH_ALL_CUSTOMER_LEDGER_FAILURE';

// #################################################################### USER LEDGER ###################################################################
export const FETCH_ALL_USER_LEDGER_REQUEST = 'FETCH_ALL_USER_LEDGER_REQUEST';
export const FETCH_ALL_USER_LEDGER_SUCCESS = 'FETCH_ALL_USER_LEDGER_SUCCESS';
export const FETCH_ALL_USER_LEDGER_FAILURE = 'FETCH_ALL_USER_LEDGER_FAILURE';

// #################################################################### VENDOR LEDGER ###################################################################
export const FETCH_ALL_CLAIM_USER_REQUEST = 'FETCH_ALL_CLAIM_USER_REQUEST';
export const FETCH_ALL_CLAIM_USER_SUCCESS = 'FETCH_ALL_CLAIM_USER_SUCCESS';
export const FETCH_ALL_CLAIM_USER_FAILURE = 'FETCH_ALL_CLAIM_USER_FAILURE';
export const CREATE_CLAIM_CASH_REQUEST = 'CREATE_CLAIM_CASH_REQUEST';
export const CREATE_CLAIM_CASH_SUCCESS = 'CREATE_CLAIM_CASH_SUCCESS';
export const CREATE_CLAIM_CASH_FAILURE = 'CREATE_CLAIM_CASH_FAILURE';
export const VIEW_CLAIM_CASH_REQUEST = 'VIEW_CLAIM_CASH_REQUEST';
export const VIEW_CLAIM_CASH_SUCCESS = 'VIEW_CLAIM_CASH_SUCCESS';
export const VIEW_CLAIM_CASH_FAILURE = 'VIEW_CLAIM_CASH_FAILURE';
export const VIEW_SINGLE_CLAIM_CASH_REQUEST = 'VIEW_SINGLE_CLAIM_CASH_REQUEST';
export const VIEW_SINGLE_CLAIM_CASH_SUCCESS = 'VIEW_SINGLE_CLAIM_CASH_SUCCESS';
export const VIEW_SINGLE_CLAIM_CASH_FAILURE = 'VIEW_SINGLE_CLAIM_CASH_FAILURE';
export const UPDATE_CLAIM_CASH_REQUEST = 'UPDATE_CLAIM_CASH_REQUEST';
export const UPDATE_CLAIM_CASH_SUCCESS = 'UPDATE_CLAIM_CASH_SUCCESS';
export const UPDATE_CLAIM_CASH_FAILURE = 'UPDATE_CLAIM_CASH_FAILURE';
export const DELETE_CLAIM_CASH_REQUEST = 'DELETE_CLAIM_CASH_REQUEST';
export const DELETE_CLAIM_CASH_SUCCESS = 'DELETE_CLAIM_CASH_SUCCESS';
export const DELETE_CLAIM_CASH_FAILURE = 'DELETE_CLAIM_CASH_FAILURE';
export const VIEW_RECIEVE_CLAIM_CASH_REQUEST = 'VIEW_RECIEVE_CLAIM_CASH_REQUEST';
export const VIEW_RECIEVE_CLAIM_CASH_SUCCESS = 'VIEW_RECIEVE_CLAIM_CASH_SUCCESS';
export const VIEW_RECIEVE_CLAIM_CASH_FAILURE = 'VIEW_RECIEVE_CLAIM_CASH_FAILURE';

// #################################################################### PAYMENT BANK ###################################################################
export const CREATE_PAYMENT_BANK_REQUEST = 'CREATE_PAYMENT_BANK_REQUEST';
export const CREATE_PAYMENT_BANK_SUCCESS = 'CREATE_PAYMENT_BANK_SUCCESS';
export const CREATE_PAYMENT_BANK_FAILURE = 'CREATE_PAYMENT_BANK_FAILURE';
export const VIEW_PAYMENT_BANK_REQUEST = 'VIEW_PAYMENT_BANK_REQUEST';
export const VIEW_PAYMENT_BANK_SUCCESS = 'VIEW_PAYMENT_BANK_SUCCESS';
export const VIEW_PAYMENT_BANK_FAILURE = 'VIEW_PAYMENT_BANK_FAILURE';
export const UPADTE_PAYMENT_BANK_REQUEST = 'UPADTE_PAYMENT_BANK_REQUEST';
export const UPADTE_PAYMENT_BANK_SUCCESS = 'UPADTE_PAYMENT_BANK_SUCCESS';
export const UPADTE_PAYMENT_BANK_FAILURE = 'UPADTE_PAYMENT_BANK_FAILURE';
export const DELETE_PAYMENT_BANK_REQUEST = 'DELETE_PAYMENT_BANK_REQUEST';
export const DELETE_PAYMENT_BANK_SUCCESS = 'DELETE_PAYMENT_BANK_SUCCESS';
export const DELETE_PAYMENT_BANK_FAILURE = 'DELETE_PAYMENT_BANK_FAILURE';
export const FETCH_ALL_PAYMENT_BANK_REQUEST = 'FETCH_ALL_PAYMENT_BANK_REQUEST';
export const FETCH_ALL_PAYMENT_BANK_SUCCESS = 'FETCH_ALL_PAYMENT_BANK_SUCCESS';
export const FETCH_ALL_PAYMENT_BANK_FAILURE = 'FETCH_ALL_PAYMENT_BANK_FAILURE';
export const PAYMENT_BANK_LEDGER_REQUEST = 'PAYMENT_BANK_LEDGER_REQUEST';
export const PAYMENT_BANK_LEDGER_SUCCESS = 'PAYMENT_BANK_LEDGER_SUCCESS';
export const PAYMENT_BANK_LEDGER_FAILURE = 'PAYMENT_BANK_LEDGER_FAILURE';

// #################################################################### PAYMENT RECIEVE BANK ###################################################################
export const CREATE_PAYMENT_RECIEVE_BANK_REQUEST = 'CREATE_PAYMENT_RECIEVE_BANK_REQUEST';
export const CREATE_PAYMENT_RECIEVE_BANK_SUCCESS = 'CREATE_PAYMENT_RECIEVE_BANK_SUCCESS';
export const CREATE_PAYMENT_RECIEVE_BANK_FAILURE = 'CREATE_PAYMENT_RECIEVE_BANK_FAILURE';
export const VIEW_PAYMENT_RECIEVE_BANK_REQUEST = 'VIEW_PAYMENT_RECIEVE_BANK_REQUEST';
export const VIEW_PAYMENT_RECIEVE_BANK_SUCCESS = 'VIEW_PAYMENT_RECIEVE_BANK_SUCCESS';
export const VIEW_PAYMENT_RECIEVE_BANK_FAILURE = 'VIEW_PAYMENT_RECIEVE_BANK_FAILURE';
export const UPADTE_PAYMENT_RECIEVE_BANK_REQUEST = 'UPADTE_PAYMENT_RECIEVE_BANK_REQUEST';
export const UPADTE_PAYMENT_RECIEVE_BANK_SUCCESS = 'UPADTE_PAYMENT_RECIEVE_BANK_SUCCESS';
export const UPADTE_PAYMENT_RECIEVE_BANK_FAILURE = 'UPADTE_PAYMENT_RECIEVE_BANK_FAILURE';
export const DELETE_PAYMENT_RECIEVE_BANK_REQUEST = 'DELETE_PAYMENT_RECIEVE_BANK_REQUEST';
export const DELETE_PAYMENT_RECIEVE_BANK_SUCCESS = 'DELETE_PAYMENT_RECIEVE_BANK_SUCCESS';
export const DELETE_PAYMENT_RECIEVE_BANK_FAILURE = 'DELETE_PAYMENT_RECIEVE_BANK_FAILURE';
export const FETCH_ALL_PAYMENT_RECIEVE_BANK_REQUEST = 'FETCH_ALL_PAYMENT_RECIEVE_BANK_REQUEST';
export const FETCH_ALL_PAYMENT_RECIEVE_BANK_SUCCESS = 'FETCH_ALL_PAYMENT_RECIEVE_BANK_SUCCESS';
export const FETCH_ALL_PAYMENT_RECIEVE_BANK_FAILURE = 'FETCH_ALL_PAYMENT_RECIEVE_BANK_FAILURE';
export const PAYMENT_RECIEVE_BANK_LEDGER_REQUEST = 'PAYMENT_RECIEVE_BANK_LEDGER_REQUEST';
export const PAYMENT_RECIEVE_BANK_LEDGER_SUCCESS = 'PAYMENT_RECIEVE_BANK_LEDGER_SUCCESS';
export const PAYMENT_RECIEVE_BANK_LEDGER_FAILURE = 'PAYMENT_RECIEVE_BANK_LEDGER_FAILURE';

// #################################################################### COMAPNY BANK ###################################################################
export const CREATE_COMPANY_BANK_REQUEST = 'CREATE_COMPANY_BANK_REQUEST';
export const CREATE_COMPANY_BANK_SUCCESS = 'CREATE_COMPANY_BANK_SUCCESS';
export const CREATE_COMPANY_BANK_FAILURE = 'CREATE_COMPANY_BANK_FAILURE';
export const UPDATE_COMPANY_BANK_REQUEST = 'UPDATE_COMPANY_BANK_REQUEST';
export const UPDATE_COMPANY_BANK_SUCCESS = 'UPDATE_COMPANY_BANK_SUCCESS';
export const UPDATE_COMPANY_BANK_FAILURE = 'UPDATE_COMPANY_BANK_FAILURE';
export const VIEW_COMPANY_BANK_REQUEST = 'VIEW_COMPANY_BANK_REQUEST';
export const VIEW_COMPANY_BANK_SUCCESS = 'VIEW_COMPANY_BANK_SUCCESS';
export const VIEW_COMPANY_BANK_FAILURE = 'VIEW_COMPANY_BANK_FAILURE';
export const DELETE_COMPANY_BANK_REQUEST = 'DELETE_COMPANY_BANK_REQUEST';
export const DELETE_COMPANY_BANK_SUCCESS = 'DELETE_COMPANY_BANK_SUCCESS';
export const DELETE_COMPANY_BANK_FAILURE = 'DELETE_COMPANY_BANK_FAILURE';
export const FETCH_ALL_COMPANY_BANK_REQUEST = 'FETCH_ALL_COMPANY_BANK_REQUEST';
export const FETCH_ALL_COMPANY_BANK_SUCCESS = 'FETCH_ALL_COMPANY_BANK_SUCCESS';
export const FETCH_ALL_COMPANY_BANK_FAILURE = 'FETCH_ALL_COMPANY_BANK_FAILURE';

// #################################################################### COMAPNY ###################################################################
export const CREATE_COMPANY_REQUEST = 'CREATE_COMPANY_REQUEST';
export const CREATE_COMPANY_SUCCESS = 'CREATE_COMPANY_SUCCESS';
export const CREATE_COMPANY_FAILURE = 'CREATE_COMPANY_FAILURE';
export const UPDATE_COMPANY_REQUEST = 'UPDATE_COMPANY_REQUEST';
export const UPDATE_COMPANY_SUCCESS = 'UPDATE_COMPANY_SUCCESS';
export const UPDATE_COMPANY_FAILURE = 'UPDATE_COMPANY_FAILURE';
export const VIEW_COMPANY_REQUEST = 'VIEW_COMPANY_REQUEST';
export const VIEW_COMPANY_SUCCESS = 'VIEW_COMPANY_SUCCESS';
export const VIEW_COMPANY_FAILURE = 'VIEW_COMPANY_FAILURE';
export const DELETE_COMPANY_REQUEST = 'DELETE_COMPANY_REQUEST';
export const DELETE_COMPANY_SUCCESS = 'DELETE_COMPANY_SUCCESS';
export const DELETE_COMPANY_FAILURE = 'DELETE_COMPANY_FAILURE';
export const FETCH_ALL_COMPANY_REQUEST = 'FETCH_ALL_COMPANY_REQUEST';
export const FETCH_ALL_COMPANY_SUCCESS = 'FETCH_ALL_COMPANY_SUCCESS';
export const FETCH_ALL_COMPANY_FAILURE = 'FETCH_ALL_COMPANY_FAILURE';
export const SET_DEFAULT_COMPANY_REQUEST = 'SET_DEFAULT_COMPANY_REQUEST';
export const SET_DEFAULT_COMPANY_SUCCESS = 'SET_DEFAULT_COMPANY_SUCCESS';
export const SET_DEFAULT_COMPANY_FAILURE = 'SET_DEFAULT_COMPANY_FAILURE';

// ###################################################################### LOGIN #####################################################################
export const loginRequest = () => ({
  type: 'LOGIN_REQUEST'
});
export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user
});
export const loginFailure = (error) => ({
  type: 'LOGIN_FAILURE',
  payload: error
});
export const logoutRequest = () => ({
  type: 'LOGOUT_REQUEST'
});
export const logoutSuccess = (user) => ({
  type: 'LOGOUT_SUCCESS',
  payload: user
});
export const logoutFailure = (error) => ({
  type: 'LOGOUT_FAILURE',
  payload: error
});
// #################################################################### PRO_FORMA_INVOICE ###################################################################################
export const fetchProformainvoiceRequest = () => ({
  type: 'FETCH_PRO_FORMA_INVOICE_REQUEST'
});
export const fetchProformainvoiceSuccess = (data) => ({
  type: 'FETCH_PRO_FORMA_INVOICE_SUCCESS',
  payload: data
});
export const fetchProformainvoiceFailure = (error) => ({
  type: 'FETCH_PRO_FORMA_INVOICE_FAILURE',
  payload: error
});
export const createProformainvoiceRequest = () => ({
  type: 'CREATE_PRO_FORMA_INVOICE_REQUEST'
});
export const createProformainvoiceSuccess = (data) => ({
  type: 'CREATE_PRO_FORMA_INVOICE_SUCCESS',
  payload: data
});
export const createProformainvoiceFailure = (error) => ({
  type: 'CREATE_PRO_FORMA_INVOICE_FAILURE',
  payload: error
});
export const deleteProformainvoiceItemRequest = (data) => ({
  type: 'DELETE_PRO_FORMA_INVOICE_ITEM_REQUEST',
  payload: data
});
export const deleteProformainvoiceItemSuccess = (data) => ({
  type: 'DELETE_PRO_FORMA_INVOICE_ITEM_SUCCESS',
  payload: data
});
export const deleteProformainvoiceItemFailure = (error) => ({
  type: 'DELETE_PRO_FORMA_INVOICE_ITEM_FAILURE',
  payload: error
});
export const deleteProformainvoiceRequest = (data) => ({
  type: 'DELETE_PRO_FORMA_INVOICE_REQUEST',
  payload: data
});
export const deleteProformainvoiceSuccess = (data) => ({
  type: 'DELETE_PRO_FORMA_INVOICE_SUCCESS',
  payload: data
});
export const deleteProformainvoiceFailure = (error) => ({
  type: 'DELETE_PRO_FORMA_INVOICE_FAILURE',
  payload: error
});
export const viewProformainvoiceRequest = (data) => ({
  type: 'VIEW_PRO_FORMA_INVOICE_REQUEST',
  payload: data
});
export const viewProformainvoiceSuccess = (data) => ({
  type: 'VIEW_PRO_FORMA_INVOICE_SUCCESS',
  payload: data
});
export const viewProformainvoiceFailure = (error) => ({
  type: 'VIEW_PRO_FORMA_INVOICE_FAILURE',
  payload: error
});
export const updateProformainvoiceRequst = (data) => ({
  type: 'UPDATE_PRO_FORMA_INVOICE_REQUEST',
  payload: data
});
export const updateProformainvoicesuccess = (data) => ({
  type: 'UPDATE_PRO_FORMA_INVOICE_SUCCESS',
  payload: data
});
export const updateProformainvoicefailure = (error) => ({
  type: 'UPDATE_PRO_FORMA_INVOICE_FAILURE',
  payload: error
});

// ################################################################ CUSTOMERS ##################################################################################
export const fetchAllCustomersCashRequest = () => ({
  type: 'FETCH_ALL_CUSTOMERS_CASH_REQUEST'
});
export const fetchAllCustomersCashSuccess = (data) => ({
  type: 'FETCH_ALL_CUSTOMERS_CASH_SUCCESS',
  payload: data
});
export const fetchAllCustomersCashFailure = (error) => ({
  type: 'FETCH_ALL_CUSTOMERS_CASH_FAILURE',
  payload: error
});
export const fetchAllCustomersRequest = () => ({
  type: 'FETCH_ALL_CUSTOMERS_REQUEST'
});
export const fetchAllCustomersSuccess = (data) => ({
  type: 'FETCH_ALL_CUSTOMERS_SUCCESS',
  payload: data
});
export const fetchAllCustomersFailure = (error) => ({
  type: 'FETCH_ALL_CUSTOMERS_FAILURE',
  payload: error
});
export const createCustomerRequest = (data) => ({
  type: 'CREATE_CUSTOMER_REQUEST',
  payload: data
});
export const createCustomerSuccess = (data) => ({
  type: 'CREATE_CUSTOMER_SUCCESS',
  payload: data
});
export const createCustomerFailure = (error) => ({
  type: 'CREATE_CUSTOMER_FAILURE',
  payload: error
});

// ################################################################ DELIVERY CHALLAN ################################################################################
export const createDeliveryChallanRequest = (data) => ({
  type: 'CREATE_DELIVERY_CHALLAN_REQUEST',
  payload: data
});
export const createDeliveryChallanSuccess = (data) => ({
  type: 'CREATE_DELIVERY_CHALLAN_SUCCESS',
  payload: data
});
export const createDeliveryChallanFailure = (error) => ({
  type: 'CREATE_DELIVERY_CHALLAN_FAILURE',
  payload: error
});
export const getAllDeliverychallanRequest = (data) => ({
  type: 'FETCH_ALL_DELIVERYCHALLAN_REQUEST',
  payload: data
});
export const getAllDeliverychallanSuccess = (data) => ({
  type: 'FETCH_ALL_DELIVERYCHALLAN_SUCCESS',
  payload: data
});
export const getAllDeliverychallanFailure = (error) => ({
  type: 'FETCH_ALL_DELIVERYCHALLAN_FAILURE',
  payload: error
});
export const viewDeliverychallanRequest = (data) => ({
  type: 'VIEW_DELIVERYCHALLAN_REQUEST',
  payload: data
});
export const viewDeliverychallanSuccess = (data) => ({
  type: 'VIEW_DELIVERYCHALLAN_SUCCESS',
  payload: data
});
export const viewDeliverychallanFailure = (error) => ({
  type: 'VIEW_DELIVERYCHALLAN_FAILURE',
  payload: error
});
export const updateDileverychallanRequest = (data) => ({
  type: 'UPDATE_DILEVERYCHALLAN_REQUEST',
  payload: data
});
export const updateDileverychallanSuccess = (data) => ({
  type: 'UPDATE_DILEVERYCHALLAN_SUCCESS',
  payload: data
});
export const updateDileverychallanFailure = (error) => ({
  type: 'UPDATE_DILEVERYCHALLAN_FAILURE',
  payload: error
});
export const deleteDileverychallanItemRequest = (data) => ({
  type: 'DELETE_DILEVERYCHALLAN_ITEM_REQUEST',
  payload: data
});
export const deleteDileverychallanItemSuccess = (data) => ({
  type: 'DELETE_DILEVERYCHALLAN_ITEM_SUCCESS',
  payload: data
});
export const deleteDileverychallanItemFailure = (error) => ({
  type: 'DELETE_DILEVERYCHALLAN_ITEM_FAILURE',
  payload: error
});

// ################################################################ PAYMENT ##########################################################################################
export const createPaymentCashRequest = (data) => ({
  type: 'CREATE_PAYMENT_CASH_REQUEST',
  payload: data
});
export const createPaymentCashSuccess = (data) => ({
  type: 'CREATE_PAYMENT_CASH_SUCCESS',
  payload: data
});
export const createPaymentCashFailure = (error) => ({
  type: 'CREATE_PAYMENT_CASH_FAILURE',
  payload: error
});
export const getallPaymentCashRequest = (data) => ({
  type: 'GET_ALL_PAYMENT_CASH_REQUEST',
  payload: data
});
export const getallPaymentCashSuccess = (data) => ({
  type: 'GET_ALL_PAYMENT_CASH_SUCCESS',
  payload: data
});
export const getallPaymentCashFailure = (error) => ({
  type: 'GET_ALL_PAYMENT_CASH_FAILURE',
  payload: error
});
export const viewPaymentCashRequest = (data) => ({
  type: 'VIEW_PAYMENT_CASH_REQUEST',
  payload: data
});
export const viewPaymentCashSuccess = (data) => ({
  type: 'VIEW_PAYMENT_CASH_SUCCESS',
  payload: data
});
export const viewPaymentCashFailure = (error) => ({
  type: 'VIEW_PAYMENT_CASH_FAILURE',
  payload: error
});
export const updatePaymentCashRequest = (data) => ({
  type: 'UPDATE_PAYMENT_CASH_REQUEST',
  payload: data
});
export const updatePaymentCashSuccess = (data) => ({
  type: 'UPDATE_PAYMENT_CASH_SUCCESS',
  payload: data
});
export const updatePaymentCashFailure = (error) => ({
  type: 'UPDATE_PAYMENT_CASH_FAILURE',
  payload: error
});
export const deletePaymentCashRequest = (data) => ({
  type: 'DELETE_PAYMENT_CASH_REQUEST',
  payload: data
});
export const deletePaymentCashSuccess = (data) => ({
  type: 'DELETE_PAYMENT_CASH_SUCCESS',
  payload: data
});
export const deletePaymentCashFailure = (error) => ({
  type: 'DELETE_PAYMENT_CASH_FAILURE',
  payload: error
});

// ##################################################################################### SALES INVOICE ################################################################

export const createSalesinvoiceRequest = (data) => ({
  type: 'CREATE_SALES_INVOICE_REQUEST',
  payload: data
});
export const createSalesinvoiceSuccess = (data) => ({
  type: 'CREATE_SALES_INVOICE_SUCCESS',
  payload: data
});
export const createSalesinvoiceFailure = (error) => ({
  type: 'CREATE_SALES_INVOICE_FAILURE',
  payload: error
});
export const deleteSalesinvoiceRequest = (data) => ({
  type: 'DELETE_SALES_INVOICE_REQUEST',
  payload: data
});
export const deleteSalesinvoiceSuccess = (data) => ({
  type: 'DELETE_SALES_INVOICE_SUCCESS',
  payload: data
});
export const deleteSalesinvoiceFailure = (error) => ({
  type: 'DELETE_SALES_INVOICE_FAILURE',
  payload: error
});
export const updateSalesinvoiceRequest = (data) => ({
  type: 'UPDATE_SALESINVOICE_REQUEST',
  payload: data
});
export const updateSalesinvoiceSuccess = (data) => ({
  type: 'UPDATE_SALESINVOICE_SUCCESS',
  payload: data
});
export const updateSalesinvoiceFailure = (error) => ({
  type: 'UPDATE_SALESINVOICE_FAILURE',
  payload: error
});
export const getAllSalesinvoiceRequest = (data) => ({
  type: 'FETCH_ALL_SALESINVOICE_REQUEST',
  payload: data
});
export const getAllSalesinvoiceSuccess = (data) => ({
  type: 'FETCH_ALL_SALESINVOICE_SUCCESS',
  payload: data
});
export const getAllSalesinvoiceFailure = (error) => ({
  type: 'FETCH_ALL_SALESINVOICE_FAILURE',
  payload: error
});
export const viewSalesinvoiceRequest = (data) => ({
  type: 'VIEW_SALESINVOICE_REQUEST',
  payload: data
});
export const viewSalesinvoiceSuccess = (data) => ({
  type: 'VIEW_SALESINVOICE_SUCCESS',
  payload: data
});
export const viewSalesinvoiceFailure = (error) => ({
  type: 'VIEW_SALESINVOICE_FAILURE',
  payload: error
});

// ##################################################################################### SALES INVOICE CASH ################################################################

export const createSalesinvoicecashRequest = (data) => ({
  type: 'CREATE_SALES_INVOICE_CASH_REQUEST',
  payload: data
});
export const createSalesinvoicecashSuccess = (data) => ({
  type: 'CREATE_SALES_INVOICE_CASH_SUCCESS',
  payload: data
});
export const createSalesinvoicecashFailure = (error) => ({
  type: 'CREATE_SALES_INVOICE_CASH_FAILURE',
  payload: error
});
export const deleteSalesinvoicecashRequest = (data) => ({
  type: 'DELETE_SALES_INVOICE_CASH_REQUEST',
  payload: data
});
export const deleteSalesinvoicecashSuccess = (data) => ({
  type: 'DELETE_SALES_INVOICE_CASH_SUCCESS',
  payload: data
});
export const deleteSalesinvoicecashFailure = (error) => ({
  type: 'DELETE_SALES_INVOICE_CASH_FAILURE',
  payload: error
});
export const updateSalesinvoicecashRequest = (data) => ({
  type: 'UPDATE_SALES_INVOICE_CASH_REQUEST',
  payload: data
});
export const updateSalesinvoicecashSuccess = (data) => ({
  type: 'UPDATE_SALES_INVOICE_CASH_SUCCESS',
  payload: data
});
export const updateSalesinvoicecashFailure = (error) => ({
  type: 'UPDATE_SALES_INVOICE_CASH_FAILURE',
  payload: error
});
export const getAllSalesinvoicecashRequest = (data) => ({
  type: 'FETCH_ALL_SALES_INVOICE_CASH_REQUEST',
  payload: data
});
export const getAllSalesinvoicecashSuccess = (data) => ({
  type: 'FETCH_ALL_SALES_INVOICE_CASH_SUCCESS',
  payload: data
});
export const getAllSalesinvoicecashFailure = (error) => ({
  type: 'FETCH_ALL_SALES_INVOICE_CASH_FAILURE',
  payload: error
});
export const viewSalesinvoicecashRequest = (data) => ({
  type: 'VIEW_SALES_INVOICE_CASH_REQUEST',
  payload: data
});
export const viewSalesinvoicecashSuccess = (data) => ({
  type: 'VIEW_SALES_INVOICE_CASH_SUCCESS',
  payload: data
});
export const viewSalesinvoicecashFailure = (error) => ({
  type: 'VIEW_SALES_INVOICE_CASH_FAILURE',
  payload: error
});

// ############################################################################# PURCHASE ############################################################################
export const createPurchaseRequest = (data) => ({
  type: 'CREATE_PURCHASE_REQUEST',
  payload: data
});
export const createPrchaseSuccess = (data) => ({
  type: 'CREATE_PURCHASE_SUCCESS',
  payload: data
});
export const createPurchaseFailure = (error) => ({
  type: 'CREATE_PURCHASE_FAILURE',
  payload: error
});
export const createPurchaseItemRequest = (data) => ({
  type: 'CREATE_PURCHASE_ITEM_REQUEST',
  payload: data
});
export const createPrchaseItemSuccess = (data) => ({
  type: 'CREATE_PURCHASE_ITEM_SUCCESS',
  payload: data
});
export const createPurchaseItemFailure = (error) => ({
  type: 'CREATE_PURCHASE_ITEM_FAILURE',
  payload: error
});
export const fetchAllPurchaseRequest = () => ({
  type: 'FETCH_ALL_PURCHASE_REQUEST'
});
export const fetchAllPurchaseSuccess = (data) => ({
  type: 'FETCH_ALL_PURCHASE_SUCCESS',
  payload: data
});
export const fetchAllPurchaseFailure = (error) => ({
  type: 'FETCH_ALL_PURCHASE_FAILURE',
  payload: error
});
export const viewPurchaseRequest = (data) => ({
  type: 'VIEW_PURCHASE_REQUEST',
  payload: data
});
export const viewPurchaseSuccess = (data) => ({
  type: 'VIEW_PURCHASE_SUCCESS',
  payload: data
});
export const viewPurchaseFailure = (error) => ({
  type: 'VIEW_PURCHASE_FAILURE',
  payload: error
});
export const updatePurchaseRequst = (data) => ({
  type: 'UPDATE_PURCHASE_REQUEST',
  payload: data
});
export const updatePurchasesuccess = (data) => ({
  type: 'UPDATE_PURCHASE_SUCCESS',
  payload: data
});
export const updatePurchasefailure = (error) => ({
  type: 'UPDATE_PURCHASE_FAILURE',
  payload: error
});
export const updatePurchaseItemRequst = (data) => ({
  type: 'UPDATE_PURCHASE_ITEM_REQUEST',
  payload: data
});
export const updatePurchaseItemsuccess = (data) => ({
  type: 'UPDATE_PURCHASE_ITEM_SUCCESS',
  payload: data
});
export const updatePurchaseItemfailure = (error) => ({
  type: 'UPDATE_PURCHASE_ITEM_FAILURE',
  payload: error
});
export const deletePurchaseItemRequest = (data) => ({
  type: 'DELETE_PURCHASE_ITEM_REQUEST',
  payload: data
});
export const deletePurchaseItemSuccess = (data) => ({
  type: 'DELETE_PURCHASE_ITEM_SUCCESS',
  payload: data
});
export const deletePurchaseItemFailure = (error) => ({
  type: 'DELETE_PURCHASE_ITEM_FAILURE',
  payload: error
});

// ######################################################################## PURCHASE INVOICE ####################################################################
export const createPurchaseinvoiceRequest = (data) => ({
  type: 'CREATE_PURCHASE_INVOICE_REQUEST',
  payload: data
});
export const createPurchaseinvoiceSuccess = (data) => ({
  type: 'CREATE_PURCHASE_INVOICE_SUCCESS',
  payload: data
});
export const createPurchaseinvoiceFailure = (error) => ({
  type: 'CREATE_PURCHASE_INVOICE_FAILURE',
  payload: error
});
export const updatePurchaseinvoiceRequest = (data) => ({
  type: 'UPDATE_PURCHASE_INVOICE_REQUEST',
  payload: data
});
export const updatePurchaseinvoiceSuccess = (data) => ({
  type: 'UPDATE_PURCHASE_INVOICE_SUCCESS',
  payload: data
});
export const updatePurchaseinvoiceFailure = (error) => ({
  type: 'UPDATE_PURCHASE_INVOICE_FAILURE',
  payload: error
});
export const getAllPurchaseinvoiceRequest = (data) => ({
  type: 'FETCH_ALL_PURCHASE_INVOICE_REQUEST',
  payload: data
});
export const getAllPurchaseinvoiceSuccess = (data) => ({
  type: 'FETCH_ALL_PURCHASE_INVOICE_SUCCESS',
  payload: data
});
export const getAllPurchaseinvoiceFailure = (error) => ({
  type: 'FETCH_ALL_PURCHASE_INVOICE_FAILURE',
  payload: error
});
export const viewPurchaseinvoiceRequest = (data) => ({
  type: 'VIEW_PURCHASE_INVOICE_REQUEST',
  payload: data
});
export const viewPurchaseinvoiceSuccess = (data) => ({
  type: 'VIEW_PURCHASE_INVOICE_SUCCESS',
  payload: data
});
export const viewPurchaseinvoiceFailure = (error) => ({
  type: 'VIEW_PURCHASE_INVOICE_FAILURE',
  payload: error
});
export const deletePurchaseinvoiceRequest = (data) => ({
  type: 'DELETE_PURCHASE_INVOICE_REQUEST',
  payload: data
});
export const deletePurchaseinvoiceSuccess = (data) => ({
  type: 'DELETE_PURCHASE_INVOICE_SUCCESS',
  payload: data
});
export const deletePurchaseinvoiceFailure = (error) => ({
  type: 'DELETE_PURCHASE_INVOICE_FAILURE',
  payload: error
});

// ######################################################################## PURCHASE BILL CASH ####################################################################
export const createPurchaseinvoiceCashRequest = (data) => ({
  type: 'CREATE_PURCHASE_INVOICE_CASH_REQUEST',
  payload: data
});
export const createPurchaseinvoiceCashSuccess = (data) => ({
  type: 'CREATE_PURCHASE_INVOICE_CASH_SUCCESS',
  payload: data
});
export const createPurchaseinvoiceCashFailure = (error) => ({
  type: 'CREATE_PURCHASE_INVOICE_CASH_FAILURE',
  payload: error
});
export const updatePurchaseinvoiceCashRequest = (data) => ({
  type: 'UPDATE_PURCHASE_INVOICE_CASH_REQUEST',
  payload: data
});
export const updatePurchaseinvoiceCashSuccess = (data) => ({
  type: 'UPDATE_PURCHASE_INVOICE_CASH_SUCCESS',
  payload: data
});
export const updatePurchaseinvoiceCashFailure = (error) => ({
  type: 'UPDATE_PURCHASE_INVOICE_CASH_FAILURE',
  payload: error
});
export const getAllPurchaseinvoiceCashRequest = (data) => ({
  type: 'FETCH_ALL_PURCHASE_INVOICE_CASH_REQUEST',
  payload: data
});
export const getAllPurchaseinvoiceCashSuccess = (data) => ({
  type: 'FETCH_ALL_PURCHASE_INVOICE_CASH_SUCCESS',
  payload: data
});
export const getAllPurchaseinvoiceCashFailure = (error) => ({
  type: 'FETCH_ALL_PURCHASE_INVOICE_CASH_FAILURE',
  payload: error
});
export const viewPurchaseinvoiceCashRequest = (data) => ({
  type: 'VIEW_PURCHASE_INVOICE_CASH_REQUEST',
  payload: data
});
export const viewPurchaseinvoiceCashSuccess = (data) => ({
  type: 'VIEW_PURCHASE_INVOICE_CASH_SUCCESS',
  payload: data
});
export const viewPurchaseinvoiceCashFailure = (error) => ({
  type: 'VIEW_PURCHASE_INVOICE_CASH_FAILURE',
  payload: error
});
export const deletePurchaseinvoiceCashRequest = (data) => ({
  type: 'DELETE_PURCHASE_INVOICE_CASH_REQUEST',
  payload: data
});
export const deletePurchaseinvoiceCashSuccess = (data) => ({
  type: 'DELETE_PURCHASE_INVOICE_CASH_SUCCESS',
  payload: data
});
export const deletePurchaseinvoiceCashFailure = (error) => ({
  type: 'DELETE_PURCHASE_INVOICE_CASH_FAILURE',
  payload: error
});

// ############################################################################# PRODUCT ##########################################################################
export const createProductRequest = (data) => ({
  type: 'CREATE_PRODUCT_REQUEST',
  payload: data
});
export const createProductSuccess = (data) => ({
  type: 'CREATE_PRODUCT_SUCCESS',
  payload: data
});
export const createProductFailure = (error) => ({
  type: 'CREATE_PRODUCT_FAILURE',
  payload: error
});
export const fetchAllProdutsRequest = () => ({
  type: 'FETCH_ALL_PRODUCTS_REQUEST'
});
export const fetchAllProdutsSuccess = (data) => ({
  type: 'FETCH_ALL_PRODUCTS_SUCCESS',
  payload: data
});
export const fetchAllProdutrsFailure = (error) => ({
  type: 'FETCH_ALL_PRODUCTS_FAILURE',
  payload: error
});
export const fetchAllProdutscashRequest = () => ({
  type: 'FETCH_ALL_PRODUCTS_CASH_REQUEST'
});
export const fetchAllProdutscashSuccess = (data) => ({
  type: 'FETCH_ALL_PRODUCTS_CASH_SUCCESS',
  payload: data
});
export const fetchAllProdutrscashFailure = (error) => ({
  type: 'FETCH_ALL_PRODUCTS_FAILURE',
  payload: error
});

// ################################################################ EXPENSE #############################################################################

export const createExpenseRequest = (data) => ({
  type: 'CREATE_EXPENCE_REQUEST',
  payload: data
});
export const createExpenseSuccess = (data) => ({
  type: 'CREATE_EXPENSE_SUCCESS',
  payload: data
});
export const createExpenseFailure = (error) => ({
  type: 'CREATE_EXPENSE_FAILURE',
  payload: error
});
export const createExpenseItemRequest = (data) => ({
  type: 'CREATE_EXPENSE_ITEM_REQUEST',
  payload: data
});
export const createExpenseItemSuccess = (data) => ({
  type: 'CREATE_EXPENSE_ITEM_SUCCESS',
  payload: data
});
export const createExpenseItemFailure = (error) => ({
  type: 'CREATE_EXPENSE_ITEM_FAILURE',
  payload: error
});
export const getAllExpenseRequest = (data) => ({
  type: 'FETCH_ALL_EXPENSE_REQUEST',
  payload: data
});
export const getAllExpenseSuccess = (data) => ({
  type: 'FETCH_ALL_EXPENSE_SUCCESS',
  payload: data
});
export const getAllExpenseFailure = (error) => ({
  type: 'FETCH_ALL_EXPENSE_FAILURE',
  payload: error
});
export const viewExpenseRequest = (data) => ({
  type: 'VIEW_EXPENSE_REQUEST',
  payload: data
});
export const viewExpenseSuccess = (data) => ({
  type: 'VIEW_EXPENSE_SUCCESS',
  payload: data
});
export const viewExpenseFailure = (error) => ({
  type: 'VIEW_EXPENSE_FAILURE',
  payload: error
});
export const deleteExpenseItemRequest = (data) => ({
  type: 'DELETE_EXPENSE_ITEM_REQUEST',
  payload: data
});
export const deleteExpenseItemSuccess = (data) => ({
  type: 'DELETE_EXPENSE_ITEM_SUCCESS',
  payload: data
});
export const deleteExpenseItemFailure = (error) => ({
  type: 'DELETE_EXPENSE_ITEM_FAILURE',
  payload: error
});
export const updateExpenseRequest = (data) => ({
  type: 'UPDATE_EXPENCE_REQUEST',
  payload: data
});
export const updateExpenseSuccess = (data) => ({
  type: 'UPDATE_EXPENSE_SUCCESS',
  payload: data
});
export const updateExpenseFailure = (error) => ({
  type: 'UPDATE_EXPENCE_FAILURE',
  payload: error
});
export const updateExpenseItemRequest = (data) => ({
  type: 'UPDATE_EXPENSE_ITEM_REQUEST',
  payload: data
});
export const updateExpenseItemSuccess = (data) => ({
  type: 'UPDATE_EXPENSE_ITEM_SUCCESS',
  payload: data
});
export const updateExpenseItemFailure = (error) => ({
  type: 'UPDATE_EXPENSE_ITEM_FAILURE',
  payload: error
});

// ############################################################## PURCHASE RETURN ###########################################################################
export const getAllPurchasereturnRequest = (data) => ({
  type: 'FETCH_ALL_PURCHASERETURN_REQUEST',
  payload: data
});
export const getAllPurchasereturnSuccess = (data) => ({
  type: 'FETCH_ALL_PURCHASERETURN_SUCCESS',
  payload: data
});
export const getAllPurchasereturnFailure = (error) => ({
  type: 'FETCH_ALL_PURCHASERETURN_FAILURE',
  payload: error
});
export const viewPurchasereturnRequest = (data) => ({
  type: 'VIEW_PURCHASERETURN_REQUEST',
  payload: data
});
export const viewPurchasereturnSuccess = (data) => ({
  type: 'VIEW_PURCHASERETURN_SUCCESS',
  payload: data
});
export const viewPurchasereturnFailure = (error) => ({
  type: 'VIEW_PURCHASERETURN_FAILURE',
  payload: error
});
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ PERMISSIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const getAllPermissionsRequest = (data) => ({
  type: 'FETCH_ALL_PERMISSIONS_REQUEST',
  payload: data
});
export const getAllPermissionsSuccess = (data) => ({
  type: 'FETCH_ALL_PERMISSIONS_SUCCESS',
  payload: data
});
export const getAllPermissionsFailure = (error) => ({
  type: 'FETCH_ALL_PERMISSIONS_FAILURE',
  payload: error
});
export const updatePermissionsRequest = (data) => ({
  type: 'UPDATE_PERMISSIONS_REQUEST',
  payload: data
});
export const updatePermissionsSuccess = (data) => ({
  type: 'UPDATE_PERMISSIONS_SUCCESS',
  payload: data
});
export const updatePermissionsFailure = (error) => ({
  type: 'UPDATE_PERMISSIONS_FAILURE',
  payload: error
});
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ USER ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const createUserRequest = (data) => ({
  type: 'CREATE_USER_REQUEST',
  payload: data
});
export const createUserSuccess = (data) => ({
  type: 'CREATE_USER_SUCCESS',
  payload: data
});
export const createUserFailure = (error) => ({
  type: 'CREATE_USER_FAILURE',
  payload: error
});
export const getallUserRequest = (data) => ({
  type: 'GET_ALL_USER_REQUEST',
  payload: data
});
export const getallUserSuccess = (data) => ({
  type: 'GET_ALL_USER_SUCCESS',
  payload: data
});
export const getallUserFailure = (error) => ({
  type: 'GET_ALL_USER_FAILURE',
  payload: error
});
export const viewUserRequest = (data) => ({
  type: 'VIEW_USER_REQUEST',
  payload: data
});
export const viewUserSuccess = (data) => ({
  type: 'VIEW_USER_SUCCESS',
  payload: data
});
export const viewUserFailure = (error) => ({
  type: 'VIEW_USER_FAILURE',
  payload: error
});
export const UpdateUserRequest = (data) => ({
  type: 'UPDATE_USER_REQUEST',
  payload: data
});
export const UpdateUserSuccess = (data) => ({
  type: 'UPDATE_USER_SUCCESS',
  payload: data
});
export const UpdateUserFailure = (error) => ({
  type: 'UPDATE_USER_FAILURE',
  payload: error
});
export const deleteUserRequest = (data) => ({
  type: 'DELETE_USER_REQUEST',
  payload: data
});
export const deleteUserSuccess = (data) => ({
  type: 'DELETE_USER_SUCCESS',
  payload: data
});
export const deleteUserFailure = (error) => ({
  type: 'DELETE_USER_FAILURE',
  payload: error
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ VENDOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const createVendorRequest = (data) => ({
  type: 'CREATE_VENDOR_REQUEST',
  payload: data
});
export const createVendorSuccess = (data) => ({
  type: 'CREATE_VENDOR_SUCCESS',
  payload: data
});
export const createVendorFailure = (error) => ({
  type: 'CREATE_VENDOR_FAILURE',
  payload: error
});
export const fetchAllVendorsRequest = () => ({
  type: 'FETCH_ALL_VENDORS_REQUEST'
});
export const fetchAllVendorsSuccess = (data) => ({
  type: 'FETCH_ALL_VENDORS_SUCCESS',
  payload: data
});
export const fetchAllVendorsFailure = (error) => ({
  type: 'FETCH_ALL_VENDORS_FAILURE',
  payload: error
});
export const fetchAllVendorsCashRequest = () => ({
  type: 'FETCH_ALL_VENDORS_CASH_REQUEST'
});
export const fetchAllVendorsCashSuccess = (data) => ({
  type: 'FETCH_ALL_VENDORS_CASH_SUCCESS',
  payload: data
});
export const fetchAllVendorsCashFailure = (error) => ({
  type: 'FETCH_ALL_VENDORS_CASH_FAILURE',
  payload: error
});

// +++++++++++++++++++++++++++++++++++++++++++++++ COMPANY ++++++++++++++++++++++++++++++++++++
export const CreateCompanyRequest = () => ({
  type: 'CREATE_COMPANY_REQUEST'
});
export const CreateCompanySuccess = (data) => ({
  type: 'CREATE_COMPANY_SUCCESS',
  payload: data
});
export const CreateCompanyFailure = (error) => ({
  type: 'CREATE_COMPANY_FAILURE',
  payload: error
});
export const ViewCompanyRequest = () => ({
  type: 'VIEW_COMPANY_REQUEST'
});
export const ViewCompanySuccess = (data) => ({
  type: 'VIEW_COMPANY_SUCCESS',
  payload: data
});
export const ViewCompanyFailure = (error) => ({
  type: 'VIEW_COMPANY_FAILURE',
  payload: error
});
export const UpdateCompanyRequest = () => ({
  type: 'UPDATE_COMPANY_REQUEST'
});
export const UpdateCompanySuccess = (data) => ({
  type: 'UPDATE_COMPANY_SUCCESS',
  payload: data
});
export const UpdateCompanyFailure = (error) => ({
  type: 'UPDATE_COMPANY_FAILURE',
  payload: error
});
export const DeleteCompanyRequest = () => ({
  type: 'DELETE_COMPANY_REQUEST'
});
export const DeleteCompanySuccess = (data) => ({
  type: 'DELETE_COMPANY_SUCCESS',
  payload: data
});
export const DeleteCompanyFailure = (error) => ({
  type: 'DELETE_COMPANY_FAILURE',
  payload: error
});
export const fetchAllCompanyRequest = () => ({
  type: 'FETCH_ALL_COMPANY_REQUEST'
});
export const fetchAllCompanySuccess = (data) => ({
  type: 'FETCH_ALL_COMPANY_SUCCESS',
  payload: data
});
export const fetchAllCompanyFailure = (error) => ({
  type: 'FETCH_ALL_COMPANY_FAILURE',
  payload: error
});
export const setDefaultCompanyRequest = () => ({
  type: 'SET_DEFAULT_COMPANY_REQUEST'
});
export const setDefaultCompanySuccess = (data) => ({
  type: 'SET_DEFAULT_COMPANY_SUCCESS',
  payload: data
});
export const setDefaultCompanyFailure = (error) => ({
  type: 'SET_DEFAULT_COMPANY_FAILURE',
  payload: error
});

// +++++++++++++++++++++++++++++++++++++++++++++++ COMPANY BANK ++++++++++++++++++++++++++++++++++++
export const CreateCompanyBankRequest = () => ({
  type: 'CREATE_COMPANY_BANK_REQUEST'
});
export const CreateCompanyBankSuccess = (data) => ({
  type: 'CREATE_COMPANY_BANK_SUCCESS',
  payload: data
});
export const CreateCompanyBankFailure = (error) => ({
  type: 'CREATE_COMPANY_BANK_FAILURE',
  payload: error
});
export const ViewCompanyBankRequest = () => ({
  type: 'VIEW_COMPANY_BANK_REQUEST'
});
export const ViewCompanyBankSuccess = (data) => ({
  type: 'VIEW_COMPANY_BANK_SUCCESS',
  payload: data
});
export const ViewCompanyBankFailure = (error) => ({
  type: 'VIEW_COMPANY_BANK_FAILURE',
  payload: error
});
export const UpdateCompanyBankRequest = () => ({
  type: 'UPDATE_COMPANY_BANK_REQUEST'
});
export const UpdateCompanyBankSuccess = (data) => ({
  type: 'UPDATE_COMPANY_BANK_SUCCESS',
  payload: data
});
export const UpdateCompanyBankFailure = (error) => ({
  type: 'UPDATE_COMPANY_BANK_FAILURE',
  payload: error
});
export const DeleteCompanyBankRequest = () => ({
  type: 'DELETE_COMPANY_BANK_REQUEST'
});
export const DeleteCompanyBankSuccess = (data) => ({
  type: 'DELETE_COMPANY_BANK_SUCCESS',
  payload: data
});
export const DeleteCompanyBankFailure = (error) => ({
  type: 'DELETE_COMPANY_BANK_FAILURE',
  payload: error
});
export const fetchAllCompanyBankRequest = () => ({
  type: 'FETCH_ALL_COMPANY_BANK_REQUEST'
});
export const fetchAllCompanyBankSuccess = (data) => ({
  type: 'FETCH_ALL_COMPANY_BANK_SUCCESS',
  payload: data
});
export const fetchAllCompanyBankFailure = (error) => ({
  type: 'FETCH_ALL_COMPANY_BANK_FAILURE',
  payload: error
});

// ##################################################################################### DEBIT NOTE ################################################################

export const createDebitnoteRequest = (data) => ({
  type: 'CREATE_DEBIT_NOTE_REQUEST',
  payload: data
});
export const createDebitnoteSuccess = (data) => ({
  type: 'CREATE_DEBIT_NOTE_SUCCESS',
  payload: data
});
export const createDebitnoteFailure = (error) => ({
  type: 'CREATE_DEBIT_NOTE_FAILURE',
  payload: error
});
export const deleteDebitnoteRequest = (data) => ({
  type: 'DELETE_DEBIT_NOTE_REQUEST',
  payload: data
});
export const deleteDebitnoteSuccess = (data) => ({
  type: 'DELETE_DEBIT_NOTE_SUCCESS',
  payload: data
});
export const deleteDebitnoteFailure = (error) => ({
  type: 'DELETE_DEBIT_NOTE_FAILURE',
  payload: error
});
export const updateDebitnoteRequest = (data) => ({
  type: 'UPDATE_DEBIT_NOTE_REQUEST',
  payload: data
});
export const updateDebitnoteSuccess = (data) => ({
  type: 'UPDATE_DEBIT_NOTE_SUCCESS',
  payload: data
});
export const updateDebitnoteFailure = (error) => ({
  type: 'UPDATE_DEBIT_NOTE_FAILURE',
  payload: error
});
export const getAllDebitnoteRequest = (data) => ({
  type: 'FETCH_ALL_DEBITNOTE_REQUEST',
  payload: data
});
export const getAllDebitnoteSuccess = (data) => ({
  type: 'FETCH_ALL_DEBITNOTE_SUCCESS',
  payload: data
});
export const getAllDebitnoteFailure = (error) => ({
  type: 'FETCH_ALL_DEBITNOTE_FAILURE',
  payload: error
});
export const viewDebitnoteRequest = (data) => ({
  type: 'VIEW_DEBIT_NOTE_REQUEST',
  payload: data
});
export const viewDebitnoteSuccess = (data) => ({
  type: 'VIEW_DEBIT_NOTE_SUCCESS',
  payload: data
});
export const viewDebitnoteFailure = (error) => ({
  type: 'VIEW_DEBIT_NOTE_FAILURE',
  payload: error
});

// ##################################################################################### CREDIT NOTE ################################################################

export const createCreditnoteRequest = (data) => ({
  type: 'CREATE_CREDIT_NOTE_REQUEST',
  payload: data
});
export const createCreditnoteSuccess = (data) => ({
  type: 'CREATE_CREDIT_NOTE_SUCCESS',
  payload: data
});
export const createCreditnoteFailure = (error) => ({
  type: 'CREATE_CREDIT_NOTE_FAILURE',
  payload: error
});
export const deleteCreditnoteRequest = (data) => ({
  type: 'DELETE_CREDIT_NOTE_REQUEST',
  payload: data
});
export const deleteCreditnoteSuccess = (data) => ({
  type: 'DELETE_CREDIT_NOTE_SUCCESS',
  payload: data
});
export const deleteCreditnoteFailure = (error) => ({
  type: 'DELETE_CREDIT_NOTE_FAILURE',
  payload: error
});
export const updateCreditnoteRequest = (data) => ({
  type: 'UPDATE_CREDIT_NOTE_REQUEST',
  payload: data
});
export const updateCreditnoteSuccess = (data) => ({
  type: 'UPDATE_CREDIT_NOTE_SUCCESS',
  payload: data
});
export const updateCreditnoteFailure = (error) => ({
  type: 'UPDATE_CREDIT_NOTE_FAILURE',
  payload: error
});
export const getAllCreditnoteRequest = (data) => ({
  type: 'FETCH_ALL_CREDITNOTE_REQUEST',
  payload: data
});
export const getAllCreditnoteSuccess = (data) => ({
  type: 'FETCH_ALL_CREDITNOTE_SUCCESS',
  payload: data
});
export const getAllCreditnoteFailure = (error) => ({
  type: 'FETCH_ALL_CREDITNOTE_FAILURE',
  payload: error
});
export const viewCreditnoteRequest = (data) => ({
  type: 'VIEW_CREDIT_NOTE_REQUEST',
  payload: data
});
export const viewCreditnoteSuccess = (data) => ({
  type: 'VIEW_CREDIT_NOTE_SUCCESS',
  payload: data
});
export const viewCreditnoteFailure = (error) => ({
  type: 'VIEW_CREDIT_NOTE_FAILURE',
  payload: error
});
// ##################################################################################### PAYMENT RECIEVE CASH ################################################################

export const createRecieveCashRequest = (data) => ({
  type: 'CREATE_RECIEVE_CASH_REQUEST',
  payload: data
});
export const createRecieveCashSuccess = (data) => ({
  type: 'CREATE_RECIEVE_CASH_SUCCESS',
  payload: data
});
export const createRecieveCashFailure = (error) => ({
  type: 'CREATE_RECIEVE_CASH_FAILURE',
  payload: error
});
export const getAllRecieveCashRequest = (data) => ({
  type: 'GET_ALL_RECIEVE_CASH_REQUEST',
  payload: data
});
export const getAllRecieveCashSuccess = (data) => ({
  type: 'GET_ALL_RECIEVE_CASH_SUCCESS',
  payload: data
});
export const getAllRecieveCashFailure = (error) => ({
  type: 'GET_ALL_RECIEVE_CASH_FAILURE',
  payload: error
});
export const viewRecieveCashRequest = (data) => ({
  type: 'VIEW_RECIEVE_CASH_REQUEST',
  payload: data
});
export const viewRecieveCashSuccess = (data) => ({
  type: 'VIEW_RECIEVE_CASH_SUCCESS',
  payload: data
});
export const viewRecieveCashFailure = (error) => ({
  type: 'VIEW_RECIEVE_CASH_FAILURE',
  payload: error
});
export const updateRecieveCashRequest = (data) => ({
  type: 'UPDATE_RECIEVE_CASH_REQUEST',
  payload: data
});
export const updateRecieveCashSuccess = (data) => ({
  type: 'UPDATE_RECIEVE_CASH_SUCCESS',
  payload: data
});
export const updateRecieveCashFailure = (error) => ({
  type: 'UPDATE_RECIEVE_CASH_FAILURE',
  payload: error
});
export const deleteRecieveCashRequest = (data) => ({
  type: 'DELETE_RECIEVE_CASH_REQUEST',
  payload: data
});
export const deleteRecieveCashSuccess = (data) => ({
  type: 'DELETE_RECIEVE_CASH_SUCCESS',
  payload: data
});
export const deleteRecieveCashFailure = (error) => ({
  type: 'DELETE_RECIEVE_CASH_FAILURE',
  payload: error
});
//  ####################################################################### VENDOR LEDGER #####################################################
export const getAllvendorLedgerRequest = (data) => ({
  type: 'FETCH_ALL_VENDOR_LEDGER_REQUEST',
  payload: data
});
export const getAllvendorLedgerSuccess = (data) => ({
  type: 'FETCH_ALL_VENDOR_LEDGER_SUCCESS',
  payload: data
});
export const getAllvendorLedgerFailure = (error) => ({
  type: 'FETCH_ALL_VENDOR_LEDGER_FAILURE',
  payload: error
});
//  ####################################################################### CUSTOMER LEDGER #####################################################
export const getAllcustomerLedgerRequest = (data) => ({
  type: 'FETCH_ALL_CUSTOMER_LEDGER_REQUEST',
  payload: data
});
export const getAllcustomerLedgerSuccess = (data) => ({
  type: 'FETCH_ALL_CUSTOMER_LEDGER_SUCCESS',
  payload: data
});
export const getAllcustomerLedgerFailure = (error) => ({
  type: 'FETCH_ALL_CUSTOMER_LEDGER_FAILURE',
  payload: error
});

//  ####################################################################### CLAIM USER #####################################################
export const getAllclaimuserRequest = (data) => ({
  type: 'FETCH_ALL_CLAIM_USER_REQUEST',
  payload: data
});
export const getAllclaimuserSuccess = (data) => ({
  type: 'FETCH_ALL_CLAIM_USER_SUCCESS',
  payload: data
});
export const getAllclaimuserFailure = (error) => ({
  type: 'FETCH_ALL_CLAIM_USER_FAILURE',
  payload: error
});
export const createClaimCashRequest = (data) => ({
  type: 'CREATE_CLAIM_CASH_REQUEST',
  payload: data
});
export const createClaimCashSuccess = (data) => ({
  type: 'CREATE_CLAIM_CASH_SUCCESS',
  payload: data
});
export const createClaimCashFailure = (error) => ({
  type: 'CREATE_CLAIM_CASH_FAILURE',
  payload: error
});
export const viewClaimCashRequest = (data) => ({
  type: 'VIEW_CLAIM_CASH_REQUEST',
  payload: data
});
export const viewClaimCashSuccess = (data) => ({
  type: 'VIEW_CLAIM_CASH_SUCCESS',
  payload: data
});
export const viewClaimCashFailure = (error) => ({
  type: 'VIEW_CLAIM_CASH_FAILURE',
  payload: error
});
export const viewsingleClaimCashRequest = (data) => ({
  type: 'VIEW_CLAIM_CASH_REQUEST',
  payload: data
});
export const viewsingleClaimCashSuccess = (data) => ({
  type: 'VIEW_CLAIM_CASH_SUCCESS',
  payload: data
});
export const viewsingleClaimCashFailure = (error) => ({
  type: 'VIEW_CLAIM_CASH_FAILURE',
  payload: error
});
export const updateClaimCashRequest = (data) => ({
  type: 'UPDATE_CLAIM_CASH_REQUEST',
  payload: data
});
export const updateClaimCashSuccess = (data) => ({
  type: 'UPDATE_CLAIM_CASH_SUCCESS',
  payload: data
});
export const updateClaimCashFailure = (error) => ({
  type: 'UPDATE_CLAIM_CASH_FAILURE',
  payload: error
});
export const deleteClaimCashRequest = (data) => ({
  type: 'DELETE_CLAIM_CASH_REQUEST',
  payload: data
});
export const deleteClaimCashSuccess = (data) => ({
  type: 'DELETE_CLAIM_CASH_SUCCESS',
  payload: data
});
export const deleteClaimCashFailure = (error) => ({
  type: 'DELETE_CLAIM_CASH_FAILURE',
  payload: error
});
export const viewRecieveClaimCashRequest = (data) => ({
  type: 'VIEW_RECIEVE_CLAIM_CASH_REQUEST',
  payload: data
});
export const viewRecieveClaimCashSuccess = (data) => ({
  type: 'VIEW_RECIEVE_CLAIM_CASH_SUCCESS',
  payload: data
});
export const viewRecieveClaimCashFailure = (error) => ({
  type: 'VIEW_RECIEVE_CLAIM_CASH_FAILURE',
  payload: error
});

//  ####################################################################### CLAIM USER LEDGER #####################################################
export const fetchAllclaimcashledgerRequest = () => ({
  type: 'FETCH_ALL_USER_LEDGER_REQUEST'
});
export const fetchAllclaimcashledgerSuccess = (data) => ({
  type: 'FETCH_ALL_USER_LEDGER_SUCCESS',
  payload: data
});
export const fetchAllclaimcashledgerFailure = (error) => ({
  type: 'FETCH_ALL_USER_LEDGER_FAILURE',
  payload: error
});

//  ####################################################################### PAYMENT BANK #####################################################
export const createPaymentbankRequest = (data) => ({
  type: 'CREATE_PAYMENT_BANK_REQUEST',
  payload: data
});
export const createPaymentbankSuccess = (data) => ({
  type: 'CREATE_PAYMENT_BANK_SUCCESS',
  payload: data
});
export const createPaymentbankFailure = (error) => ({
  type: 'CREATE_PAYMENT_BANK_FAILURE',
  payload: error
});
export const ViewsinglepaymentbankRequest = (data) => ({
  type: 'VIEW_PAYMENT_BANK_REQUEST',
  payload: data
});
export const ViewsinglepaymentbankSuccess = (data) => ({
  type: 'VIEW_PAYMENT_BANK_SUCCESS',
  payload: data
});
export const ViewsinglepaymentbankFailure = (error) => ({
  type: 'VIEW_PAYMENT_BANK_FAILURE',
  payload: error
});
export const updatepaymentbankRequest = (data) => ({
  type: 'UPDATE_PAYMENT_BANK_REQUEST',
  payload: data
});
export const updatepaymentbankSuccess = (data) => ({
  type: 'UPDATE_PAYMENT_BANK_SUCCESS',
  payload: data
});
export const updatepaymentbankFailure = (error) => ({
  type: 'UPDATE_PAYMENT_BANK_FAILURE',
  payload: error
});
export const deletepaymentbankRequest = (data) => ({
  type: 'DELETE_PAYMENT_BANK_REQUEST',
  payload: data
});
export const deletepaymentbankSuccess = (data) => ({
  type: 'DELETE_PAYMENT_BANK_SUCCESS',
  payload: data
});
export const deletepaymentbankFailure = (error) => ({
  type: 'DELETE_PAYMENT_BANK_FAILURE',
  payload: error
});
export const fetchallpaymentbankRequest = (data) => ({
  type: 'FETCH_ALL_PAYMENT_BANK_REQUEST',
  payload: data
});
export const fetchallpaymentbankSuccess = (data) => ({
  type: 'FETCH_ALL_PAYMENT_BANK_SUCCESS',
  payload: data
});
export const fetchallpaymentbankFailure = (error) => ({
  type: 'FETCH_ALL_PAYMENT_BANK_FAILURE',
  payload: error
});
export const PaymentBankLedgerRequest = () => ({
  type: 'PAYMENT_BANK_LEDGER_REQUEST'
});
export const PaymentBankLedgerSuccess = (data) => ({
  type: 'PAYMENT_BANK_LEDGER_SUCCESS',
  payload: data
});
export const PaymentBankLedgerFailure = (error) => ({
  type: 'PAYMENT_BANK_LEDGER_FAILURE',
  payload: error
});

//  ####################################################################### PAYMENT BANK #####################################################
export const createPaymentRecievebankRequest = (data) => ({
  type: 'CREATE_PAYMENT_RECIEVE_BANK_REQUEST',
  payload: data
});
export const createPaymentRecievebankSuccess = (data) => ({
  type: 'CREATE_PAYMENT_RECIEVE_BANK_SUCCESS',
  payload: data
});
export const createPaymentRecievebankFailure = (error) => ({
  type: 'CREATE_PAYMENT_RECIEVE_BANK_FAILURE',
  payload: error
});
export const ViewsinglepaymentrecievebankRequest = (data) => ({
  type: 'VIEW_PAYMENT_RECIEVE_BANK_REQUEST',
  payload: data
});
export const ViewsinglepaymentrecievebankSuccess = (data) => ({
  type: 'VIEW_PAYMENT_RECIEVE_BANK_SUCCESS',
  payload: data
});
export const ViewsinglepaymentrecievebankFailure = (error) => ({
  type: 'VIEW_PAYMENT_RECIEVE_BANK_FAILURE',
  payload: error
});
export const updatepaymentrecievebankRequest = (data) => ({
  type: 'UPDATE_PAYMENT_RECIEVE_BANK_REQUEST',
  payload: data
});
export const updatepaymentrecievebankSuccess = (data) => ({
  type: 'UPDATE_PAYMENT_RECIEVE_BANK_SUCCESS',
  payload: data
});
export const updatepaymentrecievebankFailure = (error) => ({
  type: 'UPDATE_PAYMENT_RECIEVE_BANK_FAILURE',
  payload: error
});
export const deletepaymentrecievebankRequest = (data) => ({
  type: 'DELETE_PAYMENT_RECIEVE_BANK_REQUEST',
  payload: data
});
export const deletepaymentrecievebankSuccess = (data) => ({
  type: 'DELETE_PAYMENT_RECIEVE_BANK_SUCCESS',
  payload: data
});
export const deletepaymentrecievebankFailure = (error) => ({
  type: 'DELETE_PAYMENT_RECIEVE_BANK_FAILURE',
  payload: error
});
export const fetchallpaymentrecievebankRequest = (data) => ({
  type: 'FETCH_ALL_PAYMENT_RECIEVE_BANK_REQUEST',
  payload: data
});
export const fetchallpaymentrecievebankSuccess = (data) => ({
  type: 'FETCH_ALL_PAYMENT_RECIEVE_BANK_SUCCESS',
  payload: data
});
export const fetchallpaymentrecievebankFailure = (error) => ({
  type: 'FETCH_ALL_PAYMENT_RECIEVE_BANK_FAILURE',
  payload: error
});
export const PaymentrecieveBankLedgerRequest = () => ({
  type: 'PAYMENT_RECIEVE_BANK_LEDGER_REQUEST'
});
export const PaymentrecieveBankLedgerSuccess = (data) => ({
  type: 'PAYMENT_RECIEVE_BANK_LEDGER_SUCCESS',
  payload: data
});
export const PaymentrecieveBankLedgerFailure = (error) => ({
  type: 'PAYMENT_RECIEVE_BANK_LEDGER_FAILURE',
  payload: error
});
