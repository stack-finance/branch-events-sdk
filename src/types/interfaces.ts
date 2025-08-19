interface BaseUserData {
  os_version?: string;
  environment?: string;
  limit_ad_tracking?: boolean;
  user_agent?: string;
  http_origin?: string;
  http_referrer?: string;
  country?: string;
  langauge?: string;
  ip?: string;
  local_ip?: string;
  brand?: string;
  randomized_device_token?: string;
  app_version?: string;
  model?: string;
  screen_dpi?: number;
  screen_height?: number;
  screen_width?: number;
}

// Any one of them are required with any event logged.
type RequiredFieldsUserData =
  | { developer_identity: string }
  | { browser_fingerprint_id: string }
  | { os: "iOS"; idfa: string }
  | { os: "iOS"; idfv: string }
  | { os: "Android"; android_id: string }
  | { os: "Android"; aaid: string };

type CountrySpecificUserData =
  | {
      country: "EU"; // TODO: Remove this and make it into a type with EU countries
      dma_eea: boolean;
      dma_ad_personalization: boolean;
      dma_ad_user_data: boolean;
    }
  | {
      country?: Exclude<string, "EU">;
    };

export type BranchEventsUserDataParams = BaseUserData &
  RequiredFieldsUserData &
  CountrySpecificUserData;

export interface BranchEventsContentItemsParams {
  $content_schema?: string;
  $og_title?: string;
  $og_image_url?: string;
  $canonical_identifier?: string;
  $publicly_indexable?: string;
  $price?: string;
  $quantity?: string;
  $sku?: string;
  $product_name?: string;
  $product_brand?: string;
  $product_category?: string;
  $product_variant?: string;
  $rating_average?: number;
  $rating_count?: string;
  $rating_max?: number;
  $creation_timestamp?: number;
  $exp_date?: number;
  $keywords?: Array<string>;
  $address_street?: string;
  $address_city?: string;
  $address_region?: string;
  $address_country?: string;
  $address_postal_code?: string;
  $latitude?: number;
  $longitude?: number;
  $image_captions?: Array<string>;
  $condition?: string;
  $custom_fields?: { [key: string]: string };
}

export interface BranchEventsEventDataParams {
  transaction_id?: string;
  revenue?: string;
  currency?: string;
  shipping?: number;
  tax?: number;
  coupon?: string;
  affiliation?: string;
  description?: string;
  search_query?: string;
}

export interface BranchEventsPayload {
  name: string | LoggingStandardEvents;
  user_data: BranchEventsUserDataParams;
  event_data?: BranchEventsEventDataParams;
  content_items?: BranchEventsContentItemsParams;
  custom_data?: { [key: string]: string };
  meta_data?: { [key: string]: string };
}

export enum LoggingType {
  STANDARD = "standard",
  CUSTOM = "custom",
}

export enum LoggingStandardEvents {
  ADD_TO_CART = "ADD_TO_CART",
  ADD_TO_WISHLIST = "ADD_TO_WISHLIST",
  CLICK_AD = "CLICK_AD",
  VIEW_CART = "VIEW_CART",
  INITIATE_PURCHASE = "INITIATE_PURCHASE",
  ADD_PAYMENT_INFO = "ADD_PAYMENT_INFO",
  PURCHASE = "PURCHASE",
  SPEND_CREDITS = "SPEND_CREDITS",
  SEARCH = "SEARCH",
  VIEW_ITEM = "VIEW_ITEM",
  VIEW_ITEMS = "VIEW_ITEMS",
  RATE = "RATE",
  SHARE = "SHARE",
}

const check: BranchEventsContentItemsParams = {
  $canonical_identifier: "asdjakhjsd",
};

console.log(check);
