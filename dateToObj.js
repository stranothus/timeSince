//call with parameter in Date() format (Day Mth dd year hr:mn:sc GMT-0500 (Timezone))

function dateToObj(d) {
    return {
        year : d.slice(11, 15),
        month : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].indexOf(d.slice(4, 7)) + 1,
        day : d.slice(8, 10),
        hour : d.slice(16, 18),
        min : d.slice(19, 21),
        sec : d.slice(22, 24)
    }
}
