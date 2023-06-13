const post = async (url, data) => {
    const res = await fetch(url, {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        method: 'POST',
    })

    return await res.json()
}

export { post };