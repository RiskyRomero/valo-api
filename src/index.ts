import axios from 'axios';
import { APIResponse, AccountFetchByPUUIDOptions, AccountFetchOptions, _fetch, getContentFetchOptions, getCrosshairFetchOptions, getFeaturedItemsFetchOptions, getLeaderboardOptions, getLifetimeMMRHistoryFetchOptions, getMMRByPUUIDFetchOptions, getMMRFetchOptions, getMMRHistoryByPUUIDFetchOptions, getMMRHistoryFetchOptions, getMatchFetchOptions, getMatchesByPUUIDFetchOptions, getMatchesFetchOptions, getRawFetchOptions, getStatusFetchOptions, getVersionFetchOptions, getWebsiteFetchOptions } from './types';

export default class mainClass {
    token: string;
    constructor(token: string) {
        this.token = token;
    }
    private _parsebody(body: any) {
        if (body.errors) return body.errors;
        return body.status ? body.data : body;
    }
    private _parseresponse(req: any): APIResponse {
        return {
            status: req.response ? req.response.status : req.status,
            data: req.response ? null : !req.config.headers['Content-Type'] ? this._parsebody(req.data) : req.data,
            ratelimits: {
                used: Number(req.response ? req.response.headers['x-ratelimit-limit'] : req.headers['x-ratelimit-limit']),
                remaining: Number(req.response ? req.response.headers['x-ratelimit-remaining'] : req.headers['x-ratelimit-remaining']),
                reset: Number(req.response ? req.response.headers['x-ratelimit-reset'] : req.headers['x-ratelimit-reset']),
            },
            error: req.response ? this._parsebody(req.response.data) : null,
            url: req.config.url,
        }
    }
    private _validate(input: any) {
        for (let i = 0; Object.keys(input).length > i; i++) {
            if (Object.values(input)[i] == null) throw new Error(`Missing parameter: ${Object.keys(input)[i]}`);
        }
    }
    private _query(input: any) {
        let query = new URLSearchParams();
        for (let i = 0; Object.values(input).length > i; i++) {
            if (Object.values(input)[i] && Object.values(input)[i] != 'undefined') query.append(Object.keys(input)[i], Object.values<any>(input)[i]);
        }
        return query.toString().length ? query : null;
    }
    private async _fetch({ url, type = 'GET', body = null, rtype = null }: _fetch): Promise<APIResponse> {
        const req = await axios({
            url: url,
            method: type,
            data: body,
            responseType: rtype ? rtype : 'json',
            headers: this.token
                ? {
                    Authorization: this.token,
                    'User-Agent': 'unofficial-valorant-api/node.js/2.3.0',
                }
                : {
                    'User-Agent': 'unofficial-valorant-api/node.js/2.3.0',
                },
        }).catch(err => err);
        return this._parseresponse(req);
    }
    async getAccount({ name, tag, force = false }: AccountFetchOptions): Promise<APIResponse> {
        this._validate({ name, tag });
        const query = this._query({ force });
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v1/account/${encodeURI(name)}/${encodeURI(tag)}${query ? `?${query}` : ''}`,
        });
    }

    async getAccountByPUUID({ puuid, force }: AccountFetchByPUUIDOptions): Promise<APIResponse> {
        this._validate({ puuid });
        const query = this._query({ force });
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v1/by-puuid/account/${puuid}${query ? `?${query}` : ''}`,
        });
    }

    async getMMRByPUUID({ version, region, puuid, filter }: getMMRByPUUIDFetchOptions): Promise<APIResponse> {
        this._validate({ version, region, puuid });
        const query = this._query({ filter });
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/${version}/by-puuid/mmr/${region}/${puuid}${query ? `?${query}` : ''}`,
        });
    }

    async getMMRHistoryByPUUID({ region, puuid }: getMMRHistoryByPUUIDFetchOptions): Promise<APIResponse> {
        this._validate({ region, puuid });
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr-history/${region}/${puuid}`,
        });
    }

    async getMatchesByPUUID({ region, puuid, filter, map, size }: getMatchesByPUUIDFetchOptions): Promise<APIResponse> {
        this._validate({ region, puuid });
        const query = this._query({ filter, map, size });
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v3/by-puuid/matches/${region}/${puuid}${query ? `?${query}` : ''}`,
        });
    }

    async getContent({ locale }: getContentFetchOptions): Promise<APIResponse> {
        const query = this._query({ locale });
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v1/content${query ? `?${query}` : ''}`,
        });
    }

    async getLeaderboard({ version, region, name = '', tag = '', puuid, season }: getLeaderboardOptions): Promise<APIResponse> {
        if (name && tag && puuid)
            throw new Error("Too many parameters: You can't search for name/tag and puuid at the same time, please decide between name/tag and puuid");
        this._validate({ version, region });
        const query = this._query({ name: encodeURI(name), tag: encodeURI(tag), puuid, season });
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/${version}/leaderboard/${region}${query ? `?${query}` : ''}`,
        });
    }

    async getMatches({ region, name, tag, filter, map, size }: getMatchesFetchOptions): Promise<APIResponse> {
        this._validate({ region, name, tag });
        const query = this._query({ filter, map, size });
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v3/matches/${region}/${encodeURI(name)}/${encodeURI(tag)}${query ? `?${query}` : ''}`,
        });
    }

    async getMatch({ match_id }: getMatchFetchOptions): Promise<APIResponse> {
        this._validate({ match_id });
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v2/match/${match_id}`,
        });
    }

    async getMMRHistory({ region, name, tag }: getMMRHistoryFetchOptions): Promise<APIResponse> {
        this._validate({ region, name, tag });
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v1/mmr-history/${region}/${encodeURI(name)}/${encodeURI(tag)}`,
        });
    }

    async getLifetimeMMRHistory({ region, name, tag, page, size }: getLifetimeMMRHistoryFetchOptions): Promise<APIResponse> {
        this._validate({ region, name, tag });
        const query = this._query({ page, size });
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v1/lifetime/mmr-history/${region}/${name}/${tag}${query ? `?${query}` : ''}`,
        });
    }

    async getMMR({ version, region, name, tag, filter }: getMMRFetchOptions): Promise<APIResponse> {
        this._validate({ version, region, name, tag });
        const query = this._query({ filter });
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/${version}/mmr/${region}/${encodeURI(name)}/${encodeURI(tag)}${query ? `?${query}` : ''}`,
        });
    }

    async getRawData({ type, uuid, region, queries }: getRawFetchOptions): Promise<APIResponse> {
        this._validate({ type, uuid, region, queries });
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v1/raw`,
            body: { type, uuid, region, queries },
            type: 'POST',
        });
    }

    async getStatus({ region }: getStatusFetchOptions): Promise<APIResponse> {
        this._validate({ region });
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v1/status/${region}`,
        });
    }

    async getFeaturedItems({ version }: getFeaturedItemsFetchOptions): Promise<APIResponse> {
        this._validate({ version });
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/${version}/store-featured`,
        });
    }

    async getOffers(): Promise<APIResponse> {
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v1/store-offers`,
        });
    }

    async getVersion({ region }: getVersionFetchOptions): Promise<APIResponse> {
        this._validate({ region });
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v1/version/${region}`,
        });
    }

    async getWebsite({ country_code, filter }: getWebsiteFetchOptions): Promise<APIResponse> {
        this._validate({ country_code });
        const query = this._query({ filter });
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v1/website/${country_code}${query ? `?${query}` : ''}`,
        });
    }

    async getCrosshair({ code, size }: getCrosshairFetchOptions): Promise<APIResponse> {
        this._validate({ code });
        const query = this._query({ id: code, size });
        return await this._fetch({
            url: `https://api.henrikdev.xyz/valorant/v1/crosshair/generate${query ? `?${query}` : ''}`,
        });
    }

}

export * from "./types";