//call with parameter in Date() format (Day Mth dd year hr:mn:sc GMT-0500 (Timezone))

function dateToObj(d) {
    return {
        year : d.getFullYear(),
        month : d.getMonth() + 1,
        day : d.getDate(),
        hour : d.getHours() + 1,
        min : d.getMinutes() + 1,
        sec : d.getSeconds() + 1
    }
}
