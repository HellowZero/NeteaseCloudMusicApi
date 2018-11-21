// 搜索

module.exports = (query, request) => {
    const data = {
        s: query.keywords,
        type: query.type || 1, // 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频
        limit: query.limit || 30,
        offset: query.offset || 0 //如果搜索歌单offset*limit，不然就会有重复歌单返回
    }
    
    return request(
        'POST', `https://music.163.com/weapi/search/get`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}
