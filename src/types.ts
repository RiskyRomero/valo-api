export type Episodes =
  | "e1a1"
  | "e1a2"
  | "e1a3"
  | "e2a1"
  | "e2a2"
  | "e2a3"
  | "e3a1"
  | "e3a2"
  | "e3a3"
  | "e4a1"
  | "e4a2"
  | "e4a3"
  | "e5a1"
  | "e5a2"
  | "e5a3"
  | "e6a1"
  | "e6a2"
  | "e6a3"
  | "e7a1"
  | "e7a2"
  | "e7a3"
  | "e8a1"
  | "e8a2"
  | "e8a3";

export type LeaderboardEpisodes =
  | "e2a1"
  | "e2a2"
  | "e2a3"
  | "e3a1"
  | "e3a2"
  | "e3a3"
  | "e4a1"
  | "e4a2"
  | "e4a3"
  | "e5a1"
  | "e5a2"
  | "e5a3"
  | "e6a1"
  | "e6a2"
  | "e6a3"
  | "e7a1"
  | "e7a2"
  | "e7a3"
  | "e8a1"
  | "e8a2"
  | "e8a3";

export type Modes =
  | "escalation"
  | "spikerush"
  | "deathmatch"
  | "competitive"
  | "unrated"
  | "replication"
  | "custom"
  | "newmap"
  | "snowballfight"
  | "swiftplay"
  | "escalation"
  | "teamdeathmatch"
  | "premier";

export type Maps =
  | "ascent"
  | "split"
  | "fracture"
  | "bind"
  | "breeze"
  | "icebox"
  | "haven"
  | "pearl"
  | "lotus"
  | "district"
  | "kasbah"
  | "drift"
  | "piazza"
  | "sunset";

export type CCRegions =
  | "en-gb"
  | "en-us"
  | "es-es"
  | "es-mx"
  | "fr-fr"
  | "it-it"
  | "ja-jp"
  | "ko-kr"
  | "pt-br"
  | "ru-ru"
  | "tr-tr"
  | "vi-vn";

export type Locales =
  | "ar-AE"
  | "de-DE"
  | "en-GB"
  | "en-US"
  | "es-ES"
  | "es-MX"
  | "fr-FR"
  | "id-ID"
  | "it-IT"
  | "ja-JP"
  | "ko-KR"
  | "pl-PL"
  | "pt-BR"
  | "ru-RU"
  | "th-TH"
  | "tr-TR"
  | "vi-VN"
  | "zn-CN"
  | "zn-TW";

export type RawTypes =
  | "competitiveupdates"
  | "mmr"
  | "matchdetails"
  | "matchhistory";

export type MMRVersions = "v1" | "v2";

export type FeaturedItemsVersion = "v1" | "v2";

export type LeaderboardVersions = "v1" | "v2";

export type Regions = "eu" | "na" | "kr" | "ap" | "latam" | "br";

export interface _fetch {
  url: string;
  type?: string;
  body?: any;
  rtype?: any;
}

export interface APIResponse {
  status: number;
  data: object | null;
  ratelimits: RateLimit;
  error: ErrorObject | null;
  url?: string
}

export interface ErrorObject {
  message: string;
}

export interface RateLimit {
  used: number;
  remaining: number;
  reset: number;
}

export interface AccountFetchOptions {
  name: string;
  tag: string;
  force?: boolean;
}

export interface AccountFetchByPUUIDOptions {
  puuid: string;
  force?: boolean;
}

export interface getMMRByPUUIDFetchOptions {
  version: MMRVersions;
  region: Regions;
  puuid: string;
  filter?: Episodes;
}

export interface getMMRHistoryByPUUIDFetchOptions {
  region: Regions;
  puuid: string;
}

export interface getMatchesByPUUIDFetchOptions {
  region: Regions;
  puuid: string;
  filter?: Modes;
  map?: Maps;
  size?: number;
}

export interface getContentFetchOptions {
  locale?: Locales;
}

export interface getLeaderboardOptions {
  version: LeaderboardVersions;
  region: Regions;
  name?: string | undefined;
  tag?: string | undefined;
  puuid?: string;
  season?: LeaderboardEpisodes;
}

export interface getMatchesFetchOptions {
  region: Regions;
  name: string;
  tag: string;
  filter?: Modes;
  map?: Maps;
  size?: number;
}

export interface getMatchFetchOptions {
  match_id: string;
}

export interface getMMRHistoryFetchOptions {
  region: Regions;
  name: string;
  tag: string;
}

export interface getLifetimeMMRHistoryFetchOptions {
  region: Regions;
  name: string;
  tag: string;
  page?: number;
  size?: number;
}

export interface getMMRFetchOptions {
  version: MMRVersions;
  region: Regions;
  name: string;
  tag: string;
  filter?: Episodes;
}

export interface getPremierFetchOptions {
  team: string;
  tag: string;
}

export interface getPremierHistoryFetchOptions {
  team: string;
  tag: string;
}

export interface getPremierByTeamIdFetchOptions {
  team_id: string;
}

export interface getPremierHistoryByTeamIdFetchOptions {
  team_id: string;
}

export interface getRawFetchOptions {
  type: RawTypes;
  uuid: string;
  region: Regions;
  queries: string;
}

export interface getStatusFetchOptions {
  region: Regions;
}

export interface getVersionFetchOptions {
  region: Regions;
}

export interface getWebsiteFetchOptions {
  country_code: CCRegions;
  filter?: string;
}

export interface getCrosshairFetchOptions {
  code: string;
  size?: number;
}

export interface getFeaturedItemsFetchOptions {
  version: FeaturedItemsVersion;
}
