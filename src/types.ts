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
  url?: string;
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

export interface IAccountDetails {
  status: number;
  data?: {
    puuid: string;
    region: string;
    account_level: number;
    name: string;
    tag: string;
    card: {
      small: string;
      large: string;
      wide: string;
      id: string;
    };
    last_update: string;
    last_update_raw: string;
  };
  errors?: IError[] | null;
  error: Error | null;
  ratelimits: RateLimit;
  url?: string;
}

export interface IMatchHistory {
  status: number;
  data: Match[] | null;
  errors?: IError[];
}

export interface Match {
  metadata: {
    map: string;
    game_version: string;
    game_length: number;
    game_start: number;
    game_start_patched: number;
    rounds_played: number;
    mode: string;
    mode_id: string;
    queue: string;
    season_id: string;
    platform: string;
    matchid: string;
    premier_info: {
      tournament_id: string;
      matchup_id: string;
    };
    region: string;
    cluster: string;
  };
  players: {
    all_players: MatchPlayer[]
  };
  red?: MatchPlayer[];
  blue?: MatchPlayer[];
  observers?: MatchObserver[];
  coaches?: MatchCoach[];
  teams?: {
    red: {
      has_won: boolean;
      rounds_won: number;
      rounds_lost: number;
      roaster: {
        members: string[];
        name: string;
        tag: string;
        customization: {
          icon: string;
          image: string;
          primary: string;
          secondary: string;
          tertiary: string;
        }
      };
    };
    blue: {
      has_won: boolean;
      rounds_won: number;
      rounds_lost: number;
      roaster: {
        members: string[];
        name: string;
        tag: string;
        customization: {
          icon: string;
          image: string;
          primary: string;
          secondary: string;
          tertiary: string;
        };
      };
    }
  };
  rounds: []
}

export interface Round {
  winning_team: string;
  end_type: string;
  bomb_planted: boolean;
  bomb_defused: boolean;
  plant_events?: {
    plant_location?: {
      x: number;
      y: number;
    };
    planted_by?: {
      puuid: string;
      display_name: string;
      team: string;
    };
    plant_site?: string;
    plant_time_in_round?: number;
    player_locations_on_plant?: PlayerLocation[];
  };
  defuse_events?: {
    defuse_location?: {
      x: number;
      y: number;
    };
    defuse_by?: {
      puuid: string;
      display_name: string;
      team: string;
    };
    defuse_time_in_round?: number;
    player_locations_on_defuse: PlayerLocation[];
  };
  player_stats: PlayerStat[];
  kills: Kill[]
}

export interface Kill {
  kill_time_in_round: number;
  kill_time_in_match: number;
  killer_puuid: string;
  killer_display_name: string;
  killer_team: string;
  victim_puuid: string;
  victim_display_name: string;
  victim_team: string;
  victim_death_location: {
    x: number;
    y: number;
  };
  damage_weapon_id: string;
  damage_weapon_name: string;
  damage_weapon_assets: {
    display_icon: string;
    killfeed_icon: string;
  };
  secondary_fire_mode: boolean;
  player_locations_on_kill: PlayerLocation[];
  assistants: any[];
}

export interface PlayerStat {
  ability_casts: {
    c_casts: number;
    q_casts: number;
    e_casts: number;
    x_casts: number;
  };
  player_puuid: string;
  player_display_name: string;
  player_team: string;
  damage_events: any[];
  damage: number;
  bodyshots: number;
  headshots: number;
  legshots: number;
  kill_events: any[]
  kills: number;
  score: number;
  economy: {
    loadout_value: number;
    weapon: {
      id: string;
      name: string;
      assets: {
        display_icon: string;
        killfeed_icon: string;
      }
    };
    armor: {
      id: string;
      name: string;
      assets: {
        display_icon: string;
      }
    };
    remaining: number;
    spent: number;
  };
  was_afk: boolean;
  was_penalized: boolean;
  stayed_in_spawn: boolean;
}

export interface PlayerLocation {
  player_puuid: string;
  player_display_name: string;
  player_team: string;
  location: {
    x: number;
    y: number;
  };
  view_radians: number;
}

export interface MatchObserver {
  puuid: string;
  name: string;
  tag: string;
  platform: {
    type: string;
    os: {
      name: string;
      version: string;
    }
  };
  session_playtime: {
    minutes: number;
    seconds: number;
    milliseconds: number;
  };
  team: string;
  level: number;
  player_card: string;
  player_title: string;
  party_id: string;
}

export interface MatchCoach {
  puuid: string;
  team: string;
}

export interface MatchPlayer {
  puuid: string;
  name: string;
  tag: string;
  team: string;
  level: number;
  character: string;
  currenttier: number;
  currenttier_patched: string;
  player_card: string;
  player_title: string;
  party_id: string;
  session_playtime: {
    minutes: number;
    seconds: number;
    milliseconds: number;
  };
  assets: {
    card: {
      small: string;
      large: string;
      wide: string
    };
    agent: {
      small: string;
      full: string;
      bust: string;
      killfeed: string;
    }
  };
  behaviour: {
    afk_rounds: number;
    friendly_fire: {
      incoming: number;
      outgoing: number;
    }
    rounds_in_spawn: number;
  };
  platform: {
    type: string;
    os: {
      name: string;
      version: string;
    }
  };
  ability_casts: {
    c_cast: number;
    q_cast: number;
    e_cast: number;
    x_cast: number;
  };
  stats: {
    score: number;
    kills: number;
    deaths: number;
    assists: number;
    bodyshots: number;
    headshots: number;
    legshots: number;
  };
  economy: {
    spent: {
      overall: number;
      average: number;
    };
    loadout_value: {
      overall: number;
      average: number;
    }
  };
  damage_made: number;
  damage_received: number;
}

export interface IError {
  message: string;
  code: number;
  details: string;
}
