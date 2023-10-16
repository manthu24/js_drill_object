function mapObject(obj, cb) {
    const result = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = cb(obj[key]);
        }
    }
    return result;
}

module.exports = mapObject;
