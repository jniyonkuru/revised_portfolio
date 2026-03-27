


function formatDateTime(date:string) {
    
    const d = new Date(date)
    const formatter = new Intl.DateTimeFormat("en-US", {
    month:'long',year:'numeric'
    })

    return formatter.format(d)
}

export {formatDateTime}